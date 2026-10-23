export type ServiceOutcomeCategory =
  | "Build credibility"
  | "Work more efficiently"
  | "Reach the right customers"
  | "Keep improving";

export interface ServiceDetailData {
  slug: string;
  title: string;
  outcomeCategory: ServiceOutcomeCategory;
  shortSummary: string;
  problemAddressed: string;
  bestFitCustomer: string;
  expectedOutcomeType: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  heroSubtitle: string;
  detailedProblem: {
    heading: string;
    paragraphs: string[];
  };
  whoItIsFor: string[];
  whoMayNotNeedItYet: string[];
  whatWebntricDelivers: Array<{
    title: string;
    description: string;
  }>;
  recommendedFeatures: string[];
  projectStages: Array<{
    stage: string;
    title: string;
    detail: string;
  }>;
  technologyChoices: Array<{
    tech: string;
    whenWeUseIt: string;
  }>;
  integrationsAndDependencies: string[];
  expectedDeliverables: string[];
  postLaunchSupport: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: Array<{
    name: string;
    href: string;
  }>;
  relatedIndustries: Array<{
    name: string;
    href: string;
  }>;
  relatedStages: Array<{
    name: string;
    href: string;
  }>;
}

export const OUTCOME_CATEGORIES: Array<{
  id: ServiceOutcomeCategory;
  title: string;
  subtitle: string;
  problemStatement: string;
}> = [
  {
    id: "Build credibility",
    title: "Build credibility",
    subtitle: "Help customers understand your value and trust your business immediately.",
    problemStatement:
      "When prospects check your business online before calling or visiting, an outdated or confusing presence makes a strong company look unreliable.",
  },
  {
    id: "Work more efficiently",
    title: "Work more efficiently",
    subtitle: "Replace repetitive registers, slow billing counters, and disconnected spreadsheets.",
    problemStatement:
      "Manual records, WhatsApp approvals, and cloud tools that freeze when the internet drops cost your staff hours every week and introduce avoidable errors.",
  },
  {
    id: "Reach the right customers",
    title: "Reach the right customers",
    subtitle: "Be found when buyers search and maintain a consistent, useful brand presence.",
    problemStatement:
      "Even the best product struggles to grow if local or institutional buyers cannot find you in search or see an inactive digital presence.",
  },
  {
    id: "Keep improving",
    title: "Keep improving",
    subtitle: "Keep your website and software secure, backed up, fast, and evolving after launch.",
    problemStatement:
      "Digital systems deteriorate when nobody is responsible for security updates, backups, performance checks, and day-to-day improvements.",
  },
];

export const SERVICES_DATA: ServiceDetailData[] = [
  {
    slug: "website-development",
    title: "Website Development",
    outcomeCategory: "Build credibility",
    shortSummary:
      "Business websites, corporate platforms, landing pages, and website redesigns built for clarity, fast mobile performance, and buyer trust.",
    problemAddressed:
      "Your website looks outdated, loads slowly on mobile phones, or fails to explain what your business actually offers.",
    bestFitCustomer:
      "Startups, local businesses, professional firms, clinics, and established companies needing a credible digital storefront.",
    expectedOutcomeType:
      "Clearer customer understanding, stronger first-impression trust, faster mobile page loads, and higher-quality enquiries.",
    metaTitle: "Website Development Services | Business & Corporate Websites | Webntric",
    metaDescription:
      "Custom business websites, corporate portals, landing pages, and website redesigns built for clarity, fast mobile loading, technical SEO, and customer trust.",
    primaryKeyword: "website development services",
    h1: "Your website should make it easier for customers to trust you.",
    heroSubtitle:
      "We design and engineer fast, well-structured websites that answer buyer questions clearly, work effortlessly on mobile phones, and support search visibility from day one.",
    detailedProblem: {
      heading: "Why most business websites fail to generate enquiries",
      paragraphs: [
        "Many businesses invest in a website only to end up with a slow template filled with stock photographs and vague slogans. When a prospective customer lands on the page, they cannot quickly tell what the company specializes in, who it serves, or what happens if they reach out.",
        "A good business website is not an art project or a brochure nobody reads. It is a working tool that explains your services in plain language, demonstrates real operational competence, loads quickly on mobile networks, and makes contacting you straightforward.",
      ],
    },
    whoItIsFor: [
      "Local and regional businesses whose offline reputation is strong, but whose online presence looks dated or incomplete",
      "Startups and growing companies launching a new product or service that requires immediate buyer confidence",
      "Established organizations and manufacturers needing a structured corporate website for institutional procurement teams",
      "Businesses running Google or social ads that need high-converting landing pages rather than a cluttered homepage",
    ],
    whoMayNotNeedItYet: [
      "Businesses whose only current bottleneck is internal counter billing or stock control (start with Billing & Inventory Software first)",
      "Early concepts where the core service offering or target customer has not yet been decided",
      "Websites built recently on a clean codebase that only require minor copy edits or a maintenance plan",
    ],
    whatWebntricDelivers: [
      {
        title: "Business, Corporate & Local Websites",
        description:
          "Structured multi-page websites tailored to how your specific customers evaluate and choose a vendor.",
      },
      {
        title: "Website Redesigns & Modernization",
        description:
          "Replacing slow, fragile legacy websites while preserving your existing search rankings via careful URL redirects.",
      },
      {
        title: "Conversion-Focused Page Architecture",
        description:
          "Clear information hierarchy that addresses buyer objections, showcases real proof, and guides visitors to contact you.",
      },
      {
        title: "CMS & Content Management",
        description:
          "Clean content structures—using typed content files or headless CMS setups—so updates never break page layouts.",
      },
      {
        title: "Performance, Accessibility & Technical SEO",
        description:
          "Server-rendered pages, optimized images, WCAG AA contrast and keyboard navigation, semantic HTML headings, and valid JSON-LD schema.",
      },
      {
        title: "Analytics & Post-Launch Maintenance",
        description:
          "Configured Google Tag Manager / Search Console tracking and dependable post-launch support for updates and security.",
      },
    ],
    recommendedFeatures: [
      "Service and industry-specific landing pages",
      "Mobile-first responsive layout tested across small screens",
      "Client + server validated enquiry forms with spam protection",
      "Direct phone, email, and WhatsApp conversion paths",
      "Dynamic XML sitemap, robots.txt, and canonical URL tags",
      "Open Graph social preview cards for WhatsApp and LinkedIn sharing",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Discovery & Page Map",
        detail: "We understand your customers' most common questions and define the exact sitemap and conversion flow.",
      },
      {
        stage: "02",
        title: "Copywriting & Wireframe Structure",
        detail: "We organize page headings, messaging, and proof points before locking visual styling.",
      },
      {
        stage: "03",
        title: "Editorial UI Design & Engineering",
        detail: "We build the site in Next.js and TypeScript with responsive layouts, accessible components, and optimized media.",
      },
      {
        stage: "04",
        title: "SEO Verification, Launch & Handover",
        detail: "We verify Core Web Vitals, schema markup, forms, and Search Console indexing, then stay available for support.",
      },
    ],
    technologyChoices: [
      {
        tech: "Next.js & React Server Components",
        whenWeUseIt:
          "Our default choice for business websites—pages render on the server for instant mobile speed and complete search engine crawlability.",
      },
      {
        tech: "TypeScript & Tailwind CSS",
        whenWeUseIt:
          "Ensures consistent spacing, strict type safety, and a clean design system that stays maintainable over years of updates.",
      },
      {
        tech: "Structured Local Content / Headless CMS",
        whenWeUseIt:
          "Used when your team needs to publish announcements, articles, or catalogue updates without touching layout code.",
      },
    ],
    integrationsAndDependencies: [
      "Google Search Console & Google Tag Manager (GA4)",
      "WhatsApp Business, email notifications, and CRM webhooks",
      "Domain DNS, SSL/TLS certificates, and edge hosting (Vercel / Cloud / VPS)",
    ],
    expectedDeliverables: [
      "Complete, responsive production website deployed on your domain",
      "Page-by-page unique metadata, canonicals, sitemap.xml, and JSON-LD schema",
      "Validated contact intake system connected to your email/team",
      "Clean, documented source code repository and post-launch support guide",
    ],
    postLaunchSupport:
      "Includes post-launch bug-fix warranty, Search Console indexing verification, and optional monthly maintenance covering content edits, security updates, and speed audits.",
    faqs: [
      {
        question: "Can you write the text content if we don't have copy ready?",
        answer:
          "Yes. We interview you about your services, customers, and common questions, and write clear, specific copy for every page so your project never stalls waiting for text.",
      },
      {
        question: "Will redesigning our existing website hurt our current Google rankings?",
        answer:
          "Not when handled properly. We audit all your currently indexed URLs before launch and configure permanent 308/301 redirects so search equity and existing bookmarks carry over cleanly.",
      },
      {
        question: "Do we own the website code and domain after launch?",
        answer:
          "Yes. Your domain, content, and custom codebase belong to your business.",
      },
    ],
    relatedServices: [
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Website Maintenance & Support", href: "/services/website-maintenance-and-support" },
      { name: "Web Application Development", href: "/services/web-application-development" },
    ],
    relatedIndustries: [
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Hospitality", href: "/industries/hospitality" },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Startups", href: "/businesses/startups" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    outcomeCategory: "Build credibility",
    shortSummary:
      "Browser-based customer portals, booking engines, multi-branch dashboards, and SaaS applications built with secure role permissions.",
    problemAddressed:
      "A standard informational website cannot handle customer logins, interactive portals, complex bookings, or live database workflows.",
    bestFitCustomer:
      "Startups launching SaaS products, institutes needing student/parent portals, and growing companies building client self-service tools.",
    expectedOutcomeType:
      "Self-service convenience for customers, centralized multi-branch data access, and fewer manual support calls.",
    metaTitle: "Web Application Development | Custom Portals & SaaS Systems | Webntric",
    metaDescription:
      "We design and engineer secure, scalable web applications, client portals, booking platforms, and multi-branch dashboards using React, Next.js, Laravel, Python, and PostgreSQL.",
    primaryKeyword: "web application development services",
    h1: "Browser-based portals and web applications engineered for daily reliability.",
    heroSubtitle:
      "When your customers or staff need to log in, submit documents, track orders, book appointments, or manage multi-branch data from any browser, we build secure, fast web applications around that workflow.",
    detailedProblem: {
      heading: "Where informational websites end and web applications begin",
      paragraphs: [
        "Many businesses try to force complex workflows—such as student test portals, dealer order booking, or client document tracking—into standard content plugins. The result is slow performance, fragile security, and a frustrating experience for users.",
        "A dedicated web application is architected around structured relational databases, strict authentication, role-based access control, and predictable state management so hundreds or thousands of users can interact with live data safely.",
      ],
    },
    whoItIsFor: [
      "Companies needing a secure customer, dealer, or vendor portal to view orders, invoices, and documents",
      "Coaching institutes and schools needing online admission, fee payment, and test/result portals",
      "Service businesses and clinics needing custom slot scheduling or booking workflows",
      "Founders building a browser-based software-as-a-service (SaaS) product",
    ],
    whoMayNotNeedItYet: [
      "Businesses that only need to explain their services and capture enquiry forms (a standard Website Development project is simpler and more cost-effective)",
      "Single-counter retail shops in areas with frequent internet blackouts (an Offline Windows Software setup is more dependable)",
    ],
    whatWebntricDelivers: [
      {
        title: "Authentication & Role-Based Portals",
        description:
          "Separate, secure views for customers, staff, branch managers, and administrators.",
      },
      {
        title: "Relational Database Design",
        description:
          "Well-indexed PostgreSQL or MySQL schemas designed for data integrity, fast queries, and clean reporting.",
      },
      {
        title: "Interactive Dashboards & Workflows",
        description:
          "Multi-step forms, approval queues, document uploads, and filterable data tables that work smoothly on desktop and mobile browsers.",
      },
      {
        title: "Payment & Third-Party API Integrations",
        description:
          "Secure integration with Razorpay, Stripe, WhatsApp/SMS notifications, and accounting exports.",
      },
    ],
    recommendedFeatures: [
      "Secure session authentication and role permissions",
      "Server-side input validation and audit logging",
      "Automated PDF receipt/report generation",
      "Exportable CSV/Excel operational summaries",
      "Automated daily off-site database backups",
    ],
    projectStages: [
      {
        stage: "01",
        title: "User Role & Database Mapping",
        detail: "We define every user type, what actions they can perform, and how data tables relate to one another.",
      },
      {
        stage: "02",
        title: "Interactive Wireframes & API Contract",
        detail: "We prototype the screens and validate the workflow with your team before heavy backend coding.",
      },
      {
        stage: "03",
        title: "Iterative Module Engineering",
        detail: "We build and test authentication, core modules, and integrations in reviewable milestones.",
      },
      {
        stage: "04",
        title: "Security Audit, Staging Test & Deployment",
        detail: "We test permissions, load behavior, and backup recovery before launching to live users.",
      },
    ],
    technologyChoices: [
      {
        tech: "Next.js / React & TypeScript",
        whenWeUseIt: "Delivers responsive, accessible interfaces with strong type safety across client and server.",
      },
      {
        tech: "Node.js, Laravel, or Python Backend",
        whenWeUseIt: "Selected based on your data processing, queue management, and integration requirements.",
      },
      {
        tech: "PostgreSQL / MySQL",
        whenWeUseIt: "Provides ACID-compliant relational transactions for financial, booking, and inventory records.",
      },
    ],
    integrationsAndDependencies: [
      "Payment gateways (Razorpay, Stripe, PayU)",
      "Transactional email (SES, Resend, SMTP) and SMS/WhatsApp APIs",
      "Cloud object storage (S3-compatible) for secure document uploads",
    ],
    expectedDeliverables: [
      "Deployed production web application and database environment",
      "Admin control panel with user and role management",
      "Automated database backup configuration",
      "Technical documentation and team onboarding walkthrough",
    ],
    postLaunchSupport:
      "Ongoing monitoring of server health, database query performance, security dependency updates, and iterative feature additions as your user base grows.",
    faqs: [
      {
        question: "Can our web application connect with our existing offline software?",
        answer:
          "Yes. We frequently build sync APIs that allow a local desktop billing or inventory database to push summary records or order statuses to a web portal.",
      },
      {
        question: "How do you prevent unauthorized users from seeing private records?",
        answer:
          "Every API route and server action enforces server-side authentication and row-level permission checks—never relying on hiding buttons in the browser alone.",
      },
    ],
    relatedServices: [
      { name: "Custom Business Software", href: "/services/custom-business-software" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Website Development", href: "/services/website-development" },
    ],
    relatedIndustries: [
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
    ],
    relatedStages: [
      { name: "Startups", href: "/businesses/startups" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    outcomeCategory: "Build credibility",
    shortSummary:
      "Android and iOS applications engineered for field sales teams, delivery logistics, and customer engagement—with offline local caching.",
    problemAddressed:
      "Field staff or repeat mobile users need offline reliability, camera/barcode scanning, push alerts, or native phone convenience.",
    bestFitCustomer:
      "Distribution networks with field staff, educational platforms, healthcare services, and startups building mobile-first products.",
    expectedOutcomeType:
      "Faster field order and data capture, reliable operation in low-network belts, and direct repeat engagement.",
    metaTitle: "Mobile App Development Services | Android, iOS & Cross-Platform | Webntric",
    metaDescription:
      "Practical Android and iOS mobile app development using Flutter, React Native, Kotlin, and Swift—with offline caching, push notifications, and full App Store & Play Store deployment.",
    primaryKeyword: "mobile app development services",
    h1: "Mobile applications built for real-world usage, field teams, and customers.",
    heroSubtitle:
      "We help you decide honestly whether you need a dedicated mobile app or a mobile web app—and when an app is the right choice, we engineer it for smooth performance, low-network resilience, and clean store deployment.",
    detailedProblem: {
      heading: "Building mobile apps that survive real-world network and device conditions",
      paragraphs: [
        "Too many mobile apps work only on fast office Wi-Fi and high-end phones. When a field salesman in a semi-urban market or a customer on unstable mobile data tries to submit an order, the app hangs or loses their input.",
        "We engineer Android and iOS applications with local SQLite caching, queued background synchronization, and lightweight UI layouts so the app remains responsive across budget Android devices and iPhones alike.",
      ],
    },
    whoItIsFor: [
      "Distributors and logistics companies whose field sales or delivery staff capture orders, collections, and PODs on the move",
      "Customer-facing services where repeat bookings, push notifications, or offline content access are core to retention",
      "Education and coaching platforms delivering structured courses, quizzes, and batch updates on mobile",
      "Startups launching a mobile-first product on Google Play and the Apple App Store",
    ],
    whoMayNotNeedItYet: [
      "Businesses whose customers only visit once or twice a year to read service information (a fast mobile Website is much more effective because customers won't download an app just to make one enquiry)",
      "Internal office workflows used only on desktop computers",
    ],
    whatWebntricDelivers: [
      {
        title: "Cross-Platform & Native App Engineering",
        description:
          "Shared-codebase Flutter / React Native apps for cost-effective iOS + Android delivery, or native Kotlin/Swift where hardware demands it.",
      },
      {
        title: "Offline-First Local Caching & Sync",
        description:
          "On-device SQLite storage that lets users record orders or inspections offline and syncs automatically when connectivity returns.",
      },
      {
        title: "Device Hardware & Push Notifications",
        description:
          "Camera barcode/QR scanning, GPS location tagging for field visits, biometric unlock, and targeted FCM push alerts.",
      },
      {
        title: "Backend APIs & Admin Control Console",
        description:
          "Secure server APIs and a browser-based admin dashboard to manage users, content, orders, and app settings.",
      },
    ],
    recommendedFeatures: [
      "Offline queue synchronization with conflict handling",
      "Camera barcode / QR code scanning and photo compression",
      "Role-based login with OTP or biometric support",
      "Push notifications for order/schedule updates",
      "Complete Google Play Store & Apple App Store submission handling",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Use-Case & Device Audit",
        detail: "We verify who will use the app, what devices they carry, and whether offline mode is required.",
      },
      {
        stage: "02",
        title: "Interactive Mobile Prototype",
        detail: "We design thumb-friendly screens and test the flow before writing native/cross-platform code.",
      },
      {
        stage: "03",
        title: "App & API Development",
        detail: "We build the mobile client alongside the backend API and web admin dashboard, sharing testable APK/TestFlight builds.",
      },
      {
        stage: "04",
        title: "Store Review & Launch",
        detail: "We handle Play Store and App Store compliance, privacy disclosures, screenshots, and production rollout.",
      },
    ],
    technologyChoices: [
      {
        tech: "Flutter / React Native",
        whenWeUseIt:
          "Allows you to launch on both Android and iOS from a single codebase, reducing build and maintenance cost by ~40%.",
      },
      {
        tech: "Kotlin (Android) / Swift (iOS)",
        whenWeUseIt:
          "Used when specialized background services, Bluetooth hardware peripherals, or platform-exclusive features are needed.",
      },
      {
        tech: "Local SQLite + REST/GraphQL API",
        whenWeUseIt:
          "Ensures instant screen loading and protects field entries against dropped mobile connections.",
      },
    ],
    integrationsAndDependencies: [
      "Google Play Console & Apple Developer Program accounts",
      "Firebase Cloud Messaging (FCM) for push notifications",
      "Payment gateways (Razorpay, UPI intent, Apple/Google Pay) and Maps APIs",
    ],
    expectedDeliverables: [
      "Production Android (AAB/APK) and iOS (IPA) applications published to stores",
      "Web-based Admin Dashboard and documented backend API",
      "Full source code repository and store asset package",
    ],
    postLaunchSupport:
      "Covers annual Android/iOS OS compatibility updates, Play Store/App Store policy updates, crash monitoring, and feature enhancements.",
    faqs: [
      {
        question: "Should we build for Android only first, or both Android and iOS?",
        answer:
          "If the app is for internal field staff who all use Android phones, an Android-focused build is often the fastest path. If the app is for customers, using Flutter or React Native lets us deliver both Android and iOS simultaneously with minimal extra overhead.",
      },
      {
        question: "Do you help with Google Play and Apple App Store approval?",
        answer:
          "Yes. Store compliance can be tricky; we guide you through setting up your developer accounts and handle the technical submission, privacy declarations, and review feedback.",
      },
    ],
    relatedServices: [
      { name: "Web Application Development", href: "/services/web-application-development" },
      { name: "Custom Business Software", href: "/services/custom-business-software" },
    ],
    relatedIndustries: [
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
    ],
    relatedStages: [
      { name: "Startups", href: "/businesses/startups" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "custom-business-software",
    title: "Custom Business Software",
    outcomeCategory: "Work more efficiently",
    shortSummary:
      "Tailored internal software, role-based dashboards, approval systems, and operational registers built around how your business actually works.",
    problemAddressed:
      "Your team is outgrowing spreadsheets and WhatsApp coordination, and off-the-shelf software does not fit your operational rules.",
    bestFitCustomer:
      "Growing SMBs, manufacturers, distributors, institutes, and multi-branch organizations with unique operational workflows.",
    expectedOutcomeType:
      "Less repetitive data entry, clear staff accountability, fewer approval delays, and instant management reporting.",
    metaTitle: "Custom Business Software Development | Internal Tools & ERP | Webntric",
    metaDescription:
      "Tailored internal business software designed around your actual workflows: role-based dashboards, approvals, inventory, reporting, backups, and staff training.",
    primaryKeyword: "custom business software development",
    h1: "The right software should reduce repetitive work, not create more work.",
    heroSubtitle:
      "When off-the-shelf software forces your team into awkward workarounds—or when spreadsheets and WhatsApp groups can no longer keep up—we design and build practical internal software tailored to your exact operations.",
    detailedProblem: {
      heading: "Why forcing your business into rigid software creates hidden costs",
      paragraphs: [
        "Off-the-shelf software is built for the average of ten thousand companies. If your business has specific pricing tiers, job-work stages, custom approval rules, or multi-branch stock transfers, your staff end up maintaining parallel Excel sheets anyway.",
        "We begin with workflow discovery—sitting down with the people who actually enter the data and read the reports—to build a system that includes only the screens and rules your team genuinely uses.",
      ],
    },
    whoItIsFor: [
      "Growing businesses where orders, inventory, dispatch, and billing are tracked across disconnected spreadsheets",
      "Manufacturers and job-work units needing custom Bill of Materials (BOM), batch tracking, and scrap reporting",
      "Institutions and multi-branch firms needing strict role-based permissions and audit logs",
      "Companies paying high per-user monthly fees for SaaS tools while only using 15% of their features",
    ],
    whoMayNotNeedItYet: [
      "Very small teams with standard bookkeeping needs that are already well served by a basic off-the-shelf accounting tool",
      "Businesses that have not yet defined who is responsible for each step of their internal process",
    ],
    whatWebntricDelivers: [
      {
        title: "Workflow Discovery & System Blueprint",
        description:
          "We document your current registers, pain points, and approval hierarchy before writing a single line of code.",
      },
      {
        title: "Role-Based Access & Permissions",
        description:
          "Staff see only the screens and actions relevant to their job—protecting sensitive financial margins and customer lists.",
      },
      {
        title: "Dashboards, Registers & Automated Reports",
        description:
          "One-click daily cash, stock, pending order, and party outstanding summaries exportable to PDF and Excel.",
      },
      {
        title: "Security, Backups & Staff Training",
        description:
          "Encrypted databases, automated daily backups, and hands-on training so your staff adopt the system comfortably.",
      },
    ],
    recommendedFeatures: [
      "Granular user roles (Owner, Manager, Accountant, Counter/Store Staff)",
      "Audit trail showing who created or modified each record",
      "Custom print layouts for challans, work orders, and invoices",
      "Automated low-stock, overdue payment, and pending approval alerts",
      "Import/export utilities for Excel, CSV, and accounting ledgers",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Operational Audit",
        detail: "We inspect your current paper registers, Excel sheets, and staff pain points.",
      },
      {
        stage: "02",
        title: "Screen Prototype & Data Model",
        detail: "Your team reviews the exact input forms and report formats before development begins.",
      },
      {
        stage: "03",
        title: "Phased Module Delivery",
        detail: "We deliver the core operational module first so your team can test with real data early.",
      },
      {
        stage: "04",
        title: "Parallel Run, Training & Cutover",
        detail: "We train your staff, verify calculations alongside your existing process, and transition smoothly.",
      },
    ],
    technologyChoices: [
      {
        tech: "Web-Based Internal System (Next.js / Laravel / Python + PostgreSQL)",
        whenWeUseIt:
          "Best when multiple branches, remote managers, and office teams need centralized real-time access from any browser.",
      },
      {
        tech: "Offline Windows Desktop (.NET / C# + MS SQL / SQLite)",
        whenWeUseIt:
          "Best when single-site speed, local hardware integration, and zero internet dependency are the top priority.",
      },
      {
        tech: "Hybrid Local + Cloud Sync",
        whenWeUseIt:
          "Best when plant/counter operations must run offline locally while head-office management views consolidated reports online.",
      },
    ],
    integrationsAndDependencies: [
      "Barcode scanners, label printers, thermal printers, and weighbridge/serial devices",
      "WhatsApp / SMS notification gateways and email report schedulers",
      "Accounting export formats (Tally/Excel/GST compatible)",
    ],
    expectedDeliverables: [
      "Custom software system deployed on your cloud server or local Windows network",
      "Role-based admin panel and automated backup routines",
      "User manual and live training sessions for your staff",
      "Full source code and database ownership",
    ],
    postLaunchSupport:
      "Dedicated post-launch stabilization support while your team adopts the workflow, plus ongoing maintenance for new reports, tax/rule adjustments, and database care.",
    faqs: [
      {
        question: "Can we build one module first and add more departments later?",
        answer:
          "Yes, and we strongly recommend doing so. Starting with the single highest-friction workflow (such as order-to-dispatch or inventory-to-billing) reduces risk, proves value quickly, and lets your staff adapt comfortably.",
      },
      {
        question: "Who owns the data and custom software once it is built?",
        answer:
          "You do. There are no mandatory per-user license fees paid to us for your own custom software.",
      },
    ],
    relatedServices: [
      { name: "Offline Windows Software", href: "/services/offline-windows-software" },
      { name: "Billing & Inventory Software", href: "/services/billing-and-inventory-software" },
      { name: "Business Automation Consulting", href: "/services/business-automation-consulting" },
    ],
    relatedIndustries: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
    ],
    relatedStages: [
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
      { name: "Traditional Businesses", href: "/businesses/traditional-businesses" },
    ],
  },
  {
    slug: "offline-windows-software",
    title: "Offline Windows Software",
    outcomeCategory: "Work more efficiently",
    shortSummary:
      "Native Windows desktop applications with local databases that run fast, control local printers/scanners, and never stop when the internet drops.",
    problemAddressed:
      "Cloud software lags at busy counters, stops working during internet outages, or cannot talk reliably to local hardware.",
    bestFitCustomer:
      "Retailers, wholesalers, clinics, schools, and factories needing rock-solid local desktop operation and complete on-premise data control.",
    expectedOutcomeType:
      "Instant keyboard-driven speed, zero downtime from internet outages, and full local control over business records.",
    metaTitle: "Offline Windows Software Development | C#, .NET & Local Databases | Webntric",
    metaDescription:
      "Custom offline Windows desktop software engineered with C#, .NET, SQLite, and MS SQL Server for fast counter billing, inventory, local hardware integration, and optional cloud sync.",
    primaryKeyword: "offline windows software development",
    h1: "Dependable Windows desktop software that keeps working when the internet stops.",
    heroSubtitle:
      "Not every business workflow belongs in a browser tab. When counter speed, uninterrupted offline operation, direct printer/scanner control, and local data ownership matter most, we engineer native Windows desktop software.",
    detailedProblem: {
      heading: "When cloud-only software becomes an operational liability",
      paragraphs: [
        "At a busy wholesale counter, school fee desk, clinic reception, or factory dispatch gate, waiting three seconds for a cloud page to reload—or halting work completely because a broadband fiber line was cut—is unacceptable.",
        "Our offline Windows applications run natively on your PCs or local office LAN. Transactions are written to a local database in milliseconds, keyboard shortcuts let operators work without touching the mouse, and automated backup routines keep your records safe.",
      ],
    },
    whoItIsFor: [
      "Retail and wholesale counters that need instant barcode scanning and thermal/dot-matrix/laser bill printing",
      "Schools, coaching institutes, and clinics operating high-volume reception and fee desks",
      "Manufacturing plants and warehouses located in industrial zones with unreliable internet connectivity",
      "Business owners who prefer their financial and customer databases to remain physically on their own machines",
    ],
    whoMayNotNeedItYet: [
      "Distributed teams where staff work primarily from home or across many cities on MacBooks and mobile phones (a Web Application is a better fit)",
      "Public-facing customer booking systems that must be accessed directly by consumers online",
    ],
    whatWebntricDelivers: [
      {
        title: "Offline-First Local Database Operation",
        description:
          "Engineered with SQLite, local PostgreSQL, or MS SQL Server so 100% of daily billing, stock, and reporting works without internet.",
      },
      {
        title: "Billing, Inventory & Customer Records",
        description:
          "Fast keyboard-driven screens for invoicing, stock inward/outward, party ledgers, and custom report generation.",
      },
      {
        title: "Multi-User Local LAN & Optional Cloud Sync",
        description:
          "Run on a single desktop PC, share across multiple counters over a local office network (LAN), or optionally sync summaries to the cloud when online.",
      },
      {
        title: "Automated Backups & Data Recovery",
        description:
          "Scheduled encrypted backups to secondary local drives, USB drives, or cloud storage upon connection—plus one-click restore utilities.",
      },
    ],
    recommendedFeatures: [
      "Full keyboard-shortcut navigation (F-keys, Enter-to-next-field) for fast operators",
      "Direct ESC/POS thermal receipt, barcode label, and A4 invoice printing",
      "Role-based local operator logins and permission controls",
      "One-click export to Excel, PDF, and GST summary formats",
      "Clean Windows installer with straightforward PC migration & recovery",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Counter & Hardware Assessment",
        detail: "We check your Windows PCs, printers, barcode scanners, and whether you need single-PC or multi-PC LAN access.",
      },
      {
        stage: "02",
        title: "Keyboard-First Screen Design",
        detail: "We lay out billing and register forms for speed, minimizing clicks and unnecessary popups.",
      },
      {
        stage: "03",
        title: "Local Database & Backup Engineering",
        detail: "We build the C# / .NET application, local database schema, print templates, and automated backup routines.",
      },
      {
        stage: "04",
        title: "Installation, Operator Training & Support",
        detail: "We install the software, configure printers/scanners, train your staff, and verify backup restoration.",
      },
    ],
    technologyChoices: [
      {
        tech: "C# & .NET / Visual Basic .NET (WPF & WinForms)",
        whenWeUseIt:
          "Provides native Windows stability, fast startup, low memory usage even on modest office PCs, and direct Windows print/device API access.",
      },
      {
        tech: "SQLite / MS SQL Server / Local PostgreSQL",
        whenWeUseIt:
          "SQLite is ideal for zero-configuration single-PC reliability; MS SQL Server or PostgreSQL powers multi-counter local LAN setups.",
      },
    ],
    integrationsAndDependencies: [
      "Windows 10 / Windows 11 desktop or local server hardware",
      "USB/Serial barcode scanners, thermal receipt printers, barcode label printers, and A4 laser/inkjet printers",
      "Optional background REST API sync when remote owner reporting is desired",
    ],
    expectedDeliverables: [
      "Compiled Windows application installer and configured local database",
      "Custom invoice/receipt print templates matched to your stationery",
      "Automated local + external backup utility and recovery guide",
      "Operator training and post-installation support",
    ],
    postLaunchSupport:
      "Remote and on-call Windows support, assistance when moving software to a new computer, print format tweaks, and annual financial-year database maintenance.",
    faqs: [
      {
        question: "What happens if our office computer hard drive fails?",
        answer:
          "We never leave a local database without a backup strategy. Every offline system we build includes automated daily encrypted backups to a secondary drive/USB folder and optional automatic cloud backup whenever internet is connected. If a PC fails, we install the app on a replacement PC and restore your latest backup.",
      },
      {
        question: "Can 3 or 4 computers in the same building share the same offline software?",
        answer:
          "Yes. Using a local LAN setup with MS SQL Server or PostgreSQL on your main office PC, multiple billing or store counters in the same building can work simultaneously without needing the external internet.",
      },
    ],
    relatedServices: [
      { name: "Billing & Inventory Software", href: "/services/billing-and-inventory-software" },
      { name: "Custom Business Software", href: "/services/custom-business-software" },
    ],
    relatedIndustries: [
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
    ],
    relatedStages: [
      { name: "Traditional Businesses", href: "/businesses/traditional-businesses" },
      { name: "Local Businesses", href: "/businesses/local-businesses" },
    ],
  },
  {
    slug: "billing-and-inventory-software",
    title: "Billing and Inventory Software",
    outcomeCategory: "Work more efficiently",
    shortSummary:
      "Custom POS invoicing, GST/tax billing, barcode stock tracking, supplier registers, and party credit ledgers built for your counter and godown.",
    problemAddressed:
      "Slow checkout lines, stock mismatches between godown and shop floor, unrecorded credit dues, and rigid accounting software.",
    bestFitCustomer:
      "Retail stores, wholesale traders, distributors, pharmacies, hardware merchants, and multi-branch sellers.",
    expectedOutcomeType:
      "Faster counter billing, accurate real-time stock quantities, organized supplier/customer ledgers, and simpler tax filing.",
    metaTitle: "Custom Billing & Inventory Software | POS, Stock & Invoicing | Webntric",
    metaDescription:
      "Practical billing, invoicing, and inventory software for retail, wholesale, and distribution businesses. Available as offline Windows desktop software or multi-branch web systems.",
    primaryKeyword: "billing and inventory software",
    h1: "Fast billing and accurate inventory built around your counter and warehouse.",
    heroSubtitle:
      "Standard accounting software is designed for accountants after the sale is over—not for the person at the counter handling ten customers at once. We build billing and inventory systems that match your actual items, units, pricing tiers, and godown flow.",
    detailedProblem: {
      heading: "Where standard billing packages fall short in daily trading",
      paragraphs: [
        "In real retail and wholesale operations, products arrive in cartons or bags and sell in boxes, pieces, or kilograms. Customers negotiate item-wise or bill-wise discounts, return partial goods, pay partly in cash and partly on credit (udhaar), and expect an accurate bill in seconds.",
        "When software makes these everyday actions slow or complicated, counter staff skip entries—and within weeks your physical stock no longer matches the computer.",
      ],
    },
    whoItIsFor: [
      "Retail stores and supermarkets needing fast barcode scanning, thermal billing, and reorder alerts",
      "Wholesale traders and distributors managing multi-tier party rates, credit limits, and transport/bilty details",
      "Businesses managing multiple godowns or branch transfer challans",
      "Merchants needing custom invoice layouts, HSN/GST tax summaries, and simple daily cash/dues books",
    ],
    whoMayNotNeedItYet: [
      "Service freelancers issuing only 5–10 simple invoices a month (a basic invoice generator is sufficient)",
    ],
    whatWebntricDelivers: [
      {
        title: "High-Speed Counter POS & GST Invoicing",
        description:
          "Barcode and keyboard-driven billing supporting retail, wholesale, MRP, and party-specific rate lists.",
      },
      {
        title: "Multi-Unit & Batch Inventory Control",
        description:
          "Track stock across master cartons, inner boxes, and loose units with batch/expiry dates and low-stock alerts.",
      },
      {
        title: "Customer Credit (Udhaar) & Supplier Ledgers",
        description:
          "Instant visibility into pending receivables, ageing dues, payment receipts, and supplier purchase histories.",
      },
      {
        title: "Offline Desktop or Multi-Branch Web Deployment",
        description:
          "Choose standalone offline Windows speed for a single site, or connected multi-branch inventory visibility across locations.",
      },
    ],
    recommendedFeatures: [
      "Barcode label generation and printing for non-barcoded stock",
      "Hold bill / estimate slip / proforma invoice to final tax invoice conversion",
      "Sales return, credit note, and damaged-stock adjustment registers",
      "Cashier-wise shift closing and daily payment mode split (Cash / UPI / Bank / Credit)",
      "One-click GST sales/purchase register export for your CA",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Item, Unit & Invoice Format Review",
        detail: "We study your sample bills, item categories, pricing rules, and printer stationery.",
      },
      {
        stage: "02",
        title: "Billing & Stock Workflow Configuration",
        detail: "We configure your exact tax rules, unit conversions, and user permissions.",
      },
      {
        stage: "03",
        title: "Master Item Import & Hardware Testing",
        detail: "We help import your existing item/party lists from Excel and test barcode scanners and printers.",
      },
      {
        stage: "04",
        title: "Counter Training & Go-Live Support",
        detail: "We train your billing operators and stand by during live counter operations.",
      },
    ],
    technologyChoices: [
      {
        tech: "Offline Windows Engine (.NET / SQLite / MS SQL)",
        whenWeUseIt: "Recommended for single-location shops and godowns prioritizing instant keyboard speed and offline reliability.",
      },
      {
        tech: "Multi-Branch Web + Local Cache (Next.js / PostgreSQL)",
        whenWeUseIt: "Recommended when owners need live stock and sales consolidation across 2+ branches or warehouses.",
      },
    ],
    integrationsAndDependencies: [
      "1D/2D barcode scanners, thermal receipt printers (58mm/80mm), barcode label printers, A4/A5 printers",
      "Excel/CSV item master import and CA-ready accounting exports",
      "Optional WhatsApp invoice PDF sharing",
    ],
    expectedDeliverables: [
      "Configured billing and inventory software matched to your workflow",
      "Customized invoice, estimate, and receipt print templates",
      "Imported initial item and party master database",
      "Automated backup setup and staff training",
    ],
    postLaunchSupport:
      "Support for invoice layout changes, tax rule updates, printer reconfigurations, and database backup verification.",
    faqs: [
      {
        question: "Can we restrict counter staff from seeing our purchase cost or profit margins?",
        answer:
          "Yes. Counter operators can be given a Billing-Only role where they can create invoices and check available quantity, while purchase rates, supplier details, and profit reports are visible only to the owner login.",
      },
      {
        question: "Can we print both small thermal receipts and full A4 GST invoices?",
        answer:
          "Yes. The system can support multiple print templates and printers—for example, thermal receipts for walk-in retail buyers and A4/half-page tax invoices for B2B wholesale buyers.",
      },
    ],
    relatedServices: [
      { name: "Offline Windows Software", href: "/services/offline-windows-software" },
      { name: "Custom Business Software", href: "/services/custom-business-software" },
    ],
    relatedIndustries: [
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Hospitality", href: "/industries/hospitality" },
    ],
    relatedStages: [
      { name: "Traditional Businesses", href: "/businesses/traditional-businesses" },
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    outcomeCategory: "Reach the right customers",
    shortSummary:
      "Disciplined search ads, paid social campaigns, landing page conversion optimization, and clear enquiry tracking.",
    problemAddressed:
      "Ad budgets are spent on clicks and views that do not turn into qualified phone calls, visits, or business enquiries.",
    bestFitCustomer:
      "Local businesses, institutes, clinics, real estate groups, and growing SMBs ready to handle incoming customer enquiries.",
    expectedOutcomeType:
      "Targeted visibility among high-intent buyers, clearer landing page conversion paths, and transparent cost-per-enquiry reporting.",
    metaTitle: "Digital Marketing Services | Search Ads, Paid Social & CRO | Webntric",
    metaDescription:
      "Practical digital marketing services including Google Ads, Meta lead campaigns, landing page conversion optimization, and clear analytics reporting without inflated promises.",
    primaryKeyword: "digital marketing services",
    h1: "Digital marketing focused on qualified enquiries, not vanity metrics.",
    heroSubtitle:
      "Impressions and clicks do not pay bills if visitors leave confused. We connect targeted Google and social campaigns with fast, specific landing pages and clear conversion tracking so you know what your marketing budget actually produces.",
    detailedProblem: {
      heading: "Why paid advertising often disappoints business owners",
      paragraphs: [
        "Many businesses boost social posts or run broad Google Ads that send traffic to a slow, generic homepage. Visitors cannot find the exact service they clicked for, or the campaign attracts bargain-hunters and job seekers outside your service area.",
        "Before spending money on media clicks, we fix the destination page, tighten geographic and keyword targeting, add negative keyword filters, and set up tracking for phone calls, WhatsApp messages, and form enquiries.",
      ],
    },
    whoItIsFor: [
      "Clinics, coaching institutes, real estate projects, and local service businesses seeking active customer enquiries",
      "B2B suppliers and manufacturers targeting specific commercial search queries",
      "Businesses already spending on Google or Meta ads that want to reduce wasted clicks and improve enquiry quality",
    ],
    whoMayNotNeedItYet: [
      "Businesses without a working website or landing page, or without someone designated to answer incoming phone/WhatsApp enquiries promptly",
      "Companies looking for 'guaranteed 10x overnight ROI' schemes",
    ],
    whatWebntricDelivers: [
      {
        title: "High-Intent Google Search Ads (PPC)",
        description:
          "Campaigns structured around specific buyer search queries, strict geographic boundaries, and negative keyword lists.",
      },
      {
        title: "Meta (Instagram & Facebook) Lead Systems",
        description:
          "Targeted local and demographic campaigns using qualifying questions rather than low-intent one-tap auto-fill forms.",
      },
      {
        title: "Landing Page Conversion Optimization (CRO)",
        description:
          "Dedicated service landing pages engineered by our web team so ad clicks land on fast, persuasive, relevant pages.",
      },
      {
        title: "Transparent Attribution & Reporting",
        description:
          "Plain-language monthly reports showing ad spend, clicks, actual enquiries generated, and what we are adjusting next.",
      },
    ],
    recommendedFeatures: [
      "Dedicated campaign landing pages matching ad intent",
      "Google Tag Manager event tracking (calls, forms, WhatsApp clicks)",
      "Negative keyword auditing to block irrelevant search terms",
      "Geographic radius and schedule targeting aligned with business hours",
      "Direct ad account ownership (you pay Google/Meta directly; no hidden media markups)",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Unit Economics & Readiness Check",
        detail: "We review your offer, target geography, landing page, and sales follow-up process.",
      },
      {
        stage: "02",
        title: "Landing Page & Tracking Setup",
        detail: "We build or refine the landing page and verify GTM/GA4 conversion events.",
      },
      {
        stage: "03",
        title: "Controlled Campaign Launch",
        detail: "We launch tightly targeted campaigns with disciplined initial test budgets.",
      },
      {
        stage: "04",
        title: "Search Term Pruning & Iteration",
        detail: "We review actual search terms and lead quality weekly with your sales team to cut waste.",
      },
    ],
    technologyChoices: [
      {
        tech: "Google Ads (Search & Local Performance)",
        whenWeUseIt: "Best when customers are actively searching for your service right now (e.g., 'specialty dental clinic', 'industrial packaging supplier').",
      },
      {
        tech: "Meta Ads Manager",
        whenWeUseIt: "Best for visual categories (real estate, hospitality, coaching batches, retail launches) within defined local or interest audiences.",
      },
      {
        tech: "Google Tag Manager & GA4",
        whenWeUseIt: "Measures real conversion actions without bloating page load times.",
      },
    ],
    integrationsAndDependencies: [
      "Client-owned Google Ads and Meta Business Manager accounts",
      "Fast landing pages and active phone/WhatsApp intake desk",
    ],
    expectedDeliverables: [
      "Structured ad campaigns inside your own ad accounts",
      "Conversion-optimized landing page(s) and verified tracking tags",
      "Monthly performance and lead-quality review reports",
    ],
    postLaunchSupport:
      "Continuous weekly search-term cleanup, ad copy testing, landing page refinements, and budget pacing adjustments.",
    faqs: [
      {
        question: "Do we pay the ad budget to Webntric or directly to Google/Meta?",
        answer:
          "You pay your ad spend directly to Google and Meta from your own ad account using your company billing method. That way you always have 100% transparency into every rupee spent on media.",
      },
      {
        question: "Can you guarantee a specific number of sales in the first month?",
        answer:
          "No honest agency can guarantee exact sales figures, because conversion depends on market demand, pricing, competition, and how quickly your team follows up with leads. What we guarantee is disciplined targeting, conversion-ready landing pages, and complete transparency into cost per enquiry.",
      },
    ],
    relatedServices: [
      { name: "Lead Generation", href: "/services/lead-generation" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Website Development", href: "/services/website-development" },
    ],
    relatedIndustries: [
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Hospitality", href: "/industries/hospitality" },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    outcomeCategory: "Reach the right customers",
    shortSummary:
      "Technical SEO, search intent architecture, on-page optimization, local SEO, structured schema, and transparent reporting.",
    problemAddressed:
      "Customers search Google for the exact services you offer, but your website is buried or fails technical crawl and speed standards.",
    bestFitCustomer:
      "Local businesses, clinics, professional firms, manufacturers, and growing companies investing in sustainable organic discovery.",
    expectedOutcomeType:
      "Clean search indexing, stronger visibility for relevant service and local queries, and compounding organic enquiries over time.",
    metaTitle: "SEO Services | Technical SEO, Local Search & Content Architecture | Webntric",
    metaDescription:
      "Comprehensive SEO services from Webntric Software: technical SEO audits, search intent mapping, on-page optimization, Google Business Profile local SEO, and transparent reporting.",
    primaryKeyword: "seo services",
    h1: "Honest, technical search engine optimization built for long-term visibility.",
    heroSubtitle:
      "Because we are software engineers first, we approach SEO from the ground up: clean site architecture, fast Core Web Vitals, accurate structured data, and helpful pages written for real human search intent—without spammy backlinks or fake ranking guarantees.",
    detailedProblem: {
      heading: "Why shortcut SEO schemes fail—and what actually works",
      paragraphs: [
        "Many business owners have been approached with promises of 'Guaranteed #1 Google Ranking in 30 Days.' In practice, those packages rely on automated link spam, keyword-stuffed paragraphs, or ranking for obscure phrases nobody searches.",
        "Sustainable search visibility comes from three things working together: (1) a technically sound, fast website that search crawlers can index effortlessly, (2) dedicated, deeply useful pages for each service and industry you serve, and (3) accurate local and entity signals.",
      ],
    },
    whoItIsFor: [
      "Local and regional businesses wanting to capture 'near me' and city-specific service searches",
      "B2B companies, manufacturers, and professional firms whose buyers research vendors thoroughly on Google",
      "Websites that suffered a traffic drop after a poorly managed redesign or technical misconfiguration",
    ],
    whoMayNotNeedItYet: [
      "Businesses that need enquiries tomorrow morning and have zero organic runway (start with targeted Search Ads while building SEO in parallel)",
      "Anyone looking for black-hat link schemes or overnight ranking tricks",
    ],
    whatWebntricDelivers: [
      {
        title: "Technical SEO & Core Web Vitals",
        description:
          "Fixing crawl errors, canonical tags, redirect chains, sitemap.xml, robots.txt, and mobile page speed bottlenecks.",
      },
      {
        title: "Search Intent & Information Architecture",
        description:
          "Mapping one primary buyer search intent to each service, industry, and location page so pages don't compete against each other.",
      },
      {
        title: "On-Page Optimization & Content Planning",
        description:
          "Structuring clear H1–H3 hierarchies, unique meta titles/descriptions, internal linking, and helpful buyer-focused content.",
      },
      {
        title: "Local SEO & Structured Data (JSON-LD)",
        description:
          "Implementing valid Organization, LocalBusiness, Service, and FAQPage schemas alongside Google Business Profile consistency.",
      },
      {
        title: "Search Console, Analytics & Ethical Authority",
        description:
          "Transparent monthly reporting directly from Google Search Console and GA4—showing impressions, clicks, queries, and enquiries.",
      },
    ],
    recommendedFeatures: [
      "Complete Google Search Console indexing & crawl error resolution",
      "Page-by-page unique title, meta description, and canonical governance",
      "Contextual internal linking architecture across services and industries",
      "Valid JSON-LD schema markup verification",
      "Local NAP (Name, Address, Phone) consistency and Google Business Profile optimization",
      "Monthly search query and organic enquiry reporting",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Technical & Search Intent Audit",
        detail: "We inspect your current indexing, speed, competitors, and high-intent buyer queries.",
      },
      {
        stage: "02",
        title: "Architectural & On-Page Fixes",
        detail: "We resolve technical blockers, structure URLs and headings, and deploy valid JSON-LD schemas.",
      },
      {
        stage: "03",
        title: "Service, Local & Guide Page Expansion",
        detail: "We write or refine deep, genuinely useful pages that answer specific customer search queries.",
      },
      {
        stage: "04",
        title: "Monthly Measurement & Refinement",
        detail: "We track Search Console query movement, click-through rates, and organic conversions month by month.",
      },
    ],
    technologyChoices: [
      {
        tech: "Google Search Console & GA4",
        whenWeUseIt: "Provides primary, unmanipulated data directly from Google on how your pages are crawled and clicked.",
      },
      {
        tech: "Server-Rendered Next.js HTML & JSON-LD",
        whenWeUseIt: "Ensures search crawlers receive complete content and structured entity relationships on the very first request.",
      },
    ],
    integrationsAndDependencies: [
      "Google Search Console, Google Analytics 4, and Google Business Profile access",
      "Codebase or CMS access to implement technical and structural improvements",
    ],
    expectedDeliverables: [
      "Comprehensive Technical SEO & Architecture Audit document",
      "Keyword-to-page search intent map (zero keyword stuffing)",
      "Implemented technical fixes, metadata, internal links, and JSON-LD schemas",
      "Monthly Search Console & organic conversion reports",
    ],
    postLaunchSupport:
      "Ongoing monthly SEO care to monitor algorithm shifts, expand topical authority, maintain Core Web Vitals, and protect rankings as your site grows.",
    faqs: [
      {
        question: "Why don't you guarantee #1 rankings on Google?",
        answer:
          "Google explicitly warns businesses against agencies that guarantee rankings, as no third party controls Google's search algorithm. What we guarantee is clean technical execution, honest search-intent architecture, and transparent reporting on real search impressions, clicks, and enquiries.",
      },
      {
        question: "How long does it take to see meaningful results from SEO?",
        answer:
          "Technical fixes and local profile improvements often show early indexing and local query movement within 4 to 8 weeks. Competitive service and regional keywords typically build steady momentum over 3 to 6 months as search engines evaluate your pages' usefulness.",
      },
    ],
    relatedServices: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Lead Generation", href: "/services/lead-generation" },
    ],
    relatedIndustries: [
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Local Service Businesses", href: "/industries/local-service-businesses" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    outcomeCategory: "Reach the right customers",
    shortSummary:
      "Structured monthly content calendars, platform selection, publishing workflows, community handling, and brand consistency.",
    problemAddressed:
      "Your business social media pages look inactive or inconsistent because you lack the time to plan, design, and publish every week.",
    bestFitCustomer:
      "Local businesses, clinics, hospitality venues, coaching institutes, and B2B companies wanting a dependable, professional social presence.",
    expectedOutcomeType:
      "A consistent, trustworthy brand profile when prospects look you up, without taking hours away from your daily business.",
    metaTitle: "Social Media Management Services | Strategy, Publishing & Community | Webntric",
    metaDescription:
      "Structured social media management for businesses: platform selection, monthly content calendars, approval workflows, publishing, community handling, and clear reporting.",
    primaryKeyword: "social media management services",
    h1: "A consistent, credible social media presence managed without daily stress.",
    heroSubtitle:
      "We do not promise 'viral overnight fame.' For most businesses, social media has a much more practical job: proving to prospective customers that your business is active, knowledgeable, and trustworthy when they look you up.",
    detailedProblem: {
      heading: "Why sporadic posting hurts more than it helps",
      paragraphs: [
        "When a customer hears about your clinic, showroom, hotel, or company, they often check your Instagram, Facebook, or LinkedIn profile. If the last post is from eight months ago—or if the feed is just generic festival graphics—it creates doubt.",
        "We take the planning, copywriting, visual design, scheduling, and basic enquiry routing off your plate using a structured monthly calendar that you review and approve in advance.",
      ],
    },
    whoItIsFor: [
      "Business owners who know they need an active social presence but have no time to manage it weekly",
      "Hospitality, retail, education, healthcare, and real estate brands where visual credibility influences buyer trust",
      "B2B and professional companies needing consistent, articulate updates on LinkedIn",
    ],
    whoMayNotNeedItYet: [
      "Businesses expecting organic social posts alone to generate immediate daily sales without a website or paid distribution",
      "Companies wanting tabloid-style viral memes rather than brand-aligned business communication",
    ],
    whatWebntricDelivers: [
      {
        title: "Platform Selection & Content Strategy",
        description:
          "Focusing only on the 1–3 platforms your customers actually use (e.g., Instagram + Facebook for local/consumer, LinkedIn for B2B).",
      },
      {
        title: "Monthly Content Calendars & Approval Workflow",
        description:
          "Every topic, caption, and visual is organized in a monthly calendar for your sign-off before anything goes live.",
      },
      {
        title: "Copywriting, Visual Design & Short-Form Video Concepts",
        description:
          "Brand-consistent graphics, educational carousels, and practical reel/short-video storyboards and edits.",
      },
      {
        title: "Publishing, Community Monitoring & Reporting",
        description:
          "Scheduled publishing, routing comment/DM business enquiries to your team, and clear monthly summary reports.",
      },
    ],
    recommendedFeatures: [
      "Pre-approved 4-week rolling content calendar",
      "Custom visual templates matched to your brand typography and colors",
      "Profile bio, highlights, and contact action optimization",
      "Enquiry escalation rulebook for DMs and comments",
      "Monthly performance review focused on profile actions and enquiries",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Brand & Audience Alignment",
        detail: "We define your tone of voice, visual identity, content pillars, and priority platforms.",
      },
      {
        stage: "02",
        title: "Monthly Calendar & Asset Creation",
        detail: "We draft the month's posts, captions, carousels, and video edits in advance.",
      },
      {
        stage: "03",
        title: "Client Review & Approval",
        detail: "You review the calendar in one batch; we make any requested adjustments.",
      },
      {
        stage: "04",
        title: "Scheduled Publishing & Monthly Review",
        detail: "We publish consistently, monitor enquiries, and review what resonated at month-end.",
      },
    ],
    technologyChoices: [
      {
        tech: "Meta Business Suite / LinkedIn / YouTube Studio",
        whenWeUseIt: "Native scheduling and analytics tools ensuring reliable delivery and full account security.",
      },
      {
        tech: "Structured Brand Design System",
        whenWeUseIt: "Ensures every post looks unmistakably like your company rather than a generic template.",
      },
    ],
    integrationsAndDependencies: [
      "Partner/Editor access to your official social media pages",
      "A brief monthly check-in (15–20 mins) or shared folder for real workplace/product photos",
    ],
    expectedDeliverables: [
      "Optimized social media profiles and highlight structures",
      "Monthly approved content calendar (copy + graphics + short-form video edits)",
      "Consistent publishing and monthly performance summary",
    ],
    postLaunchSupport:
      "Operates as a continuous monthly partnership with clear deliverables and flexible scope adjustments during peak seasons.",
    faqs: [
      {
        question: "Will anything ever be posted without our approval?",
        answer:
          "Never. Every caption and creative asset is shared with you for approval before scheduling.",
      },
      {
        question: "How do we share real photos from our shop, clinic, or factory?",
        answer:
          "We set up a simple shared WhatsApp or cloud folder where your team can drop raw phone photos or short clips from daily work. We handle the editing, framing, and copywriting.",
      },
    ],
    relatedServices: [
      { name: "Social Media Content Creation", href: "/services/social-media-content-creation" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    relatedIndustries: [
      { name: "Hospitality", href: "/industries/hospitality" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "social-media-content-creation",
    title: "Social Media Content Creation",
    outcomeCategory: "Reach the right customers",
    shortSummary:
      "Custom visual design, educational carousels, brand copywriting, and short-form video concepts that explain your expertise clearly.",
    problemAddressed:
      "Your team can handle posting, but struggles to design professional graphics, write clear copy, or edit short-form videos.",
    bestFitCustomer:
      "Businesses and founders who want high-trust visual assets, carousels, and video edits without hiring a full-time in-house designer.",
    expectedOutcomeType:
      "Professional, brand-consistent social assets that educate customers and elevate how your business is perceived.",
    metaTitle: "Social Media Content Creation | Graphics, Carousels & Video Concepts | Webntric",
    metaDescription:
      "Custom social media content creation: educational carousels, product graphics, copywriting, short-form video concepts, and reusable brand design systems.",
    primaryKeyword: "social media content creation services",
    h1: "Social media content that explains your value clearly and looks like your brand.",
    heroSubtitle:
      "Customers scroll right past generic stock-photo graphics. We create informative carousels, product and service explainers, clean short-form video edits, and human copywriting that actually teaches buyers why your business is the right choice.",
    detailedProblem: {
      heading: "Why educational, specific content outperforms noisy graphics",
      paragraphs: [
        "When every competitor posts the same loud promotional flyer, the business that calmly explains how a product works, answers common buyer questions, or shows behind-the-scenes quality immediately stands out.",
        "We turn your everyday domain knowledge—the questions you answer for customers in person—into clean, readable visual posts and short-form video scripts.",
      ],
    },
    whoItIsFor: [
      "Founders and professionals who want to share industry expertise on LinkedIn or Instagram",
      "In-house marketing teams that need dependable graphic design, carousel layouts, and video editing capacity",
      "Brands launching a new product line, property project, or admission batch needing a cohesive campaign pack",
    ],
    whoMayNotNeedItYet: [
      "Businesses that have not yet defined their core services or visual brand identity",
    ],
    whatWebntricDelivers: [
      {
        title: "Educational & Explainer Carousels",
        description:
          "Multi-slide visual breakdowns that simplify complex services, comparisons, or buyer checklists.",
      },
      {
        title: "Short-Form Video Concepts & Editing",
        description:
          "Scripting hooks, talking-points prompts for your team, clean captioning, pacing cuts, and brand framing for Reels/Shorts.",
      },
      {
        title: "Product & Service Showcase Graphics",
        description:
          "High-contrast, typography-led static visuals that highlight real specifications, features, and proof.",
      },
      {
        title: "Human, Specific Copywriting",
        description:
          "Captions written in natural language without robotic AI clichés or excessive hashtag clutter.",
      },
    ],
    recommendedFeatures: [
      "Custom typography and color system aligned with your website",
      "Multi-format sizing (1:1 square, 4:5 portrait, 9:16 vertical)",
      "Subtitled short-form video edits for sound-off mobile viewing",
      "Reusable templates for announcements and client highlights",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Topic Extraction & Visual System",
        detail: "We list the top 15–20 customer questions in your business and establish your visual layout rules.",
      },
      {
        stage: "02",
        title: "Scripting & Copy Drafting",
        detail: "We write the slide-by-slide carousel text, captions, and short video prompts for your review.",
      },
      {
        stage: "03",
        title: "Design & Video Production",
        detail: "Our designers and editors produce the visual assets and captioned vertical videos.",
      },
      {
        stage: "04",
        title: "Review & Final Asset Delivery",
        detail: "We deliver organized, ready-to-publish asset packs (or hand them directly into our Social Media Management workflow).",
      },
    ],
    technologyChoices: [
      {
        tech: "Editorial Typography & Vector Layout Systems",
        whenWeUseIt: "Ensures sharp readability on mobile screens and visual consistency with your website.",
      },
    ],
    integrationsAndDependencies: [
      "Brand logo files and any raw product/location photographs or raw phone video clips",
    ],
    expectedDeliverables: [
      "Monthly or campaign-based bundle of high-resolution social graphics and carousels",
      "Edited, captioned vertical short-form videos",
      "Complete caption copy and publishing notes",
    ],
    postLaunchSupport:
      "Can be paired seamlessly with our full Social Media Management service if you want us to handle scheduling and community monitoring as well.",
    faqs: [
      {
        question: "We are camera-shy—can we still have effective social media content?",
        answer:
          "Yes. While founder or workplace videos are great, educational carousels, product/workflow breakdowns, and B-roll clips with clean text overlays perform exceptionally well without requiring anyone to speak on camera.",
      },
    ],
    relatedServices: [
      { name: "Social Media Management", href: "/services/social-media-management" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    relatedIndustries: [
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Hospitality", href: "/industries/hospitality" },
      { name: "Professional Services", href: "/industries/professional-services" },
    ],
    relatedStages: [
      { name: "Startups", href: "/businesses/startups" },
      { name: "Local Businesses", href: "/businesses/local-businesses" },
    ],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    outcomeCategory: "Reach the right customers",
    shortSummary:
      "End-to-end enquiry systems combining targeted search/social traffic, conversion landing pages, qualifying forms, and instant sales routing.",
    problemAddressed:
      "Your sales team either receives too few enquiries or wastes time chasing unqualified, low-intent contacts.",
    bestFitCustomer:
      "Real estate developers, coaching institutes, clinics, B2B suppliers, and local service businesses with an active sales/reception team.",
    expectedOutcomeType:
      "A structured, measurable flow of qualified buyer enquiries routed directly to your team with full source attribution.",
    metaTitle: "Lead Generation Services | Landing Pages, Search & Enquiry Systems | Webntric",
    metaDescription:
      "Build a reliable enquiry pipeline with Webntric Software: high-intent landing pages, search and social acquisition, lead qualification forms, and instant WhatsApp/CRM routing.",
    primaryKeyword: "lead generation services",
    h1: "Structured lead generation systems that connect search intent to sales follow-up.",
    heroSubtitle:
      "Generating leads is not about buying cold phone-number lists. It is about placing a clear, persuasive offer in front of people actively looking for your solution, qualifying their requirement cleanly, and getting that enquiry to your sales desk while their interest is high.",
    detailedProblem: {
      heading: "Why disconnected ads and generic forms produce poor leads",
      paragraphs: [
        "When an agency runs ads without touching the website, or uses one-click social lead forms where users barely remember tapping submit, your sales team spends all day calling people who say 'I was just browsing.'",
        "Because Webntric builds both the web engineering and the acquisition campaign, we design the entire funnel: targeted traffic, a fast topic-specific landing page, a qualifying intake form that filters out spam, and instant notification to your team.",
      ],
    },
    whoItIsFor: [
      "Real estate projects needing qualified site-visit enquiries",
      "Schools, colleges, and coaching institutes during admission cycles",
      "Local service contractors (solar, interior design, commercial maintenance) and clinics",
      "B2B manufacturers and wholesale suppliers seeking dealer or bulk buyer RFQs",
    ],
    whoMayNotNeedItYet: [
      "Businesses that do not have someone available to call or message incoming enquiries within a few business hours",
    ],
    whatWebntricDelivers: [
      {
        title: "High-Trust Conversion Landing Pages",
        description:
          "Fast, focused pages built specifically for the exact service or offer being promoted—free from navigation distractions.",
      },
      {
        title: "Intent-Matched Traffic Acquisition",
        description:
          "Google Search campaigns, local SEO pages, and targeted Meta campaigns aimed at buyers with real need.",
      },
      {
        title: "Qualifying Intake & Spam Filtering",
        description:
          "Forms that ask the 2–3 right qualifying questions (requirement type, location, timeline) to screen out irrelevant traffic.",
      },
      {
        title: "Instant Lead Routing & Tracking Sheet",
        description:
          "Immediate email/WhatsApp/webhook alerts to your sales desk and a clean ledger of every enquiry's source and status.",
      },
    ],
    recommendedFeatures: [
      "Dedicated high-speed Next.js landing pages",
      "Qualifying dropdowns + honeypot and server-side spam protection",
      "One-tap phone call and pre-filled WhatsApp enquiry tracking",
      "UTM source and keyword attribution on every submitted enquiry",
      "Optional lightweight follow-up / quotation status dashboard",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Offer & Qualification Definition",
        detail: "We define what makes a lead 'qualified' for your business and what disqualifies a prospect.",
      },
      {
        stage: "02",
        title: "Landing Page & Funnel Build",
        detail: "We engineer the landing page, qualifying form, and instant notification routing.",
      },
      {
        stage: "03",
        title: "Acquisition Launch (Search / Local / Social)",
        detail: "We turn on targeted traffic and verify end-to-end event tracking.",
      },
      {
        stage: "04",
        title: "Lead Quality Feedback Loop",
        detail: "We review actual call/close feedback with your team and refine targeting and form questions.",
      },
    ],
    technologyChoices: [
      {
        tech: "Next.js Server-Rendered Landing Pages",
        whenWeUseIt: "Sub-2-second mobile load times prevent ad clicks from bouncing before the page renders.",
      },
      {
        tech: "GTM + Server-Side Webhook Routing",
        whenWeUseIt: "Ensures zero lost enquiries and accurate attribution across Google Ads and Analytics.",
      },
    ],
    integrationsAndDependencies: [
      "Active sales phone / WhatsApp / email desk to respond to incoming leads",
      "Google Ads / Meta Ads accounts (for paid acquisition acceleration)",
    ],
    expectedDeliverables: [
      "Live conversion landing page(s) and qualifying form system",
      "Configured search/social acquisition campaigns",
      "Automated lead notification and centralized enquiry log",
      "Monthly cost-per-qualified-enquiry report",
    ],
    postLaunchSupport:
      "Ongoing optimization of landing page conversion rates, negative keyword filtering, and seasonal campaign scaling.",
    faqs: [
      {
        question: "Do you sell pre-made databases of phone numbers?",
        answer:
          "No. Purchased cold lists hurt your brand reputation and have dismal conversion rates. Every lead we generate comes from a real person who visited your page and explicitly requested to be contacted about your service.",
      },
    ],
    relatedServices: [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Website Development", href: "/services/website-development" },
    ],
    relatedIndustries: [
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Local Service Businesses", href: "/industries/local-service-businesses" },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "website-maintenance-and-support",
    title: "Website Maintenance and Support",
    outcomeCategory: "Keep improving",
    shortSummary:
      "Post-launch technical care: security updates, verified backups, uptime monitoring, content changes, speed audits, and priority support.",
    problemAddressed:
      "Your website or software has no one looking after security patches, backups, broken forms, or day-to-day content updates.",
    bestFitCustomer:
      "Businesses without an in-house developer that want peace of mind and a responsive technical partner on call.",
    expectedOutcomeType:
      "Continuous uptime, verified disaster-recovery backups, fast page performance, and quick turnaround on content or feature changes.",
    metaTitle: "Website Maintenance & Support Services | Security, Backups & Updates | Webntric",
    metaDescription:
      "Ongoing website and software maintenance from Webntric: security patches, off-site backups, uptime checks, content updates, Core Web Vitals optimization, and technical support.",
    primaryKeyword: "website maintenance and support services",
    h1: "Keep your website secure, fast, and accurate long after launch day.",
    heroSubtitle:
      "Good support means having someone who already understands your system when you need an update, a security patch, or a quick fix. We stay accountable after launch—and we also onboard existing websites and software built by other teams.",
    detailedProblem: {
      heading: "What happens when a live website or software system is left unattended",
      paragraphs: [
        "Websites and business software do not stay static. Browsers update, SSL certificates renew, third-party APIs change, dependencies release security patches, and your own business services evolve.",
        "Without structured maintenance, small issues quietly pile up until a contact form stops delivering enquiries, a page breaks on mobile, or a database fails without a verified backup.",
      ],
    },
    whoItIsFor: [
      "Clients whose website or custom software was built by Webntric and who want structured ongoing care",
      "Businesses whose previous developer or freelancer is no longer responsive",
      "Organizations that need regular content updates, new landing pages, security audits, and backup verification without hiring full-time staff",
    ],
    whoMayNotNeedItYet: [
      "Companies with a dedicated internal DevOps and web engineering team already managing daily updates",
    ],
    whatWebntricDelivers: [
      {
        title: "Security & Dependency Patching",
        description:
          "Regular updates to framework dependencies, server packages, and SSL/TLS configurations to prevent vulnerabilities.",
      },
      {
        title: "Verified Automated Backups",
        description:
          "Scheduled off-site backups of both your codebase and database—plus periodic restoration checks to ensure backups actually work.",
      },
      {
        title: "Content, Pricing & Layout Updates",
        description:
          "Fast turnaround when you need to add a new service, update team details, publish a notice, or adjust a form.",
      },
      {
        title: "Performance, Uptime & SEO Health Monitoring",
        description:
          "Monitoring Core Web Vitals, broken links, Search Console crawl warnings, and form delivery health.",
      },
    ],
    recommendedFeatures: [
      "24/7 uptime and SSL expiration monitoring",
      "Automated off-site database and media backups",
      "Monthly Core Web Vitals and broken-link check",
      "Dedicated communication channel for change requests",
      "Clear monthly summary of updates performed",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Initial Code & Hosting Health Audit",
        detail: "For existing sites, we inspect the codebase, hosting, backup status, and immediate security risks.",
      },
      {
        stage: "02",
        title: "Stabilization & Backup Setup",
        detail: "We put version control (Git), automated backups, and uptime alerts in place first.",
      },
      {
        stage: "03",
        title: "Scheduled Monthly Care",
        detail: "We execute routine security updates, form tests, and Search Console checks every month.",
      },
      {
        stage: "04",
        title: "On-Demand Improvements",
        detail: "Whenever you need content edits or new features, our team implements and deploys them cleanly.",
      },
    ],
    technologyChoices: [
      {
        tech: "Git Version Control & Staging Environments",
        whenWeUseIt: "Every update is tested in a staging preview before touching your live production website.",
      },
    ],
    integrationsAndDependencies: [
      "Repository, hosting control panel, and domain DNS access (protected under NDA and strict credential management)",
    ],
    expectedDeliverables: [
      "Initial baseline health & security audit report",
      "Configured automated backup and uptime monitoring",
      "Prompt execution of requested content and technical updates",
      "Monthly maintenance activity log",
    ],
    postLaunchSupport:
      "Structured as flexible monthly care plans or on-demand support blocks—explained clearly upfront with no hidden lock-in.",
    faqs: [
      {
        question: "Can you take over maintenance for a website built by another agency?",
        answer:
          "Yes. We start with a short code and hosting audit to verify how the site was built. If the codebase is maintainable, we onboard it directly into our support workflow; if it has critical structural issues, we show you the findings and fix the urgent risks first.",
      },
    ],
    relatedServices: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Custom Business Software", href: "/services/custom-business-software" },
    ],
    relatedIndustries: [
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
    ],
    relatedStages: [
      { name: "Established Organizations", href: "/businesses/established-businesses" },
      { name: "Local Businesses", href: "/businesses/local-businesses" },
    ],
  },
  {
    slug: "business-automation-consulting",
    title: "Business Automation Consulting",
    outcomeCategory: "Work more efficiently",
    shortSummary:
      "Practical workflow discovery, digital transformation planning, API integrations, and phased automation to reduce manual bottlenecks.",
    problemAddressed:
      "You know your business is losing time to manual registers and disconnected tools, but you are unsure what to digitize first.",
    bestFitCustomer:
      "Traditional businesses transitioning to digital systems and growing SMBs coordinating multiple departments.",
    expectedOutcomeType:
      "A clear, prioritized digital roadmap and practical automation that saves staff hours without disrupting daily operations.",
    metaTitle: "Business Automation & Digital Transformation Consulting | Webntric",
    metaDescription:
      "Practical workflow discovery and business automation consulting. We map bottlenecks, connect disconnected tools, automate reporting, and plan phased digital transformation.",
    primaryKeyword: "business automation consulting",
    h1: "Eliminate repetitive manual work one practical step at a time.",
    heroSubtitle:
      "The goal is not more software—the goal is less friction. Before you spend money building or buying new tools, we examine how work actually moves through your business and help you automate the highest-value bottlenecks first.",
    detailedProblem: {
      heading: "Why 'digital transformation' fails when you start with technology instead of workflow",
      paragraphs: [
        "Businesses often buy three different software subscriptions or commission a large custom app without first mapping how orders, inventory, approvals, and accounts interact. Staff get overwhelmed, data gets entered twice, and the new tool is quietly abandoned.",
        "We act as a practical consulting and engineering partner: we observe your current registers, simplify unnecessary steps, connect tools that can talk to each other via APIs, and build custom software only where it genuinely solves a bottleneck.",
      ],
    },
    whoItIsFor: [
      "Traditional businesses moving from physical registers and paper challans to computer systems for the first time",
      "Growing companies where sales, godown/warehouse, dispatch, and accounts teams waste hours reconciling numbers",
      "Business owners who want an honest, technical second opinion before committing to a major software investment",
    ],
    whoMayNotNeedItYet: [
      "Teams looking for generic management slide decks rather than actionable workflow engineering",
    ],
    whatWebntricDelivers: [
      {
        title: "End-to-End Workflow & Register Audit",
        description:
          "Mapping how enquiries, orders, stock, approvals, invoices, and reports currently flow across your staff.",
      },
      {
        title: "Build-vs-Buy & Phased Prioritization Plan",
        description:
          "Honest recommendations on where a simple existing tool works versus where custom desktop or web software is justified.",
      },
      {
        title: "API Integrations & Data Bridges",
        description:
          "Connecting your website forms, accounting exports, WhatsApp/email alerts, and internal databases so data is entered once.",
      },
      {
        title: "Automated Management Reporting",
        description:
          "Replacing manual end-of-day Excel compilation with automated daily or weekly summary dashboards.",
      },
    ],
    recommendedFeatures: [
      "Visual before-and-after workflow blueprint",
      "Phased rollout schedule designed to avoid business disruption",
      "Automated invoice, dispatch, and payment reminder triggers",
      "Custom data import/export converters between legacy tools",
      "Hands-on staff SOPs (Standard Operating Procedures) and training",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Observe & Map",
        detail: "We review your actual forms, registers, spreadsheets, and team handoffs.",
      },
      {
        stage: "02",
        title: "Identify the #1 Bottleneck",
        detail: "We isolate the single step causing the most delays, errors, or owner dependency.",
      },
      {
        stage: "03",
        title: "Implement Phase 1 Solution",
        detail: "We configure the integration or build the focused software module for that bottleneck.",
      },
      {
        stage: "04",
        title: "Verify Adoption & Expand",
        detail: "Once your staff are comfortable and time savings are proven, we move to the next workflow.",
      },
    ],
    technologyChoices: [
      {
        tech: "Custom API Middleware & Webhooks",
        whenWeUseIt: "Connects existing web forms, payment gateways, and databases without manual CSV copying.",
      },
      {
        tech: "Focused Custom Web or Desktop Modules",
        whenWeUseIt: "Replaces fragile multi-user spreadsheets with validated, role-controlled forms.",
      },
    ],
    integrationsAndDependencies: [
      "Access to sample registers/spreadsheets and brief interviews with key operational staff",
    ],
    expectedDeliverables: [
      "Written Workflow Audit & Phased Digitization Blueprint",
      "Clear cost, timeline, and build-vs-buy recommendation",
      "Working automation integrations or custom software modules",
    ],
    postLaunchSupport:
      "Ongoing guidance as your team adopts each phase, with adjustments based on real staff feedback.",
    faqs: [
      {
        question: "Will you always recommend building custom software?",
        answer:
          "No. If a standard, affordable tool solves 90% of a department's need, we will tell you to use it—and focus our custom engineering only on the specific workflows that off-the-shelf software cannot handle.",
      },
    ],
    relatedServices: [
      { name: "Custom Business Software", href: "/services/custom-business-software" },
      { name: "Offline Windows Software", href: "/services/offline-windows-software" },
      { name: "Billing & Inventory Software", href: "/services/billing-and-inventory-software" },
    ],
    relatedIndustries: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Logistics & Distribution", href: "/industries/logistics-and-distribution" },
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
    ],
    relatedStages: [
      { name: "Traditional Businesses", href: "/businesses/traditional-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
  },
  {
    slug: "generative-ai-applications",
    title: "Generative AI Applications",
    outcomeCategory: "Work more efficiently",
    shortSummary:
      "Practical AI chatbots, internal knowledge assistants, document data extraction, semantic search, and human-in-the-loop business workflows.",
    problemAddressed:
      "Staff spend excessive hours answering repetitive questions, searching scattered SOPs/PDFs, or manually extracting fields from invoices and forms.",
    bestFitCustomer:
      "Startups, local businesses, growing companies, and established organizations looking to apply AI to real operational bottlenecks with human oversight.",
    expectedOutcomeType:
      "Faster information retrieval, structured document processing, grounded customer support, and safer human-reviewed automation.",
    metaTitle: "Generative AI Applications for Business | Webntric Software",
    metaDescription:
      "Build practical generative AI applications for customer support, internal knowledge, document processing, automation, and business workflows with Webntric.",
    primaryKeyword: "generative ai applications for business",
    h1: "Turn useful AI ideas into dependable business applications.",
    heroSubtitle:
      "Webntric helps businesses identify practical AI opportunities, connect them to existing systems, and build applications that support people instead of creating more complexity.",
    detailedProblem: {
      heading: "Where could AI actually help your business?",
      paragraphs: [
        "Generative AI creates value when a team is bottlenecked by unstructured text, repetitive document reading, or scattered internal knowledge.",
        "Sometimes the best solution is automation, better software design, clearer data, or a simpler workflow—not generative AI.",
      ],
    },
    whoItIsFor: [
      "Support and front-desk teams answering repetitive customer questions that are already documented",
      "Operations and accounts teams extracting data from invoices, purchase orders, and forms",
      "Organizations whose internal SOPs, policies, and technical manuals are hard to search quickly",
    ],
    whoMayNotNeedItYet: [
      "Workflows that require 100% deterministic math or simple barcode/database lookups",
      "Teams without clean source documents or anyone available to review high-impact outputs",
    ],
    whatWebntricDelivers: [
      {
        title: "Grounded AI Chatbots & Support Assistants",
        description:
          "Website and portal assistants restricted to approved company documentation with human escalation.",
      },
      {
        title: "Permission-Aware AI Knowledge Assistants (RAG)",
        description:
          "Internal search and Q&A across SOPs and manuals with source citations and role-based access.",
      },
      {
        title: "Document Processing & Field Extraction",
        description:
          "Invoice, PO, and form extraction with validation rules and side-by-side human approval.",
      },
      {
        title: "AI Business Workflows & Semantic Search",
        description:
          "CRM/ERP integrations, enquiry summarization, content workflows, and natural-language catalogue discovery.",
      },
    ],
    recommendedFeatures: [
      "Retrieval-Augmented Generation (RAG) with source citations",
      "Side-by-side human-in-the-loop review and approval screens",
      "Role-Based Access Control (RBAC) and prompt-injection safeguards",
      "Per-user rate limiting, token cost caps, and fallback queues",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Discover & Assess",
        detail: "Evaluate whether generative AI, rule-based automation, or custom software best solves the bottleneck.",
      },
      {
        stage: "02",
        title: "Prepare & Design",
        detail: "Clean source documents, define permission rules, and design human-review interfaces.",
      },
      {
        stage: "03",
        title: "Build, Test & Pilot",
        detail: "Implement retrieval/extraction pipelines, test against edge cases, and pilot with a controlled user group.",
      },
      {
        stage: "04",
        title: "Launch & Improve",
        detail: "Deploy with cost controls, error monitoring, and ongoing evaluation as source data evolves.",
      },
    ],
    technologyChoices: [
      {
        tech: "Enterprise LLM APIs & Structured Outputs",
        whenWeUseIt: "Selected based on privacy, latency, accuracy, and cost requirements with zero public model training on your data.",
      },
      {
        tech: "Retrieval-Augmented Generation (RAG) & Vector Search",
        whenWeUseIt: "Grounds answers in your approved PDFs, manuals, and database records with citations.",
      },
    ],
    integrationsAndDependencies: [
      "Approved source documents (PDFs, SOPs, product catalogues) and API/database access to target software",
    ],
    expectedDeliverables: [
      "Feasibility & Data Readiness Specification",
      "Production AI Application with Human-in-the-Loop Review Interface",
      "Evaluation Test Suite, Cost Controls & Operator Runbook",
    ],
    postLaunchSupport:
      "Ongoing prompt evaluation, knowledge-base re-indexing, API cost monitoring, and model updates.",
    faqs: [
      {
        question: "Is generative AI suitable for every business?",
        answer:
          "No. Sometimes the best solution is rule-based automation, better software design, clearer data, or a simpler workflow—not generative AI.",
      },
    ],
    relatedServices: [
      { name: "Custom Business Software", href: "/services/custom-business-software" },
      { name: "Business Automation Consulting", href: "/services/business-automation-consulting" },
      { name: "Website, Application & Data Security", href: "/services/website-data-security" },
    ],
    relatedIndustries: [
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Education & Coaching", href: "/industries/education-and-coaching" },
      { name: "Professional Services", href: "/industries/professional-services" },
    ],
    relatedStages: [
      { name: "Startups", href: "/businesses/startups" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
  },
  {
    slug: "website-data-security",
    title: "Website, Application & Data Security",
    outcomeCategory: "Keep improving",
    shortSummary:
      "HTTPS/SSL configuration, OWASP-informed secure development, role-based access control, automated backups, tested deployments, and ongoing monitoring.",
    problemAddressed:
      "Expired certificates, weak admin access, untested backups, outdated dependencies, and rushed live deployments expose businesses to avoidable downtime and data loss.",
    bestFitCustomer:
      "Startups, local businesses, growing companies, and established organizations that want practical, honest security and backup controls built into their digital systems.",
    expectedOutcomeType:
      "Reduced operational risk, encrypted data in transit, role-protected admin access, verified backup recovery, and safer software releases.",
    metaTitle: "Website and Data Security Services | Webntric Software",
    metaDescription:
      "Protect your website, software, and business data with HTTPS, secure development, automated backups, tested deployments, monitoring, and ongoing support.",
    primaryKeyword: "website and data security services",
    h1: "Protect the systems your business depends on.",
    heroSubtitle:
      "Webntric builds and maintains websites and software with practical security controls, tested deployments, automated backups, and ongoing support designed to reduce avoidable risk.",
    detailedProblem: {
      heading: "Why operational security and reliability matter to everyday business",
      paragraphs: [
        "HTTPS protects data in transit. Backups help recover from loss. Testing reduces deployment mistakes. Monitoring helps identify problems. Together, these controls create a more reliable digital system—but no single control eliminates every risk.",
      ],
    },
    whoItIsFor: [
      "Businesses that depend on their website, customer portal, or billing software for daily operations",
      "Organizations that want automated, monitored website and database backups with tested restoration",
      "Teams seeking structured staging, pre-deployment testing, and post-deployment verification",
    ],
    whoMayNotNeedItYet: [
      "Organizations requiring a formal third-party ISO/SOC2 certification audit body (we implement engineering controls and can work alongside your external auditors)",
    ],
    whatWebntricDelivers: [
      {
        title: "SSL/HTTPS & Transport Security",
        description:
          "TLS encryption, HTTP-to-HTTPS redirects, certificate renewal monitoring, secure cookies, and HSTS headers.",
      },
      {
        title: "OWASP-Informed Secure Development & Access Control",
        description:
          "Input validation, parameterized queries, RBAC permissions, login rate limiting, and isolated secrets.",
      },
      {
        title: "Automated Website & Database Backups",
        description:
          "Scheduled snapshots, separate backup storage, rolling retention, failure alerts, and periodic restore testing.",
      },
      {
        title: "Tested Deployments & Post-Launch Monitoring",
        description:
          "15-point pre-deployment testing, 17-point post-deployment verification, dependency patching, and uptime checks.",
      },
    ],
    recommendedFeatures: [
      "HTTPS configuration, security headers & certificate renewal alerts",
      "Role-Based Access Control (RBAC) & admin brute-force protection",
      "Automated off-server database and file backups with restore verification",
      "Isolated staging environment and pre/post-deployment release checklists",
    ],
    projectStages: [
      {
        stage: "01",
        title: "Security & Backup Baseline Review",
        detail: "Audit existing HTTPS configuration, access controls, dependencies, and backup reliability.",
      },
      {
        stage: "02",
        title: "Hardening & Access Control",
        detail: "Implement security headers, input validation, least-privilege roles, and secret isolation.",
      },
      {
        stage: "03",
        title: "Backup & Staging Pipeline Setup",
        detail: "Configure scheduled backups, isolated storage, and pre/post-deployment checklists.",
      },
      {
        stage: "04",
        title: "Ongoing Monitoring & Restore Testing",
        detail: "Maintain dependencies, monitor uptime/backups, and periodically test restoration under your support plan.",
      },
    ],
    technologyChoices: [
      {
        tech: "TLS / HTTPS & HTTP Security Headers",
        whenWeUseIt: "Applied across all production web applications and websites to protect data in transit.",
      },
      {
        tech: "Automated Cloud & Local Database Snapshot Pipelines",
        whenWeUseIt: "Configured according to hosting environment and selected maintenance tier with off-server storage.",
      },
    ],
    integrationsAndDependencies: [
      "Hosting/DNS access, database credentials, and confirmation of backup retention tier",
    ],
    expectedDeliverables: [
      "Hardened HTTPS, Security Headers & Access Control Configuration",
      "Automated Backup Schedule & Documented Restoration Runbook",
      "Pre-Deployment & Post-Deployment Verification Reports",
    ],
    postLaunchSupport:
      "Available across Essential, Business Continuity, and Managed maintenance tiers covering patching, backup monitoring, and restore testing.",
    faqs: [
      {
        question: "Does SSL make my website completely secure?",
        answer:
          "No. SSL/HTTPS protects data in transit between the visitor and the website, but must be paired with secure coding, access control, automated backups, and ongoing maintenance.",
      },
    ],
    relatedServices: [
      { name: "Website Maintenance & Support", href: "/services/website-maintenance-and-support" },
      { name: "Web Application Development", href: "/services/web-application-development" },
      { name: "Generative AI Applications", href: "/services/generative-ai-applications" },
    ],
    relatedIndustries: [
      { name: "Healthcare & Clinics", href: "/industries/healthcare-and-clinics" },
      { name: "Retail & Wholesale", href: "/industries/retail-and-wholesale" },
      { name: "Professional Services", href: "/industries/professional-services" },
    ],
    relatedStages: [
      { name: "Startups", href: "/businesses/startups" },
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetailData | undefined {
  return SERVICES_DATA.find((svc) => svc.slug === slug);
}
