# Analytics Setup Guide

This document explains how to configure Google Analytics 4 and Meta Pixel for the Cello Sports Management website.

## Google Analytics 4 Setup

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for cellosports.co.za
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Update the Website

Open `client/index.html` and replace **both instances** of `G-XXXXXXXXXX` with your actual Measurement ID:

```html
<!-- Line 34 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>

<!-- Line 39 -->
gtag('config', 'G-YOUR-ACTUAL-ID');
```

Also update in `client/src/lib/analytics.ts` line 17:

```typescript
window.gtag('config', 'G-YOUR-ACTUAL-ID', {
  page_path: pagePath,
});
```

### 3. Set Up Conversion Goals in GA4

After deploying the website, set up the following events as conversions in GA4:

1. Go to Admin → Events → Mark as conversion
2. Mark these events as conversions:
   - `contact_form_submit` - When users submit the contact form
   - `whatsapp_click` - When users click WhatsApp button
   - `athlete_view` - When users view athlete profiles

## Meta Pixel Setup

### 1. Get Your Meta Pixel ID

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Create a new Pixel for Cello Sports Management
3. Copy your Pixel ID (numeric value)

### 2. Update the Website

Open `client/index.html` and replace **both instances** of `YOUR_PIXEL_ID` with your actual Pixel ID:

```html
<!-- Line 52 -->
fbq('init', 'YOUR-ACTUAL-PIXEL-ID');

<!-- Line 57 -->
src="https://www.facebook.com/tr?id=YOUR-ACTUAL-PIXEL-ID&ev=PageView&noscript=1"
```

### 3. Verify Pixel Installation

1. Install the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) Chrome extension
2. Visit your website
3. Check that the extension shows:
   - PageView event on page load
   - Lead event when contact form is submitted

## Events Being Tracked

The website automatically tracks the following events (no configuration needed):

### Google Analytics 4 Events
- `contact_form_submit` - Contact form submissions
- `whatsapp_click` - WhatsApp button clicks
- `athlete_view` - Athlete profile views
- `cta_click` - Call-to-action button clicks

### Meta Pixel Events
- `PageView` - Page views (automatic)
- `Lead` - Contact form submissions
- `Contact` - WhatsApp button clicks

## Privacy Compliance

✅ **No Personal Identifiable Information (PII) is sent to analytics**
- Names and email addresses are NOT transmitted to GA4 or Meta Pixel
- Only event metadata (form names, button locations) are tracked
- Compliant with Google Analytics Terms of Service
- GDPR/POPIA friendly

## Testing

After updating the IDs:

1. **GA4**: Check Real-time reports in Google Analytics to see events
2. **Meta Pixel**: Use Meta Pixel Helper browser extension to verify events fire
3. **Test Contact Form**: Submit a test message and verify both `contact_form_submit` (GA4) and `Lead` (Meta Pixel) events appear

## Troubleshooting

**Events not showing in GA4?**
- Verify Measurement ID is correct in both places (index.html and analytics.ts)
- Check browser console for errors
- Wait 24-48 hours for data to appear in standard reports (Real-time should show immediately)

**Pixel not firing?**
- Verify Pixel ID is correct in both places in index.html
- Check Meta Pixel Helper shows green checkmark
- Disable ad blockers when testing

## Support

For additional help:
- GA4: [Google Analytics Help Center](https://support.google.com/analytics)
- Meta Pixel: [Meta Business Help Center](https://www.facebook.com/business/help/742478679120153)
