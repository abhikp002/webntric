export interface StartupBuildCard {
  id: string;
  title: string;
  stage: string;
  objective: string;
  deliverable: string;
  notIncluded: string;
  iconName: string;
}

export interface StartupCategoryCard {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  helpPoints: string[];
}

export interface SelectionStep {
  stepNumber: number;
  title: string;
  description: string;
  keyDeliverable: string;
}

export interface StartupFaqItem {
  question: string;
  answer: string;
  category: "offer" | "process" | "ownership" | "eligibility";
}

export const STARTUP_HERO_CONTENT = {
  badge: "Selective Technology Collaboration",
  h1: "Build your startup with a technology partner who believes in the right ideas.",
  subtitle:
    "Webntric may help selected startups design and build their first website, MVP, application, or business platform without charging standard development fees at the beginning. We look for serious founders, useful ideas, realistic business opportunities, and a shared commitment to building something valuable.",
  primaryCtaLabel: "Apply for startup support",
  primaryCtaHref: "#apply",
  secondaryCtaLabel: "See how it works",
  secondaryCtaHref: "#how-it-works",
  reassuranceNote:
    "This is a selective collaboration opportunity, not an automatic free-development program. Selection depends on idea clarity, business viability, founder dedication, and engineering feasibility.",
};

export const STARTUP_EMPATHY_CONTENT = {
  heading: "Good ideas often need more than enthusiasm.",
  intro:
    "We understand that many founders begin with conviction before they have resources. Our goal is to help serious teams take a practical first step—clarifying the idea, choosing the right technology, and building only what is needed to learn whether the business deserves to grow.",
  challenges: [
    {
      title: "Deep customer insight without technical execution",
      description:
        "You understand the user pain point and market context thoroughly, but lack the in-house engineering team to turn domain knowledge into production-ready software.",
    },
    {
      title: "Limited early-stage capital",
      description:
        "Standard commercial development quotes can drain your initial savings before you have even validated whether customers will use or pay for the solution.",
    },
    {
      title: "Hiring early engineering talent is high-risk",
      description:
        "Recruiting freelance developers or full-time staff before defining product-market fit often leads to misaligned expectations and lost months.",
    },
    {
      title: "Confusing technical choices",
      description:
        "Cloud vs. local, mobile app vs. responsive web, serverless vs. traditional databases—wrong early architecture decisions become expensive technical debt.",
    },
    {
      title: "Over-engineered initial MVPs",
      description:
        "Trying to build every imagined feature at once exhausts time and money. The first product must validate the core hypothesis with real users.",
    },
    {
      title: "Need for a technical sounding board",
      description:
        "Founders benefit from engineers who challenge assumptions respectfully, suggest simpler pathways, and focus on practical customer workflows.",
    },
  ],
  closingStatement:
    "We do not promise guaranteed market success. What we enable is a disciplined, reliable first step—tested software built cleanly so you can discover the truth about your business opportunity.",
};

export const WHAT_WE_HELP_BUILD_CARDS: StartupBuildCard[] = [
  {
    id: "startup-landing-page",
    title: "Startup Landing Page",
    stage: "Idea & Pre-Launch",
    objective: "Communicate your value proposition clearly and capture early customer waitlists.",
    deliverable: "High-performance responsive landing page with enquiry capture and analytics.",
    notIncluded: "Paid advertising spend, custom copywriting, or ongoing multi-channel marketing campaigns.",
    iconName: "Globe",
  },
  {
    id: "clickable-prototype",
    title: "Clickable Product Prototype",
    stage: "Concept Validation",
    objective: "Simulate user journeys and screen interactions to demo to prospective users and stakeholders.",
    deliverable: "Interactive Figma or browser prototype showing core user flows.",
    notIncluded: "Live backend database, third-party API integrations, or real user authentication.",
    iconName: "Layers",
  },
  {
    id: "minimum-viable-product",
    title: "Minimum Viable Product (MVP)",
    stage: "Early Validation",
    objective: "Build the smallest useful version of your product so you can test the workflow and collect real user feedback.",
    deliverable: "Working web or mobile application with core functionality and secure data storage.",
    notIncluded: "Enterprise multi-tenancy, edge cases, or extensive secondary feature suites.",
    iconName: "Rocket",
  },
  {
    id: "web-application",
    title: "Web Application",
    stage: "Workflow Validation",
    objective: "Provide customers or internal teams with a browser-based portal to complete operational workflows.",
    deliverable: "Modern Next.js or React application with user roles, authenticated sessions, and database backplane.",
    notIncluded: "Custom on-premise hardware deployments or specialized legacy infrastructure bridging.",
    iconName: "Layout",
  },
  {
    id: "mobile-application",
    title: "Mobile Application",
    stage: "Mobile-First Product",
    objective: "Engage consumers or on-ground field teams where mobile access is the essential interface.",
    deliverable: "Cross-platform Android / iOS application with offline-friendly local caching.",
    notIncluded: "App Store / Google Play developer account fees, physical device purchasing, or app-store guarantee.",
    iconName: "Smartphone",
  },
  {
    id: "saas-foundation",
    title: "SaaS Product Foundation",
    stage: "Subscription Software",
    objective: "Establish multi-user workspace accounts, tenant isolation, and subscription checkout readiness.",
    deliverable: "Core SaaS architecture with authentication, organization workspaces, and billing integration hooks.",
    notIncluded: "Payment gateway merchant approval, tax compliance filing, or global legal advisory.",
    iconName: "Server",
  },
  {
    id: "customer-portal",
    title: "Customer Portal",
    stage: "Operational Service",
    objective: "Allow your clients to view their requests, order status, project documents, and invoices securely.",
    deliverable: "Self-service client dashboard with authenticated access and status tracking.",
    notIncluded: "Third-party transactional SMS or WhatsApp message credit fees.",
    iconName: "UserCheck",
  },
  {
    id: "internal-operations-platform",
    title: "Internal Operations Platform",
    stage: "Workflow Automation",
    objective: "Replace messy spreadsheets with structured intake forms, approval queues, and staff dispatch.",
    deliverable: "Tailored internal operations dashboard with role-based access control.",
    notIncluded: "24/7 on-call shift operations staffing or hardware server provisioning.",
    iconName: "Cpu",
  },
  {
    id: "booking-marketplace",
    title: "Booking or Marketplace Platform",
    stage: "Marketplace Validation",
    objective: "Connect buyers and service providers with structured scheduling and inquiry pipelines.",
    deliverable: "Two-sided listing, search filter, and booking coordination interface.",
    notIncluded: "Escrow licensing, dispute arbitration, or legal marketplace terms drafting.",
    iconName: "ShoppingBag",
  },
  {
    id: "billing-inventory-workflow",
    title: "Billing or Inventory Workflow",
    stage: "Commerce & Logistics",
    objective: "Keep stock counts synchronized with sales counters and customer invoice generation.",
    deliverable: "Digital register, item master catalog, and receipt generation engine.",
    notIncluded: "Barcode scanner hardware, thermal printer units, or commercial accounting audits.",
    iconName: "Receipt",
  },
  {
    id: "ai-product-concept",
    title: "AI-Powered Product Concept",
    stage: "Intelligent Workflows",
    objective: "Incorporate practical generative AI or document parsing into an existing customer journey.",
    deliverable: "Language model API integration with custom prompt templates, citations, and human oversight checks.",
    notIncluded: "Third-party LLM token billing, custom model pre-training from scratch, or GPU clusters.",
    iconName: "Sparkles",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard & Control Center",
    stage: "Management",
    objective: "Give the founding team full visibility into registered users, submissions, and system health.",
    deliverable: "Restricted administrator portal with search, filtering, and export capabilities.",
    notIncluded: "Automated business intelligence data lake warehousing or custom ETL pipelines.",
    iconName: "Shield",
  },
  {
    id: "early-analytics-reporting",
    title: "Early Analytics & Event Tracking",
    stage: "Data-Informed Learning",
    objective: "Understand which buttons users click, where they abandon flows, and which features drive retention.",
    deliverable: "Clean event instrumentation respecting privacy and cookie regulations.",
    notIncluded: "Third-party enterprise analytics subscription licensing costs.",
    iconName: "BarChart3",
  },
  {
    id: "product-validation-website",
    title: "Product Validation Website",
    stage: "Market Interest Test",
    objective: "Gauge customer intent, collect survey responses, and measure pricing interest before heavy buildout.",
    deliverable: "Focused interactive microsite with structured feature validation forms.",
    notIncluded: "Paid social or search ads to drive traffic to the validation site.",
    iconName: "CheckCircle",
  },
];

export const WHO_THIS_IS_FOR: string[] = [
  "Founders who deeply understand a real, painful customer problem.",
  "Founders who can clearly articulate who their first 20 to 100 users will be.",
  "Founders with a realistic business model or a clear path toward sustainable unit economics.",
  "Founders who are ready to test assumptions in the market rather than building in isolation.",
  "Founders who can commit active, consistent hours each week to product discovery and feedback.",
  "Founders who welcome honest, practical technical and product critique.",
  "Founders who recognize that an MVP is a focused learning tool, not an all-inclusive enterprise system.",
  "Founders who communicate transparently, reliably, and promptly.",
  "Founders prepared to drive customer outreach, sales, operations, and compliance independently.",
];

export const WHO_THIS_IS_NOT_FOR: string[] = [
  "Individuals looking for a completely free website or clone script without a genuine business plan.",
  "Applicants seeking a massive, 50-feature platform built immediately without phased validation.",
  "Projects pursuing trendy buzzwords without an identifiable user pain point or willingness to speak to customers.",
  "Applicants unwilling to participate in regular discovery calls, review sessions, and user testing.",
  "Founders seeking guaranteed venture funding, guaranteed investor introductions, or guaranteed revenue.",
  "Ventures involving deceptive schemes, copyright infringement, adult content, gambling, or unlawful activities.",
  "Applicants unwilling to discuss responsibilities, mutual confidentiality, or future commercial expectations transparently.",
  "Projects that fall outside Webntric's core engineering domains or current engineering bandwidth.",
];

export const INITIAL_SUPPORT_ACTIVITIES: string[] = [
  "Understanding the core business problem and customer pain points in depth.",
  "Reviewing target customer profiles, workflows, and alternative solutions currently used.",
  "Clarifying the primary value proposition and defining the single most important user journey.",
  "Mapping the first-time user experience and onboarding pathways.",
  "Identifying the minimum viable feature set and ruthlessly trimming unnecessary complexity.",
  "Recommending the most cost-effective and dependable technical architecture.",
  "Drafting the technical specification, data schema, and API communication map.",
  "Designing core wireframes, component hierarchy, and critical user interface screens.",
  "Engineering the initial working website, interactive prototype, or MVP application.",
  "Configuring clean, automated deployment pipelines on modern cloud infrastructure.",
  "Implementing essential security best practices (HTTPS, input validation, role-based protection).",
  "Setting up non-intrusive event tracking to observe real user behavior and drop-offs.",
  "Executing functional testing across desktop, tablet, and mobile browsers.",
  "Assisting the founders with initial feedback review and identifying phase-two priorities.",
];

export const FOUNDER_EXPECTATIONS: { title: string; description: string }[] = [
  {
    title: "Clear, Reliable Communication",
    description: "Responding to questions, technical design options, and clarification requests in a timely manner.",
  },
  {
    title: "Timely Feedback & Decision Making",
    description: "Reviewing wireframes, staging deployments, and feature drafts promptly so engineering momentum is maintained.",
  },
  {
    title: "Domain Knowledge Sharing",
    description: "Providing industry context, sample workflows, mock data, and operational rules that developers need to build accurately.",
  },
  {
    title: "Active Customer Discovery & User Testing",
    description: "Putting the early versions into real users' hands, conducting user feedback calls, and sharing authentic reactions.",
  },
  {
    title: "Honest Risk Assessment",
    description: "Discussing market assumptions, operational roadblocks, and financial constraints openly without sugarcoating.",
  },
  {
    title: "Complete Non-Technical Ownership",
    description: "Handling marketing, sales outreach, vendor relations, customer service, and commercial closing independently.",
  },
  {
    title: "Legal, Tax & Operational Compliance",
    description: "Managing company registration, tax filings, industry licensing, data protection compliance, and terms of service.",
  },
  {
    title: "Commitment to Post-Launch Stewardship",
    description: "Dedication to maintaining customer relationships, servicing accounts, and driving business continuity after initial launch.",
  },
];

export const SELECTION_PROCESS_STEPS: SelectionStep[] = [
  {
    stepNumber: 1,
    title: "Submit the Startup Application",
    description:
      "Share your problem statement, target customer, proposed solution, current validation stage, and what technology support you need through our structured form.",
    keyDeliverable: "Completed application received privately by Webntric engineering leadership.",
  },
  {
    stepNumber: 2,
    title: "Initial Engineering & Feasibility Review",
    description:
      "Webntric reviews your submission for problem clarity, market relevance, technical feasibility, and team bandwidth. Submissions are treated respectfully and confidentially.",
    keyDeliverable: "Written status update or invitation to an initial discovery conversation.",
  },
  {
    stepNumber: 3,
    title: "Discovery Conversation",
    description:
      "For promising applications, we schedule a 45-minute video or phone conversation to discuss the workflow, user journey, founder commitment, and technology trade-offs.",
    keyDeliverable: "Shared alignment on whether a collaboration could be mutually beneficial.",
  },
  {
    stepNumber: 4,
    title: "Feasibility & MVP Scope Definition",
    description:
      "Both teams collaboratively delineate what can realistically be built in the first collaboration sprint, what assumptions must be verified, and what external costs apply.",
    keyDeliverable: "A written MVP scope document specifying deliverables and exclusions.",
  },
  {
    stepNumber: 5,
    title: "Mutual Decision",
    description:
      "Webntric confirms whether it can commit engineering capacity under this initiative. Simultaneously, the founder confirms whether Webntric is the right technology partner for their vision.",
    keyDeliverable: "Clear go / no-go decision without ambiguity or prolonged delays.",
  },
  {
    stepNumber: 6,
    title: "Written Agreement & Project Kickoff",
    description:
      "Before writing code, we document all terms in a clear written agreement—including defined scope, responsibilities, intellectual property terms, external cost allocations, and future possibilities.",
    keyDeliverable: "Executed collaboration agreement and sprint milestone schedule.",
  },
];

export const TECHNOLOGY_OFFER_DETAILS = {
  heading: "Technology support without standard initial development charges",
  lead:
    "For selected startups, Webntric may provide agreed initial technology services without charging its standard development fees during the defined collaboration period. The exact scope, duration, deliverables, responsibilities, infrastructure costs, third-party costs, and future arrangements are discussed individually.",
  whatWebntricProvides: [
    "Software architecture and system design consultation.",
    "User interface wireframing and responsive component design.",
    "Frontend and backend engineering hours dedicated to your MVP scope.",
    "Database schema design and API integration engineering.",
    "Deployment configuration and staging server setup.",
    "Pre-release quality assurance and mobile responsiveness testing.",
  ],
  separateCostsNotice:
    "Unless specifically agreed in writing, third-party subscriptions, hosting, domains, licenses, paid APIs, advertising budgets, app-store fees, and other external expenses are not automatically included.",
  thirdPartyCostsList: [
    { item: "Domain Name Registration", note: "Purchased directly by founder (e.g. ₹800–₹1,500/year)." },
    { item: "Cloud Hosting & Database Infrastructure", note: "Hosted under founder's own account (e.g. AWS, Vercel, Supabase)." },
    { item: "Third-Party APIs & Token Usage", note: "SMS gateways, payment gateways, Google Maps API, or OpenAI tokens." },
    { item: "App Store Developer Accounts", note: "Apple ($99/yr) or Google Play ($25 one-time) developer accounts." },
    { item: "Legal, Accounting & Registration Fees", note: "Incorporation, trademark, GST, and accounting services." },
    { item: "Marketing & Customer Acquisition Spend", note: "Paid ads, trade show attendance, or cold outreach tools." },
  ],
};

export const FUTURE_PARTNERSHIP_NOTICE = {
  heading: "If the collaboration grows into something more",
  body:
    "In some cases, a successful initial collaboration may lead to a deeper relationship. If Webntric and the startup both believe there is strong long-term alignment, Webntric may discuss formally joining the startup as a technology or business partner. This is not automatic and is never assumed when an application is submitted.",
  governancePoints: [
    "Requires separate, explicit mutual consent from all parties.",
    "Formalized through a separate, legally reviewed written agreement.",
    "May define active ongoing operational roles and strategic responsibilities.",
    "Any equity, ownership, or revenue-sharing discussion is evaluated only after mutual validation.",
    "Requires required founder, shareholder, and corporate board approvals.",
    "Clearly defines intellectual property assignment, licenses, and background IP.",
    "Establishes dispute resolution, exit clauses, and transition terms.",
    "Subject to formal review by independent legal and accounting advisors.",
  ],
};

export const TRANSPARENCY_COMPARISON = {
  heading: "What this opportunity does—and does not—mean",
  intro: "Clear boundaries create healthy collaborations. Here is exactly what you can expect from Webntric:",
  itMeans: [
    "A transparent opportunity to request technology support for your idea.",
    "A thoughtful, selective evaluation by experienced software engineers.",
    "Honest, practical feedback on your product architecture and MVP scope.",
    "Possible initial development without standard agency engineering fees.",
    "A focus on building the leanest, most reliable version to validate the market.",
    "A potential long-term technical ally if both teams find strong alignment.",
  ],
  itDoesNotMean: [
    "Guaranteed acceptance of every submitted idea.",
    "Guaranteed venture capital funding, angel investment, or cash grants.",
    "Guaranteed customer adoption, market success, or commercial revenue.",
    "Unlimited, open-ended development hours or limitless feature additions.",
    "Automatic acquisition of equity or ownership by Webntric upon applying.",
    "Automatic formal business partnership or co-founder relationship.",
    "Automatic legal confidentiality before a mutual agreement is signed.",
    "Webntric covering external cloud infrastructure, domain, or API bills.",
    "Provision of legal, financial, tax, or investment advice.",
  ],
};

export const STARTUP_STAGE_CATEGORIES: StartupCategoryCard[] = [
  {
    id: "idea",
    title: "Idea Stage",
    tagline: "You have identified a problem and are exploring whether it deserves a product.",
    summary:
      "You have observed an inefficiency, spoken to a few potential users, and have a concept in mind. You need technical guidance to frame the problem and avoid wasteful early development.",
    helpPoints: [
      "Clarifying the core concept into a technical specification.",
      "Mapping the first customer user journey.",
      "Planning a lean market validation test.",
      "Creating a high-impact product landing page or clickable wireframe.",
    ],
  },
  {
    id: "validation",
    title: "Early Validation",
    tagline: "You have spoken to potential users and have evidence that the problem matters.",
    summary:
      "You have collected customer interview notes, waitlist signups, or letters of intent. Now you need a working tool so real users can test the workflow.",
    helpPoints: [
      "Defining the minimum viable product (MVP) scope.",
      "Engineering a functional prototype with real data persistence.",
      "Conducting initial beta user walkthroughs.",
      "Iterating based on actual customer usage bottlenecks.",
    ],
  },
  {
    id: "early-startup",
    title: "Existing Early Startup",
    tagline: "You have initial users, operations, or revenue and need a stronger technology foundation.",
    summary:
      "You may be running on disconnected spreadsheets, no-code workarounds, or an unstable first prototype. You need a robust codebase to reduce manual work and increase trust.",
    helpPoints: [
      "Refactoring unstable code or upgrading no-code tools to custom software.",
      "Designing a dependable database schema with secure role access.",
      "Automating repetitive back-office operations.",
      "Hardening performance, uptime, and automated backup routines.",
    ],
  },
  {
    id: "growing-startup",
    title: "Growing Startup",
    tagline: "You have a validated business and need technology to support growth.",
    summary:
      "Your customer base is expanding and system bottlenecks are starting to show. You need dependable engineering to scale features, integrate APIs, and safeguard reliability.",
    helpPoints: [
      "Architecting modular product expansions and integrations.",
      "Implementing internal workflow dashboards and reporting tools.",
      "Hardening data security and enterprise compliance readiness.",
      "Discussing structured long-term ongoing technical collaboration.",
    ],
  },
];

export const STARTUP_FAQS: StartupFaqItem[] = [
  {
    question: "Is this technology support really without standard development charges?",
    answer:
      "Yes, for selected startups. Under this initiative, Webntric may provide agreed software development, design, and architecture support without billing standard agency fees during the initial collaboration period. Because our engineering bandwidth is finite, this is a selective opportunity reserved for founders and ideas with strong mutual alignment.",
    category: "offer",
  },
  {
    question: "Is every startup application accepted?",
    answer:
      "No. Acceptance is never automatic or guaranteed. We evaluate each application carefully against our capabilities, current engineering capacity, the clarity of the problem, the founder's commitment, and overall business feasibility. If we are not the right fit, we communicate clearly.",
    category: "eligibility",
  },
  {
    question: "What types of startups are you most interested in?",
    answer:
      "We are interested in practical, problem-solving businesses across B2B SaaS, operations software, offline-to-online workflows, education, logistics, healthcare, retail, and commerce. We prioritize founders who have genuine domain knowledge, understand their customers intimately, and are focused on building a durable, economically sound venture.",
    category: "eligibility",
  },
  {
    question: "Do you provide cash investment or venture funding?",
    answer:
      "No. Webntric is a software engineering and technology consulting company, not an investment fund, venture capital firm, or accelerator. We provide hands-on technology development, system architecture, and product engineering support. We do not invest cash.",
    category: "offer",
  },
  {
    question: "Do you automatically take equity or ownership in our startup?",
    answer:
      "No. Submitting an application or participating in initial discussions does not involve equity, and Webntric does not automatically take ownership. Any future discussion regarding equity, ownership, or commercial arrangements occurs only if both parties mutually decide to pursue a formal long-term partnership, and is always documented in a separate, legally reviewed agreement.",
    category: "ownership",
  },
  {
    question: "Will Webntric automatically become our co-founder?",
    answer:
      "No. Webntric acts initially as a technology partner providing development support. We do not automatically assume a co-founder title or position. Any deeper formal role is a distinct conversation that can only happen after a successful collaboration and formal legal documentation.",
    category: "ownership",
  },
  {
    question: "What does Webntric expect from founders?",
    answer:
      "We expect active, reliable engagement: timely feedback on prototypes, sharing industry domain insights, conducting user testing, and completely owning the business side (customer outreach, sales, operations, marketing, legal, and regulatory compliance).",
    category: "process",
  },
  {
    question: "What costs are not included in the collaboration?",
    answer:
      "External, third-party expenses are not covered by Webntric. These include domain names, cloud hosting servers (AWS, Vercel, Supabase), third-party paid APIs (SMS, payment gateways, Maps, AI model tokens), app-store developer licenses (Apple/Google), and legal or marketing expenses.",
    category: "offer",
  },
  {
    question: "Can you build a complete, large enterprise product for free?",
    answer:
      "No. The purpose of this initiative is to build a focused, minimum viable product (MVP) or validation asset that proves the business concept with real users. We do not build open-ended, massive feature suites or replace a complete long-term engineering department without separate commercial terms.",
    category: "offer",
  },
  {
    question: "Do we retain ownership of our business idea?",
    answer:
      "Yes. Your business concepts, customer relationships, operational trade secrets, and market domain insights remain yours. We ask that you do not submit sensitive trade secrets, source code, or passwords through the initial public web form.",
    category: "ownership",
  },
  {
    question: "Who owns the code and product assets?",
    answer:
      "Code ownership, licensing, intellectual property rights, and asset handover are explicitly documented in the written agreement executed before development begins. Standard pre-existing libraries and open-source tools remain governed by their respective licenses.",
    category: "ownership",
  },
  {
    question: "Will you sign a Non-Disclosure Agreement (NDA)?",
    answer:
      "The initial application form is designed to gather high-level, non-confidential information about the problem, target audience, and required technology. If both parties decide to advance to in-depth technical planning where sensitive proprietary information must be shared, an appropriate mutual NDA can be executed prior to disclosure.",
    category: "process",
  },
  {
    question: "How do you evaluate each application?",
    answer:
      "We look at four primary dimensions: 1) Problem Clarity (does the problem really matter to users?), 2) Market Viability (is there a plausible business model?), 3) Founder Dedication (can the team commit time to test and sell?), and 4) Technical Fit (does the required software align with Webntric's engineering strengths and capacity?).",
    category: "process",
  },
  {
    question: "How long does the application review take?",
    answer:
      "Our engineering team reviews applications periodically. If your project appears to be a potential fit, we typically reach out within several business days to coordinate a discovery conversation. Because volume fluctuates, submission does not guarantee a response or timeline.",
    category: "process",
  },
  {
    question: "Can an existing, operational startup apply?",
    answer:
      "Yes. If you have an existing product with active users, traction, or revenue, but your technology foundation is struggling to scale or needs modernization, you are welcome to apply.",
    category: "eligibility",
  },
  {
    question: "Can a solo founder apply?",
    answer:
      "Yes, solo founders with deep industry experience and the bandwidth to drive business outreach are welcome to apply. We look for individuals who can champion customer acquisition while we handle the initial technology build.",
    category: "eligibility",
  },
  {
    question: "Can non-Indian or international startups apply?",
    answer:
      "Yes. While Webntric is headquartered in India, we work with founders and businesses globally. Remote collaboration via video, shared documentation, and staging servers is standard practice.",
    category: "eligibility",
  },
  {
    question: "What happens after the first discovery conversation?",
    answer:
      "If both teams find good alignment, we define a written MVP scope document detailing exactly what will be built, the milestone timeline, and founder responsibilities. Once approved, the formal collaboration agreement is signed and development kicks off.",
    category: "process",
  },
  {
    question: "Can either party terminate the collaboration later?",
    answer:
      "Yes. All collaboration agreements include standard, fair termination provisions allowing either party to conclude the engagement with written notice if priorities change, milestones are consistently missed, or alignment no longer exists.",
    category: "process",
  },
  {
    question: "Can Webntric become a formal partner in the future?",
    answer:
      "In select cases where the product validates successfully in the market and both teams discover outstanding synergy, we are open to discussing a formalized ongoing technology partnership. That conversation is always separate, mutually voluntary, and formally documented.",
    category: "ownership",
  },
];
