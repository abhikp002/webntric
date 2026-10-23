export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  groupTitle: string;
  items: NavLinkItem[];
}

export const SITE_CONFIG = {
  name: "Webntric Software",
  legalName: "Webntric Pvt. Ltd.",
  shortName: "Webntric",
  url: "https://www.webntric.com",
  tagline:
    "A practical technology and digital growth partner for businesses that want to work better, look more credible, and grow with confidence.",
  description:
    "Webntric Software helps startups, local businesses, and growing companies build credible websites, custom business software, offline Windows applications, mobile apps, and practical digital growth systems.",
  email: "info@webntric.com",
  phone: "+91 8090972654",
  phoneDisplay: "+91 80909 72654",
  phoneHref: "tel:+918090972654",
  whatsappNumber: "918090972654",
  whatsappDefaultMessage:
    "Hello Webntric team, I would like to discuss a requirement for my business.",
  address: {
    streetAddress: "Jungle Dhusar",
    addressLocality: "Gorakhpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "273014",
    addressCountry: "IN",
    formatted: "Jungle Dhusar, Gorakhpur, Uttar Pradesh 273014, India",
    full: "Jungle Dhusar, Gorakhpur, Uttar Pradesh 273014, India",
  },
  businessHours: "Monday – Friday, 9:00 AM – 6:00 PM IST",
  responseCommitment:
    "We review every enquiry personally and respond within one business day.",
  responseExpectation:
    "We review every enquiry personally and respond within 1 business day.",
  googleVerification: "wNxe4NXGEjcM74igkC6z0_1inrvkFQWXXCQ-geaDQf0",
  defaultGtmId: "GTM-T63XBR6K",
  gtmId: "GTM-T63XBR6K",
  // Verified official Webntric social media profiles
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/webntric",
      active: true,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/webntric",
      active: true,
    },
  ],
} as const;

export const GENERATIVE_AI_NAV_ITEMS: NavLinkItem[] = [
  {
    label: "Generative AI Applications",
    href: "/services/generative-ai-applications",
    description:
      "Practical AI applications designed around real business workflows and human oversight.",
  },
  {
    label: "AI Chatbots and Customer Support",
    href: "/services/generative-ai-applications#ai-chatbots",
    description:
      "Grounded support assistants with approved answers and human escalation.",
  },
  {
    label: "AI Knowledge Assistants",
    href: "/services/generative-ai-applications#ai-knowledge-assistants",
    description:
      "Permission-aware internal search across SOPs, policies, and manuals with citations.",
  },
  {
    label: "AI-Powered Business Workflows",
    href: "/services/generative-ai-applications#ai-business-automation",
    description:
      "Summarization, enquiry routing, and draft preparation connected to your software.",
  },
  {
    label: "Document Processing and Data Extraction",
    href: "/services/generative-ai-applications#document-processing",
    description:
      "Structured invoice, PO, and form field extraction with human approval.",
  },
  {
    label: "AI Content and Marketing Workflows",
    href: "/services/generative-ai-applications#ai-content-workflows",
    description:
      "Brand-aligned content briefs and repurposing with editorial verification.",
  },
  {
    label: "AI Search and Recommendation Systems",
    href: "/services/generative-ai-applications#ai-search-recommendations",
    description:
      "Semantic product discovery and knowledge search evaluated for relevance.",
  },
  {
    label: "AI Integration and Automation",
    href: "/services/generative-ai-applications#ai-technology",
    description:
      "Secure API connections between language models, CRMs, ERPs, and databases.",
  },
  {
    label: "AI Evaluation, Monitoring, and Improvement",
    href: "/services/generative-ai-applications#ai-trust-safety",
    description:
      "Ongoing accuracy evaluation, rate limits, cost controls, and safety guardrails.",
  },
];

export const SECURITY_RELIABILITY_NAV_ITEMS: NavLinkItem[] = [
  {
    label: "Website, Application & Data Security",
    href: "/services/website-data-security",
    description:
      "Practical security controls, tested deployments, automated backups, and ongoing care.",
  },
  {
    label: "Website Security",
    href: "/services/website-data-security#secure-development",
    description:
      "Security headers, input validation, and protection for public-facing websites.",
  },
  {
    label: "Web Application Security",
    href: "/services/website-data-security#secure-development",
    description:
      "OWASP-informed secure coding, session protection, and API rate limiting.",
  },
  {
    label: "Data Protection and Access Control",
    href: "/services/website-data-security#access-control",
    description:
      "Role-based permissions, admin route protection, and least-privilege access.",
  },
  {
    label: "SSL and HTTPS Configuration",
    href: "/services/website-data-security#ssl-https",
    description:
      "TLS encryption in transit, HTTP-to-HTTPS redirects, and renewal monitoring.",
  },
  {
    label: "Automated Website and Database Backups",
    href: "/services/website-data-security#automated-backups",
    description:
      "Scheduled snapshots, isolated off-server storage, retention, and restore testing.",
  },
  {
    label: "Secure Deployment and Release Testing",
    href: "/services/website-data-security#secure-deployment",
    description:
      "Staging environments, 15 pre-release checks, and 17 post-deployment verifications.",
  },
  {
    label: "Security Monitoring and Maintenance",
    href: "/services/website-data-security#security-monitoring",
    description:
      "Dependency patching, uptime checks, error monitoring, and access reviews.",
  },
  {
    label: "Disaster Recovery Planning",
    href: "/services/website-data-security#backup-lifecycle",
    description:
      "Documented restoration runbooks, rollback procedures, and recovery testing.",
  },
  {
    label: "Performance, Uptime, and Reliability Support",
    href: "/services/website-data-security#security-packages",
    description:
      "Structured Essential, Business Continuity, and Managed service tiers.",
  },
];

export const SERVICE_NAV_GROUPS: NavGroup[] = [
  {
    groupTitle: "Build Credibility & Presence",
    items: [
      {
        label: "Website Development",
        href: "/services/website-development",
        description:
          "Fast, high-trust business websites, corporate portals, and redesigns.",
      },
      {
        label: "Web Application Development",
        href: "/services/web-application-development",
        description:
          "Browser-based customer portals, booking systems, and SaaS platforms.",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
        description:
          "Android and iOS apps for customers and field teams with offline sync.",
      },
    ],
  },
  {
    groupTitle: "Work More Efficiently",
    items: [
      {
        label: "Custom Business Software",
        href: "/services/custom-business-software",
        description:
          "Internal dashboards, approvals, role permissions, and reporting tools.",
      },
      {
        label: "Offline Windows Software",
        href: "/services/offline-windows-software",
        description:
          "Internet-independent desktop software with local database control.",
      },
      {
        label: "Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        description:
          "Counter POS, barcode stock control, GST invoicing, and party ledgers.",
      },
      {
        label: "Business Automation Consulting",
        href: "/services/business-automation-consulting",
        description:
          "Workflow audits and step-by-step digitization for manual operations.",
      },
    ],
  },
  {
    groupTitle: "Generative AI",
    items: [
      {
        label: "Generative AI Applications",
        href: "/services/generative-ai-applications",
        description:
          "AI chatbots, internal knowledge assistants, document extraction, and workflows.",
      },
    ],
  },
  {
    groupTitle: "Reach the Right Customers",
    items: [
      {
        label: "SEO Services",
        href: "/services/seo-services",
        description:
          "Technical SEO, search intent architecture, and local search visibility.",
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        description:
          "Disciplined Google Ads, paid social, and landing page optimization.",
      },
      {
        label: "Lead Generation",
        href: "/services/lead-generation",
        description:
          "Conversion landing pages, qualifying intake forms, and enquiry routing.",
      },
      {
        label: "Social Media Management",
        href: "/services/social-media-management",
        description:
          "Structured content calendars, publishing workflows, and page management.",
      },
      {
        label: "Social Media Content Creation",
        href: "/services/social-media-content-creation",
        description:
          "Educational carousels, visual design, copywriting, and video concepts.",
      },
    ],
  },
  {
    groupTitle: "Security and Reliability",
    items: [
      {
        label: "Website, Application & Data Security",
        href: "/services/website-data-security",
        description:
          "HTTPS, OWASP-informed secure coding, automated backups, and tested releases.",
      },
      {
        label: "Website Maintenance & Support",
        href: "/services/website-maintenance-and-support",
        description:
          "Security updates, verified backups, speed monitoring, and ongoing care.",
      },
    ],
  },
];

export const INDUSTRY_NAV_ITEMS: NavLinkItem[] = [
  {
    label: "Retail & Wholesale",
    href: "/industries/retail-and-wholesale",
    description: "Counter POS, godown inventory, party ledgers, and catalogues.",
  },
  {
    label: "Manufacturing",
    href: "/industries/manufacturing",
    description: "BOM tracking, raw material to dispatch visibility, and B2B websites.",
  },
  {
    label: "Education & Coaching",
    href: "/industries/education-and-coaching",
    description: "Fee installments, student registries, portals, and admission systems.",
  },
  {
    label: "Healthcare & Clinics",
    href: "/industries/healthcare-and-clinics",
    description: "Patient-trust websites, OPD token billing, and clinic records.",
  },
  {
    label: "Real Estate & Construction",
    href: "/industries/real-estate",
    description: "Project microsites, unit availability, and site-visit lead pipelines.",
  },
  {
    label: "Professional Services",
    href: "/industries/professional-services",
    description: "Authoritative firm websites, practice SEO, and client portals.",
  },
  {
    label: "Hospitality & Restaurants",
    href: "/industries/hospitality",
    description: "Direct room/banquet enquiries, fast mobile galleries, and KOT billing.",
  },
  {
    label: "Logistics & Distribution",
    href: "/industries/logistics-and-distribution",
    description: "Dispatch challans, field order apps, and multi-depot stock control.",
  },
  {
    label: "Local Service Businesses",
    href: "/industries/local-service-businesses",
    description: "Local search visibility, quotation tracking, and AMC reminders.",
  },
];

export const BUSINESS_STAGE_NAV_ITEMS: NavLinkItem[] = [
  {
    label: "Startups",
    href: "/businesses/startups",
    description: "Launch a credible v1 website or MVP without over-engineering.",
  },
  {
    label: "Local Businesses",
    href: "/businesses/local-businesses",
    description: "Be found in local search, build customer trust, and simplify billing.",
  },
  {
    label: "Growing Businesses",
    href: "/businesses/growing-businesses",
    description: "Replace spreadsheet chaos with connected workflows and lead pipelines.",
  },
  {
    label: "Established Organizations",
    href: "/businesses/established-businesses",
    description: "Modernize legacy software, improve reliability, and secure SLA support.",
  },
  {
    label: "Traditional Businesses",
    href: "/businesses/traditional-businesses",
    description: "Move from paper registers to staff-friendly digital systems step by step.",
  },
];
