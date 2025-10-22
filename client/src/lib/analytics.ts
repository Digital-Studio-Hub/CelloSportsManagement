// Google Analytics 4 and Meta Pixel tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const analytics = {
  // Track custom events in Google Analytics
  trackEvent: (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  },

  // Track page views
  trackPageView: (pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: pagePath,
      });
    }
  },

  // Track conversions (e.g., form submissions)
  // Note: For GA4, conversion events should be marked as conversions in the GA4 interface
  // This sends the event which can then be marked as a conversion goal
  trackConversion: (eventName: string, value?: number) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4 event (mark as conversion in GA4 admin)
      if (window.gtag) {
        window.gtag('event', eventName, {
          value: value || 0,
          currency: 'ZAR',
        });
      }
      
      // Meta Pixel conversion
      if (window.fbq) {
        window.fbq('track', eventName, { value: value || 0, currency: 'ZAR' });
      }
    }
  },

  // Track contact form submissions (NO PII sent to analytics)
  trackContactFormSubmit: () => {
    // GA4 event (can be marked as conversion in GA4 admin)
    analytics.trackEvent('contact_form_submit', {
      form_name: 'contact',
      form_location: 'contact_section',
      value: 1,
      currency: 'ZAR',
    });
    
    // Meta Pixel Lead event (no PII)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Contact Form',
        content_category: 'Contact',
        value: 1,
        currency: 'ZAR',
      });
    }
  },

  // Track athlete profile views
  trackAthleteView: (athleteName: string) => {
    analytics.trackEvent('athlete_view', {
      athlete_name: athleteName,
    });
  },

  // Track WhatsApp button clicks
  trackWhatsAppClick: () => {
    analytics.trackEvent('whatsapp_click', {
      button_location: 'floating',
    });
    
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp',
      });
    }
  },

  // Track CTA button clicks
  trackCTAClick: (ctaName: string, location: string) => {
    analytics.trackEvent('cta_click', {
      cta_name: ctaName,
      cta_location: location,
    });
  },
};

export default analytics;
