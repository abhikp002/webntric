import nodemailer from "nodemailer";
import {
  BUSINESS_TYPE_OPTIONS,
  CURRENT_CHALLENGE_OPTIONS,
  DESIRED_SERVICE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  TIMELINE_OPTIONS,
  type ContactFormInput,
} from "./validation";
import { SITE_CONFIG } from "@/data/site-config";

interface OptionItem {
  value: string;
  label: string;
}

function getLabel(value: string | undefined, options: readonly OptionItem[]): string {
  if (!value) return "Not specified";
  const match = options.find((o) => o.value === value);
  return match ? match.label : value;
}

/**
 * Returns a configured Nodemailer transporter using Gmail SMTP settings.
 * Default sender/user: info@webntric.com via smtp.gmail.com:465
 */
export function getEmailTransporter() {
  const user = process.env.GMAIL_USER || process.env.SMTP_USER || "info@webntric.com";
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

  if (!pass) {
    return null;
  }

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE !== "false"; // default true for 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Useful for corporate or cloud network environments
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

export interface SendContactResult {
  success: boolean;
  notificationSent: boolean;
  autoReplySent: boolean;
  error?: string;
}

/**
 * Sends the contact form enquiry to info@webntric.com using Gmail server configuration,
 * and sends an auto-acknowledgement email to the person who submitted the form.
 */
export async function sendContactFormEmails(
  data: ContactFormInput
): Promise<SendContactResult> {
  const transporter = getEmailTransporter();
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "info@webntric.com";
  const senderEmail = process.env.GMAIL_USER || process.env.SMTP_USER || "info@webntric.com";

  if (!transporter) {
    console.warn(
      "[Webntric Mailer Warning]: GMAIL_APP_PASSWORD is not configured in environment variables. Email could not be dispatched via Gmail SMTP. To enable sending from info@webntric.com, add GMAIL_USER=info@webntric.com and GMAIL_APP_PASSWORD to .env.local."
    );
    return {
      success: false,
      notificationSent: false,
      autoReplySent: false,
      error: "GMAIL_APP_PASSWORD environment variable is not set.",
    };
  }

  const serviceLabel = getLabel(data.desiredService, DESIRED_SERVICE_OPTIONS);
  const businessTypeLabel = getLabel(data.businessType, BUSINESS_TYPE_OPTIONS);
  const challengeLabel = getLabel(data.currentChallenge, CURRENT_CHALLENGE_OPTIONS);
  const budgetLabel = getLabel(data.budgetRange, BUDGET_RANGE_OPTIONS);
  const timelineLabel = getLabel(data.timeline, TIMELINE_OPTIONS);
  const cleanPhone = data.phone.replace(/[^\d+]/g, "");

  // 1. Notification Email to Webntric Team (info@webntric.com)
  const notificationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Project Enquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #0571e3; color: #ffffff; padding: 24px 32px; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 0; font-size: 13px; opacity: 0.9; }
    .body-content { padding: 32px; }
    .section-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
    .field-grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .field-grid td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
    .field-label { width: 34%; font-weight: 600; color: #475569; background: #f8fafc; }
    .field-value { width: 66%; color: #0f172a; font-weight: 500; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0571e3; border-radius: 6px; padding: 16px; margin: 12px 0 24px 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
    .action-bar { margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; display: flex; gap: 12px; }
    .btn { display: inline-block; padding: 10px 20px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 6px; }
    .btn-primary { background: #0571e3; color: #ffffff !important; }
    .btn-secondary { background: #f1f5f9; color: #0f172a !important; border: 1px solid #cbd5e1; }
    .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Project Enquiry Received</h1>
      <p>Submitted via webntric.com contact form</p>
    </div>
    <div class="body-content">
      <div class="section-title">Client Information</div>
      <table class="field-grid">
        <tr>
          <td class="field-label">Full Name</td>
          <td class="field-value"><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Business / Org</td>
          <td class="field-value">${data.businessName || "Not provided (Individual)"}</td>
        </tr>
        <tr>
          <td class="field-label">Email Address</td>
          <td class="field-value"><a href="mailto:${data.email}" style="color: #0571e3; font-weight: 600;">${data.email}</a></td>
        </tr>
        <tr>
          <td class="field-label">Phone Number</td>
          <td class="field-value">
            <a href="tel:${cleanPhone}" style="color: #0571e3; font-weight: 600;">${data.phone}</a>
            &nbsp;|&nbsp;
            <a href="https://wa.me/${cleanPhone.replace("+", "")}" target="_blank" style="color: #16a34a; font-weight: 600; text-decoration: none;">WhatsApp &rarr;</a>
          </td>
        </tr>
        <tr>
          <td class="field-label">Business Stage/Type</td>
          <td class="field-value">${businessTypeLabel}</td>
        </tr>
      </table>

      <div class="section-title">Project Requirements</div>
      <table class="field-grid">
        <tr>
          <td class="field-label">Desired Service</td>
          <td class="field-value"><strong style="color: #0571e3;">${serviceLabel}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Current Challenge</td>
          <td class="field-value">${challengeLabel}</td>
        </tr>
        <tr>
          <td class="field-label">Budget Range</td>
          <td class="field-value">${budgetLabel}</td>
        </tr>
        <tr>
          <td class="field-label">Target Timeline</td>
          <td class="field-value">${timelineLabel}</td>
        </tr>
      </table>

      <div class="section-title">Client Message & Requirements</div>
      <div class="message-box">${data.message}</div>

      <div class="action-bar">
        <a href="mailto:${data.email}?subject=${encodeURIComponent("Re: Your project enquiry with Webntric Software")}" class="btn btn-primary">Reply to ${data.name}</a>
        <a href="tel:${cleanPhone}" class="btn btn-secondary">Call Client</a>
      </div>
    </div>
    <div class="footer">
      Webntric Software Pvt. Ltd. • ${SITE_CONFIG.address.formatted} • info@webntric.com
    </div>
  </div>
</body>
</html>
  `.trim();

  const notificationText = `
NEW PROJECT ENQUIRY RECEIVED
--------------------------------------------------
Name: ${data.name}
Business: ${data.businessName || "Not provided"}
Email: ${data.email}
Phone: ${data.phone}
Business Type: ${businessTypeLabel}

PROJECT REQUIREMENTS:
Desired Service: ${serviceLabel}
Current Challenge: ${challengeLabel}
Budget Range: ${budgetLabel}
Timeline: ${timelineLabel}

CLIENT MESSAGE:
${data.message}
--------------------------------------------------
Reply directly to this email to contact ${data.name}.
  `.trim();

  let notificationSent = false;
  let autoReplySent = false;

  try {
    await transporter.sendMail({
      from: `"Webntric Enquiries" <${senderEmail}>`,
      to: recipient,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New Enquiry: ${data.name} (${data.businessName || "Individual"}) — ${serviceLabel}`,
      text: notificationText,
      html: notificationHtml,
    });
    notificationSent = true;
    console.info(`[Webntric Mailer] Successfully sent project enquiry notification to ${recipient}`);
  } catch (err) {
    console.error("[Webntric Mailer Error] Failed to send notification email:", err);
    return {
      success: false,
      notificationSent: false,
      autoReplySent: false,
      error: err instanceof Error ? err.message : "Unknown mail error",
    };
  }

  // 2. Automated Confirmation Email to Client
  try {
    const confirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>We have received your enquiry — Webntric Software</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
    .header { background: #0571e3; color: #ffffff; padding: 24px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .content { padding: 32px; line-height: 1.6; font-size: 14px; }
    .summary-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0; }
    .footer { background: #f1f5f9; padding: 20px 32px; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Webntric Software</h1>
    </div>
    <div class="content">
      <p>Hello <strong>${data.name}</strong>,</p>
      <p>Thank you for reaching out to Webntric Software. We have received your enquiry regarding <strong>${serviceLabel}</strong>.</p>
      <p>Every submission is reviewed personally by a senior engineer or solutions strategist. We do not use automated sales sequences. We will review your requirements and reply within <strong>1 business day</strong>.</p>
      <div class="summary-box">
        <strong>Enquiry Summary:</strong><br>
        • Service: ${serviceLabel}<br>
        • Business: ${data.businessName || "Individual"}<br>
        • Expected Timeline: ${timelineLabel}
      </div>
      <p>If you have urgent documents, blueprints, or need to speak directly, you can also reach us via:</p>
      <p>
        • <strong>Phone:</strong> <a href="${SITE_CONFIG.phoneHref}" style="color: #0571e3;">${SITE_CONFIG.phoneDisplay}</a><br>
        • <strong>WhatsApp:</strong> <a href="https://wa.me/${SITE_CONFIG.whatsappNumber}" style="color: #0571e3;">Direct Chat</a><br>
        • <strong>Email:</strong> <a href="mailto:${SITE_CONFIG.email}" style="color: #0571e3;">${SITE_CONFIG.email}</a>
      </p>
      <p>Warm regards,<br><strong>Webntric Software Engineering Team</strong></p>
    </div>
    <div class="footer">
      Webntric Software Pvt. Ltd. • ${SITE_CONFIG.address.formatted}
    </div>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"Webntric Software" <${senderEmail}>`,
      to: data.email,
      replyTo: senderEmail,
      subject: `We have received your enquiry — Webntric Software`,
      text: `Hello ${data.name},\n\nThank you for reaching out to Webntric Software regarding ${serviceLabel}. We have received your project details and a senior team member will review and respond within 1 business day.\n\nWarm regards,\nWebntric Software\ninfo@webntric.com`,
      html: confirmationHtml,
    });
    autoReplySent = true;
    console.info(`[Webntric Mailer] Successfully sent confirmation auto-reply to ${data.email}`);
  } catch (clientErr) {
    console.warn("[Webntric Mailer Warning] Auto-reply confirmation failed (non-critical):", clientErr);
  }

  return {
    success: true,
    notificationSent,
    autoReplySent,
  };
}
