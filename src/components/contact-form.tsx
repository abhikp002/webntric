"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Send, ShieldCheck } from "lucide-react";
import {
  BUSINESS_TYPE_OPTIONS,
  CURRENT_CHALLENGE_OPTIONS,
  DESIRED_SERVICE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  TIMELINE_OPTIONS,
  validateContactForm,
  type ContactFormInput,
} from "@/lib/validation";
import { SITE_CONFIG } from "@/data/site-config";
import { trackEvent } from "@/lib/analytics";

interface ContactFormProps {
  initialService?: string;
  initialStage?: string;
  initialChallenge?: string;
}

const STAGE_TO_BUSINESS_TYPE: Record<string, string> = {
  startups: "startup",
  "local-businesses": "local-business",
  "growing-businesses": "growing-smb",
  "established-organizations": "established-organization",
  "traditional-businesses": "traditional-business",
};

const INPUT_CLASS =
  "w-full px-3.5 py-3 min-h-[48px] rounded-lg bg-background border border-border text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary";

export function ContactForm({
  initialService = "",
  initialStage = "",
  initialChallenge = "",
}: ContactFormProps) {
  const mappedBusinessType =
    (initialStage && STAGE_TO_BUSINESS_TYPE[initialStage]) || "";

  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: mappedBusinessType,
    currentChallenge: initialChallenge,
    desiredService:
      initialService &&
      DESIRED_SERVICE_OPTIONS.some((o) => o.value === initialService)
        ? initialService
        : "not-sure-need-guidance",
    budgetRange: "",
    timeline: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormInput, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState<string>("");
  const [hasTrackedStart, setHasTrackedStart] = useState(false);

  const handleFieldFocus = () => {
    if (!hasTrackedStart) {
      setHasTrackedStart(true);
      trackEvent({
        name: "contact_form_start",
        desired_service: formData.desiredService,
      });
    }
  };

  const handleChange = (
    field: keyof ContactFormInput,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");

    const validation = validateContactForm(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      trackEvent({
        name: "contact_form_error",
        error_fields: Object.keys(validation.errors).join(","),
      });
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          setErrors(result.errors);
        }
        setServerError(
          result.message ||
            "We could not submit your enquiry right now. Please try again or reach us directly via phone, email, or WhatsApp."
        );
        setStatus("error");
        trackEvent({
          name: "contact_form_error",
          reason: "server_response_error",
        });
        return;
      }

      setStatus("success");
      trackEvent({
        name: "contact_form_submit",
        business_type: formData.businessType,
        current_challenge: formData.currentChallenge,
        desired_service: formData.desiredService,
      });
    } catch {
      setServerError(
        `Network error while sending your message. You can also email us directly at ${SITE_CONFIG.email} or call ${SITE_CONFIG.phoneDisplay}.`
      );
      setStatus("error");
      trackEvent({
        name: "contact_form_error",
        reason: "network_exception",
      });
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-surface border border-border rounded-xl p-6 sm:p-10 space-y-6"
      >
        <div className="w-12 h-12 rounded-full bg-success/15 text-success flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-success font-semibold">
            Enquiry Received
          </span>
          <h3 className="text-2xl font-bold text-foreground">
            Thank you, {formData.name}. We have received your project details.
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            A senior member of our team will review your note for{" "}
            <strong className="text-foreground font-semibold">
              {formData.businessName}
            </strong>{" "}
            and reply within 1 business day with practical feedback and clear
            next steps.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-surface-muted border border-border text-sm text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground">
            Need to share urgent context or sample documents?
          </p>
          <p>
            You can email{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-primary font-medium hover:underline"
            >
              {SITE_CONFIG.email}
            </a>{" "}
            or call/WhatsApp{" "}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-primary font-medium hover:underline"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData((prev) => ({
              ...prev,
              message: "",
              consent: false,
            }));
          }}
          className="text-sm font-semibold text-primary hover:underline min-h-[44px]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-surface border border-border rounded-xl p-5 sm:p-8 shadow-sm space-y-6"
    >
      <div className="border-b border-border pb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Tell us about your business and requirement
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Not sure which service fits best? Select{" "}
          <span className="text-foreground font-medium">
            &ldquo;Not sure yet — help us choose the right step&rdquo;
          </span>{" "}
          and describe your workflow below.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-4 rounded-lg bg-danger/10 border border-danger/30 text-danger text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">Unable to submit form</p>
            <p className="mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      {/* Honeypot anti-spam field (hidden from screen readers and visual users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company-website">
          Leave this field blank
        </label>
        <input
          id="contact-company-website"
          name="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot || ""}
          onChange={(e) => handleChange("honeypot", e.target.value)}
        />
      </div>

      {/* Row 1: Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Your Name <span className="text-danger">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Rajesh Verma"
            value={formData.name}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={INPUT_CLASS}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-xs text-danger mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-business-name"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Business / Organization Name <span className="text-danger">*</span>
          </label>
          <input
            id="contact-business-name"
            name="businessName"
            type="text"
            required
            autoComplete="organization"
            placeholder="Company name or 'New Venture'"
            value={formData.businessName}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("businessName", e.target.value)}
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={
              errors.businessName ? "contact-business-error" : undefined
            }
            className={INPUT_CLASS}
          />
          {errors.businessName && (
            <p
              id="contact-business-error"
              className="text-xs text-danger mt-1.5"
            >
              {errors.businessName}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Phone/WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Work or Personal Email <span className="text-danger">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={formData.email}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={INPUT_CLASS}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-xs text-danger mt-1.5">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Phone / WhatsApp Number <span className="text-danger">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={INPUT_CLASS}
          />
          {errors.phone && (
            <p id="contact-phone-error" className="text-xs text-danger mt-1.5">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Business Type & Current Challenge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-business-type"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Business Stage / Type <span className="text-danger">*</span>
          </label>
          <select
            id="contact-business-type"
            name="businessType"
            required
            value={formData.businessType}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("businessType", e.target.value)}
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={
              errors.businessType ? "contact-btype-error" : undefined
            }
            className={INPUT_CLASS}
          >
            <option value="">Select your business stage...</option>
            {BUSINESS_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.businessType && (
            <p id="contact-btype-error" className="text-xs text-danger mt-1.5">
              {errors.businessType}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-challenge"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Primary Business Challenge <span className="text-danger">*</span>
          </label>
          <select
            id="contact-challenge"
            name="currentChallenge"
            required
            value={formData.currentChallenge}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("currentChallenge", e.target.value)}
            aria-invalid={Boolean(errors.currentChallenge)}
            aria-describedby={
              errors.currentChallenge ? "contact-challenge-error" : undefined
            }
            className={INPUT_CLASS}
          >
            <option value="">Select what you want to solve...</option>
            {CURRENT_CHALLENGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.currentChallenge && (
            <p
              id="contact-challenge-error"
              className="text-xs text-danger mt-1.5"
            >
              {errors.currentChallenge}
            </p>
          )}
        </div>
      </div>

      {/* Row 4: Desired Service */}
      <div>
        <label
          htmlFor="contact-service"
          className="block text-sm font-semibold text-foreground mb-1.5"
        >
          Service You Are Exploring <span className="text-danger">*</span>
        </label>
        <select
          id="contact-service"
          name="desiredService"
          required
          value={formData.desiredService}
          onFocus={handleFieldFocus}
          onChange={(e) => handleChange("desiredService", e.target.value)}
          aria-invalid={Boolean(errors.desiredService)}
          className={INPUT_CLASS}
        >
          {DESIRED_SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Row 5: Optional Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-budget"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Estimated Budget Range{" "}
            <span className="text-xs font-normal text-muted-foreground">
              (Optional)
            </span>
          </label>
          <select
            id="contact-budget"
            name="budgetRange"
            value={formData.budgetRange || ""}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("budgetRange", e.target.value)}
            className={INPUT_CLASS}
          >
            {BUDGET_RANGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-timeline"
            className="block text-sm font-semibold text-foreground mb-1.5"
          >
            Expected Timeline{" "}
            <span className="text-xs font-normal text-muted-foreground">
              (Optional)
            </span>
          </label>
          <select
            id="contact-timeline"
            name="timeline"
            value={formData.timeline || ""}
            onFocus={handleFieldFocus}
            onChange={(e) => handleChange("timeline", e.target.value)}
            className={INPUT_CLASS}
          >
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 6: Project Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-foreground mb-1.5"
        >
          How can we help? Describe your workflow or goal{" "}
          <span className="text-danger">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Tell us briefly about your business, what is slowing you down right now, or what you want to launch..."
          value={formData.message}
          onFocus={handleFieldFocus}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className="w-full px-3.5 py-3 rounded-lg bg-background border border-border text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.message && (
          <p id="contact-message-error" className="text-xs text-danger mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent checkbox */}
      <div className="space-y-1.5">
        <label className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={(e) => handleChange("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={
              errors.consent ? "contact-consent-error" : undefined
            }
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary shrink-0"
          />
          <span>
            I agree that Webntric Software may use these details to review my
            enquiry and contact me regarding my project requirement, in
            accordance with the{" "}
            <Link
              href="/privacy-policy"
              className="text-primary font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="contact-consent-error" className="text-xs text-danger">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit + Privacy Note */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck
            className="w-4 h-4 text-primary shrink-0"
            aria-hidden="true"
          />
          <span>
            Your information is never sold or shared with third-party marketers.
          </span>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors disabled:opacity-60 cursor-pointer shrink-0"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          {status === "submitting"
            ? "Sending your enquiry..."
            : "Send Project Enquiry"}
        </button>
      </div>
    </form>
  );
}
