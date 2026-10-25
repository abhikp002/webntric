import nodemailer from "nodemailer";
import {
  BUSINESS_TYPE_OPTIONS,
  CURRENT_CHALLENGE_OPTIONS,
  DESIRED_SERVICE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  TIMELINE_OPTIONS,
  type ContactFormInput,
  type StartupApplicationInput,
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

/**
  * Sends startup application notification to info@webntric.com and auto-reply to founder.
  * NOTE: In accordance with security requirements, sensitive full idea descriptions are
  * NOT broadcast over standard email transit; an executive summary notification is dispatched.
  */
export async function sendStartupApplicationEmails(
  data: StartupApplicationInput
): Promise<SendContactResult> {
  const transporter = getEmailTransporter();
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "info@webntric.com";
  const senderEmail = process.env.GMAIL_USER || process.env.SMTP_USER || "info@webntric.com";

  if (!transporter) {
    console.warn(
      "[Webntric Mailer Warning]: GMAIL_APP_PASSWORD is not configured in environment variables. Startup application notification could not be dispatched via Gmail SMTP."
    );
    return {
      success: false,
      notificationSent: false,
      autoReplySent: false,
      error: "GMAIL_APP_PASSWORD environment variable is not set.",
    };
  }

  const cleanPhone = data.phone.replace(/[^\d+]/g, "");

  // 1. Team Notification (Executive Summary for Privacy & Security)
  const notificationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Startup Partnership Application</title>
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
    .privacy-notice { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 14px; font-size: 13px; color: #166534; margin-bottom: 24px; }
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
      <h1>New Startup Partnership Application</h1>
      <p>Received via webntric.com/startup-technology-partner</p>
    </div>
    <div class="body-content">
      <div class="privacy-notice">
        <strong>Confidentiality Protection Active:</strong> An executive summary is provided below. High-level parameters have been logged securely. Full trade secrets and sensitive notes are withheld from unencrypted email transit.
      </div>

      <div class="section-title">Founder & Project Overview</div>
      <table class="field-grid">
        <tr>
          <td class="field-label">Founder Name</td>
          <td class="field-value"><strong>${data.founderName}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Project / Startup</td>
          <td class="field-value"><strong>${data.projectName}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Industry & Stage</td>
          <td class="field-value">${data.industry} • <span style="text-transform: capitalize;">${data.stage}</span></td>
        </tr>
        <tr>
          <td class="field-label">Location</td>
          <td class="field-value">${data.location}</td>
        </tr>
        <tr>
          <td class="field-label">Team & Roles</td>
          <td class="field-value">${data.founderCount} founder(s) • Team size: ${data.teamSize}<br><span style="font-size: 12px; color: #64748b;">${data.founderRoles}</span></td>
        </tr>
        <tr>
          <td class="field-label">Website / LinkedIn</td>
          <td class="field-value">
            ${data.website ? `<a href="${data.website}" target="_blank" style="color: #0571e3;">${data.website}</a>` : "No website yet"}<br>
            ${data.linkedinProfile ? `<a href="${data.linkedinProfile}" target="_blank" style="color: #0571e3; font-size: 12px;">LinkedIn Profile &rarr;</a>` : ""}
          </td>
        </tr>
        <tr>
          <td class="field-label">Email</td>
          <td class="field-value"><a href="mailto:${data.email}" style="color: #0571e3; font-weight: 600;">${data.email}</a></td>
        </tr>
        <tr>
          <td class="field-label">Phone</td>
          <td class="field-value">
            <a href="tel:${cleanPhone}" style="color: #0571e3; font-weight: 600;">${data.phone}</a>
            &nbsp;|&nbsp;
            <a href="https://wa.me/${cleanPhone.replace("+", "")}" target="_blank" style="color: #16a34a; font-weight: 600; text-decoration: none;">WhatsApp &rarr;</a>
          </td>
        </tr>
      </table>

      <div class="section-title">Support & Scope Summary</div>
      <table class="field-grid">
        <tr>
          <td class="field-label">What to Build First</td>
          <td class="field-value"><strong>${data.buildFirst}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Support Type</td>
          <td class="field-value">${data.supportType}</td>
        </tr>
        <tr>
          <td class="field-label">Founder Commitment</td>
          <td class="field-value">${data.founderCommitment}</td>
        </tr>
        <tr>
          <td class="field-label">Target Timeline</td>
          <td class="field-value">${data.expectedTimeline}</td>
        </tr>
        <tr>
          <td class="field-label">External Costs Plan</td>
          <td class="field-value">${data.externalCostsPlan}</td>
        </tr>
      </table>

      <div class="action-bar">
        <a href="mailto:${data.email}?subject=${encodeURIComponent(`Webntric Technology Partnership — ${data.projectName}`)}" class="btn btn-primary">Reply to Founder</a>
        <a href="tel:${cleanPhone}" class="btn btn-secondary">Call Founder</a>
      </div>
    </div>
    <div class="footer">
      Webntric Software Pvt. Ltd. • ${SITE_CONFIG.address.formatted} • info@webntric.com
    </div>
  </div>
</body>
</html>
  `.trim();

  let notificationSent = false;
  let autoReplySent = false;

  try {
    await transporter.sendMail({
      from: `"Webntric Startup Desk" <${senderEmail}>`,
      to: recipient,
      replyTo: `"${data.founderName}" <${data.email}>`,
      subject: `Startup Application: ${data.projectName} (${data.founderName}) — ${data.industry}`,
      html: notificationHtml,
      text: `New Startup Partnership Application:\nProject: ${data.projectName}\nFounder: ${data.founderName}\nEmail: ${data.email}\nPhone: ${data.phone}\nIndustry: ${data.industry}\nStage: ${data.stage}\nBuild First: ${data.buildFirst}\nTimeline: ${data.expectedTimeline}`,
    });
    notificationSent = true;
    console.info(`[Webntric Mailer] Successfully sent startup application notification for ${data.projectName} to ${recipient}`);
  } catch (err) {
    console.error("[Webntric Mailer Error] Failed to send startup application notification:", err);
    return {
      success: false,
      notificationSent: false,
      autoReplySent: false,
      error: err instanceof Error ? err.message : "Unknown mail error",
    };
  }

  // 2. Founder Auto-Acknowledgement (Exact required language)
  try {
    const confirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Your Startup Application — Webntric Software</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
    .header { background: #0571e3; color: #ffffff; padding: 24px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .content { padding: 32px; line-height: 1.6; font-size: 14px; }
    .reassurance-quote { background: #f8fafc; border-left: 4px solid #0571e3; border-radius: 4px; padding: 16px; margin: 20px 0; font-weight: 500; color: #0f172a; }
    .footer { background: #f1f5f9; padding: 20px 32px; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Webntric Software — Startup Technology Desk</h1>
    </div>
    <div class="content">
      <p>Hello <strong>${data.founderName}</strong>,</p>
      
      <div class="reassurance-quote">
        Thank you for sharing your startup idea. Our team will review the information and contact you if there appears to be a potential fit. Submission does not guarantee acceptance or create a partnership.
      </div>

      <p>We review every application thoroughly against problem clarity, market viability, founder dedication, and technical feasibility.</p>
      
      <p><strong>What happens next:</strong></p>
      <ul>
        <li>If there appears to be a potential fit, a senior engineer will reach out to schedule an initial discovery conversation.</li>
        <li>We will never share your business details publicly, and our initial discovery is designed to help you clarify what should be built first.</li>
      </ul>

      <p>If you have urgent questions, you can reach us at:</p>
      <p>
        • <strong>Email:</strong> <a href="mailto:${SITE_CONFIG.email}" style="color: #0571e3;">${SITE_CONFIG.email}</a><br>
        • <strong>Direct Phone:</strong> <a href="${SITE_CONFIG.phoneHref}" style="color: #0571e3;">${SITE_CONFIG.phoneDisplay}</a><br>
        • <strong>WhatsApp:</strong> <a href="https://wa.me/${SITE_CONFIG.whatsappNumber}" style="color: #0571e3;">Direct Chat</a>
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
      from: `"Webntric Startup Desk" <${senderEmail}>`,
      to: data.email,
      replyTo: senderEmail,
      subject: `Startup Technology Application: ${data.projectName} — Webntric Software`,
      text: `Hello ${data.founderName},\n\nThank you for sharing your startup idea. Our team will review the information and contact you if there appears to be a potential fit. Submission does not guarantee acceptance or create a partnership.\n\nWarm regards,\nWebntric Software\ninfo@webntric.com`,
      html: confirmationHtml,
    });
    autoReplySent = true;
    console.info(`[Webntric Mailer] Successfully sent application acknowledgement to ${data.email}`);
  } catch (clientErr) {
    console.warn("[Webntric Mailer Warning] Auto-reply confirmation failed (non-critical):", clientErr);
  }

  return {
    success: true,
    notificationSent,
    autoReplySent,
  };
}
