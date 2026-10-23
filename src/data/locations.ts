export interface LocationPageData {
  slug: string;
  city: string;
  regionLabel: string;
  shortTagline: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  localBusinessContext: {
    heading: string;
    paragraphs: string[];
    keyCommercialHubs: string[];
  };
  coreServicesForCity: Array<{
    title: string;
    href: string;
    description: string;
    localUseCase: string;
  }>;
  industriesServedInCity: Array<{
    name: string;
    href: string;
    localContext: string;
  }>;
  whyChooseWebntricInCity: Array<{
    title: string;
    detail: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const LOCATIONS_DATA: LocationPageData[] = [
  {
    slug: "gorakhpur",
    city: "Gorakhpur",
    regionLabel: "Purvanchal Commercial & Institutional Hub",
    shortTagline:
      "Direct in-person & remote software engineering, offline Windows POS billing, high-trust websites, and local SEO in Gorakhpur.",
    metaTitle:
      "Software Company in Gorakhpur | Website, POS Billing & SEO | Webntric Software",
    metaDescription:
      "Looking for a reliable software and website development company in Gorakhpur? Webntric Software builds custom websites, offline Windows POS billing software, mobile apps, and local SEO systems.",
    primaryKeyword: "software development company in Gorakhpur",
    secondaryKeywords: [
      "website development company in Gorakhpur",
      "billing and inventory software Gorakhpur",
      "offline POS software Gorakhpur",
      "SEO and digital marketing company Gorakhpur",
      "custom ERP software Gorakhpur",
    ],
    h1: "Software Development, Offline POS Billing, Websites & SEO in Gorakhpur",
    heroSubtitle:
      "Partner directly with our engineering and digital growth team in Gorakhpur to build fast business websites, internet-independent Windows billing & inventory systems, custom ERP workflows, and local search visibility.",
    heroImage: "/images/home/webntric-business-technology-team.webp",
    heroImageAlt:
      "Webntric Software engineering and strategy team collaborating with business owners in Gorakhpur",
    localBusinessContext: {
      heading:
        "Built for Gorakhpur's retail counters, wholesale mandis, healthcare clinics, and educational institutions.",
      paragraphs: [
        "Gorakhpur serves as the commercial, medical, and educational nerve center for the entire Purvanchal belt and neighboring cross-border trade corridors. From high-volume wholesale distributors and GIDA industrial units to multi-specialty hospitals, diagnostic centers, and coaching institutes, businesses in Gorakhpur handle intense daily footfall.",
        "Yet many enterprises still rely on disconnected paper registers, slow browser-based billing tools that freeze during internet drops, or outdated websites that fail to win buyer trust. Webntric Software engineers practical, high-speed software and digital growth systems tailored to how Gorakhpur businesses actually operate.",
      ],
      keyCommercialHubs: [
        "Golghar & Cinema Road Commercial Belt",
        "GIDA (Gorakhpur Industrial Development Authority)",
        "Medical College Road & Betiahata Healthcare Corridor",
        "Civil Lines, Mohaddipur & Taramandal",
        "Sahjanwa, Rustampur & Wholesale Mandi Hubs",
      ],
    },
    coreServicesForCity: [
      {
        title: "Offline Windows Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        description:
          "Sub-second barcode scanning, thermal/laser GST invoicing, multi-godown stock tracking, and party credit ledgers that run 100% offline on Windows PCs.",
        localUseCase:
          "Ideal for busy retail showrooms, medical stores, hardware wholesalers, and distribution depots across Gorakhpur.",
      },
      {
        title: "Website Development",
        href: "/services/website-development",
        description:
          "Fast, mobile-first corporate, clinic, school, and B2B websites engineered for immediate buyer trust and direct WhatsApp/phone enquiries.",
        localUseCase:
          "Helps hospitals, real estate developers, schools, and established businesses in Gorakhpur stand out online.",
      },
      {
        title: "Custom Business Software & ERP",
        href: "/services/custom-business-software",
        description:
          "Role-based internal software for manufacturing BOMs, school fee installments, OPD reception queues, and multi-branch reporting.",
        localUseCase:
          "Built for GIDA manufacturers, educational campuses, and growing regional distributors.",
      },
      {
        title: "Local SEO & Search Visibility",
        href: "/services/seo-services",
        description:
          "Google Business Profile optimization, city-intent landing pages, and technical SEO to capture high-intent local buyers.",
        localUseCase:
          "Captures 'near me' and city-specific searches for clinics, diagnostic labs, hotels, and local service providers.",
      },
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
        description:
          "Android and iOS applications for field sales order booking, customer loyalty, and student/parent portals.",
        localUseCase:
          "Empowers wholesale field reps and regional delivery fleets with offline-capable mobile ordering.",
      },
      {
        title: "Website Maintenance & Direct Support",
        href: "/services/website-maintenance-and-support",
        description:
          "Encrypted database backups, security updates, staff training, and responsive local technical support.",
        localUseCase:
          "On-ground and remote engineering continuity so your counter or website never stalls.",
      },
    ],
    industriesServedInCity: [
      {
        name: "Retail & Wholesale Distribution",
        href: "/industries/retail-and-wholesale",
        localContext:
          "High-speed counter POS, loose/packed unit conversion, and party khata tracking for Gorakhpur merchants.",
      },
      {
        name: "Healthcare & Diagnostic Clinics",
        href: "/industries/healthcare-and-clinics",
        localContext:
          "Patient-friendly doctor appointment websites, OPD token queues, and reception billing.",
      },
      {
        name: "Education & Coaching Institutes",
        href: "/industries/education-and-coaching",
        localContext:
          "Installment fee collection, defaulter reminders, admission portals, and parent communication.",
      },
      {
        name: "Manufacturing (GIDA Units)",
        href: "/industries/manufacturing",
        localContext:
          "Raw material to finished batch tracking, dealer order portals, and B2B industrial catalogues.",
      },
    ],
    whyChooseWebntricInCity: [
      {
        title: "Direct In-Person & Remote Discovery",
        detail:
          "Meet directly with our senior engineers in Gorakhpur to walk through your counter, godown, or office workflow before a single line of code is written.",
      },
      {
        title: "Engineered for Real Counter Conditions",
        detail:
          "Our offline Windows desktop software works without internet dependency and supports keyboard-only speed for peak rush hours.",
      },
      {
        title: "Written Scope & Transparent Milestones",
        detail:
          "Every project starts with a clear, plain-language scope document so you know exact deliverables and timelines upfront.",
      },
    ],
    faqs: [
      {
        question: "Can your team visit our office or store in Gorakhpur for requirement discovery?",
        answer:
          "Yes. Because our registered headquarters is in Gorakhpur, we regularly conduct in-person workflow reviews, hardware checks, and staff training sessions across Gorakhpur and GIDA, alongside fast remote support.",
      },
      {
        question: "Does your billing software require continuous internet in Gorakhpur?",
        answer:
          "No. Our native Windows POS and billing software runs on a local database on your counter PC, meaning barcode scanning and invoice printing never pause if broadband or mobile data drops.",
      },
      {
        question: "Can you help our Gorakhpur business rank higher on Google Maps and search?",
        answer:
          "Yes. We combine technical website SEO with structured LocalBusiness schema and Google Business Profile optimization so local customers searching for your services find and contact you first.",
      },
    ],
  },
  {
    slug: "noida",
    city: "Noida",
    regionLabel: "IT, SaaS, Manufacturing & Corporate Hub",
    shortTagline:
      "Full-stack web applications, custom enterprise software, conversion-focused websites, and B2B search growth for Noida businesses.",
    metaTitle:
      "Software & Website Development Company in Noida | Web Apps & SEO | Webntric",
    metaDescription:
      "Webntric Software partners with startups, manufacturers, and growing enterprises in Noida to build custom web applications, Next.js websites, ERP software, mobile apps, and B2B SEO.",
    primaryKeyword: "software development company in Noida",
    secondaryKeywords: [
      "website development company in Noida",
      "web application development Noida",
      "custom ERP and business software Noida",
      "SEO and B2B lead generation Noida",
      "mobile app development company Noida",
    ],
    h1: "Custom Software, Web Applications, Websites & SEO in Noida",
    heroSubtitle:
      "We help funded startups, B2B manufacturers, service enterprises, and retail networks across Noida build sub-second Next.js web platforms, scalable SaaS & internal portals, offline/hybrid POS software, and search-led acquisition pipelines.",
    heroImage: "/images/services/web-application-development-hero.webp",
    heroImageAlt:
      "Full-stack web application and enterprise software architecture for Noida businesses",
    localBusinessContext: {
      heading:
        "Engineering velocity and commercial clarity for Noida's fast-moving companies.",
      paragraphs: [
        "Noida combines high-growth technology startups in Sector 62 and Sector 125, large-scale electronics and industrial manufacturing across Phase II and Greater Noida, and expanding healthcare, real estate, and retail networks along the Noida-Greater Noida Expressway.",
        "Organizations in Noida need more than generic template websites or fragmented tools. They need clean, maintainable software architecture, fast conversion-engineered websites, and accountable senior engineers who deliver on schedule.",
      ],
      keyCommercialHubs: [
        "Sector 62, Sector 63 & Electronic City IT Corridor",
        "Noida-Greater Noida Expressway Corporate Belt",
        "Sector 18 & Central Noida Commercial Hub",
        "Phase II, Hosiery Complex & Surajpur Industrial Areas",
        "Greater Noida Knowledge Park & Ecotech Industrial Zones",
      ],
    },
    coreServicesForCity: [
      {
        title: "Web Application & SaaS Development",
        href: "/services/web-application-development",
        description:
          "Multi-tenant SaaS products, B2B customer portals, role-based dashboards, and API-driven platforms built with Next.js, TypeScript, and PostgreSQL.",
        localUseCase:
          "Ideal for Noida startups launching MVPs and mid-market enterprises replacing spreadsheet workflows.",
      },
      {
        title: "High-Conversion Website Development",
        href: "/services/website-development",
        description:
          "Custom-engineered corporate and product websites with sub-2-second mobile load times, technical SEO, and structured lead capture.",
        localUseCase:
          "Built for B2B firms, real estate developers, healthcare centers, and consulting practices in Noida.",
      },
      {
        title: "Custom Business Software & Manufacturing ERP",
        href: "/services/custom-business-software",
        description:
          "Tailored production tracking, BOM management, vendor procurement, and multi-warehouse inventory software.",
        localUseCase:
          "Engineered for Noida Phase II and Greater Noida manufacturing and distribution units.",
      },
      {
        title: "Technical SEO & B2B Lead Generation",
        href: "/services/seo-services",
        description:
          "Search-intent architecture, commercial landing pages, and conversion tracking designed to generate qualified B2B and local enquiries.",
        localUseCase:
          "Helps Noida companies reduce over-reliance on expensive paid clicks.",
      },
      {
        title: "Mobile App Development (Android & iOS)",
        href: "/services/mobile-app-development",
        description:
          "Cross-platform Flutter/React Native and native mobile applications with secure authentication and offline sync.",
        localUseCase:
          "For customer-facing apps and field operations teams across NCR.",
      },
      {
        title: "Business Automation Consulting",
        href: "/services/business-automation-consulting",
        description:
          "End-to-end workflow audits that connect CRM, billing, inventory, and reporting into a single source of truth.",
        localUseCase:
          "Eliminates manual data re-entry across multi-department Noida offices.",
      },
    ],
    industriesServedInCity: [
      {
        name: "Manufacturing & Industrial Units",
        href: "/industries/manufacturing",
        localContext:
          "BOM tracking, dispatch control, and B2B export/distributor websites for Noida & Greater Noida factories.",
      },
      {
        name: "Real Estate & Construction",
        href: "/industries/real-estate",
        localContext:
          "High-speed project microsites, CRM lead routing, and site-visit booking funnels.",
      },
      {
        name: "Professional & B2B Services",
        href: "/industries/professional-services",
        localContext:
          "Authoritative firm websites, client document portals, and organic search visibility.",
      },
      {
        name: "Education & Training Institutes",
        href: "/industries/education-and-coaching",
        localContext:
          "Admission funnels, student portals, and automated fee management for Knowledge Park institutions.",
      },
    ],
    whyChooseWebntricInCity: [
      {
        title: "Senior Full-Stack Architecture",
        detail:
          "You work directly with experienced engineers who write clean, documented TypeScript, Next.js, .NET, and SQL code—never outsourced junior templates.",
      },
      {
        title: "Unified Product + Growth Execution",
        detail:
          "We align your software interface, public website, and technical SEO so product credibility and lead generation work together.",
      },
      {
        title: "Predictable Milestone Delivery",
        detail:
          "Weekly staging previews, written scope sign-offs, and full source-code ownership give your leadership team complete visibility.",
      },
    ],
    faqs: [
      {
        question: "How do you collaborate with startups and enterprises in Noida?",
        answer:
          "We run structured video discovery workshops, shared staging environments, and milestone reviews, with scheduled on-site sessions in Noida when required for complex operational deployments.",
      },
      {
        question: "Can you modernize an existing slow website or legacy software for our Noida company?",
        answer:
          "Yes. We frequently audit and rebuild slow WordPress/legacy websites into high-speed Next.js platforms and migrate fragmented spreadsheet/ERP workflows into unified web or desktop systems.",
      },
      {
        question: "Do we retain full source-code ownership of custom software?",
        answer:
          "Yes. Upon project completion and final settlement, your organization owns the custom application source code, database schema, and operational data.",
      },
    ],
  },
  {
    slug: "delhi",
    city: "Delhi",
    regionLabel: "Wholesale Trade, Enterprise & Institutional Capital",
    shortTagline:
      "High-volume wholesale & retail POS billing, multi-branch ERP software, authoritative corporate websites, and search growth in Delhi.",
    metaTitle:
      "Software Development & Website Company in Delhi | POS, ERP & SEO | Webntric",
    metaDescription:
      "Webntric Software builds custom ERP & billing software, offline Windows POS systems, corporate websites, mobile apps, and SEO growth engines for businesses in Delhi.",
    primaryKeyword: "software development company in Delhi",
    secondaryKeywords: [
      "website development company in Delhi",
      "billing and inventory software Delhi",
      "wholesale POS software Delhi",
      "custom ERP software company Delhi",
      "SEO services company in Delhi",
    ],
    h1: "Custom Software, Wholesale & Retail POS, Websites & SEO in Delhi",
    heroSubtitle:
      "From high-velocity wholesale trading hubs and manufacturing units to multi-specialty healthcare centers and corporate headquarters across Delhi, we engineer software and digital systems that improve speed, accuracy, and buyer trust.",
    heroImage: "/images/services/custom-business-software-hero.webp",
    heroImageAlt:
      "Enterprise ERP, wholesale billing software, and corporate web systems for Delhi businesses",
    localBusinessContext: {
      heading:
        "Engineered for Delhi's high-volume wholesale markets, industrial estates, and service enterprises.",
      paragraphs: [
        "Delhi is home to some of the highest-volume wholesale trading markets, manufacturing estates, healthcare institutions, and professional firms in the world. Whether managing multi-godown dispatch in Okhla and Naraina, wholesale party ledgers in Central and West Delhi, or corporate client acquisition in South Delhi and Connaught Place, operational speed and credibility are non-negotiable.",
        "Webntric Software helps Delhi businesses replace fragile spreadsheets and slow legacy tools with fast offline Windows billing software, connected multi-branch web portals, and search-dominant corporate websites.",
      ],
      keyCommercialHubs: [
        "Connaught Place, Nehru Place & Bhikaji Cama Place Corporate Hubs",
        "Okhla, Naraina, Mayapuri & Bawana Industrial Areas",
        "Karol Bagh, Chandni Chowk, Sadar Bazar & Lajpat Nagar Trade Belts",
        "South Delhi, Saket & Vasant Kunj Healthcare & Professional Corridors",
        "Netaji Subhash Place (NSP), Rohini & West Delhi Commercial Centers",
      ],
    },
    coreServicesForCity: [
      {
        title: "Wholesale & Retail Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        description:
          "High-speed GST billing, multi-godown stock transfers, barcode label printing, and party outstanding ledgers.",
        localUseCase:
          "Built for Delhi's wholesale traders, distributors, and multi-counter retail showrooms.",
      },
      {
        title: "Offline Windows Desktop Software",
        href: "/services/offline-windows-software",
        description:
          "Keyboard-driven Windows applications with local SQLite/SQL Server databases and optional cloud sync for owner dashboards.",
        localUseCase:
          "Zero-lag counter and godown billing even in dense basement markets or industrial zones with spotty internet.",
      },
      {
        title: "Custom ERP & Business Automation",
        href: "/services/custom-business-software",
        description:
          "Custom role-based portals for order approvals, production tracking, dispatch challans, and branch consolidation.",
        localUseCase:
          "Connects factory floors in Okhla/Bawana with head-office accounts in real time.",
      },
      {
        title: "Corporate & B2B Website Development",
        href: "/services/website-development",
        description:
          "Authoritative, fast-loading websites that present your product catalogue, certifications, and enquiry paths clearly.",
        localUseCase:
          "Helps Delhi exporters, manufacturers, clinics, and professional firms convert institutional and local buyers.",
      },
      {
        title: "SEO & Qualified Lead Generation",
        href: "/services/seo-services",
        description:
          "Technical search optimization, local pack rankings, and high-intent Google Ads landing pages.",
        localUseCase:
          "Captures B2B procurement searches and local service enquiries across Delhi NCR.",
      },
      {
        title: "Mobile App Development for Field Teams",
        href: "/services/mobile-app-development",
        description:
          "Android and iOS apps for dealer order booking, field sales tracking, and customer self-service.",
        localUseCase:
          "Lets field sales reps take accurate stock-checked orders across Delhi NCR.",
      },
    ],
    industriesServedInCity: [
      {
        name: "Retail & Wholesale Trade",
        href: "/industries/retail-and-wholesale",
        localContext:
          "Tiered dealer pricing, credit limit alerts, and rapid counter billing for Delhi's trading hubs.",
      },
      {
        name: "Manufacturing & Exporters",
        href: "/industries/manufacturing",
        localContext:
          "Production batch tracking and specification-rich B2B websites for Okhla, Naraina, and Mayapuri units.",
      },
      {
        name: "Logistics & Distribution",
        href: "/industries/logistics-and-distribution",
        localContext:
          "Multi-depot stock visibility, route challans, and field salesperson mobile order apps.",
      },
      {
        name: "Healthcare & Multi-Specialty Clinics",
        href: "/industries/healthcare-and-clinics",
        localContext:
          "Doctor profile websites, patient appointment funnels, and OPD billing systems.",
      },
    ],
    whyChooseWebntricInCity: [
      {
        title: "Built for High-Volume Trading & Industrial Workflows",
        detail:
          "We understand party ledgers, challan-to-invoice conversion, multi-unit packaging, and keyboard-first billing speed.",
      },
      {
        title: "Hybrid Offline + Cloud Architecture",
        detail:
          "Keep your billing counters 100% offline-resilient while giving directors live encrypted summary dashboards on mobile and web.",
      },
      {
        title: "Accountable Post-Launch Support",
        detail:
          "Dedicated SLA maintenance, automated encrypted backups, and direct engineering access keep your operations running smoothly.",
      },
    ],
    faqs: [
      {
        question: "Can you customize billing and inventory software around our wholesale rate tiers in Delhi?",
        answer:
          "Yes. Unlike rigid off-the-shelf packages, we configure custom rate lists, party-wise credit limits, multi-godown transfers, and thermal/A4 invoice formats tailored to your exact trade workflow.",
      },
      {
        question: "Can our head office in Delhi view live sales from multiple branches or godowns?",
        answer:
          "Yes. We engineer hybrid sync architectures where each branch bills locally at zero latency and automatically syncs encrypted ledger and stock updates to a central owner dashboard.",
      },
      {
        question: "How long does a typical corporate website or custom software project take?",
        answer:
          "A focused business website typically launches in 3 to 5 weeks, while custom billing, portal, or ERP modules are delivered in structured 4-to-10-week milestones.",
      },
    ],
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    regionLabel: "Administrative, Retail, Healthcare & Education Hub",
    shortTagline:
      "Credible business websites, custom institutional & ERP software, offline POS billing, and local search growth in Lucknow.",
    metaTitle:
      "Software & Website Development Company in Lucknow | POS, ERP & SEO | Webntric",
    metaDescription:
      "Webntric Software helps businesses, hospitals, schools, real estate developers, and retailers in Lucknow build custom websites, offline POS billing software, ERP systems, and SEO.",
    primaryKeyword: "software development company in Lucknow",
    secondaryKeywords: [
      "website development company in Lucknow",
      "billing and inventory software Lucknow",
      "custom ERP software Lucknow",
      "SEO and digital marketing company Lucknow",
      "mobile app development Lucknow",
    ],
    h1: "Website Development, Custom ERP, POS Billing & SEO in Lucknow",
    heroSubtitle:
      "We partner with growing enterprises, retail chains, healthcare centers, educational institutions, and real estate developers in Lucknow to deliver high-trust websites, custom operational software, and steady search enquiries.",
    heroImage: "/images/services/website-development-hero.webp",
    heroImageAlt:
      "Custom website development and business software solutions for Lucknow enterprises",
    localBusinessContext: {
      heading:
        "Modern digital infrastructure for Lucknow's expanding commercial and institutional landscape.",
      paragraphs: [
        "Lucknow's rapid commercial expansion across Gomti Nagar, Vibhuti Khand, Hazratganj, Aliganj, and Transport Nagar has created intense competition among hospitals, educational institutions, real estate developers, retail showrooms, and regional distributors.",
        "To win discerning customers and run multi-team operations smoothly, Lucknow businesses need fast, trustworthy websites paired with dependable internal software for billing, admissions, inventory, and lead management.",
      ],
      keyCommercialHubs: [
        "Vibhuti Khand & Gomti Nagar Corporate & IT Belt",
        "Hazratganj & Indira Nagar Commercial Corridors",
        "Amausi & Transport Nagar Logistics & Distribution Hub",
        "Aliganj, Jankipuram & Sitapur Road Institutional Belt",
        "Aminabad, Chowk & Charbagh Wholesale & Retail Markets",
      ],
    },
    coreServicesForCity: [
      {
        title: "Website Development & Redesign",
        href: "/services/website-development",
        description:
          "Fast, mobile-first websites engineered to establish immediate credibility and convert visitors into phone and WhatsApp enquiries.",
        localUseCase:
          "Ideal for Lucknow hospitals, real estate groups, hotels, schools, and professional firms.",
      },
      {
        title: "Offline Windows POS & Billing Software",
        href: "/services/billing-and-inventory-software",
        description:
          "Barcode invoicing, stock alerts, GST reports, and customer credit tracking that run smoothly without internet lag.",
        localUseCase:
          "Built for retail showrooms, pharmacies, supermarkets, and wholesalers across Lucknow.",
      },
      {
        title: "Custom Institutional & Business ERP",
        href: "/services/custom-business-software",
        description:
          "Tailored web and desktop software for school fee management, clinic OPD queues, contractor billing, and multi-branch stock.",
        localUseCase:
          "Replaces scattered spreadsheets for growing Lucknow institutions and multi-branch companies.",
      },
      {
        title: "Local & Technical SEO Services",
        href: "/services/seo-services",
        description:
          "City-focused search optimization and Google Business Profile management to capture high-intent buyers in Lucknow.",
        localUseCase:
          "Drives organic patient, student, and buyer enquiries without relying solely on paid ads.",
      },
      {
        title: "Social Media & Lead Generation",
        href: "/services/lead-generation",
        description:
          "High-conversion landing pages, structured social content calendars, and targeted paid campaigns.",
        localUseCase:
          "Generates qualified site visits and consultation bookings for real estate, clinics, and academies.",
      },
      {
        title: "Ongoing Maintenance & Support",
        href: "/services/website-maintenance-and-support",
        description:
          "Proactive security updates, automated backups, speed optimization, and direct engineering support.",
        localUseCase:
          "Keeps your website and operational software reliable year-round.",
      },
    ],
    industriesServedInCity: [
      {
        name: "Healthcare & Specialty Clinics",
        href: "/industries/healthcare-and-clinics",
        localContext:
          "Patient-trust websites, doctor scheduling, and OPD reception billing across Lucknow.",
      },
      {
        name: "Education, Schools & Coaching",
        href: "/industries/education-and-coaching",
        localContext:
          "Admission enquiry funnels, installment fee portals, and student record systems.",
      },
      {
        name: "Real Estate & Infrastructure",
        href: "/industries/real-estate",
        localContext:
          "Project launch microsites, plot/flat inventory trackers, and lead follow-up workflows.",
      },
      {
        name: "Hospitality, Hotels & Banquets",
        href: "/industries/hospitality",
        localContext:
          "Direct room and banquet enquiry websites plus fast restaurant KOT and counter billing.",
      },
    ],
    whyChooseWebntricInCity: [
      {
        title: "Fast Regional & Remote Collaboration",
        detail:
          "Our team works closely with Lucknow business owners through structured discovery sessions, rapid staging previews, and on-site deployment support when needed.",
      },
      {
        title: "Designed for Staff Ease of Use",
        detail:
          "We design clean, uncluttered billing and admin interfaces that receptionists, cashiers, and office staff can master in a single day.",
      },
      {
        title: "Complete Digital + Operational Partner",
        detail:
          "From your public website and Google search rankings to your internal billing and inventory software, everything is engineered under one roof.",
      },
    ],
    faqs: [
      {
        question: "Do you build both websites and internal billing/ERP software for Lucknow businesses?",
        answer:
          "Yes. Many of our clients in Lucknow start with either a high-credibility website or an offline POS/ERP module and expand into a connected digital system over time.",
      },
      {
        question: "Can you help our hospital, school, or real estate project in Lucknow generate more local enquiries?",
        answer:
          "Yes. We combine fast mobile landing pages with local SEO and disciplined lead-generation funnels so enquiries flow directly to your admissions or sales desk.",
      },
      {
        question: "How do you handle staff training and post-launch support?",
        answer:
          "Every deployment includes hands-on role-based training for your staff, written/video reference guides, automated database backups, and direct WhatsApp/phone engineering support.",
      },
    ],
  },
  {
    slug: "gurugram",
    city: "Gurugram",
    regionLabel: "Enterprise, SaaS, FinTech & Modern Commerce Hub",
    shortTagline:
      "Product engineering, custom web & mobile applications, enterprise workflow automation, and high-intent search growth in Gurugram.",
    metaTitle:
      "Software Development & Web App Company in Gurugram | Custom Software & SEO | Webntric",
    metaDescription:
      "Webntric Software partners with startups, enterprises, and growing brands in Gurugram to engineer custom web applications, mobile apps, high-speed websites, ERP tools, and SEO.",
    primaryKeyword: "software development company in Gurugram",
    secondaryKeywords: [
      "web application development Gurugram",
      "website development company in Gurugram",
      "custom software company Gurgaon",
      "mobile app development Gurugram",
      "B2B SEO and lead generation Gurugram",
    ],
    h1: "Product Engineering, Web & Mobile Apps, Custom Software & SEO in Gurugram",
    heroSubtitle:
      "We work with ambitious founders, operations leaders, and established enterprises in Gurugram to architect resilient web applications, mobile products, internal automation systems, and high-converting digital presences.",
    heroImage: "/images/services/business-automation-consulting-hero.webp",
    heroImageAlt:
      "Product engineering and custom software architecture session for Gurugram enterprises",
    localBusinessContext: {
      heading:
        "High-trust product engineering and workflow automation for Gurugram's growth companies.",
      paragraphs: [
        "From Cyber City, Udyog Vihar, and Golf Course Road to Sohna Road and Manesar's industrial belt, Gurugram is home to fast-scaling startups, corporate headquarters, logistics networks, and modern healthcare and hospitality brands.",
        "Whether you are launching a customer-facing SaaS platform, automating multi-branch operations between corporate offices and Manesar plants, or upgrading your corporate website to win enterprise deals, Webntric Software delivers disciplined engineering without bloated agency overhead.",
      ],
      keyCommercialHubs: [
        "DLF Cyber City, Cyber Park & Phase I–V Corporate Belt",
        "Golf Course Road & Golf Course Extension Road",
        "Udyog Vihar Phase I–V & Sector 44 Institutional Area",
        "Sohna Road & Southern Peripheral Road (SPR) Commercial Hubs",
        "IMT Manesar Industrial & Logistics Corridor",
      ],
    },
    coreServicesForCity: [
      {
        title: "Custom Web Application & Portal Development",
        href: "/services/web-application-development",
        description:
          "Secure, high-concurrency web applications, client portals, and internal operational platforms built on modern TypeScript, Next.js, and relational databases.",
        localUseCase:
          "Built for Gurugram SaaS startups, B2B platforms, and multi-branch service companies.",
      },
      {
        title: "Mobile App Development (iOS & Android)",
        href: "/services/mobile-app-development",
        description:
          "Polished customer apps and offline-capable field operations apps with clean UX and reliable API synchronization.",
        localUseCase:
          "Supports consumer brands, logistics fleets, and field service teams across Gurugram & NCR.",
      },
      {
        title: "Enterprise & Startup Website Development",
        href: "/services/website-development",
        description:
          "Apple-grade visual clarity, sub-second Core Web Vitals performance, and conversion-focused messaging.",
        localUseCase:
          "Helps Gurugram startups and B2B firms pass investor, enterprise procurement, and buyer due diligence.",
      },
      {
        title: "Business Automation & Custom ERP",
        href: "/services/business-automation-consulting",
        description:
          "Workflow consulting and custom software that eliminate manual spreadsheet handoffs across sales, finance, and operations.",
        localUseCase:
          "Connects Udyog Vihar / Cyber City offices with IMT Manesar production and warehouse teams.",
      },
      {
        title: "Technical SEO & Search-Led Growth",
        href: "/services/seo-services",
        description:
          "Programmatic and editorial SEO, technical site audits, and high-intent commercial landing pages.",
        localUseCase:
          "Builds compounding organic customer acquisition for B2B, healthcare, and D2C brands.",
      },
      {
        title: "Dedicated Maintenance & SLA Support",
        href: "/services/website-maintenance-and-support",
        description:
          "Continuous security patching, performance monitoring, database backups, and iterative feature delivery.",
        localUseCase:
          "Provides reliable ongoing engineering bandwidth after your initial product launch.",
      },
    ],
    industriesServedInCity: [
      {
        name: "Professional, FinTech & B2B Services",
        href: "/industries/professional-services",
        localContext:
          "High-credibility corporate websites, secure client portals, and B2B search authority.",
      },
      {
        name: "Logistics, Fleet & Distribution",
        href: "/industries/logistics-and-distribution",
        localContext:
          "Dispatch dashboards, warehouse inventory control, and field mobility apps.",
      },
      {
        name: "Manufacturing & Auto-Ancillary (Manesar)",
        href: "/industries/manufacturing",
        localContext:
          "Production batch tracking, vendor portals, and industrial B2B web presence.",
      },
      {
        name: "Healthcare, Diagnostics & Wellness",
        href: "/industries/healthcare-and-clinics",
        localContext:
          "Multi-clinic appointment systems, patient portals, and local search visibility.",
      },
    ],
    whyChooseWebntricInCity: [
      {
        title: "Pragmatic MVP-to-Scale Architecture",
        detail:
          "We help you ship a clean, focused version-one product quickly while structuring the database and API layer so phase-two scaling never requires a rewrite.",
      },
      {
        title: "Direct Engineering Communication",
        detail:
          "Collaborate directly with senior architects and product engineers rather than layers of non-technical account managers.",
      },
      {
        title: "Performance & Security by Default",
        detail:
          "Role-based access control, encrypted backups, Core Web Vitals optimization, and clean code come standard on every engagement.",
      },
    ],
    faqs: [
      {
        question: "Can you work as an end-to-end product engineering partner for our Gurugram startup?",
        answer:
          "Yes. We take startups from initial requirement scoping and UI architecture through full-stack web/mobile development, launch, and phase-two iteration.",
      },
      {
        question: "Do you integrate custom software with existing CRM, accounting, or payment gateways?",
        answer:
          "Yes. We build clean API integrations with payment gateways, WhatsApp Business APIs, GST/accounting exports, and internal databases.",
      },
      {
        question: "How do we start a project discussion?",
        answer:
          "Share your current bottleneck or product brief via our contact form or WhatsApp. A senior engineer will review your requirement and schedule a focused discovery call within one business day.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return LOCATIONS_DATA.find((loc) => loc.slug === slug);
}
