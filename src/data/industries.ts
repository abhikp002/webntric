export interface IndustryDetailData {
  slug: string;
  title: string;
  shortLabel: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  heroSubtitle: string;
  operationalProblems: Array<{
    title: string;
    detail: string;
  }>;
  customerExpectations: string[];
  technologyNeedsAndTradeoffs: {
    heading: string;
    points: Array<{
      label: string;
      explanation: string;
    }>;
  };
  suitableServices: Array<{
    name: string;
    href: string;
    howItHelps: string;
  }>;
  relatedStages: Array<{
    name: string;
    href: string;
  }>;
  objectionAddressed: {
    question: string;
    answer: string;
  };
}

export const INDUSTRIES_DATA: IndustryDetailData[] = [
  {
    slug: "retail-and-wholesale",
    title: "Retail and Wholesale",
    shortLabel: "Retail & Wholesale",
    summary:
      "Fast counter POS billing, carton-to-piece inventory control, party credit ledgers, and local search visibility for retail stores and wholesale traders.",
    metaTitle: "Retail & Wholesale Software & Digital Solutions | Billing, POS & Stock | Webntric",
    metaDescription:
      "Custom offline POS billing, barcode inventory, party credit ledgers, and B2B/local websites built for retail stores and wholesale distributors.",
    primaryKeyword: "retail and wholesale billing and inventory software",
    h1: "Faster counter billing, accurate godown stock, and clear online catalogues for retail and wholesale.",
    heroSubtitle:
      "In retail and wholesale trading, margins are won or lost on counter speed, stock accuracy between the godown and the shop floor, and disciplined party credit tracking.",
    operationalProblems: [
      {
        title: "Counter bottlenecks during peak rush hours",
        detail:
          "Browser-based billing software that waits for an internet round-trip—or requires five mouse clicks per item—creates long queues and frustrated customers.",
      },
      {
        title: "Carton, box, and loose unit stock mismatches",
        detail:
          "Goods arrive from suppliers in master cartons or sacks and are sold in boxes, dozens, pieces, or kilograms. Standard tools fail to reconcile multi-unit conversions accurately.",
      },
      {
        title: "Unrecorded party credit (udhaar) and rate-tier confusion",
        detail:
          "Wholesale buyers, regular contractors, and walk-in retail customers each get different rate lists and credit limits that are difficult to remember manually.",
      },
      {
        title: "Missing local discovery for showrooms and wholesale depots",
        detail:
          "New retailers and institutional buyers searching Google for regional wholesalers or authorized dealers cannot see your product categories or contact details clearly.",
      },
    ],
    customerExpectations: [
      "Immediate barcode scanning and printed thermal or GST tax bills without waiting at the counter",
      "Accurate balance carried forward on party credit statements without calculation disputes",
      "WhatsApp-ready PDF invoices and stock availability confirmation for wholesale buyers",
      "Clear store timings, location pin, and product brands listed on mobile search",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Choosing between Offline Windows POS and Multi-Branch Cloud Sync",
      points: [
        {
          label: "Single-Store / Single-Godown Setup",
          explanation:
            "An Offline Windows Desktop application (C# / .NET + local database) is usually best—giving you zero internet dependency, instant F-key shortcuts, and direct thermal/barcode printer control.",
        },
        {
          label: "Multi-Counter Same Building",
          explanation:
            "Multiple Windows billing counters connected over a local wired LAN to a main office PC database—still 100% independent of internet outages.",
        },
        {
          label: "Multi-Branch Across Cities",
          explanation:
            "Local offline billing at each counter paired with background cloud synchronization so the owner can check consolidated daily sales and branch stock from any phone or laptop.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        howItHelps: "Custom POS billing, multi-unit stock deduction, barcode printing, and party credit ledgers.",
      },
      {
        name: "Offline Windows Software",
        href: "/services/offline-windows-software",
        howItHelps: "Uninterrupted counter operation even when broadband or mobile data drops.",
      },
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "Showcase product lines, authorized dealerships, and wholesale enquiry forms online.",
      },
      {
        name: "SEO Services",
        href: "/services/seo-services",
        howItHelps: "Rank for local showroom and regional wholesale distributor searches.",
      },
    ],
    relatedStages: [
      { name: "Traditional Businesses", href: "/businesses/traditional-businesses" },
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
    objectionAddressed: {
      question: "Can the same software handle both walk-in retail cash sales and wholesale credit GST bills?",
      answer:
        "Yes. We configure separate billing modes or keyboard toggles so your operator can switch between a fast retail thermal receipt and a detailed B2B wholesale GST invoice (with party GSTIN, transport bilty details, and previous balance) in one click.",
    },
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortLabel: "Manufacturing",
    summary:
      "Raw-material-to-dispatch production tracking, Bill of Materials (BOM) software, and specification-grade B2B websites for manufacturers.",
    metaTitle: "Manufacturing Software & B2B Website Solutions | Inventory & Production | Webntric",
    metaDescription:
      "Practical custom software for manufacturers: Bill of Materials (BOM), raw material to finished goods tracking, job-work registers, and high-trust B2B specification websites.",
    primaryKeyword: "manufacturing software and b2b website development",
    h1: "Production visibility on the factory floor and stronger credibility with institutional buyers.",
    heroSubtitle:
      "Manufacturers face two distinct challenges: internally, tracking raw material consumption, scrap, and dispatch across production stages; externally, presenting technical capability clearly to B2B procurement teams.",
    operationalProblems: [
      {
        title: "Raw material wastage and batch variance discovered too late",
        detail:
          "When raw material issue and finished goods output are recorded on paper slips and entered into accounting software weeks later, abnormal scrap or pilferage goes unnoticed.",
      },
      {
        title: "Job-work and vendor processing tracked over phone calls",
        detail:
          "Materials sent out for plating, dyeing, cutting, or fabrication are difficult to reconcile by challan weight and return quantity.",
      },
      {
        title: "Bloated enterprise ERPs that plant supervisors refuse to use",
        detail:
          "Full-scale ERPs often require dozens of mandatory fields that slow down floor supervisors, causing them to revert to whiteboards.",
      },
      {
        title: "Outdated B2B websites that lose institutional RFQs",
        detail:
          "Corporate procurement officers and export buyers inspect your website for machinery capacity, quality certifications, and downloadable datasheets before sending an enquiry.",
      },
    ],
    customerExpectations: [
      "Clear technical specification tables, tolerances, and downloadable PDF catalogues on your website",
      "Structured RFQ (Request for Quotation) forms that capture grade, quantity, and delivery schedule",
      "Accurate batch traceability and timely dispatch challan notifications",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Practical Factory Software vs. Monolithic ERP Packages",
      points: [
        {
          label: "Focused BOM & Production Modules",
          explanation:
            "Instead of forcing a 40-module ERP onto your plant, we build focused software around your actual process: Purchase Inward -> Raw Material Issue -> BOM Batch Output -> Scrap Variance -> Dispatch Challan.",
        },
        {
          label: "Plant Floor Offline Resilience",
          explanation:
            "For factory units located in industrial estates with patchy internet, local desktop or hybrid LAN software ensures weighbridge and dispatch gate slips print without delay.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        howItHelps: "BOM consumption tracking, job-work challan reconciliation, and batch dispatch registers.",
      },
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "Specification-focused B2B websites with product filtering, datasheets, and RFQ intake.",
      },
      {
        name: "Offline Windows Software",
        href: "/services/offline-windows-software",
        howItHelps: "Gate pass, weighbridge, and store inventory software for industrial locations.",
      },
      {
        name: "SEO Services",
        href: "/services/seo-services",
        howItHelps: "Technical SEO for industrial product categories and B2B buyer search queries.",
      },
    ],
    relatedStages: [
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
      { name: "Traditional Businesses", href: "/businesses/traditional-businesses" },
    ],
    objectionAddressed: {
      question: "Can your software export sales and purchase summaries for our existing CA / accounting setup?",
      answer:
        "Yes. You do not need to change how your Chartered Accountant files returns. We build clean Excel/CSV/XML export utilities so your production and billing software hands off cleanly to your accounting team.",
    },
  },
  {
    slug: "education-and-coaching",
    title: "Education and Coaching",
    shortLabel: "Education & Coaching",
    summary:
      "Student fee installment ledgers, batch/attendance registries, parent portals, and seasonal admission lead systems for schools and coaching institutes.",
    metaTitle: "Education & Coaching Institute Software, Websites & Lead Systems | Webntric",
    metaDescription:
      "Custom fee management, offline/online student registries, parent portals, credible institutional websites, and admission lead generation for schools and coaching institutes.",
    primaryKeyword: "school and coaching institute management software",
    h1: "Streamlined fee and student administration paired with credible admission systems.",
    heroSubtitle:
      "Schools, colleges, and coaching institutes manage two intense cycles every year: handling thousands of parent and student admission enquiries, and running daily fee collection, attendance, and batch administration smoothly.",
    operationalProblems: [
      {
        title: "Morning rush at the fee counter and missed installment tracking",
        detail:
          "Tracking custom fee concessions, sibling discounts, transport fees, and pending installments in paper registers or Excel leads to long parent queues and uncollected dues.",
      },
      {
        title: "Parents calling the office repeatedly for basic information",
        detail:
          "Without a clear website showing batch timings, syllabus structures, faculty profiles, and admission procedures, counsellors spend hours answering repetitive phone questions.",
      },
      {
        title: "Admission season ad budgets wasted on casual clicks",
        detail:
          "Boosting generic admission posters on social media without a dedicated batch landing page and structured enquiry sheet results in lost student leads.",
      },
    ],
    customerExpectations: [
      "Clear, honest information on courses, batch schedules, faculty experience, and fee structures on mobile",
      "Instant printed or WhatsApp-shared fee receipts showing paid amount and remaining installment balance",
      "Timely communication regarding attendance, test schedules, and academic notices",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Connecting the Public Institutional Website with Internal Fee & Batch Administration",
      points: [
        {
          label: "Offline/Hybrid Fee Counter Speed",
          explanation:
            "Fee counters cannot afford to stop when internet drops on the 5th or 10th of the month. Our Windows or hybrid fee modules print receipts and update student ledgers immediately.",
        },
        {
          label: "Structured Admission Funnel",
          explanation:
            "Dedicated landing pages per course/stream (e.g., Foundation, NEET/JEE, Commerce, Civil Services, School Admissions) that route enquiries directly to counsellors.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        howItHelps: "Student admission registry, batch allocation, fee installment ledger, and defaulter reports.",
      },
      {
        name: "Offline Windows Software",
        href: "/services/offline-windows-software",
        howItHelps: "Fast, internet-independent fee receipt printing and daily cashbook reconciliation.",
      },
      {
        name: "VidyaSetu (Our SaaS School ERP)",
        href: "https://vidyasetu.pro/",
        howItHelps: "Webntric's dedicated cloud school ERP platform for real-time admissions, attendance, fees, transport, and parent communication.",
      },
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "Credible school or coaching website with courses, results, notices, and enquiry forms.",
      },
      {
        name: "Lead Generation",
        href: "/services/lead-generation",
        howItHelps: "Seasonal admission landing pages and targeted search/social enquiry campaigns.",
      },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
    objectionAddressed: {
      question: "Can we handle custom fee concessions and flexible installment dates for individual students?",
      answer:
        "Yes. Unlike rigid school ERPs that force every student in a class into an identical fee template, we allow authorized administrators to apply custom scholarship/concession notes and custom installment schedules with a complete audit trail.",
    },
  },
  {
    slug: "healthcare-and-clinics",
    title: "Healthcare and Clinics",
    shortLabel: "Healthcare & Clinics",
    summary:
      "Patient-friendly clinic websites, accurate local search visibility, and calm reception OPD token and billing software.",
    metaTitle: "Healthcare & Clinic Websites, OPD Billing & Patient Software | Webntric",
    metaDescription:
      "High-trust websites, local SEO, appointment scheduling, and offline/online OPD billing and patient record software for clinics, doctors, and diagnostic centers.",
    primaryKeyword: "clinic website development and opd billing software",
    h1: "Clearer patient information online and calmer reception workflows inside your clinic.",
    heroSubtitle:
      "When a patient or family member searches for a doctor, clinic, or diagnostic center, they are often anxious and in a hurry. Your digital presence should give them immediate clarity, and your reception software should keep queues orderly.",
    operationalProblems: [
      {
        title: "Patients struggling to verify doctor timings, specialties, and directions",
        detail:
          "Outdated Google listings or slow websites force patients to call the reception desk repeatedly just to ask if a doctor is available today.",
      },
      {
        title: "Reception congestion during morning and evening OPD hours",
        detail:
          "Writing paper OPD slips, searching for a returning patient's old registration number, and calculating diagnostic/pharmacy bills manually slows down the entire waiting area.",
      },
      {
        title: "Fragmented lab, pharmacy, and consultation billing",
        detail:
          "Without a connected register, reconciling daily consultation fees, diagnostic tests, and medicine sales takes hours each night.",
      },
    ],
    customerExpectations: [
      "Accurate doctor qualifications, OPD timings, department lists, and one-tap Google Maps directions on mobile",
      "Simple appointment request or WhatsApp confirmation without complicated patient portal logins",
      "Fast OPD registration and clear printed receipts at the reception desk",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Designing for Busy Doctors and Receptionists",
      points: [
        {
          label: "10-Second Repeat Patient Lookup",
          explanation:
            "Receptionists should be able to type a patient's mobile number or name, pull up their previous visit details immediately, and print an OPD token in seconds.",
        },
        {
          label: "Ethical, High-Trust Medical Web Design",
          explanation:
            "Healthcare websites must avoid loud sales gimmicks or exaggerated medical claims—focusing instead on calm readability, WCAG accessibility, and factual patient guidance.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "Accessible, mobile-first clinic and hospital websites with doctor profiles and OPD schedules.",
      },
      {
        name: "SEO Services",
        href: "/services/seo-services",
        howItHelps: "Local search and Google Business Profile optimization for specialty and city healthcare queries.",
      },
      {
        name: "Offline Windows Software",
        href: "/services/offline-windows-software",
        howItHelps: "Fast OPD token generation, patient registry, diagnostic/pharmacy billing, and daily cash summary.",
      },
      {
        name: "Website Maintenance & Support",
        href: "/services/website-maintenance-and-support",
        howItHelps: "Prompt updates to doctor schedules, holiday notices, and health checkup packages.",
      },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
    objectionAddressed: {
      question: "Our reception staff are extremely busy during OPD hours—will software slow them down?",
      answer:
        "We design clinic reception screens specifically for high-volume OPD desks: minimal mandatory fields, keyboard-only entry, instant phone-number search for returning patients, and one-key token printing.",
    },
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    shortLabel: "Real Estate",
    summary:
      "High-trust project websites, fast mobile brochure/floor-plan experiences, plot/unit availability trackers, and site-visit lead pipelines.",
    metaTitle: "Real Estate Websites, Project Landing Pages & Lead Systems | Webntric",
    metaDescription:
      "Fast, high-trust real estate websites, project landing pages, plot/unit availability trackers, and qualified site-visit lead generation systems by Webntric Software.",
    primaryKeyword: "real estate website development and lead generation",
    h1: "Present your projects with authority and track every buyer enquiry from click to site visit.",
    heroSubtitle:
      "Property buyers make high-value decisions. If your project website is cluttered with aggressive pop-ups or takes ten seconds to load a floor plan on mobile, serious buyers lose confidence before scheduling a site visit.",
    operationalProblems: [
      {
        title: "Heavy, unoptimized project websites that fail on mobile data",
        detail:
          "Many real estate sites upload 25MB PDF brochures and uncompressed renders that freeze mobile browsers when a prospect clicks an ad.",
      },
      {
        title: "High volume of unqualified or accidental ad clicks",
        detail:
          "Generic social lead forms bring in hundreds of numbers with no budget alignment or genuine interest in visiting the site.",
      },
      {
        title: "Confusion over live plot/flat availability across sales agents",
        detail:
          "When multiple channel partners and internal sales staff sell from static PDF maps, two agents accidentally pitch the same available plot or unit.",
      },
    ],
    customerExpectations: [
      "Clear location connectivity, RERA/approval details, floor plans, and carpet/plot area specifications visible on mobile without forced pop-ups on every click",
      "Instant WhatsApp brochure delivery and straightforward site-visit scheduling",
      "Prompt, informed follow-up from your sales advisor",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Connecting Project Presentation with Sales Inventory Control",
      points: [
        {
          label: "Fast WebP/AVIF Interactive Floor Plans",
          explanation:
            "We optimize architectural renders and layout maps so buyers can inspect plot/unit specifications smoothly on any phone.",
        },
        {
          label: "Live Plot / Unit Status Board",
          explanation:
            "A role-controlled internal web dashboard where management updates unit status (Available / On Hold / Booked / Registered) so the sales team always works from accurate inventory.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "Corporate developer websites and high-speed project microsites.",
      },
      {
        name: "Lead Generation",
        href: "/services/lead-generation",
        howItHelps: "Qualified site-visit acquisition funnels across Google Search and Meta.",
      },
      {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        howItHelps: "Plot/flat inventory status boards, customer booking ledgers, and installment trackers.",
      },
      {
        name: "Social Media Content Creation",
        href: "/services/social-media-content-creation",
        howItHelps: "Construction progress updates, location explainers, and project walkthrough videos.",
      },
    ],
    relatedStages: [
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
    objectionAddressed: {
      question: "How do you improve the quality of real estate leads from digital campaigns?",
      answer:
        "Instead of relying on one-tap auto-fill social forms where users don't even read the price or location, we route traffic to a fast project landing page that clearly states configuration, location, and starting price bracket—and asks 2–3 qualifying questions before routing the lead to your sales team.",
    },
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    shortLabel: "Professional Services",
    summary:
      "Authoritative, editorial-grade websites, practice-area search visibility, and secure client document portals for CA, legal, architecture, and consulting firms.",
    metaTitle: "Professional Services Websites, Client Portals & SEO | Webntric Software",
    metaDescription:
      "Editorial-grade websites, practice-area SEO, and secure client document and task portals for CA firms, legal practices, architects, and consulting organizations.",
    primaryKeyword: "website development for professional service firms",
    h1: "Digital presence that reflects your firm's expertise and tools that organize client delivery.",
    heroSubtitle:
      "For chartered accountants, legal practices, architects, engineering consultants, and advisory firms, reputation is everything. Your digital presence must project restraint, precision, and trustworthiness.",
    operationalProblems: [
      {
        title: "Strong referral reputation undermined by an outdated or missing website",
        detail:
          "When an institutional client or referred business owner looks up your firm online, a neglected website fails to reflect the seniority of your partners and practice areas.",
      },
      {
        title: "Chasing client documents and compliance deadlines over WhatsApp and email",
        detail:
          "During audit, tax, or project submission seasons, staff spend hours reminding clients to send missing documents and searching through scattered email attachments.",
      },
      {
        title: "Lack of search visibility for specialized practice areas",
        detail:
          "Prospective clients searching for specific advisory, compliance, or architectural services cannot find structured information about your capabilities.",
      },
    ],
    customerExpectations: [
      "Clear articulation of practice areas, industry experience, leadership credentials, and office contact details",
      "Restrained, professional tone free from loud marketing gimmicks",
      "Organized, confidential handling of shared documents and engagement milestones",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Combining Editorial Authority with Client Workflow Order",
      points: [
        {
          label: "Editorial-Grade Typography & Structure",
          explanation:
            "Clean, fast-loading pages structured around practice areas, regulatory/technical insights, and partner profiles.",
        },
        {
          label: "Secure Client Checklist & Document Portals",
          explanation:
            "Optional password-protected client portals where clients see their pending document checklist, upload files securely, and track matter/compliance status.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "High-trust firm websites structured around practice areas, credentials, and insights.",
      },
      {
        name: "Web Application Development",
        href: "/services/web-application-development",
        howItHelps: "Secure client document collection, compliance calendar, and engagement portals.",
      },
      {
        name: "SEO Services",
        href: "/services/seo-services",
        howItHelps: "Search visibility for specialized advisory, legal, accounting, or design queries.",
      },
      {
        name: "Website Maintenance & Support",
        href: "/services/website-maintenance-and-support",
        howItHelps: "Ongoing security updates, regulatory article publishing, and backup care.",
      },
    ],
    relatedStages: [
      { name: "Established Organizations", href: "/businesses/established-businesses" },
      { name: "Local Businesses", href: "/businesses/local-businesses" },
    ],
    objectionAddressed: {
      question: "Our professional body has strict rules against promotional advertising—how do you handle that?",
      answer:
        "We respect regulatory and professional ethics guidelines strictly (such as ICAI/BCI compliance standards). For regulated firms, we build factual, informational directory-compliant websites and secure client portals with zero promotional claims.",
    },
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    shortLabel: "Hospitality",
    summary:
      "Fast mobile websites, direct room and banquet enquiry systems, offline restaurant/counter KOT billing, and visual social media management for hotels, resorts, and banquet venues.",
    metaTitle: "Hospitality Websites, Banquet Booking & Billing Software | Webntric",
    metaDescription:
      "Fast mobile websites, direct room and banquet enquiry systems, offline POS billing, and social media content for hotels, resorts, banquet venues, and restaurants.",
    primaryKeyword: "hospitality and hotel website and billing software",
    h1: "Drive more direct guest and event enquiries while keeping front-desk operations organized.",
    heroSubtitle:
      "Hotels, banquet halls, marriage lawns, and restaurants lose significant margin when every guest books through high-commission aggregators—or when banquet dates and restaurant bills are tracked in physical diaries.",
    operationalProblems: [
      {
        title: "High aggregator commissions eating into room and restaurant margins",
        detail:
          "Even guests who already know your property name end up booking through third-party portals because your own website is missing, slow, or lacks a direct enquiry/booking path.",
      },
      {
        title: "Banquet and event booking conflicts in physical diaries",
        detail:
          "Tracking hall availability, menu packages, advance token receipts, decoration/catering add-ons, and final settlement across wedding/event seasons on paper creates costly misunderstandings.",
      },
      {
        title: "Slow restaurant KOT (Kitchen Order Ticket) and counter billing",
        detail:
          "During dinner rush, slow cloud POS tablets or manual bill books delay table turnover and cause unbilled kitchen items.",
      },
    ],
    customerExpectations: [
      "Fast-loading photos of rooms, banquet halls, dining spaces, and parking/location details on mobile",
      "Direct phone/WhatsApp/form enquiry for wedding and corporate event dates with clear capacity figures",
      "Accurate, itemized restaurant and room invoices at checkout",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Balancing Rich Visual Storytelling with Fast Mobile Speed & Front-Desk Reliability",
      points: [
        {
          label: "Optimized Media Galleries",
          explanation:
            "We use Next.js modern image compression (AVIF/WebP) and lazy loading so high-resolution venue photos look sharp while loading in under two seconds on mobile.",
        },
        {
          label: "Banquet Calendar & Offline Restaurant POS",
          explanation:
            "Keep your restaurant KOT and counter billing offline-capable for instant speed, while giving management a clear banquet date calendar and advance-payment register.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "Fast, visual hotel, resort, and banquet websites focused on direct bookings and event enquiries.",
      },
      {
        name: "Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        howItHelps: "Restaurant KOT/POS billing, banquet booking registers, and kitchen store inventory.",
      },
      {
        name: "Social Media Management",
        href: "/services/social-media-management",
        howItHelps: "Consistent visual showcasing of events, rooms, seasonal menus, and guest experiences.",
      },
      {
        name: "SEO Services",
        href: "/services/seo-services",
        howItHelps: "Local search visibility for hotel, banquet hall, and restaurant queries in your city.",
      },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
    objectionAddressed: {
      question: "Can we manage banquet date holds, advance receipts, and balance settlements in one place?",
      answer:
        "Yes. We build straightforward banquet and event management modules that prevent double-booking dates, record guest count and menu selection, print advance receipts, and track remaining balances.",
    },
  },
  {
    slug: "logistics-and-distribution",
    title: "Logistics and Distribution",
    shortLabel: "Logistics & Distribution",
    summary:
      "Field order booking apps, warehouse dispatch challans, multi-depot inventory, bilty registers, and dealer credit ledgers.",
    metaTitle: "Logistics & Distribution Software | Dispatch, Inventory & Field Apps | Webntric",
    metaDescription:
      "Custom software and field mobile apps for distributors and logistics companies: order booking, dispatch challans, warehouse inventory, POD tracking, and party ledgers.",
    primaryKeyword: "logistics and distribution management software",
    h1: "Clear visibility across dispatches, field collections, warehouse stock, and fleet records.",
    heroSubtitle:
      "In distribution and transport operations, delays happen in the handoffs: between the field salesman taking an order, the godown packing the goods, the driver delivering the consignment, and accounts collecting payment.",
    operationalProblems: [
      {
        title: "Evening order-entry bottleneck from field sales staff",
        detail:
          "Sales representatives visit retailers all day and send handwritten photos on WhatsApp at 7 PM, forcing office staff to re-type orders late into the night.",
      },
      {
        title: "Unreconciled delivery challans, returns, and crate/packaging balances",
        detail:
          "Goods dispatched without linked challan-to-invoice tracking lead to unbilled deliveries, unrecorded short-supplies, and lost returnable crates/cylinders.",
      },
      {
        title: "Vehicle trip expenses and driver advances tracked on loose slips",
        detail:
          "Fuel, toll, maintenance, and trip freight settlements are hard to audit per vehicle or route.",
      },
    ],
    customerExpectations: [
      "Accurate dispatch quantities matching what was ordered",
      "Clear challans, bilties, and GST invoices with transparent party outstanding balances",
      "Prompt confirmation when field payments/collections are recorded",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Connecting Offline Field Mobility with Central Warehouse Control",
      points: [
        {
          label: "Offline-Capable Field Sales & Collection App",
          explanation:
            "Field reps book orders and log payment receipts on an Android app that caches locally in low-signal rural belts and syncs automatically to the office.",
        },
        {
          label: "Warehouse Dispatch & Ledger Console",
          explanation:
            "Office staff review incoming field orders, verify credit limits, allocate batch stock, and print loading sheets, challans, and invoices in one flow.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        howItHelps: "Dispatch challans, bilty generation, fleet trip logs, and multi-depot stock control.",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
        howItHelps: "Offline-capable Android/iOS apps for field order booking, collections, and POD capture.",
      },
      {
        name: "Billing & Inventory Software",
        href: "/services/billing-and-inventory-software",
        howItHelps: "Batch inventory, scheme/free-quantity calculations, and dealer credit ageing.",
      },
    ],
    relatedStages: [
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
      { name: "Traditional Businesses", href: "/businesses/traditional-businesses" },
      { name: "Established Organizations", href: "/businesses/established-businesses" },
    ],
    objectionAddressed: {
      question: "Can the system handle free-quantity schemes (e.g., 10+1 free), trade discounts, and damaged return adjustments?",
      answer:
        "Yes. Distribution billing requires scheme quantities, secondary discounts, batch/expiry selection, and credit notes for damaged returns—all of which we build directly into the billing and stock engine.",
    },
  },
  {
    slug: "local-service-businesses",
    title: "Local Service Businesses",
    shortLabel: "Local Service Businesses",
    summary:
      "High-converting service websites, local search optimization, quotation tracking, technician job sheets, and AMC renewal reminders.",
    metaTitle: "Local Service Business Websites, Local SEO & Job Software | Webntric",
    metaDescription:
      "High-converting websites, Google Maps local SEO, lead generation, and quotation/AMC tracking software for contractors, interior firms, and local service businesses.",
    primaryKeyword: "websites and software for local service businesses",
    h1: "Win more local service calls and never lose track of quotations, technicians, or AMC renewals.",
    heroSubtitle:
      "Whether you install solar panels, design interiors, maintain commercial AC/electrical systems, or run a specialized local contracting business, growth depends on winning local trust quickly and following up systematically.",
    operationalProblems: [
      {
        title: "Losing high-intent local search calls to less experienced competitors",
        detail:
          "Customers searching for an installer or service provider in your city call the companies that appear at the top of Google with real project photos and clear service descriptions.",
      },
      {
        title: "Site inspection quotes sent on WhatsApp and never followed up",
        detail:
          "After visiting a client site and sending a PDF estimate, busy owners forget to follow up 3 and 7 days later—losing warm deals.",
      },
      {
        title: "Forgotten Annual Maintenance Contract (AMC) and service renewals",
        detail:
          "Repeat servicing and AMC renewals are the highest-margin revenue in a service business, yet dates are buried in old invoice folders.",
      },
    ],
    customerExpectations: [
      "Real photos of completed local installations/work rather than generic foreign stock images",
      "Clear explanation of service areas, warranty terms, and how site inspections work",
      "Written, itemized quotations and timely reminders when periodic maintenance is due",
    ],
    technologyNeedsAndTradeoffs: {
      heading: "Practical Tools for Field & Contracting Teams",
      points: [
        {
          label: "Fast Mobile Website + Local SEO",
          explanation:
            "Built around your specific services and genuine service areas so local customers can verify your work and call or WhatsApp immediately.",
        },
        {
          label: "Quotation, Job Sheet & AMC Reminder Register",
          explanation:
            "A lightweight web or desktop tool that generates clean PDF quotations, logs technician visits, and alerts your office 15 days before a customer's AMC or periodic service expires.",
        },
      ],
    },
    suitableServices: [
      {
        name: "Website Development",
        href: "/services/website-development",
        howItHelps: "Credible service website showcasing real work, service areas, and fast enquiry paths.",
      },
      {
        name: "SEO Services",
        href: "/services/seo-services",
        howItHelps: "Local search and Google Business Profile optimization for city/regional service queries.",
      },
      {
        name: "Lead Generation",
        href: "/services/lead-generation",
        howItHelps: "High-intent search campaigns and landing pages for active service enquiries.",
      },
      {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        howItHelps: "Quotation builder, technician job-sheet log, and automated AMC renewal tracker.",
      },
    ],
    relatedStages: [
      { name: "Local Businesses", href: "/businesses/local-businesses" },
      { name: "Growing Businesses", href: "/businesses/growing-businesses" },
    ],
    objectionAddressed: {
      question: "We only have a small office team—will a quotation and AMC tracker take too much time to maintain?",
      answer:
        "No. Because the quotation generator itself creates the customer record when you send an estimate or invoice, the 6-month or 12-month AMC renewal date is scheduled automatically without extra typing.",
    },
  },
];

export function getIndustryBySlug(slug: string): IndustryDetailData | undefined {
  return INDUSTRIES_DATA.find((ind) => ind.slug === slug);
}
