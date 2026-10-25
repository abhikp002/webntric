export interface StageSelectorOption {
  id: string;
  label: string;
  shortTag: string;
  likelyChallenge: string;
  whyItHappens: string;
  recommendedFirstService: {
    name: string;
    href: string;
    summary: string;
  };
  relatedServices: Array<{
    name: string;
    href: string;
  }>;
  suggestedNextStep: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface BusinessStagePageData {
  slug: string;
  title: string;
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  subtitle: string;
  whoThisIsFor: string[];
  coreProblem: {
    heading: string;
    description: string;
    symptoms: string[];
  };
  whatToPrioritizeFirst: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  whatToAvoidNow: string[];
  recommendedServices: Array<{
    name: string;
    href: string;
    reason: string;
  }>;
  relatedIndustries: Array<{
    name: string;
    href: string;
  }>;
  objectionAddressed: {
    question: string;
    answer: string;
  };
}

export const HOME_STAGE_SELECTOR_OPTIONS: StageSelectorOption[] = [
  {
    id: "starting-new-business",
    label: "I am starting a new business",
    shortTag: "New Venture",
    likelyChallenge:
      "You need to look credible to early customers and test demand quickly, without spending months or capital on complex software features you haven't validated yet.",
    whyItHappens:
      "Many agencies try to sell startups a massive multi-module platform on day one, when what actually wins early customers is a clear, fast website or a tightly focused version-one product.",
    recommendedFirstService: {
      name: "Website Development (Focused Launch Scope)",
      href: "/services/website-development",
      summary:
        "A fast, clear, mobile-first website or lean web application that explains your offer, captures enquiries, and gives you a clean foundation to grow into.",
    },
    relatedServices: [
      { name: "Web Application Development", href: "/services/web-application-development" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Solutions for Startups", href: "/businesses/startups" },
    ],
    suggestedNextStep:
      "Share your business idea and target launch window. We will help you separate essential day-one features from phase-two nice-to-haves.",
    ctaLabel: "Discuss your new business",
    ctaHref: "/contact?stage=startups&service=website-development",
  },
  {
    id: "need-professional-website",
    label: "I need a professional website",
    shortTag: "Credibility & Trust",
    likelyChallenge:
      "Potential customers hear about your business or find you online, but you either have no website or your current site does not reflect the real quality of your work.",
    whyItHappens:
      "Generic templates filled with stock photos and vague slogans fail to answer the specific questions buyers have before they call or visit.",
    recommendedFirstService: {
      name: "Website Development",
      href: "/services/website-development",
      summary:
        "A custom-structured business website with clear positioning, fast mobile loading, technical SEO, and straightforward enquiry paths.",
    },
    relatedServices: [
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Website Maintenance & Support", href: "/services/website-maintenance-and-support" },
      { name: "Solutions for Local Businesses", href: "/businesses/local-businesses" },
    ],
    suggestedNextStep:
      "Tell us what you offer and who your typical customer is. We will outline a practical page structure and timeline.",
    ctaLabel: "Discuss your website",
    ctaHref: "/contact?service=website-development",
  },
  {
    id: "automate-daily-operations",
    label: "I want to automate daily operations",
    shortTag: "Operational Efficiency",
    likelyChallenge:
      "Your team spends hours copying figures between spreadsheets, chasing approvals on WhatsApp, and compiling daily reports by hand—leading to delays and avoidable errors.",
    whyItHappens:
      "As a business grows, informal habits that worked for 3 people start breaking down across sales, inventory, accounts, and dispatch.",
    recommendedFirstService: {
      name: "Business Automation Consulting & Custom Software",
      href: "/services/business-automation-consulting",
      summary:
        "We map your actual daily workflow first, identify the highest-friction manual bottleneck, and build a role-based tool or integration around how your team works.",
    },
    relatedServices: [
      { name: "Custom Business Software", href: "/services/custom-business-software" },
      { name: "Web Application Development", href: "/services/web-application-development" },
      { name: "Solutions for Growing Businesses", href: "/businesses/growing-businesses" },
    ],
    suggestedNextStep:
      "Walk us through the repetitive task or register that consumes the most time each week.",
    ctaLabel: "Discuss workflow automation",
    ctaHref: "/contact?service=business-automation-consulting",
  },
  {
    id: "custom-billing-inventory",
    label: "I need custom billing or inventory software",
    shortTag: "Billing, POS & Stock",
    likelyChallenge:
      "Counter billing is slow during peak hours, godown stock counts do not match your books, or cloud tools freeze whenever the internet connection drops.",
    whyItHappens:
      "Off-the-shelf accounting software is built for bookkeepers rather than fast counter operations, custom unit conversions, barcode scanners, or offline reliability.",
    recommendedFirstService: {
      name: "Billing & Inventory Software",
      href: "/services/billing-and-inventory-software",
      summary:
        "Fast, keyboard-friendly invoicing, barcode stock management, supplier registers, and party credit ledgers—available as offline Windows software or multi-branch web software.",
    },
    relatedServices: [
      { name: "Offline Windows Software", href: "/services/offline-windows-software" },
      { name: "Custom Business Software", href: "/services/custom-business-software" },
      { name: "Retail & Wholesale Solutions", href: "/industries/retail-and-wholesale" },
    ],
    suggestedNextStep:
      "Tell us whether you operate from a single counter/location or multiple branches, and what hardware (printers/scanners) you use.",
    ctaLabel: "Discuss billing & inventory software",
    ctaHref: "/contact?service=billing-and-inventory-software",
  },
  {
    id: "want-qualified-leads",
    label: "I want more qualified leads",
    shortTag: "Customer Acquisition",
    likelyChallenge:
      "Customers searching for your services find your competitors first, or your paid ads generate clicks and casual messages that rarely convert into real business.",
    whyItHappens:
      "Running ads or SEO without a clear, conversion-focused landing page and qualifying intake form wastes budget on low-intent traffic.",
    recommendedFirstService: {
      name: "Lead Generation & Search Visibility",
      href: "/services/lead-generation",
      summary:
        "A connected acquisition setup combining high-intent search/local SEO or targeted ads with dedicated landing pages and structured enquiry tracking.",
    },
    relatedServices: [
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Website Development", href: "/services/website-development" },
    ],
    suggestedNextStep:
      "Share your service area, primary offering, and current website URL so we can review where enquiries are leaking.",
    ctaLabel: "Discuss lead generation",
    ctaHref: "/contact?service=lead-generation",
  },
  {
    id: "consistent-social-media",
    label: "I need consistent social media content",
    shortTag: "Brand Presence",
    likelyChallenge:
      "Prospective customers check your social media pages before trusting you, but your accounts are inactive or filled with generic graphics that don't explain your expertise.",
    whyItHappens:
      "Planning topics, writing clear captions, designing visuals, and publishing consistently takes time away from running your core business.",
    recommendedFirstService: {
      name: "Social Media Management & Content Creation",
      href: "/services/social-media-management",
      summary:
        "Planned monthly content calendars, custom brand visuals, educational carousels, and pre-approved publishing workflows.",
    },
    relatedServices: [
      { name: "Social Media Content Creation", href: "/services/social-media-content-creation" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    suggestedNextStep:
      "Let us know which platforms matter to your buyers and whether you need content creation only or full account management.",
    ctaLabel: "Discuss social media",
    ctaHref: "/contact?service=social-media-management",
  },
  {
    id: "improve-existing-system",
    label: "My current website or software needs improvement",
    shortTag: "Modernization & Fixes",
    likelyChallenge:
      "You already invested in a website or software system, but it is slow on mobile, difficult to update, poorly documented, or no longer fits how your business operates.",
    whyItHappens:
      "Systems built hastily without clean architecture or post-launch care accumulate technical debt until simple changes become risky.",
    recommendedFirstService: {
      name: "Technical Audit & Modernization",
      href: "/services/website-development",
      summary:
        "We inspect your existing website or database software, tell you honestly what can be repaired in place versus what should be rebuilt, and execute a safe upgrade path.",
    },
    relatedServices: [
      { name: "Website Maintenance & Support", href: "/services/website-maintenance-and-support" },
      { name: "Custom Business Software", href: "/services/custom-business-software" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
    suggestedNextStep:
      "Send us your current link or describe your existing software setup for a straightforward technical assessment.",
    ctaLabel: "Request a system assessment",
    ctaHref: "/contact?challenge=improve-existing-site",
  },
  {
    id: "ongoing-technical-support",
    label: "I need ongoing technical support",
    shortTag: "Maintenance & Care",
    likelyChallenge:
      "Your previous developer is unavailable or slow to respond, leaving you without someone reliable to handle security updates, backups, bug fixes, or small improvements.",
    whyItHappens:
      "Many freelancers and agencies treat launch day as the end of the project and have no structured system for ongoing care.",
    recommendedFirstService: {
      name: "Website Maintenance & Support",
      href: "/services/website-maintenance-and-support",
      summary:
        "Dependable post-launch care including security patching, verified backups, uptime checks, content updates, and priority technical guidance.",
    },
    relatedServices: [
      { name: "Support Promise & Structure", href: "/support" },
      { name: "SEO Services", href: "/services/seo-services" },
    ],
    suggestedNextStep:
      "Tell us what stack your website or software runs on and what recurring support you need.",
    ctaLabel: "Discuss ongoing support",
    ctaHref: "/contact?service=website-maintenance-and-support",
  },
];

export const BUSINESS_STAGES_DATA: BusinessStagePageData[] = [
  {
    slug: "startups",
    title: "Digital Solutions for Startups",
    shortLabel: "Startups",
    metaTitle: "Digital Solutions for Startups | MVP Web, App & Brand Launch | Webntric",
    metaDescription:
      "Practical technology guidance for startups: high-trust launch websites, lean web and mobile MVPs, clean scalable codebases, and honest scope discipline.",
    primaryKeyword: "software and web development for startups",
    h1: "Launch a credible first version without building unnecessary complexity.",
    subtitle:
      "Early-stage companies fail when they spend six months building secondary features before testing whether customers will buy—or when they launch something so fragile that early users lose trust.",
    whoThisIsFor: [
      "First-time and repeat founders validating a new product or service offering",
      "Seed and bootstrapped teams that need every rupee or dollar of engineering budget to count",
      "B2B and service startups that need an authoritative website to win their first institutional clients",
      "Product teams needing a clean Next.js, React Native/Flutter, or backend MVP without technical debt",
    ],
    coreProblem: {
      heading: "The two mistakes that stall early-stage launches",
      description:
        "Founders are often caught between cheap, throwaway templates that embarrass them in front of real buyers, and agencies that inflate the scope into a bloated six-month contract.",
      symptoms: [
        "Feature lists that include complex automation before the first 20 customers have even signed up",
        "Unclear positioning on the homepage that leaves visitors guessing what the product actually does",
        "Codebases stitched together without type safety or database discipline, forcing a costly rewrite within months",
        "No analytics or conversion tracking to measure which acquisition channel is actually working",
      ],
    },
    whatToPrioritizeFirst: [
      {
        step: "01",
        title: "Clarify the core value proposition and conversion path",
        description:
          "Before writing application code, define the single primary action a visitor or early user must take and remove every distraction around it.",
      },
      {
        step: "02",
        title: "Build the core workflow cleanly, handle edge cases manually first",
        description:
          "Engineer your customer-facing flow and primary database schema to production standards, while keeping back-office admin simple until volume justifies automation.",
      },
      {
        step: "03",
        title: "Instrument analytics and search visibility from day one",
        description:
          "Launch with clean URL structure, technical SEO, and event tracking so you learn from every early visitor.",
      },
    ],
    whatToAvoidNow: [
      "Building both native iOS and Android apps separately when a responsive web app or single cross-platform build will validate demand faster",
      "Complex multi-tier automated billing engines before validating your pricing model with real customers",
      "Heavy custom admin dashboards for processes that happen only twice a week",
    ],
    recommendedServices: [
      {
        name: "Website Development",
        href: "/services/website-development",
        reason: "Establish immediate credibility with customers, partners, and early investors.",
      },
      {
        name: "Web Application Development",
        href: "/services/web-application-development",
        reason: "Build browser-based SaaS products, customer portals, and booking platforms on Next.js & PostgreSQL.",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
        reason: "Launch Android and iOS MVPs from a unified, maintainable codebase.",
      },
      {
        name: "Startup Technology Partnership",
        href: "/startup-technology-partner",
        reason: "Selective technology collaboration for promising startups without initial standard development charges.",
      },
    ],
    relatedIndustries: [
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
    ],
    objectionAddressed: {
      question: "Will we have to throw away our MVP code once our startup grows?",
      answer:
        "No. Keeping scope lean does not mean writing sloppy code. We use strict TypeScript, modular component architecture, and well-indexed relational databases from the start—so when you are ready for phase two, we extend the existing foundation instead of rewriting it.",
    },
  },
  {
    slug: "local-businesses",
    title: "Digital Solutions for Local Businesses",
    shortLabel: "Local Businesses",
    metaTitle: "Digital Solutions for Local Businesses | Websites, Local SEO & Billing | Webntric",
    metaDescription:
      "Practical websites, Google Business local SEO, offline billing software, and social media management for local businesses.",
    primaryKeyword: "digital solutions for local businesses",
    h1: "Make it easy for local customers to find you, trust you, and contact you.",
    subtitle:
      "Even when customers buy in person or hire locally, their decision almost always starts on a mobile phone—searching Google, checking reviews, and looking at your website before calling or visiting.",
    whoThisIsFor: [
      "Clinics, diagnostic centers, and specialty practices serving city and regional patients",
      "Retail showrooms, wholesalers, and local merchants serving high-footfall markets",
      "Coaching institutes, schools, hotels, banquet venues, and local service contractors",
      "Established local businesses whose offline reputation is strong, but whose online presence is missing or outdated",
    ],
    coreProblem: {
      heading: "Why strong offline businesses lose new local customers online",
      description:
        "When someone searches for a clinic, supplier, or service in your city, they compare the top three results in under a minute. If your business has no website, an inaccurate address, or a page that fails to load on mobile data, they call a competitor.",
      symptoms: [
        "Customers frequently call just to ask for basic address directions, timings, or service lists",
        "Newer competitors with less experience rank higher on Google Maps and local search queries",
        "Counter billing and stock tracking still rely on slow manual calculators or unstable tools",
        "Social media pages haven't been updated in months, making the business look inactive",
      ],
    },
    whatToPrioritizeFirst: [
      {
        step: "01",
        title: "A fast, mobile-first website that answers buyer questions immediately",
        description:
          "Show clearly what you offer, where you are located, why customers trust you, and how to call, WhatsApp, or visit with one tap.",
      },
      {
        step: "02",
        title: "Truthful Local SEO and consistent NAP (Name, Address, Phone) signals",
        description:
          "Structure your pages, schema markup, and Google Business Profile around the genuine local services and areas you serve.",
      },
      {
        step: "03",
        title: "Dependable counter billing and customer record keeping",
        description:
          "Ensure in-store or reception staff can generate invoices, receipts, and stock updates in seconds—even when local internet drops.",
      },
    ],
    whatToAvoidNow: [
      "Paying for hundreds of thin, auto-generated 'city pages' that Google penalizes as spam",
      "Complex enterprise CRM licenses that your reception or counter staff will never open",
      "Running expensive paid ad campaigns before your website and phone/WhatsApp follow-up are ready",
    ],
    recommendedServices: [
      {
        name: "Website Development",
        href: "/services/website-development",
        reason: "Give local customers a clear, fast mobile website that builds immediate confidence.",
      },
      {
        name: "SEO Services (Local & Technical)",
        href: "/services/seo-services",
        reason: "Improve visibility when nearby customers search for your specific services.",
      },
      {
        name: "Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        reason: "Speed up counter invoicing, receipt printing, and stock tracking.",
      },
      {
        name: "Social Media Management",
        href: "/services/social-media-management",
        reason: "Keep your social channels active, professional, and consistent month after month.",
      },
    ],
    relatedIndustries: [
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Local Service Businesses", href: "/industries/local-service-businesses" },
      { name: "Hospitality", href: "/industries/hospitality" },
    ],
    objectionAddressed: {
      question: "Most of our customers come from local word-of-mouth—why do we need a website?",
      answer:
        "Word-of-mouth is your strongest asset, but today when someone gets a referral from a friend, the very first thing they do is look up your name on Google. A clear, credible website confirms that referral and turns hesitation into a phone call or visit.",
    },
  },
  {
    slug: "growing-businesses",
    title: "Digital Solutions for Growing Businesses",
    shortLabel: "Growing Businesses",
    metaTitle: "Solutions for Growing Businesses | Custom Software, Automation & Growth | Webntric",
    metaDescription:
      "Help your growing team work with less friction. Webntric builds custom workflow software, multi-branch billing systems, conversion websites, and structured lead pipelines.",
    primaryKeyword: "custom software and digital growth for growing businesses",
    h1: "Replace operational bottlenecks with systems that support your next stage of growth.",
    subtitle:
      "What worked when your company had five people and one spreadsheet starts breaking down when you have twenty staff, multiple departments, or a second branch.",
    whoThisIsFor: [
      "Growing SMBs (10–100 employees) where the founder is still stuck manually checking every approval",
      "Multi-counter or multi-branch retail, distribution, and service companies needing centralized visibility",
      "Businesses generating steady revenue that now want repeatable, measurable digital lead pipelines",
      "Operations teams outgrowing disconnected Excel files, WhatsApp groups, and rigid entry-level tools",
    ],
    coreProblem: {
      heading: "When growth creates more internal confusion than profit",
      description:
        "Without connected systems, adding more orders and more staff increases mistakes: enquiries slip through the cracks, inventory figures disagree across departments, and management only sees accurate reports weeks later.",
      symptoms: [
        "Sales, inventory, dispatch, and billing teams each maintain their own separate spreadsheets",
        "Critical customer requests and internal approvals get buried in long WhatsApp chat threads",
        "You are spending on marketing, but cannot tell which campaigns actually convert into closed sales",
        "Staff waste hours every week compiling summary reports by hand for management",
      ],
    },
    whatToPrioritizeFirst: [
      {
        step: "01",
        title: "Centralize your core operational register with role-based permissions",
        description:
          "Give sales, warehouse, accounts, and management a single source of truth where each staff member sees and edits only what pertains to their role.",
      },
      {
        step: "02",
        title: "Automate repetitive handoffs and status notifications",
        description:
          "Replace manual copy-pasting between quotation, order confirmation, stock deduction, and invoicing.",
      },
      {
        step: "03",
        title: "Connect your website and marketing directly to structured enquiry tracking",
        description:
          "Ensure every incoming web, search, or ad enquiry is logged, assigned, and followed up consistently.",
      },
    ],
    whatToAvoidNow: [
      "Trying to replace every single workflow across the company in one massive overnight switch",
      "Buying expensive per-seat international SaaS subscriptions that still don't match your tax, unit, or approval rules",
    ],
    recommendedServices: [
      {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        reason: "Unify sales, stock, approvals, and management reporting around your real workflow.",
      },
      {
        name: "Business Automation Consulting",
        href: "/services/business-automation-consulting",
        reason: "Audit existing bottlenecks and plan a phased rollout that doesn't disrupt daily business.",
      },
      {
        name: "Lead Generation & Digital Marketing",
        href: "/services/lead-generation",
        reason: "Build a predictable pipeline of qualified enquiries backed by clear conversion tracking.",
      },
    ],
    relatedIndustries: [
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
    ],
    objectionAddressed: {
      question: "We are too busy handling daily orders to pause operations for a software overhaul.",
      answer:
        "We never ask a growing business to halt operations. We deploy in modular phases—starting with your single biggest bottleneck—and run the new system alongside your existing process until your team is confident.",
    },
  },
  {
    slug: "established-businesses",
    title: "Digital Solutions for Established Organizations",
    shortLabel: "Established Organizations",
    metaTitle: "Digital Solutions for Established Organizations | Modernization & Support | Webntric",
    metaDescription:
      "Dependable engineering for established organizations: corporate platform redesigns, legacy desktop/web software modernization, API integrations, and structured SLA support.",
    primaryKeyword: "legacy software modernization and enterprise web development",
    h1: "Modernize legacy systems and strengthen digital reliability without operational disruption.",
    subtitle:
      "Established organizations need more than surface-level design. You need architectural discipline, safe data migration, clear documentation, confidentiality, and a team that stands behind its code for years.",
    whoThisIsFor: [
      "Established companies running legacy desktop or web software that is slow, unsupported, or difficult to extend",
      "Multi-branch institutions, manufacturers, and corporate groups upgrading their public digital platform",
      "Organizations that need custom internal portals integrated safely with existing databases or accounting systems",
      "Leadership teams looking for an accountable long-term engineering and maintenance partner",
    ],
    coreProblem: {
      heading: "The risk of brittle legacy software and neglected digital platforms",
      description:
        "Many established companies rely on software written years ago by a vendor who is no longer reachable, or a corporate website that no longer reflects the scale, compliance, and maturity of the organization.",
      symptoms: [
        "Legacy software only runs on outdated Windows versions or slows down as database records grow",
        "Making a minor rule change or adding a new report requires risky workarounds",
        "The corporate website suffers from slow load times, poor accessibility, and outdated structure",
        "Lack of documented source code, automated backups, or structured post-launch maintenance",
      ],
    },
    whatToPrioritizeFirst: [
      {
        step: "01",
        title: "Architectural & database audit before touching production systems",
        description:
          "Document current data schemas, edge-case business rules, and integration points so nothing is lost during modernization.",
      },
      {
        step: "02",
        title: "Safe data migration and parallel verification",
        description:
          "Migrate historical records with automated validation scripts and verify reports side by side before cutover.",
      },
      {
        step: "03",
        title: "Structured documentation, role governance, and SLA maintenance",
        description:
          "Ensure clean repository ownership, role-based security, verified backups, and predictable ongoing technical support.",
      },
    ],
    whatToAvoidNow: [
      "Rewriting a working legacy system blindly without first documenting all the unwritten edge cases your staff rely on",
      "Handing mission-critical systems to volume agencies that do not provide post-launch SLA accountability",
    ],
    recommendedServices: [
      {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        reason: "Modernize internal ERP, reporting, and multi-branch operational workflows.",
      },
      {
        name: "Website Development (Corporate Platforms)",
        href: "/services/website-development",
        reason: "Present institutional authority with high-speed, accessible, search-optimized web architecture.",
      },
      {
        name: "Website Maintenance & Support",
        href: "/services/website-maintenance-and-support",
        reason: "Ongoing security patching, performance auditing, backup verification, and priority support.",
      },
    ],
    relatedIndustries: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
    ],
    objectionAddressed: {
      question: "Can you migrate years of existing database records without losing historical ledgers?",
      answer:
        "Yes. We treat data migration as a dedicated engineering phase. We inspect your existing SQL/local database structure, write repeatable migration and reconciliation scripts, and verify historical balances with your finance/operations team before switching live operations.",
    },
  },
  {
    slug: "traditional-businesses",
    title: "Digital Transformation for Traditional Businesses",
    shortLabel: "Traditional Businesses",
    metaTitle: "Digital Transformation for Traditional Businesses | Practical Software | Webntric",
    metaDescription:
      "Step-by-step digitization for traditional businesses: simple offline Windows billing, barcode inventory, staff-friendly interfaces, hands-on training, and patient support.",
    primaryKeyword: "digital transformation for traditional businesses",
    h1: "Move from paper registers to reliable software at a pace your team can comfortably adopt.",
    subtitle:
      "Digitizing a traditional business should not feel overwhelming. The goal is not to turn your shop, godown, or office into a tech company—the goal is fewer calculation mistakes, faster billing, and clear stock and payment records.",
    whoThisIsFor: [
      "Family-owned retail, wholesale, and trading businesses currently using paper bill books and physical stock registers",
      "Businesses that tried generic accounting software before and abandoned it because it was too confusing for staff",
      "Operations in areas with fluctuating internet connectivity that require rock-solid offline Windows desktop software",
      "Business owners who want clear daily cash, stock, and credit (udhaar) summaries without hours of manual tallying",
    ],
    coreProblem: {
      heading: "Why many traditional businesses hesitate to computerize",
      description:
        "Most software is designed for tech-savvy office workers, not busy counter operators. When software has twenty cluttered menus or freezes when the Wi-Fi drops, staff naturally go back to paper registers.",
      symptoms: [
        "End-of-day cash and credit reconciliation takes hours of manual checking",
        "Items run out of stock unexpectedly because godown inward/outward entries are delayed",
        "Customer credit balances are spread across multiple physical diaries",
        "Staff are nervous about using complex English-heavy accounting menus",
      ],
    },
    whatToPrioritizeFirst: [
      {
        step: "01",
        title: "Digitize the single highest-pain register first (usually Counter Billing & Stock)",
        description:
          "Start with fast barcode/keyboard billing and automatic stock deduction before adding secondary reports.",
      },
      {
        step: "02",
        title: "Use offline Windows software for instant speed and zero internet dependency",
        description:
          "Ensure counter billing, thermal receipt printing, and local backups work reliably whether internet is up or down.",
      },
      {
        step: "03",
        title: "Design uncluttered screens and train your staff patiently",
        description:
          "We strip away unnecessary buttons so staff only see the 4 or 5 actions they actually perform each day.",
      },
    ],
    whatToAvoidNow: [
      "Forcing non-technical counter staff into complex cloud ERP dashboards on day one",
      "Relying on cloud-only billing in locations where broadband or mobile data drops during peak business hours",
    ],
    recommendedServices: [
      {
        name: "Offline Windows Software",
        href: "/services/offline-windows-software",
        reason: "Fast, internet-independent Windows desktop software with local database reliability.",
      },
      {
        name: "Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        reason: "Custom POS invoicing, barcode labels, godown stock alerts, and party credit ledgers.",
      },
      {
        name: "Business Automation Consulting",
        href: "/services/business-automation-consulting",
        reason: "Practical guidance on moving from paper registers to digital records step by step.",
      },
    ],
    relatedIndustries: [
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
    ],
    objectionAddressed: {
      question: "What if our counter staff are not comfortable with computers?",
      answer:
        "We design screens specifically for first-time computer users—with large, clear labels, keyboard shortcuts that match how they already write bills, and error-prevention checks. We also provide hands-on walkthroughs and stay available during your transition period.",
    },
  },
];

export function getBusinessStageBySlug(slug: string): BusinessStagePageData | undefined {
  return BUSINESS_STAGES_DATA.find((stage) => stage.slug === slug);
}

