# Email Notifications Setup Guide

## Overview

Cello Sports Management uses **Resend** for automated email notifications when users submit the contact form. This provides instant notifications to the management team for rapid response to inquiries.

## Email Service: Resend

**Why Resend?**
- Modern, developer-friendly API
- 3,000 free emails per month (forever)
- Excellent deliverability rates
- Simple setup with TypeScript support
- No credit card required for free tier

## Configuration

### 1. Get Your Resend API Key

1. Visit [resend.com](https://resend.com) and create a free account
2. Navigate to **API Keys** in the dashboard
3. Click "Create API Key"
4. Give it a name (e.g., "Cello Sports Production")
5. Copy the API key (it starts with `re_`)

### 2. Add API Key to Replit Secrets

1. In your Replit project, click the **Secrets** icon (🔒) in the left sidebar
2. Add a new secret:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (e.g., `re_xxxxxxxxxxxx`)
3. Click "Add Secret"

The application will automatically detect the API key and enable email notifications.

### 3. Configure Your Domain (Optional but Recommended)

For better deliverability and professional branding:

1. In Resend dashboard, go to **Domains**
2. Click "Add Domain" and enter: `cellosports.co.za`
3. Add the provided DNS records to your domain:
   - SPF record
   - DKIM record
   - DMARC record (optional)
4. Wait for verification (usually takes 5-15 minutes)

Once verified, update the `fromEmail` in `server/email.ts`:
```typescript
const defaultConfig: EmailNotificationConfig = {
  recipients: [
    "info@cellosports.co.za",
    "hr@cellosports.co.za",
    "admin@cellosports.co.za",
  ],
  fromEmail: "notifications@cellosports.co.za", // Use your verified domain
};
```

## Email Notification Features

### What Gets Sent

When a user submits the contact form, the team receives an email with:

- **Contact Name**: Full name of the person inquiring
- **Email Address**: Clickable mailto: link for easy response
- **Phone Number**: Clickable tel: link (if provided)
- **Message**: Full message content in a highlighted box
- **Timestamp**: Submission time in South African timezone (SAST)

### Who Receives Emails

By default, notifications are sent to:
- `info@cellosports.co.za`
- `hr@cellosports.co.za`
- `admin@cellosports.co.za`

### Reply-To Functionality

All notification emails have `Reply-To` set to the contact's email address. This means:
- Click "Reply" in your email client
- It automatically addresses your response to the person who submitted the form
- No need to copy/paste email addresses

## Email Template

The notification email includes:

```
Subject: New Contact Form: [Contact Name]

┌─────────────────────────────────────┐
│  🏆 New Contact Form Submission     │
└─────────────────────────────────────┘

NAME
[Contact Name]

EMAIL
[contact@email.com]

PHONE (if provided)
[+27 XX XXX XXXX]

MESSAGE
┌─────────────────────────────────────┐
│ [Full message content]              │
│ [Preserves line breaks]             │
└─────────────────────────────────────┘

SUBMITTED
[Full date and time in SAST]
```

## Customization

### Change Email Recipients

Edit `server/email.ts`:

```typescript
const defaultConfig: EmailNotificationConfig = {
  recipients: [
    "info@cellosports.co.za",
    "custom@cellosports.co.za",  // Add more recipients here
  ],
  fromEmail: "notifications@cellosports.co.za",
};
```

### Customize Email Template

The HTML email template is in the `sendContactFormNotification` function in `server/email.ts`. You can modify:
- Colors and styling
- Layout and structure
- Additional fields or information
- Branding elements

### Test Email Configuration

To verify your email setup is working:

```typescript
import { testEmailConfiguration } from "./server/email";

// In your server startup
testEmailConfiguration().then((success) => {
  if (success) {
    console.log("✓ Email system ready");
  } else {
    console.log("⚠ Email system not configured");
  }
});
```

## How It Works

1. **User submits contact form** → Data validated by Zod schema
2. **Contact saved to database** → Stored for record-keeping
3. **Email notification sent** → Asynchronous, non-blocking
4. **User receives success message** → Even if email fails (graceful degradation)
5. **Team receives email** → Multiple recipients notified simultaneously

## Error Handling

The system is designed to **never fail** the contact form submission due to email issues:

- If `RESEND_API_KEY` is not set → Warning logged, form still succeeds
- If Resend API fails → Error logged, form still succeeds
- Email sending is **non-blocking** → Doesn't slow down form response

This ensures users always get a successful submission experience, even if the email service is temporarily unavailable.

## Monitoring & Logs

### Check Email Sending Status

In the Replit console, you'll see:

**Success:**
```
✓ Email notification sent successfully for contact from John Doe
```

**Configuration Missing:**
```
⚠ RESEND_API_KEY not configured - email notification skipped
```

**Failure:**
```
❌ Email notification failed (non-critical): [error details]
```

### Resend Dashboard

Monitor email deliverability in the Resend dashboard:
- View sent emails
- Check delivery status
- See bounce/complaint rates
- Review email logs

## Pricing & Limits

### Free Tier (Current)
- **3,000 emails/month** (forever free)
- **Perfect for:** Contact form notifications
- **No credit card required**

### Paid Plans (If Needed)
- **$20/month**: 50,000 emails
- **$80/month**: 100,000 emails
- Only needed if you exceed 100 contact forms per day

## Troubleshooting

### Emails Not Sending

1. **Check API Key**:
   ```bash
   # In Replit Secrets, verify RESEND_API_KEY exists
   ```

2. **Check Console Logs**:
   ```bash
   # Look for email-related errors in the workflow logs
   ```

3. **Verify Resend Account**:
   - Log into resend.com
   - Check if account is active
   - Verify API key hasn't been revoked

### Emails Going to Spam

1. **Verify Your Domain** (see step 3 in Configuration)
2. **Add SPF/DKIM records** to your DNS
3. **Use a from address** that matches your domain

### Wrong Recipients

Edit `server/email.ts` and update the `recipients` array in `defaultConfig`.

## Security Notes

- **API Key Storage**: Stored securely in Replit Secrets (not in code)
- **No PII in Logs**: Contact emails are not logged, only success/failure status
- **Rate Limiting**: Resend automatically rate-limits to prevent abuse
- **Reply-To Protection**: Legitimate contact emails only, validated by form

## Support

- **Resend Documentation**: [resend.com/docs](https://resend.com/docs)
- **Resend Support**: support@resend.com
- **Cello Sports Tech Support**: admin@cellosports.co.za
