import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { company } from "@/data/company";
import { customerEnquiryEmail, teamEnquiryEmail } from "@/lib/enquiryEmail";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_ATTACHMENT_SIZE = 15 * 1024 * 1024;

const allowedTypes = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
]);

const allowedExtensions = new Set([
  ".pdf",
  ".xlsx",
  ".docx",
  ".jpg",
  ".jpeg",
  ".png",
]);

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getExtension(filename: string) {
  const index = filename.lastIndexOf(".");
  return index >= 0 ? filename.slice(index).toLowerCase() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function uniqueEmails(emails: string[]) {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const email of emails) {
    const trimmed = email.trim();
    const key = trimmed.toLowerCase();
    if (!trimmed || seen.has(key)) continue;
    seen.add(key);
    result.push(trimmed);
  }

  return result;
}

export async function POST(request: Request) {
  try {
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpAppPassword = process.env.SMTP_APP_PASSWORD?.replace(/\s+/g, "");
    const companyInbox = company.email.trim();
    const extraInbox = process.env.CONTACT_TO_EMAIL?.trim() || "";
    const teamRecipients = uniqueEmails([companyInbox, extraInbox]);

    if (!smtpUser || !smtpAppPassword || teamRecipients.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured. Add SMTP_USER and SMTP_APP_PASSWORD to the server environment.",
        },
        { status: 503 }
      );
    }

    const formData = await request.formData();

    const name = readText(formData, "name");
    const companyName = readText(formData, "companyName");
    const countryCode = readText(formData, "countryCode") || "+966";
    const mobile = readText(formData, "mobile");
    const email = readText(formData, "email");
    const product = readText(formData, "product");
    const projectType = readText(formData, "projectType");
    const message = readText(formData, "message");
    const branch = readText(formData, "branch");

    if (!name || !mobile || !email) {
      return NextResponse.json(
        { ok: false, error: "Name, phone number, and email are required." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    const localMobile = mobile.replace(/[^0-9]/g, "").replace(/^0+/, "");
    const phoneNumber = `${countryCode} ${localMobile}`.trim();

    const attachmentFiles = formData
      .getAll("attachments")
      .filter((item): item is File => item instanceof File && item.size > 0);

    let totalSize = 0;
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType?: string;
    }> = [];

    for (const file of attachmentFiles) {
      const extension = getExtension(file.name);
      const supported =
        allowedTypes.has(file.type) || allowedExtensions.has(extension);

      if (!supported) {
        return NextResponse.json(
          { ok: false, error: `Unsupported attachment type: ${file.name}` },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { ok: false, error: `${file.name} is larger than 10 MB.` },
          { status: 400 }
        );
      }

      totalSize += file.size;
      if (totalSize > MAX_TOTAL_ATTACHMENT_SIZE) {
        return NextResponse.json(
          { ok: false, error: "Total attachment size cannot exceed 15 MB." },
          { status: 400 }
        );
      }

      attachments.push({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || undefined,
      });
    }

    const enquiry = {
      name,
      companyName,
      phoneNumber,
      email,
      product,
      projectType,
      branch,
      message,
      attachmentNames: attachments.map((item) => item.filename),
    };
    const teamEmail = teamEnquiryEmail(enquiry);
    const customerEmail = customerEnquiryEmail(enquiry);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_SECURE || "true").toLowerCase() !== "false",
      auth: {
        user: smtpUser,
        pass: smtpAppPassword,
      },
    });

    const from = `AL MASAR YELLOW COMPANY <${smtpUser}>`;

    await transporter.sendMail({
      from,
      to: teamRecipients,
      replyTo: email,
      subject: teamEmail.subject,
      html: teamEmail.html,
      text: teamEmail.text,
      attachments,
    });

    await transporter.sendMail({
      from,
      to: email,
      replyTo: companyInbox,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form SMTP submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "Unable to send the enquiry email. Please check the email App Password configuration.",
      },
      { status: 500 }
    );
  }
}
