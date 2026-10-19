// Sales Funnel Tracking & WhatsApp Attribution Utility

export type FunnelEvent =
  | 'page_view'
  | 'cta_click'
  | 'whatsapp_click'
  | 'review_click'
  | 'case_study_click'
  | 'live_site_click'
  | 'calculator_interact'
  | 'pricing_toggle'
  | 'dispute_info_view'
  | 'lead_capture';

export interface EventProperties {
  source?: string;
  label?: string;
  target?: string;
  value?: number;
  [key: string]: unknown;
}

const WA_PHONE = '919959896378';

export function getWhatsAppGrowthPlanLink(source: string, extraNote?: string): string {
  let message = `Hi Srishanth, I would like to get a Free Website Growth Plan for my business.`;
  if (extraNote) {
    message += ` Note: ${extraNote}`;
  }
  message += ` [Source: ${source}]`;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCustomRateLink(businessType: string, expectedVolume?: string): string {
  const message = `Hi Srishanth, I run a ${businessType} business and would like to discuss a custom enquiry rate.${expectedVolume ? ` Expected enquiries: ${expectedVolume}/mo.` : ''} [Source: PricingCalculator]`;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

export function trackFunnelEvent(event: FunnelEvent, props: EventProperties = {}): void {
  if (typeof window === 'undefined') return;

  const payload = {
    event,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
    ...props,
  };

  // 1. Dispatch custom DOM event for any analytics listener (e.g. GA4, Plausible, PostHog)
  try {
    const customEvent = new CustomEvent('funnel_track', { detail: payload });
    window.dispatchEvent(customEvent);
  } catch {
    // Ignore in non-supporting environments
  }

  // 2. Dispatch to window.gtag if GA is loaded
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', event, payload);
  }

  // 3. Store local session funnel counter
  try {
    const existing = JSON.parse(sessionStorage.getItem('funnel_events') || '[]');
    existing.push(payload);
    // Keep last 50 events in session
    if (existing.length > 50) existing.shift();
    sessionStorage.setItem('funnel_events', JSON.stringify(existing));
  } catch {
    // Storage quota or privacy mode
  }
}
