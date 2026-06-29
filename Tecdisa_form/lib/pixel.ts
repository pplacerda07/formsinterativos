declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// TODO Tecdisa: substituir pelo ID real do Pixel da Tecdisa quando estiver criado.
// Mesmo lugar pra trocar: components/pixel/MetaPixel.tsx (META_PIXEL_ID)
const META_PIXEL_ID = "0000000000000000";
const PIXEL_TR_URL = "https://www.facebook.com/tr/";
const PIXEL_VERSION = "2.9.107";

type TrackMethod = "track" | "trackCustom";

interface EventParams {
  content_name?: string;
  content_category?: string;
  content_id?: string;
  value?: number;
  currency?: string;
}

function generateEventId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? match[1] : undefined;
}

function getFbc(): string | undefined {
  const fromCookie = getCookie("_fbc");
  if (fromCookie) return fromCookie;
  if (typeof window === "undefined") return undefined;
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (!fbclid) return undefined;
  return `fb.1.${Date.now()}.${fbclid}`;
}

function buildTrackingUrl(
  eventName: string,
  eventId: string,
  params: EventParams
): string {
  const url = new URL(PIXEL_TR_URL);
  url.searchParams.set("id", META_PIXEL_ID);
  url.searchParams.set("ev", eventName);
  url.searchParams.set("eid", eventId);
  url.searchParams.set("v", PIXEL_VERSION);
  url.searchParams.set("dl", window.location.href);
  url.searchParams.set("rl", document.referrer || "");
  url.searchParams.set("if", "false");
  url.searchParams.set("ts", String(Date.now()));

  const fbp = getCookie("_fbp");
  if (fbp) url.searchParams.set("fbp", fbp);
  const fbc = getFbc();
  if (fbc) url.searchParams.set("fbc", fbc);

  if (params.content_name) {
    url.searchParams.set("cd[content_name]", params.content_name);
  }
  if (params.content_category) {
    url.searchParams.set("cd[content_category]", params.content_category);
  }
  if (params.content_id) {
    url.searchParams.set("cd[content_id]", params.content_id);
  }
  if (typeof params.value === "number") {
    url.searchParams.set("cd[value]", String(params.value));
  }
  if (params.currency) {
    url.searchParams.set("cd[currency]", params.currency);
  }

  return url.toString();
}

function fireEvent(
  method: TrackMethod,
  eventName: string,
  params: EventParams = {}
) {
  if (typeof window === "undefined") return;

  const eventId = generateEventId(eventName.toLowerCase());

  if (typeof console !== "undefined") {
    console.log(`[Tecdisa Form] Meta Pixel: ${eventName} disparado`, params);
  }

  if (typeof window.fbq === "function") {
    try {
      window.fbq(method, eventName, params, { eventID: eventId });
      return;
    } catch {}
  }

  try {
    const url = buildTrackingUrl(eventName, eventId, params);
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.sendBeacon === "function"
    ) {
      navigator.sendBeacon(url);
    } else {
      const img = new Image();
      img.src = url;
    }
  } catch {}
}

export function trackCompleteRegistration(params: EventParams = {}) {
  fireEvent("track", "CompleteRegistration", params);
}

export function trackLead(params: EventParams = {}) {
  fireEvent("track", "Lead", params);
}

export function trackWhatsAppLead(params: EventParams = {}) {
  fireEvent("trackCustom", "WhatsAppLead", params);
}

export {};
