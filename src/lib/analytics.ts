"use client";

export type AnalyticsEventName =
  | "contact_form_started"
  | "contact_form_start"
  | "contact_form_submitted"
  | "contact_form_submit"
  | "contact_form_error"
  | "phone_clicked"
  | "email_clicked"
  | "whatsapp_clicked"
  | "service_recommendation_selected"
  | "service_card_click"
  | "work_filter_selected"
  | "faq_opened"
  | "case_study_opened"
  | "cta_clicked"
  | "cta_click"
  | "download_started"
  | "blog_article_read"
  | "scroll_depth_reached"
  | "startup_page_viewed"
  | "startup_form_started"
  | "startup_form_completed"
  | "startup_form_success"
  | "startup_form_error";

export interface AnalyticsEventPayload {
  location?: string;
  label?: string;
  service?: string;
  stage?: string;
  industry?: string;
  category?: string;
  value?: string | number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Privacy-respecting analytics event dispatcher.
 * Pushes structured non-PII events to Google Tag Manager dataLayer when available.
 */
export function trackEvent(
  eventOrObject:
    | AnalyticsEventName
    | ({ name: AnalyticsEventName } & Record<string, unknown>),
  payload: AnalyticsEventPayload = {}
): void {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer || [];
    if (typeof eventOrObject === "string") {
      window.dataLayer.push({
        event: eventOrObject,
        event_timestamp: new Date().toISOString(),
        page_path: window.location.pathname,
        ...payload,
      });
    } else {
      const { name, ...rest } = eventOrObject;
      window.dataLayer.push({
        event: name,
        event_timestamp: new Date().toISOString(),
        page_path: window.location.pathname,
        ...rest,
      });
    }
  } catch {
    // Fail silently if blocked by browser privacy extensions
  }
}
