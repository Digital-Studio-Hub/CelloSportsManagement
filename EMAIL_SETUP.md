# Email Setup Guide - ZeptoMail

This guide explains how to configure ZeptoMail for automated email notifications from the Cello Sports Management contact form.

## Overview

The website uses ZeptoMail (by Zoho) to send automated email notifications when users submit the contact form. Email notifications are sent to:
- info@cellosports.co.za
- hr@cellosports.co.za
- admin@cellosports.co.za

## Quick Start

### 1. Get Your ZeptoMail API Token

1. Sign up for a free ZeptoMail account at [zeptomail.zoho.com](https://www.zeptomail.com)
2. Navigate to **Settings** → **API Keys**
3. Create a new API key and copy the token (starts with "Zoho-enczapikey")
4. Store it securely - you won't be able to see it again

### 2. Configure Environment Variable

Add your ZeptoMail API token to Replit Secrets:

1. Click the **Secrets** tab in Replit (lock icon in left sidebar)
2. Add a new secret:
   - **Key**: `ZEPTOMAIL_TOKEN`
   - **Value**: Your ZeptoMail API token (e.g., `Zoho-enczapikey wSsVR...`)
3. Save the secret

### 3. Verify Domain (Recommended)

For better email deliverability:

1. In ZeptoMail dashboard, go to **Settings** → **Email Domains**
2. Add `cellosports.co.za` as a verified domain
3. Follow the DNS verification steps (add TXT and CNAME records)
4. Wait for verification (usually takes a few minutes)

Once verified, update `fromEmail` in `server/email.ts` if needed:
```typescript
fromEmail: "noreply@cellosports.co.za",  // Uses your verified domain
```

## Testing Email Delivery

After configuration, test the email system:

1. Submit the contact form on your website
2. Check the server logs for success message:
   ```
   ✓ Email notification sent successfully via ZeptoMail for contact from [Name]
   ```
3. Verify emails arrive in all three inboxes

## Email Template Customization

The email template is defined in `server/email.ts`. To customize:

### Change Recipients

Edit the `defaultConfig` in `server/email.ts`:
```typescript
const defaultConfig: EmailNotificationConfig = {
  recipients: [
    "info@cellosports.co.za",
    "hr@cellosports.co.za",
    // Add or remove email addresses as needed
  ],
  fromEmail: "noreply@cellosports.co.za",
  fromName: "Cello Sports Management",
};
```

### Customize Email HTML

The HTML template starts at line ~52 in `server/email.ts`. You can modify:
- Colors and styling in the `<style>` section
- Email content in the `<body>` section
- Add company logo or branding

**Security Note**: All user input is sanitized via `escapeHtml()` to prevent HTML/JavaScript injection attacks. Never remove this sanitization.

## Troubleshooting

### Email Not Sending

1. **Check Environment Variable**
   ```bash
   # In Replit shell
   echo $ZEPTOMAIL_TOKEN
   ```
   Should display your API token. If empty, the secret isn't configured.

2. **Check Server Logs**
   Look for error messages in the workflow logs:
   - "ZEPTOMAIL_TOKEN not configured" → Add the secret
   - ZeptoMail API errors → Check your API token is valid

3. **Verify API Token**
   - Ensure token starts with `Zoho-enczapikey`
   - Make sure you copied the complete token
   - Check token hasn't been revoked in ZeptoMail dashboard

### Emails Go to Spam

1. **Verify Your Domain** - Unverified domains have lower deliverability
2. **Configure SPF/DKIM** - ZeptoMail provides DNS records for authentication
3. **Use Professional From Address** - e.g., `noreply@cellosports.co.za`

### Rate Limits

ZeptoMail free tier includes:
- **10,000 emails/month** for transactional emails
- Sufficient for most contact form usage
- Monitor usage in ZeptoMail dashboard

## Security Best Practices

### Environment Variables

✅ **DO**: Store API token in Replit Secrets  
❌ **DON'T**: Hardcode token in source code  
❌ **DON'T**: Commit token to version control  

### HTML Injection Protection

The email system includes `escapeHtml()` sanitization to prevent:
- Cross-site scripting (XSS) attacks
- HTML injection in emails
- Malicious code execution

**Never** remove or bypass this sanitization when customizing templates.

### Reply-To Security

Emails automatically set `reply_to` to the contact's email address, allowing staff to reply directly. This is safe as long as email addresses are validated (which they are via Zod schemas).

## API Reference

### ZeptoMail Configuration

```typescript
const zeptoMailClient = new SendMailClient({
  url: "api.zeptomail.com/",
  token: process.env.ZEPTOMAIL_TOKEN
});
```

### Sending Emails

```typescript
await zeptoMailClient.sendMail({
  from: {
    address: "noreply@cellosports.co.za",
    name: "Cello Sports Management"
  },
  to: [{
    email_address: {
      address: "recipient@example.com",
      name: "Recipient Name"
    }
  }],
  reply_to: [{
    address: "contact@example.com",
    name: "Contact Name"
  }],
  subject: "Email Subject",
  htmlbody: "<html>...</html>",
});
```

## Support

For ZeptoMail-specific issues:
- Documentation: [zeptomail.zoho.com/help](https://www.zeptomail.com/help)
- API Reference: [www.npmjs.com/package/zeptomail](https://www.npmjs.com/package/zeptomail)
- Support: ZeptoMail dashboard → Help & Support

For application issues:
- Check server logs in Replit workflow console
- Review `server/email.ts` for configuration
- Test with `testEmailConfiguration()` function
