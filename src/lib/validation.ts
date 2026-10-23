export interface ContactFormInput {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  currentChallenge: string;
  desiredService: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface ValidationResult {
  success: boolean;
  data?: ContactFormInput;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export const BUSINESS_TYPE_OPTIONS = [
  { value: "startup", label: "New business / Startup" },
  { value: "local-business", label: "Local shop, clinic, or regional service" },
  { value: "growing-smb", label: "Growing company (10–100 team members)" },
  { value: "established-organization", label: "Established organization / Enterprise" },
  { value: "traditional-business", label: "Traditional business moving from paper/registers" },
  { value: "other", label: "Other / Independent professional" },
] as const;

export const CURRENT_CHALLENGE_OPTIONS = [
  { value: "need-new-website", label: "We need a credible, professional website" },
  { value: "improve-existing-site", label: "Our current website or software is outdated or slow" },
  { value: "manual-records", label: "Manual registers and spreadsheets are causing delays or mistakes" },
  { value: "billing-inventory", label: "We need reliable counter billing or inventory control" },
  { value: "offline-software", label: "We need software that works offline without internet dependency" },
  { value: "more-leads-seo", label: "We want more qualified customer enquiries via search or ads" },
  { value: "social-media-consistency", label: "Our social media presence is irregular or hard to manage" },
  { value: "ongoing-support", label: "We need a dependable team for ongoing maintenance and support" },
  { value: "not-sure", label: "We are unsure which digital investment should come first" },
] as const;

export const DESIRED_SERVICE_OPTIONS = [
  { value: "not-sure-need-guidance", label: "Not sure yet — help us choose the right step" },
  { value: "website-development", label: "Website Development / Redesign" },
  { value: "web-application-development", label: "Web Application / Custom Portal" },
  { value: "mobile-app-development", label: "Mobile App Development (Android / iOS)" },
  { value: "custom-business-software", label: "Custom Business Software / Internal ERP" },
  { value: "offline-windows-software", label: "Offline Windows Desktop Software" },
  { value: "billing-and-inventory-software", label: "Billing & Inventory Software" },
  { value: "business-automation-consulting", label: "Business Automation Consulting" },
  { value: "seo-services", label: "SEO Services (Technical & Local SEO)" },
  { value: "digital-marketing", label: "Digital Marketing (Google / Meta Ads)" },
  { value: "lead-generation", label: "Lead Generation System" },
  { value: "social-media-management", label: "Social Media Management" },
  { value: "social-media-content-creation", label: "Social Media Content Creation" },
  { value: "website-maintenance-and-support", label: "Website Maintenance & Support" },
] as const;

export const BUDGET_RANGE_OPTIONS = [
  { value: "", label: "Optional — select or discuss later" },
  { value: "not-sure", label: "Not sure yet — need an estimate after discussion" },
  { value: "under-50k-inr", label: "Under ₹50,000 (Focused starter scope / maintenance)" },
  { value: "50k-to-1.5l-inr", label: "₹50,000 – ₹1,50,000 ($600 – $1,800)" },
  { value: "1.5l-to-4l-inr", label: "₹1,50,000 – ₹4,00,000 ($1,800 – $4,800)" },
  { value: "4l-to-10l-inr", label: "₹4,00,000 – ₹10,00,000 ($4,800 – $12,000)" },
  { value: "above-10l-inr", label: "Above ₹10,00,000 ($12,000+)" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "", label: "Optional — select expected timeline" },
  { value: "urgent-within-4-weeks", label: "Within 2–4 weeks (Focused scope)" },
  { value: "1-to-3-months", label: "1 to 3 months" },
  { value: "3-plus-months", label: "3+ months / Phased rollout" },
  { value: "exploring-options", label: "Currently exploring options and planning" },
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+\d][\d\s()-]{6,20}$/;

function sanitizeText(input: unknown, maxLength = 2000): string {
  if (typeof input !== "string") return "";
  return input.trim().replace(/\0/g, "").slice(0, maxLength);
}

/**
 * Shared client & server validation function for the Contact / Project Discussion form.
 */
export function validateContactForm(raw: Partial<Record<keyof ContactFormInput, unknown>>): ValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  const honeypot = sanitizeText(raw.honeypot, 200);
  if (honeypot.length > 0) {
    // Silent spam trap detection
    return {
      success: false,
      errors: { message: "Unable to process submission." },
    };
  }

  const name = sanitizeText(raw.name, 120);
  const businessName = sanitizeText(raw.businessName, 160);
  const email = sanitizeText(raw.email, 160).toLowerCase();
  const phone = sanitizeText(raw.phone, 30);
  const businessType = sanitizeText(raw.businessType, 80);
  const currentChallenge = sanitizeText(raw.currentChallenge, 120);
  const desiredService = sanitizeText(raw.desiredService, 120);
  const budgetRange = sanitizeText(raw.budgetRange, 80);
  const timeline = sanitizeText(raw.timeline, 80);
  const message = sanitizeText(raw.message, 4000);
  const consent = raw.consent === true;

  if (name.length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  if (businessName.length < 2) {
    errors.businessName = "Please enter your business or organization name (or 'New Venture').";
  }

  if (!email) {
    errors.email = "Please enter your email address so we can reply.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address (for example, name@company.com).";
  }

  if (!phone) {
    errors.phone = "Please enter a phone or WhatsApp number.";
  } else if (!PHONE_REGEX.test(phone)) {
    errors.phone = "Please enter a valid phone number including area or country code.";
  }

  if (!businessType) {
    errors.businessType = "Please select the option that best describes your business.";
  }

  if (!currentChallenge) {
    errors.currentChallenge = "Please select the main challenge you want to address.";
  }

  if (!desiredService) {
    errors.desiredService = "Please select a service or choose 'Not sure yet'.";
  }

  if (message.length < 15) {
    errors.message =
      "Please share a few sentences about your requirement or current challenge (at least 15 characters).";
  }

  if (!consent) {
    errors.consent =
      "Please confirm that we may use these details to review your enquiry and contact you.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    errors: {},
    data: {
      name,
      businessName,
      email,
      phone,
      businessType,
      currentChallenge,
      desiredService,
      budgetRange: budgetRange || undefined,
      timeline: timeline || undefined,
      message,
      consent,
    },
  };
}
