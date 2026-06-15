declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface LeadParams {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}

export function trackLead(params: LeadParams = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead", params);
}

export {};
