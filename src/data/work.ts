export type WorkCategory =
  | "Website"
  | "Software"
  | "Mobile App"
  | "SEO"
  | "Digital Marketing";

export interface WorkBlueprintItem {
  id: string;
  title: string;
  projectTypeLabel: string;
  category: WorkCategory;
  secondaryCategories?: WorkCategory[];
  industry: string;
  industryHref: string;
  businessSituation: string;
  problem: string;
  whatWebntricBuilt: string[];
  technologiesUsed: string[];
  expectedOperationalOutcome: string;
  blueprintDiagram: {
    headerTitle: string;
    statusLabel: string;
    flowSteps: Array<{
      step: string;
      label: string;
      detail: string;
    }>;
    keyMetricsOrChecks: Array<{
      label: string;
      value: string;
    }>;
  };
  relatedServiceHref: string;
  relatedServiceLabel: string;
}

export const WORK_CATEGORIES: WorkCategory[] = [
  "Website",
  "Software",
  "Mobile App",
  "SEO",
  "Digital Marketing",
];

/**
 * Representative system architectures and project blueprints engineered by Webntric.
 * Clearly presented as real architectural patterns without fabricated client names or unverified financial claims.
 */
export const WORK_BLUEPRINTS: WorkBlueprintItem[] = [
  {
    id: "offline-retail-wholesale-pos-engine",
    title: "Offline Windows Billing, Barcode & Godown Inventory System",
    projectTypeLabel: "Production Architecture Blueprint — Desktop Software",
    category: "Software",
    industry: "Retail & Wholesale",
    industryHref: "/industries/retail-and-wholesale",
    businessSituation:
      "Multi-counter retail and wholesale merchants operating in high-footfall markets where internet connectivity fluctuates and counter speed is critical.",
    problem:
      "Cloud-based billing tabs freeze whenever broadband drops, barcode scanning lags during peak hours, and loose-vs-carton stock conversions cause mismatches between the godown and counter.",
    whatWebntricBuilt: [
      "Keyboard-first Windows desktop POS interface engineered in C# / .NET for sub-second invoice creation without mouse dependency",
      "Local SQLite / MS SQL Server database architecture with automatic stock deduction across carton, box, and piece units",
      "Direct hardware integration with USB/serial barcode scanners, thermal receipt printers, and A4 GST invoice printing",
      "Party credit (udhaar) ledger with due-date tracking and automated daily encrypted backups to local drive and external USB/cloud",
    ],
    technologiesUsed: [
      "C# / .NET",
      "MS SQL Server / SQLite",
      "Windows Forms / WPF",
      "ESC/POS Thermal Printing",
      "Encrypted Automated Backup",
    ],
    expectedOperationalOutcome:
      "Uninterrupted counter billing during internet outages, accurate live stock balances across godown and shop floor, and fast end-of-day cash and credit reconciliation.",
    blueprintDiagram: {
      headerTitle: "Offline POS & Inventory Engine (Local DB Mode)",
      statusLabel: "0ms Network Dependency",
      flowSteps: [
        {
          step: "01",
          label: "Purchase & Barcode Inward",
          detail: "Supplier invoice entry auto-calculates carton-to-piece stock and prints barcode labels.",
        },
        {
          step: "02",
          label: "High-Speed Counter POS",
          detail: "Scan barcode -> apply retail/wholesale tier -> print thermal/GST bill in <2 seconds.",
        },
        {
          step: "03",
          label: "Local Ledger & Auto-Backup",
          detail: "Instant party balance update + scheduled encrypted snapshot to secondary drive/cloud.",
        },
      ],
      keyMetricsOrChecks: [
        { label: "Internet Required", value: "None (Offline-First)" },
        { label: "Hardware Support", value: "Barcode + Thermal/A4" },
        { label: "Data Ownership", value: "100% On-Premise" },
      ],
    },
    relatedServiceHref: "/services/offline-windows-software",
    relatedServiceLabel: "Offline Windows Software",
  },
  {
    id: "education-institute-fee-portal",
    title: "Institute Fee Ledger, Student Registry & Admission Web Platform",
    projectTypeLabel: "Production Architecture Blueprint — Hybrid Web + Desktop",
    category: "Website",
    secondaryCategories: ["Software", "SEO"],
    industry: "Education & Coaching",
    industryHref: "/industries/education-and-coaching",
    businessSituation:
      "Regional schools and coaching institutes managing hundreds of students across batches, installment fee schedules, and seasonal admission enquiries.",
    problem:
      "Fee installment reminders and pending dues are tracked in paper registers, parents call the office repeatedly for basic batch/fee details, and the public website fails to convert admission enquiries.",
    whatWebntricBuilt: [
      "Fast, mobile-first institutional website with clear course/batch pages, faculty credentials, and structured admission enquiry forms",
      "Role-based fee and student registry tracking batch enrollment, installment schedules, scholarships/concessions, and instant receipt printing",
      "Automated overdue fee lists and WhatsApp/SMS reminder exports for administration staff",
      "Dedicated School ERP SaaS platform: VidyaSetu (https://vidyasetu.pro/) for end-to-end cloud admissions, fees, transport, and parent communication",
      "Local and regional SEO architecture targeting parent and student search intent during admission cycles",
    ],
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      ".NET Fee Counter Module",
      "JSON-LD Schema",
    ],
    expectedOperationalOutcome:
      "Fewer missed fee installments, faster morning counter receipt printing, and clearer online information that builds parent confidence before visiting campus.",
    blueprintDiagram: {
      headerTitle: "Institute Admission & Fee Operations Architecture",
      statusLabel: "Role-Based Access",
      flowSteps: [
        {
          step: "01",
          label: "Public Course & Admission Portal",
          detail: "Parents explore batch schedules, fee structures, and submit qualified admission enquiries.",
        },
        {
          step: "02",
          label: "Student Enrollment & Batch Allocation",
          detail: "Enquiry converts to student ID with custom installment plan and roll number.",
        },
        {
          step: "03",
          label: "Counter Receipt & Defaulter Tracking",
          detail: "Instant fee receipt generation and one-click pending installment report by batch.",
        },
      ],
      keyMetricsOrChecks: [
        { label: "User Roles", value: "Admin, Cashier, Counselor" },
        { label: "Receipt Modes", value: "Thermal & Half-Page A4" },
        { label: "Mobile Readiness", value: "Core Web Vitals Optimized" },
      ],
    },
    relatedServiceHref: "/services/custom-business-software",
    relatedServiceLabel: "Custom Business Software",
  },
  {
    id: "field-distribution-order-app",
    title: "Field Sales Order & Warehouse Dispatch Mobile + Web System",
    projectTypeLabel: "Production Architecture Blueprint — Mobile App & Web Dashboard",
    category: "Mobile App",
    secondaryCategories: ["Software"],
    industry: "Logistics & Distribution",
    industryHref: "/industries/logistics-and-distribution",
    businessSituation:
      "Regional distributors and C&F agencies with field sales representatives visiting retail shops across districts and a central warehouse managing dispatch.",
    problem:
      "Field salesmen write orders in notebooks or send unstructured WhatsApp messages in the evening, causing billing delays, out-of-stock order promises, and disputed party balances.",
    whatWebntricBuilt: [
      "Offline-capable Android/iOS field application allowing sales staff to view party outstanding balances, check stock availability, and book orders even in low-network areas",
      "Automatic background synchronization that queues orders locally and pushes them to the central warehouse dashboard as soon as connectivity returns",
      "Central dispatch web console that converts approved field orders into packing slips, challans, and final invoices without duplicate typing",
    ],
    technologiesUsed: [
      "Flutter / React Native",
      "SQLite Offline Sync",
      "Node.js / Laravel API",
      "PostgreSQL",
      "Role-Based Web Admin",
    ],
    expectedOperationalOutcome:
      "Eliminates evening data-entry backlogs, prevents booking orders for out-of-stock items, and gives management live visibility into field collections and dispatch status.",
    blueprintDiagram: {
      headerTitle: "Field-to-Warehouse Sync Architecture",
      statusLabel: "Offline-Queue Enabled",
      flowSteps: [
        {
          step: "01",
          label: "Field App (Offline Local Cache)",
          detail: "Salesperson selects retailer, views credit limit, and captures item quantities on mobile.",
        },
        {
          step: "02",
          label: "Background Queue Sync",
          detail: "Encrypted order payload syncs automatically to central database on network restore.",
        },
        {
          step: "03",
          label: "Warehouse Challan & Billing",
          detail: "Dispatch team reviews order, allocates batch stock, and prints delivery challan.",
        },
      ],
      keyMetricsOrChecks: [
        { label: "Network Drop Protection", value: "Local SQLite Queue" },
        { label: "Duplicate Entry", value: "Eliminated" },
        { label: "Platform", value: "Android + iOS + Web Admin" },
      ],
    },
    relatedServiceHref: "/services/mobile-app-development",
    relatedServiceLabel: "Mobile App Development",
  },
  {
    id: "healthcare-clinic-web-and-opd",
    title: "Multi-Doctor Clinic Website, Local Search & OPD Token Workflow",
    projectTypeLabel: "Production Architecture Blueprint — Website, Local SEO & Clinic Ops",
    category: "Website",
    secondaryCategories: ["SEO", "Software"],
    industry: "Healthcare & Clinics",
    industryHref: "/industries/healthcare-and-clinics",
    businessSituation:
      "Specialty clinics and diagnostic centers where patients search online for doctor timings and reception desks handle high daily OPD footfall.",
    problem:
      "Patients call continuously for basic doctor availability and directions because online listings are incomplete, while reception staff struggle with repeat patient lookup and slow paper token registers.",
    whatWebntricBuilt: [
      "Calm, accessible clinic website displaying clear doctor profiles, department timings, diagnostic preparation instructions, and one-tap call/WhatsApp/map actions",
      "Structured LocalBusiness / MedicalClinic schema and local search optimization for city and district healthcare queries",
      "Fast reception OPD desk software with phone-number lookup for returning patients, token queue slips, and lab/pharmacy fee receipts",
    ],
    technologiesUsed: [
      "Next.js (Server Components)",
      "Tailwind CSS",
      "Medical/Local JSON-LD",
      "Fast OPD Desk Module",
    ],
    expectedOperationalOutcome:
      "Patients arrive informed with fewer routine phone interruptions, and returning patient registration at the reception desk takes seconds instead of minutes.",
    blueprintDiagram: {
      headerTitle: "Patient Discovery to Reception OPD Flow",
      statusLabel: "WCAG AA Accessible",
      flowSteps: [
        {
          step: "01",
          label: "Local Search & Mobile Website",
          detail: "Patient verifies doctor specialty, OPD hours, and location map on mobile.",
        },
        {
          step: "02",
          label: "Fast Reception Registration",
          detail: "Receptionist looks up mobile number -> auto-fills patient history -> prints OPD token.",
        },
        {
          step: "03",
          label: "Billing & Follow-Up Record",
          detail: "Consultation/diagnostic receipt generated with next follow-up date logged.",
        },
      ],
      keyMetricsOrChecks: [
        { label: "Mobile Load Target", value: "< 2.0s LCP" },
        { label: "Repeat Lookup", value: "By Phone / Patient ID" },
        { label: "Search Schema", value: "LocalBusiness + FAQ" },
      ],
    },
    relatedServiceHref: "/services/website-development",
    relatedServiceLabel: "Website Development",
  },
  {
    id: "b2b-manufacturing-web-and-bom",
    title: "Industrial Manufacturer Specification Website & BOM Stock Tracker",
    projectTypeLabel: "Production Architecture Blueprint — B2B Web & Internal ERP",
    category: "Website",
    secondaryCategories: ["Software", "SEO"],
    industry: "Manufacturing",
    industryHref: "/industries/manufacturing",
    businessSituation:
      "SME manufacturers producing industrial components or packaged goods who need to win institutional buyers while controlling raw material consumption on the plant floor.",
    problem:
      "Institutional procurement teams reject vendors whose websites lack technical specifications and compliance documentation, while internal raw material usage and scrap rates are only reconciled weeks later.",
    whatWebntricBuilt: [
      "Editorial-grade B2B specification website with downloadable technical datasheets, machinery capacity tables, quality compliance documentation, and RFQ intake forms",
      "Internal Bill of Materials (BOM) and production batch tracker recording raw material issue, finished goods output, and scrap variance",
      "Technical SEO targeting specific industrial product and specification search queries",
    ],
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Role-Based Production Module",
      "Technical SEO",
    ],
    expectedOperationalOutcome:
      "Stronger institutional buyer confidence during vendor evaluation and daily visibility into raw material stock and production batch variances.",
    blueprintDiagram: {
      headerTitle: "B2B RFQ & Plant Floor BOM Architecture",
      statusLabel: "Specification-Grade",
      flowSteps: [
        {
          step: "01",
          label: "Specification & Datasheet Hub",
          detail: "Procurement engineers inspect tolerances, certifications, and submit structured RFQs.",
        },
        {
          step: "02",
          label: "Raw Material Issue & BOM Run",
          detail: "Plant supervisor logs batch run -> deducts raw material -> records finished output.",
        },
        {
          step: "03",
          label: "Scrap Variance & Dispatch",
          detail: "Management dashboard flags abnormal material wastage and tracks dispatch challans.",
        },
      ],
      keyMetricsOrChecks: [
        { label: "Buyer Focus", value: "Institutional / B2B RFQ" },
        { label: "Stock Control", value: "Raw -> WIP -> Finished" },
        { label: "Export Ready", value: "Excel / PDF Reports" },
      ],
    },
    relatedServiceHref: "/services/custom-business-software",
    relatedServiceLabel: "Custom Business Software",
  },
  {
    id: "local-service-lead-and-amc-system",
    title: "High-Intent Search Funnel, Landing Pages & AMC Renewal Tracker",
    projectTypeLabel: "Production Architecture Blueprint — SEO, Ads & Lead Pipeline",
    category: "Digital Marketing",
    secondaryCategories: ["SEO", "Website"],
    industry: "Local Service Businesses",
    industryHref: "/industries/local-service-businesses",
    businessSituation:
      "Regional contractors, solar/electrical installers, real estate groups, and service companies investing in search visibility and paid ads.",
    problem:
      "Ad campaigns send paid clicks to a slow generic homepage where visitors bounce, spam enquiries waste sales time, and past customers are forgotten when their annual maintenance contract (AMC) is due.",
    whatWebntricBuilt: [
      "Dedicated, fast-loading service landing pages aligned tightly with high-intent search queries and local service areas",
      "Qualifying enquiry intake forms with spam protection, instant WhatsApp/email routing to the sales desk, and GTM conversion event tracking",
      "Lightweight quotation and AMC renewal reminder tracker so repeat service revenue is followed up on time",
    ],
    technologiesUsed: [
      "Next.js Landing Architecture",
      "Google Tag Manager (GA4 Events)",
      "Local SEO Schema",
      "Google Ads / Search Console",
    ],
    expectedOperationalOutcome:
      "Higher percentage of qualified enquiries from existing search/ad budgets and systematic follow-up on quotations and recurring maintenance contracts.",
    blueprintDiagram: {
      headerTitle: "Search Intent to Qualified Enquiry & AMC Pipeline",
      statusLabel: "Full Event Attribution",
      flowSteps: [
        {
          step: "01",
          label: "High-Intent Search / Local Query",
          detail: "Buyer searches specific service + city -> lands on fast, topic-matched page.",
        },
        {
          step: "02",
          label: "Qualifying Intake & Call Tracking",
          detail: "Form captures requirement scope & location -> filters spam -> alerts sales team.",
        },
        {
          step: "03",
          label: "Quote Follow-Up & AMC Reminder",
          detail: "Logs site visit status and schedules automated 6/12-month service renewal alert.",
        },
      ],
      keyMetricsOrChecks: [
        { label: "Tracking", value: "Form, Call & WhatsApp Events" },
        { label: "Spam Protection", value: "Server + Honeypot Validation" },
        { label: "Reporting", value: "Qualified Cost-per-Enquiry" },
      ],
    },
    relatedServiceHref: "/services/lead-generation",
    relatedServiceLabel: "Lead Generation",
  },
];
