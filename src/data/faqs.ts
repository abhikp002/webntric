export interface FAQItem {
  id: string;
  category:
    | "getting-started"
    | "websites-seo"
    | "custom-software"
    | "process-security"
    | "support";
  question: string;
  answer: string;
  relatedLink?: {
    label: string;
    href: string;
  };
  showOnHome?: boolean;
}

export const FAQ_CATEGORIES: Array<{
  id: FAQItem["category"];
  label: string;
  description: string;
}> = [
  {
    id: "getting-started",
    label: "Getting Started & Estimates",
    description: "Choosing the right service, scoping, and project timelines.",
  },
  {
    id: "websites-seo",
    label: "Websites, Content & SEO",
    description: "Website redesigns, hosting, copywriting, and search rankings.",
  },
  {
    id: "custom-software",
    label: "Offline & Custom Software",
    description: "Windows desktop applications, billing, inventory, and APIs.",
  },
  {
    id: "process-security",
    label: "Process, Revisions & Security",
    description: "Confidentiality agreements, revisions, and data protection.",
  },
  {
    id: "support",
    label: "Post-Launch Support",
    description: "Maintenance, updates, and long-term partnership after launch.",
  },
];

export const CORE_FAQS: FAQItem[] = [
  {
    id: "which-service-needed",
    category: "getting-started",
    question: "How do I know which service my business needs?",
    answer:
      "You do not need to diagnose the technical category yourself before contacting us. In our first conversation, we ask about your current workflow, customer acquisition bottleneck, and team capacity. If a focused website update or an off-the-shelf tool will solve your problem better than custom software, we will tell you plainly and recommend the simplest effective starting step.",
    relatedLink: {
      label: "Explore services by business outcome",
      href: "/services",
    },
    showOnHome: true,
  },
  {
    id: "work-with-startups",
    category: "getting-started",
    question: "Do you work with startups?",
    answer:
      "Yes. We help early-stage founders launch high-trust business websites, lean web applications, and mobile MVPs. Our focus with startups is scope discipline: we help you decide what must be built for version one to test customer demand, and what can safely wait until phase two so your budget goes toward validation rather than unnecessary complexity.",
    relatedLink: {
      label: "See digital solutions for startups",
      href: "/businesses/startups",
    },
    showOnHome: true,
  },
  {
    id: "improve-existing-website",
    category: "websites-seo",
    question: "Can you improve an existing website?",
    answer:
      "Yes. Before recommending a full rebuild, we audit your existing website's codebase, mobile speed, content clarity, and search console health. If the foundation is sound, we can improve its pages, speed, and conversion paths incrementally. We only recommend a ground-up redesign when the existing setup is structurally broken, insecure, or more expensive to patch than to replace.",
    relatedLink: {
      label: "Learn about Website Development & Redesigns",
      href: "/services/website-development",
    },
    showOnHome: true,
  },
  {
    id: "software-work-offline",
    category: "custom-software",
    question: "Can your software work offline?",
    answer:
      "Yes. We engineer native Windows desktop applications using C# / .NET paired with local SQLite, PostgreSQL, or MS SQL Server databases. Your counter billing, barcode scanning, receipt printing, and stock ledgers operate with zero internet dependency. Where multi-branch visibility is needed, we can also configure optional background synchronization whenever an internet connection becomes available.",
    relatedLink: {
      label: "Explore Offline Windows Software",
      href: "/services/offline-windows-software",
    },
    showOnHome: true,
  },
  {
    id: "custom-billing-inventory",
    category: "custom-software",
    question: "Can you build custom billing and inventory software?",
    answer:
      "Yes. Unlike rigid accounting packages, we build billing and inventory systems tailored to your exact counter and warehouse workflow—including custom GST/tax invoice formats, loose and bulk unit conversions (piece, box, carton, kg), thermal and A4 printer layouts, barcode generation, supplier purchase registers, and customer credit (udhaar) ledgers.",
    relatedLink: {
      label: "See Billing & Inventory Software details",
      href: "/services/billing-and-inventory-software",
    },
    showOnHome: true,
  },
  {
    id: "provide-website-content",
    category: "websites-seo",
    question: "Do you provide content for websites?",
    answer:
      "Yes. Most business owners are too busy running operations to write website copy from scratch. We interview you about how your business works, what customers ask you most often, and what sets your service apart—then write clear, structured, human-sounding copy for every page, ready for your review and approval.",
    relatedLink: {
      label: "View our website development scope",
      href: "/services/website-development",
    },
    showOnHome: false,
  },
  {
    id: "seo-after-development",
    category: "websites-seo",
    question: "Do you offer SEO after website development?",
    answer:
      "Every website we build includes technical SEO fundamentals at launch—clean URL hierarchy, fast Core Web Vitals, semantic headings, metadata, sitemap, and structured schema. After launch, we offer ongoing SEO services covering local search optimization, search-intent page expansion, content planning, and monthly Search Console reporting.",
    relatedLink: {
      label: "Explore our SEO Services",
      href: "/services/seo-services",
    },
    showOnHome: true,
  },
  {
    id: "project-timeline",
    category: "getting-started",
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope and how quickly content and feedback are reviewed. Typically, a focused business website takes 3 to 5 weeks; a custom billing or offline Windows application takes 4 to 8 weeks; and a multi-role web or mobile application takes 6 to 12 weeks. We provide a written milestone schedule before development starts.",
    relatedLink: {
      label: "See how our 6-stage process works",
      href: "/process",
    },
    showOnHome: true,
  },
  {
    id: "information-for-estimate",
    category: "getting-started",
    question: "What information do you need before giving an estimate?",
    answer:
      "You do not need a formal technical specification. We only need to understand: (1) what your business does, (2) what problem you are trying to solve or what is currently slowing you down, (3) who will use the website or software, and (4) any target launch timeframe. From a short discovery call, we prepare a clear scope document with options, timelines, and transparent pricing.",
    relatedLink: {
      label: "Start a project discussion",
      href: "/contact",
    },
    showOnHome: true,
  },
  {
    id: "post-launch-maintenance",
    category: "support",
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Launching is the beginning of real-world usage, not the end of our involvement. Every project includes a post-launch stabilization period, followed by optional monthly maintenance plans or on-demand support covering security updates, backup verification, content changes, performance monitoring, and feature improvements.",
    relatedLink: {
      label: "Read our Post-Launch Support Promise",
      href: "/support",
    },
    showOnHome: true,
  },
  {
    id: "existing-hosting-provider",
    category: "websites-seo",
    question: "Can you work with an existing hosting provider?",
    answer:
      "Yes. We can deploy to your existing cloud or hosting accounts (such as Vercel, AWS, DigitalOcean, Cloudflare, or standard Linux VPS setups) and work with your current domain registrar. If your current hosting is slow or unsuitable for the technology required, we will explain the trade-offs and help you migrate safely without email or DNS downtime.",
    showOnHome: false,
  },
  {
    id: "confidentiality-agreements",
    category: "process-security",
    question: "Do you sign confidentiality agreements?",
    answer:
      "Yes. We routinely sign Non-Disclosure Agreements (NDAs) before reviewing proprietary business workflows, internal pricing rules, or existing source code. Your operational data, customer records, and custom business logic remain strictly confidential and belong to your organization.",
    relatedLink: {
      label: "Review our delivery & security standards",
      href: "/process",
    },
    showOnHome: true,
  },
  {
    id: "project-revisions",
    category: "process-security",
    question: "How do project revisions work?",
    answer:
      "Instead of disappearing for weeks and revealing a finished product at the end, we share work in clear stages: sitemap and wireframes first, interactive UI design second, and working software milestones third. Each stage includes structured review and revision rounds so adjustments happen early when they are fast and easy to make.",
    relatedLink: {
      label: "See our milestone & approval workflow",
      href: "/process",
    },
    showOnHome: false,
  },
  {
    id: "data-security-handling",
    category: "process-security",
    question: "How do you handle data security?",
    answer:
      "We build security into the architecture from day one: role-based access permissions for staff, parameterized database queries, encrypted credentials stored in environment variables, HTTPS/TLS transport, and automated local or off-site database backups. For offline Windows systems, your business database stays entirely on your own hardware under your physical and password control.",
    showOnHome: false,
  },
  {
    id: "api-third-party-integrations",
    category: "custom-software",
    question: "Can you integrate APIs and third-party tools?",
    answer:
      "Yes. We integrate payment gateways (Razorpay, Stripe, PayU), WhatsApp Business and SMS alerts, GST/invoicing utilities, barcode and thermal printer hardware, Google Analytics/Search Console, and custom REST or GraphQL APIs so your website and internal software exchange data cleanly.",
    relatedLink: {
      label: "Explore Business Automation & Integrations",
      href: "/services/business-automation-consulting",
    },
    showOnHome: false,
  },
];
