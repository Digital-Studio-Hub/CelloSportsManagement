import { Resend } from "resend";
import type { Contact } from "@shared/schema";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Escape HTML to prevent injection attacks
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface EmailNotificationConfig {
  recipients: string[];
  fromEmail: string;
  replyToEmail?: string;
}

// Default configuration for Cello Sports Management
const defaultConfig: EmailNotificationConfig = {
  recipients: [
    "info@cellosports.co.za",
    "hr@cellosports.co.za",
    "admin@cellosports.co.za",
  ],
  fromEmail: "notifications@cellosports.co.za",
};

export async function sendContactFormNotification(
  contact: Contact,
  config: EmailNotificationConfig = defaultConfig
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if API key is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      console.warn(
        "RESEND_API_KEY not configured - email notification skipped"
      );
      return {
        success: false,
        error: "Email service not configured",
      };
    }

    // Create email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, hsl(200, 95%, 55%), hsl(150, 80%, 50%));
              color: white;
              padding: 30px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: 600;
              color: #666;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .field-value {
              font-size: 16px;
              color: #333;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 6px;
              border-left: 4px solid hsl(200, 95%, 55%);
              margin-top: 10px;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              color: #999;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏆 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p style="font-size: 16px; margin-bottom: 25px;">
              You've received a new inquiry through the Cello Sports Management website contact form.
            </p>
            
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${escapeHtml(contact.name)}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">
                <a href="mailto:${escapeHtml(contact.email)}" style="color: hsl(200, 95%, 55%); text-decoration: none;">
                  ${escapeHtml(contact.email)}
                </a>
              </div>
            </div>
            
            ${
              contact.phone
                ? `
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value">
                <a href="tel:${escapeHtml(contact.phone)}" style="color: hsl(200, 95%, 55%); text-decoration: none;">
                  ${escapeHtml(contact.phone)}
                </a>
              </div>
            </div>
            `
                : ""
            }
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">${escapeHtml(contact.message)}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Submitted</div>
              <div class="field-value">${new Date(contact.createdAt).toLocaleString("en-ZA", {
                timeZone: "Africa/Johannesburg",
                dateStyle: "full",
                timeStyle: "long",
              })}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Cello Sports Management contact form.</p>
            <p>To respond, simply reply to ${escapeHtml(contact.email)}</p>
          </div>
        </body>
      </html>
    `;

    // Send email to all configured recipients
    await resend.emails.send({
      from: config.fromEmail,
      to: config.recipients,
      replyTo: contact.email, // Set reply-to to the contact's email
      subject: `New Contact Form: ${contact.name}`,
      html: emailHtml,
    });

    console.log(
      `✓ Email notification sent successfully for contact from ${contact.name}`
    );

    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email notification:", error);
    return {
      success: false,
      error: error.message || "Unknown email error",
    };
  }
}

// Test function to verify email configuration
export async function testEmailConfiguration(): Promise<boolean> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY environment variable not set");
      return false;
    }

    console.log("✓ Resend API key found");
    console.log(`✓ Email notifications will be sent to: ${defaultConfig.recipients.join(", ")}`);
    console.log(`✓ Emails will be sent from: ${defaultConfig.fromEmail}`);
    
    return true;
  } catch (error) {
    console.error("Email configuration test failed:", error);
    return false;
  }
}
