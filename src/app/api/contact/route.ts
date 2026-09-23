import { NextResponse } from "next/server";
import { company } from "@/data/company";

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured. Add RESEND_API_KEY to the server environment.",
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

    if (!name || !mobile) {
      return NextResponse.json(
        { ok: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const localMobile = mobile.replace(/[^0-9]/g, "").replace(/^0+/, "");
    const phoneNumber = `${countryCode} ${localMobile}`.trim();
    const attachmentFiles = formData
      .getAll("attachments")
      .filter((item): item is File => item instanceof File && item.size > 0);

    let totalSize = 0;
    const attachments: Array<{ filename: string; content: string }> = [];

    for (const file of attachmentFiles) {
      if (!allowedTypes.has(file.type)) {
        return NextResponse.json(
          {
            ok: false,
            error: `Unsupported attachment type: ${file.name}`,
          },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            ok: false,
            error: `${file.name} is larger than 10 MB.`,
          },
          { status: 400 }
        );
      }

      totalSize += file.size;
      if (totalSize > MAX_TOTAL_ATTACHMENT_SIZE) {
        return NextResponse.json(
          {
            ok: false,
            error: "Total attachment size cannot exceed 15 MB.",
          },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer.toString("base64"),
      });
    }

    const safe = {
      name: escapeHtml(name),
      companyName: escapeHtml(companyName || "N/A"),
      phoneNumber: escapeHtml(phoneNumber),
      email: escapeHtml(email || "N/A"),
      product: escapeHtml(product || "General Enquiry"),
      projectType: escapeHtml(projectType || "Not specified"),
      message: escapeHtml(message || "No additional requirements provided."),
      branch: escapeHtml(branch || "Main Branch"),
    };

    const attachmentNames =
      attachments.length > 0
        ? attachments.map((item) => escapeHtml(item.filename)).join(", ")
        : "None";

    const toEmail = process.env.CONTACT_TO_EMAIL || company.email;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "AL MASAR Website <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Website Quote Request — ${name}`,
        reply_to: email || undefined,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
            <h2 style="margin:0 0 18px">New AL MASAR Website Enquiry</h2>
            <table style="border-collapse:collapse;width:100%;max-width:720px">
              <tbody>
                <tr><td style="padding:8px 0;font-weight:700">Name</td><td style="padding:8px 0">${safe.name}</td></tr>
                <tr><td style="padding:8px 0;font-weight:700">Company</td><td style="padding:8px 0">${safe.companyName}</td></tr>
                <tr><td style="padding:8px 0;font-weight:700">Phone</td><td style="padding:8px 0">${safe.phoneNumber}</td></tr>
                <tr><td style="padding:8px 0;font-weight:700">Email</td><td style="padding:8px 0">${safe.email}</td></tr>
                <tr><td style="padding:8px 0;font-weight:700">Product / Category</td><td style="padding:8px 0">${safe.product}</td></tr>
                <tr><td style="padding:8px 0;font-weight:700">Project Type</td><td style="padding:8px 0">${safe.projectType}</td></tr>
                <tr><td style="padding:8px 0;font-weight:700">Branch</td><td style="padding:8px 0">${safe.branch}</td></tr>
                <tr><td style="padding:8px 0;font-weight:700">Attachments</td><td style="padding:8px 0">${attachmentNames}</td></tr>
              </tbody>
            </table>
            <h3 style="margin:22px 0 8px">Message / Requirements</h3>
            <p style="white-space:pre-wrap;margin:0">${safe.message}</p>
          </div>
        `,
        attachments,
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Resend email error", result);
      return NextResponse.json(
        {
          ok: false,
          error: "Unable to send the enquiry email right now.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send the enquiry right now." },
      { status: 500 }
    );
  }
}
