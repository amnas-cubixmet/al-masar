import { company } from "@/data/company";

export type EnquiryDetails = {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  product: string;
  projectType: string;
  branch: string;
  message: string;
  attachmentNames: string[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:13px 0;border-bottom:1px solid #EEF1F6;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.8px;text-transform:uppercase;color:#8B95A7;width:36%;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:13px 0;border-bottom:1px solid #EEF1F6;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.45;color:#111827;font-weight:600;vertical-align:top;">
        ${value}
      </td>
    </tr>
  `;
}

function shell({
  preheader,
  eyebrow,
  title,
  intro,
  details,
  messageTitle,
  message,
  action,
  footerNote,
}: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  details: string;
  messageTitle: string;
  message: string;
  action?: string;
  footerNote: string;
}) {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;background:#F3F6FB;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${preheader}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F6FB;margin:0;padding:0;">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #E6EBF3;">
            <tr>
              <td style="height:5px;background-color:#F5C542;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="background-color:#07111F;padding:28px 32px 26px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:2.4px;font-weight:700;color:#F5C542;">
                  AL MASAR YELLOW COMPANY
                </div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#C5D0E0;padding-top:8px;">
                  Electrical materials supplier · Saudi Arabia
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:1.4px;font-weight:700;color:#8A63E8;">
                  ${eyebrow}
                </div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:1.25;font-weight:700;color:#07111F;padding-top:10px;">
                  ${title}
                </div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#4B5568;padding-top:12px;">
                  ${intro}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${details}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBF8EF;border-radius:12px;">
                  <tr>
                    <td style="border-left:4px solid #F5C542;padding:16px 18px 18px;">
                      <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1.2px;font-weight:700;color:#8A6A12;">
                        ${messageTitle}
                      </div>
                      <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#1F2937;padding-top:8px;white-space:pre-wrap;">${message}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            ${
              action
                ? `<tr>
              <td style="padding:18px 32px 0;">
                ${action}
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding:22px 32px 28px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#4B5568;">
                  ${footerNote}
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#F7F8FC;border-top:1px solid #E6EBF3;padding:20px 32px 22px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#07111F;">
                  ${escapeHtml(company.name)}
                </div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#6B7280;padding-top:6px;">
                  ${escapeHtml(company.registeredAddress)}<br />
                  <a href="${company.website}" style="color:#5C6BC0;text-decoration:none;">www.almasarelectricals.com</a>
                  ·
                  <a href="mailto:${escapeHtml(company.email)}" style="color:#5C6BC0;text-decoration:none;">${escapeHtml(company.email)}</a>
                </div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9AA3B2;padding-top:12px;">
                  © ${year} AL MASAR YELLOW COMPANY. This message was sent from the website enquiry form.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function teamEnquiryEmail(details: EnquiryDetails) {
  const safeName = escapeHtml(details.name);
  const attachments =
    details.attachmentNames.length > 0
      ? escapeHtml(details.attachmentNames.join(", "))
      : "None";
  const phoneHref = details.phoneNumber.replace(/[^\d+]/g, "");

  const html = shell({
    preheader: `New quotation request from ${safeName}.`,
    eyebrow: "NEW WEBSITE ENQUIRY",
    title: `${safeName} requested a quotation`,
    intro: "A visitor submitted this request on www.almasarelectricals.com. Reply to this email to respond directly.",
    details: [
      row("Name", safeName),
      row("Company", escapeHtml(details.companyName || "Not provided")),
      row(
        "Phone",
        `<a href="tel:${phoneHref}" style="color:#111827;text-decoration:none;">${escapeHtml(details.phoneNumber)}</a>`,
      ),
      row(
        "Email",
        `<a href="mailto:${escapeHtml(details.email)}" style="color:#5C6BC0;text-decoration:none;">${escapeHtml(details.email)}</a>`,
      ),
      row("Product", escapeHtml(details.product || "General enquiry")),
      row("Project type", escapeHtml(details.projectType || "Not specified")),
      row("Branch", escapeHtml(details.branch || "Main Branch")),
      row("Attachments", attachments),
    ].join(""),
    messageTitle: "MESSAGE / REQUIREMENTS",
    message: escapeHtml(details.message || "No additional requirements provided."),
    footerNote: `Reply to this message to contact <strong style="color:#07111F;">${safeName}</strong> at ${escapeHtml(details.email)}.`,
  });

  const text = [
    "AL MASAR YELLOW COMPANY — New website enquiry",
    "",
    `Name: ${details.name}`,
    `Company: ${details.companyName || "Not provided"}`,
    `Phone: ${details.phoneNumber}`,
    `Email: ${details.email}`,
    `Product: ${details.product || "General enquiry"}`,
    `Project type: ${details.projectType || "Not specified"}`,
    `Branch: ${details.branch || "Main Branch"}`,
    `Attachments: ${details.attachmentNames.join(", ") || "None"}`,
    "",
    "Message:",
    details.message || "No additional requirements provided.",
  ].join("\n");

  return {
    subject: `Website Quote Request — ${details.name}`,
    html,
    text,
  };
}

export function customerEnquiryEmail(details: EnquiryDetails) {
  const safeName = escapeHtml(details.name);
  const attachments =
    details.attachmentNames.length > 0
      ? escapeHtml(details.attachmentNames.join(", "))
      : "None";

  const html = shell({
    preheader: `We received your quotation request, ${safeName}.`,
    eyebrow: "ENQUIRY RECEIVED",
    title: `Thank you, ${safeName}`,
    intro: "Your quotation request has reached our team. We will review the details and contact you shortly.",
    details: [
      row("Name", safeName),
      row("Company", escapeHtml(details.companyName || "Not provided")),
      row("Phone", escapeHtml(details.phoneNumber)),
      row("Email", escapeHtml(details.email)),
      row("Product", escapeHtml(details.product || "General enquiry")),
      row("Project type", escapeHtml(details.projectType || "Not specified")),
      row("Branch", escapeHtml(details.branch || "Main Branch")),
      row("Attachments", attachments),
    ].join(""),
    messageTitle: "YOUR MESSAGE",
    message: escapeHtml(details.message || "No additional requirements provided."),
    action: `<a href="${company.website}" style="display:inline-block;background:#07111F;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:1;text-decoration:none;padding:14px 22px;border-radius:10px;">Visit www.almasarelectricals.com</a>`,
    footerNote: `Need to add something? Reply to this email or write to <a href="mailto:${escapeHtml(company.email)}" style="color:#5C6BC0;text-decoration:none;">${escapeHtml(company.email)}</a>.`,
  });

  const text = [
    `Thank you, ${details.name}`,
    "",
    "We received your quotation request. Our team will review it and contact you shortly.",
    "",
    `Name: ${details.name}`,
    `Company: ${details.companyName || "Not provided"}`,
    `Phone: ${details.phoneNumber}`,
    `Email: ${details.email}`,
    `Product: ${details.product || "General enquiry"}`,
    `Project type: ${details.projectType || "Not specified"}`,
    `Branch: ${details.branch || "Main Branch"}`,
    `Attachments: ${details.attachmentNames.join(", ") || "None"}`,
    "",
    "Your message:",
    details.message || "No additional requirements provided.",
    "",
    `AL MASAR YELLOW COMPANY · ${company.email} · ${company.website}`,
  ].join("\n");

  return {
    subject: "We received your enquiry — AL MASAR YELLOW COMPANY",
    html,
    text,
  };
}
