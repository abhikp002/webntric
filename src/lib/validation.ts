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

/* ==============================================================================
   Startup Technology Partnership Application Validation
   ============================================================================== */

export type StartupStage =
  | "idea"
  | "validation"
  | "early-startup"
  | "growing-startup";

export interface StartupApplicationInput {
  // Founder Info
  founderName: string;
  email: string;
  phone: string;
  location: string;
  linkedinProfile?: string;

  // Startup Info
  projectName: string;
  website?: string;
  industry: string;
  stage: StartupStage;
  founderCount: string;
  founderRoles: string;
  teamSize: string;
  registrationStatus?: string;
  existingUsers?: string;
  currentRevenue?: string;

  // Idea Info
  problem: string;
  targetCustomer: string;
  proposedSolution: string;
  whyImportant: string;
  currentAlternatives: string;
  differentiation: string;
  progress?: string;
  buildFirst: string;
  requestedSupport: string;
  sixMonthSuccess: string;

  // Commitment & Support
  founderCommitment: string;
  founderResponsibilities: string;
  whyPartner: string;
  whyWebntric: string;
  expectedTimeline: string;
  externalCostsPlan: string;
  supportType: string;
  previousInvestment?: string;

  // Consent & Declarations
  confirmAccurate: boolean;
  understandNoGuarantee: boolean;
  understandNoAutomaticPartnership: boolean;
  noSecretsSubmitted: boolean;
  contactConsent: boolean;
  privacyConsent: boolean;
  marketingConsent?: boolean;

  honeypot?: string;
}

export interface StartupValidationResult {
  success: boolean;
  data?: StartupApplicationInput;
  errors: Partial<Record<keyof StartupApplicationInput, string>>;
}

export const STARTUP_STAGE_OPTIONS: readonly { value: StartupStage; label: string }[] = [
  { value: "idea", label: "Idea Stage — Exploring problem & potential product" },
  { value: "validation", label: "Early Validation — Spoken to users, collecting feedback" },
  { value: "early-startup", label: "Existing Early Startup — Initial users/revenue, need solid tech" },
  { value: "growing-startup", label: "Growing Startup — Proven business scaling product & infra" },
] as const;

export const FOUNDER_COUNT_OPTIONS = [
  { value: "1", label: "1 (Solo Founder)" },
  { value: "2", label: "2 Co-Founders" },
  { value: "3", label: "3 Co-Founders" },
  { value: "4+", label: "4+ Co-Founders" },
] as const;

export const TEAM_SIZE_OPTIONS = [
  { value: "1-2", label: "1–2 people" },
  { value: "3-5", label: "3–5 people" },
  { value: "6-10", label: "6–10 people" },
  { value: "10+", label: "10+ people" },
] as const;

export const SUPPORT_TYPE_OPTIONS = [
  { value: "technology", label: "Technology & Software Development" },
  { value: "product-guidance", label: "Product & Architecture Guidance" },
  { value: "both-tech-guidance", label: "Both Technology Support & Practical Guidance" },
] as const;

export function validateStartupApplication(
  raw: Partial<Record<keyof StartupApplicationInput, unknown>>
): StartupValidationResult {
  const errors: Partial<Record<keyof StartupApplicationInput, string>> = {};

  const honeypot = sanitizeText(raw.honeypot, 200);
  if (honeypot.length > 0) {
    return {
      success: false,
      errors: { problem: "Unable to process application." },
    };
  }

  // Founder Info
  const founderName = sanitizeText(raw.founderName, 120);
  const email = sanitizeText(raw.email, 160).toLowerCase();
  const phone = sanitizeText(raw.phone, 30);
  const location = sanitizeText(raw.location, 120);
  const linkedinProfile = sanitizeText(raw.linkedinProfile, 200);

  // Startup Info
  const projectName = sanitizeText(raw.projectName, 160);
  const website = sanitizeText(raw.website, 200);
  const industry = sanitizeText(raw.industry, 100);
  const stage = (raw.stage as StartupStage) || "idea";
  const founderCount = sanitizeText(raw.founderCount, 30);
  const founderRoles = sanitizeText(raw.founderRoles, 200);
  const teamSize = sanitizeText(raw.teamSize, 30);
  const registrationStatus = sanitizeText(raw.registrationStatus, 100);
  const existingUsers = sanitizeText(raw.existingUsers, 500);
  const currentRevenue = sanitizeText(raw.currentRevenue, 200);

  // Idea Info
  const problem = sanitizeText(raw.problem, 3000);
  const targetCustomer = sanitizeText(raw.targetCustomer, 1000);
  const proposedSolution = sanitizeText(raw.proposedSolution, 3000);
  const whyImportant = sanitizeText(raw.whyImportant, 2000);
  const currentAlternatives = sanitizeText(raw.currentAlternatives, 2000);
  const differentiation = sanitizeText(raw.differentiation, 2000);
  const progress = sanitizeText(raw.progress, 2000);
  const buildFirst = sanitizeText(raw.buildFirst, 2000);
  const requestedSupport = sanitizeText(raw.requestedSupport, 2000);
  const sixMonthSuccess = sanitizeText(raw.sixMonthSuccess, 2000);

  // Commitment & Support
  const founderCommitment = sanitizeText(raw.founderCommitment, 1000);
  const founderResponsibilities = sanitizeText(raw.founderResponsibilities, 2000);
  const whyPartner = sanitizeText(raw.whyPartner, 2000);
  const whyWebntric = sanitizeText(raw.whyWebntric, 2000);
  const expectedTimeline = sanitizeText(raw.expectedTimeline, 200);
  const externalCostsPlan = sanitizeText(raw.externalCostsPlan, 1000);
  const supportType = sanitizeText(raw.supportType, 100);
  const previousInvestment = sanitizeText(raw.previousInvestment, 1000);

  // Consents
  const confirmAccurate = raw.confirmAccurate === true;
  const understandNoGuarantee = raw.understandNoGuarantee === true;
  const understandNoAutomaticPartnership = raw.understandNoAutomaticPartnership === true;
  const noSecretsSubmitted = raw.noSecretsSubmitted === true;
  const contactConsent = raw.contactConsent === true;
  const privacyConsent = raw.privacyConsent === true;
  const marketingConsent = raw.marketingConsent === true;

  // Validation rules
  if (founderName.length < 2) {
    errors.founderName = "Please enter your full name.";
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!phone || !PHONE_REGEX.test(phone)) {
    errors.phone = "Please enter a valid telephone/WhatsApp number.";
  }
  if (location.length < 2) {
    errors.location = "Please enter your city and country.";
  }
  if (projectName.length < 2) {
    errors.projectName = "Please provide your project or startup name.";
  }
  if (industry.length < 2) {
    errors.industry = "Please enter your industry or category (e.g. EdTech, B2B SaaS, Logistics).";
  }
  if (!["idea", "validation", "early-startup", "growing-startup"].includes(stage)) {
    errors.stage = "Please select your current startup stage.";
  }
  if (!founderCount) {
    errors.founderCount = "Please select the number of founders.";
  }
  if (founderRoles.length < 2) {
    errors.founderRoles = "Please describe the roles within the founding team.";
  }
  if (!teamSize) {
    errors.teamSize = "Please select your current team size.";
  }

  if (problem.length < 20) {
    errors.problem = "Please describe the customer problem in at least 20 characters.";
  }
  if (targetCustomer.length < 10) {
    errors.targetCustomer = "Please specify who experiences this problem (at least 10 characters).";
  }
  if (proposedSolution.length < 20) {
    errors.proposedSolution = "Please describe your proposed solution (at least 20 characters).";
  }
  if (whyImportant.length < 10) {
    errors.whyImportant = "Please explain why solving this problem is important.";
  }
  if (currentAlternatives.length < 5) {
    errors.currentAlternatives = "Please list what alternatives or workarounds customers use today.";
  }
  if (differentiation.length < 10) {
    errors.differentiation = "Please explain what makes your approach different.";
  }
  if (buildFirst.length < 10) {
    errors.buildFirst = "Please specify what you would like to build first (e.g., MVP, prototype).";
  }
  if (requestedSupport.length < 10) {
    errors.requestedSupport = "Please describe the technology support required.";
  }
  if (sixMonthSuccess.length < 10) {
    errors.sixMonthSuccess = "Please describe what success looks like in the next 6 months.";
  }

  if (founderCommitment.length < 5) {
    errors.founderCommitment = "Please state how much time the founding team can commit weekly.";
  }
  if (founderResponsibilities.length < 5) {
    errors.founderResponsibilities = "Please summarize non-technical responsibilities remaining with founders.";
  }
  if (whyPartner.length < 10) {
    errors.whyPartner = "Please explain why you are seeking a technology partner.";
  }
  if (whyWebntric.length < 10) {
    errors.whyWebntric = "Please explain why you believe Webntric may be a good fit.";
  }
  if (expectedTimeline.length < 3) {
    errors.expectedTimeline = "Please state your target timeline.";
  }
  if (externalCostsPlan.length < 5) {
    errors.externalCostsPlan = "Please confirm how external infrastructure costs (domains, cloud hosting) will be covered.";
  }
  if (!supportType) {
    errors.supportType = "Please select the primary type of support needed.";
  }

  if (!confirmAccurate) {
    errors.confirmAccurate = "You must confirm that the information provided is accurate.";
  }
  if (!understandNoGuarantee) {
    errors.understandNoGuarantee = "You must acknowledge that application does not guarantee acceptance.";
  }
  if (!understandNoAutomaticPartnership) {
    errors.understandNoAutomaticPartnership = "You must acknowledge that submission does not create a formal partnership.";
  }
  if (!noSecretsSubmitted) {
    errors.noSecretsSubmitted = "You must confirm that no passwords, source code, or confidential trade secrets are included.";
  }
  if (!contactConsent) {
    errors.contactConsent = "You must consent to Webntric contacting you regarding this application.";
  }
  if (!privacyConsent) {
    errors.privacyConsent = "You must confirm that you have read and agree to the privacy policy.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    errors: {},
    data: {
      founderName,
      email,
      phone,
      location,
      linkedinProfile: linkedinProfile || undefined,
      projectName,
      website: website || undefined,
      industry,
      stage,
      founderCount,
      founderRoles,
      teamSize,
      registrationStatus: registrationStatus || undefined,
      existingUsers: existingUsers || undefined,
      currentRevenue: currentRevenue || undefined,
      problem,
      targetCustomer,
      proposedSolution,
      whyImportant,
      currentAlternatives,
      differentiation,
      progress: progress || undefined,
      buildFirst,
      requestedSupport,
      sixMonthSuccess,
      founderCommitment,
      founderResponsibilities,
      whyPartner,
      whyWebntric,
      expectedTimeline,
      externalCostsPlan,
      supportType,
      previousInvestment: previousInvestment || undefined,
      confirmAccurate,
      understandNoGuarantee,
      understandNoAutomaticPartnership,
      noSecretsSubmitted,
      contactConsent,
      privacyConsent,
      marketingConsent,
    },
  };
}
