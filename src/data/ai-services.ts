export type AIUseCase = {
  slug: string;
  title: string;
  shortLabel: string;
  problem: string;
  solution: string;
  suitableFor: string[];
  deliverables: string[];
  safeguards: string[];
  image: string;
  alt: string;
  honestNote: string;
};

export interface AIProcessStage {
  step: string;
  name: string;
  summary: string;
  activities: string[];
  deliverable: string;
}

export interface AITrustControl {
  title: string;
  description: string;
  category: "Governance" | "Data & Privacy" | "Security" | "Operations";
}

export interface AITechnologyItem {
  technology: string;
  businessPurpose: string;
  whenUsed: string;
}

export interface AIIllustrativeScenario {
  id: string;
  title: string;
  badge: string;
  businessProblem: string;
  existingProcess: string;
  aiSolution: string;
  humanReviewProcess: string;
  technologiesUsed: string[];
  securityControls: string[];
  expectedOutcome: string;
  limitations: string;
}

export const AI_HERO_CONTENT = {
  eyebrow: "Practical Generative AI Implementation",
  primaryMessage: "Generative AI applications designed around real business work.",
  h1: "Turn useful AI ideas into dependable business applications.",
  subtitle:
    "Webntric helps businesses identify practical AI opportunities, connect them to existing systems, and build applications that support people instead of creating more complexity.",
  primaryCta: {
    label: "Discuss an AI application",
    href: "/contact?service=generative-ai-applications",
  },
  secondaryCta: {
    label: "See where AI may help",
    href: "#where-ai-helps",
  },
  heroImage: "/images/ai/ai-hero-human-review.webp",
  heroAlt:
    "Business analyst and engineer reviewing AI-assisted workflow output on a desktop interface",
};

export const AI_PROBLEMS_SECTION = {
  heading: "Where could AI actually help your business?",
  intro:
    "Generative AI creates value when a team is bottlenecked by unstructured text, repetitive document reading, or scattered internal knowledge—not when it is bolted onto a workflow without a clear purpose.",
  problems: [
    {
      title: "Customers ask the same questions repeatedly",
      detail:
        "Support and front-desk teams spend hours answering routine questions about timings, service scope, order status, or documentation requirements.",
    },
    {
      title: "Important information is spread across documents and systems",
      detail:
        "Policies, SOPs, product manuals, and past project notes live in separate PDFs, folders, and spreadsheets that take too long to search.",
    },
    {
      title: "Staff spend too much time searching, copying, summarizing, or classifying",
      detail:
        "Skilled employees lose productive hours reading long emails, extracting fields from attachments, and re-typing summaries into internal software.",
    },
    {
      title: "Support teams need help responding faster",
      detail:
        "Ticket queues grow when agents have to look up technical details across multiple screens before drafting a helpful reply.",
    },
    {
      title: "Sales and marketing teams need assistance creating consistent content",
      detail:
        "Drafting service briefs, campaign variations, and structured summaries from approved source material takes excessive manual effort.",
    },
    {
      title: "Invoices, forms, and documents require repetitive manual processing",
      detail:
        "Vendor bills, applications, purchase orders, and delivery challans arrive in varied layouts that require line-by-line checking.",
    },
    {
      title: "Employees need a simpler way to find internal knowledge",
      detail:
        "New hires and field staff struggle to locate the exact procedure or specification they need while serving a customer.",
    },
    {
      title: "Existing software contains data that is difficult to use efficiently",
      detail:
        "Historical notes, customer enquiries, and operational logs sit inside databases without an easy way to query or summarize trends.",
    },
  ],
  decisionStatement:
    "Sometimes the best solution is automation, better software design, clearer data, or a simpler workflow—not generative AI.",
  decisionSubtext:
    "If a problem can be solved deterministically with a clean database query, a barcode scanner, or a standard rule-based form, we will recommend that first. It is faster, cheaper to run, and 100% predictable.",
};

export const AI_USE_CASES: AIUseCase[] = [
  {
    slug: "ai-chatbots",
    title: "AI Chatbots and Customer Support",
    shortLabel: "AI Chatbots",
    problem:
      "Visitors leave when they cannot get immediate answers to straightforward service, pricing structure, or booking questions—or support staff get overwhelmed by repetitive first-level enquiries.",
    solution:
      "We build grounded customer support assistants that answer questions strictly from your approved service documentation, qualify enquiries with structured intake questions, and hand off complex conversations to a human team member.",
    suitableFor: [
      "Website customer support",
      "Frequently asked questions",
      "Lead qualification",
      "Appointment or enquiry assistance",
      "Product and service guidance",
    ],
    deliverables: [
      "Website or portal chat widget grounded in approved knowledge sources",
      "Structured lead-qualification flow connected to email, CRM, or WhatsApp intake",
      "Explicit human escalation trigger when a question falls outside approved scope",
      "Conversation review dashboard and fallback response configuration",
    ],
    safeguards: [
      "Responses restricted to approved company documents (retrieval grounding)",
      "Clear disclosure to visitors that they are interacting with an AI assistant",
      "One-click escalation to a human representative at any point",
      "Input length and rate limiting to prevent abuse or runaway API spend",
    ],
    image: "/images/ai/ai-chatbot-customer-support.webp",
    alt: "Customer support specialist reviewing an AI-assisted enquiry conversation with human escalation controls",
    honestNote:
      "Chatbot responses must be grounded in approved information and always provide a clear escalation path to a human when a request is sensitive, unusual, or outside documented policy.",
  },
  {
    slug: "ai-knowledge-assistants",
    title: "AI Knowledge Assistants",
    shortLabel: "Knowledge Assistants",
    problem:
      "Employees waste time hunting through PDF manuals, policy handbooks, and shared drives—or give inconsistent answers because they accidentally reference outdated documents.",
    solution:
      "We build internal, permission-aware knowledge assistants using Retrieval-Augmented Generation (RAG) that search your current approved documents and return answers with direct source citations.",
    suitableFor: [
      "Internal policies",
      "Product documents",
      "Training materials",
      "Technical documentation",
      "Business procedures",
      "Company knowledge bases",
    ],
    deliverables: [
      "Document ingestion pipeline with version control and archive removal",
      "Role-based access control so staff only query documents permitted for their role",
      "Search and Q&A interface with clickable source-document citations",
      "Admin interface to upload new SOPs and retire outdated versions",
    ],
    safeguards: [
      "Source document control: only approved, current files are indexed",
      "Permission-aware access enforcing role-level boundaries",
      "Inline citations linking every answer back to the exact paragraph or page",
      "Human review workflow for flagging incomplete or ambiguous documentation",
    ],
    image: "/images/ai/ai-knowledge-assistant.webp",
    alt: "Operations team querying internal SOPs and technical manuals through a permission-aware knowledge assistant",
    honestNote:
      "An internal assistant is only as accurate as the documents behind it. We include workflows to update, re-index, and remove outdated procedures so staff never rely on obsolete rules.",
  },
  {
    slug: "document-processing",
    title: "Document Processing and Data Extraction",
    shortLabel: "Document Processing",
    problem:
      "Operations and accounts teams spend hours manually reading PDFs, invoices, purchase orders, and application forms to re-key fields into ERP or billing software.",
    solution:
      "We engineer structured document-processing pipelines that classify uploaded files, extract key fields into a clean schema, run validation rules, and present a side-by-side human review screen before exporting to your database.",
    suitableFor: [
      "Invoices",
      "Forms",
      "Applications",
      "Reports",
      "Contracts",
      "Purchase orders",
      "Customer documents",
    ],
    deliverables: [
      "Secure document upload and OCR/text extraction pipeline",
      "Document classification and structured JSON field extraction",
      "Automated validation checks (totals, tax math, required fields, date formats)",
      "Side-by-side human approval interface and export connector to existing software",
    ],
    safeguards: [
      "Mandatory validation checks for mathematical totals and required fields",
      "Confidence highlighting that flags uncertain fields for human verification",
      "Human approval gate before financial or compliance records are committed",
      "Audit trail recording who reviewed and approved each extracted document",
    ],
    image: "/images/ai/ai-document-processing.webp",
    alt: "Finance and operations professional verifying extracted invoice and purchase order fields before ERP export",
    honestNote:
      "Extracted data is never assumed to be 100% accurate without validation. Low-quality scans, handwritten notes, or unusual layouts require automated math checks and human sign-off before posting.",
  },
  {
    slug: "ai-business-automation",
    title: "AI-Powered Business Workflows & Automation",
    shortLabel: "Business Automation",
    problem:
      "Enquiries, support emails, and internal updates require manual triage, summarization, and copy-pasting between email, CRM, and task tools.",
    solution:
      "We connect AI steps into your existing software workflows—summarizing long threads, drafting initial replies, categorizing incoming requests, and suggesting next actions within strict permission boundaries.",
    suitableFor: [
      "Summarizing business information",
      "Drafting responses",
      "Routing enquiries",
      "Creating task suggestions",
      "Extracting action items",
      "Connecting AI with CRM, ERP, email, or internal systems",
    ],
    deliverables: [
      "API integration between your existing CRM/ERP/helpdesk and language models",
      "Automated enquiry classification, summary generation, and draft preparation",
      "Role-based permission checks, execution logs, and error fallback queues",
      "Staff review queue to approve or edit drafted actions before sending",
    ],
    safeguards: [
      "Strict service-account permissions (least-privilege API scopes)",
      "Structured logging of inputs, model outputs, and downstream actions",
      "Graceful error handling so software continues working if an AI API times out",
      "Human intervention gates for external emails or record modifications",
    ],
    image: "/images/ai/ai-business-automation.webp",
    alt: "Business software dashboard displaying automated enquiry routing, summaries, and audit logs",
    honestNote:
      "Every automated workflow must include explicit permissions, structured logging, error handling, and a clear mechanism for human intervention.",
  },
  {
    slug: "ai-content-workflows",
    title: "AI Content and Marketing Workflows",
    shortLabel: "Content Workflows",
    problem:
      "Marketing and communications teams struggle to repurpose approved technical material, product updates, and case notes into consistent briefs and drafts.",
    solution:
      "We design internal content assistance tools structured around your brand voice guidelines, approved product facts, and editorial checklists so teams can draft faster without publishing generic filler.",
    suitableFor: [
      "Content drafts",
      "Campaign ideation",
      "Social media planning",
      "SEO content briefs",
      "Repurposing approved content",
      "Internal content assistance",
    ],
    deliverables: [
      "Prompt templates grounded in your brand tone and approved claim rules",
      "Content repurposing workflow (turning long guides or transcripts into briefs)",
      "Editorial review checklist enforcing factual verification and originality",
      "Approval state workflow before any draft moves to publishing",
    ],
    safeguards: [
      "Guardrails against unverified statistics, fake testimonials, or banned claims",
      "Mandatory human brand review, factual verification, and originality checks",
      "Source-material grounding so drafts reflect your real service processes",
      "Clear separation between internal drafting assistance and live publication",
    ],
    image: "/images/ai/ai-content-marketing-workflow.webp",
    alt: "Marketing and editorial team reviewing AI-drafted campaign briefs for factual and brand accuracy",
    honestNote:
      "AI-generated content always requires human brand review, factual verification, originality checks, and explicit editorial approval before publication.",
  },
  {
    slug: "ai-search-recommendations",
    title: "AI Search and Recommendation Systems",
    shortLabel: "AI Search & Discovery",
    problem:
      "Users searching your product catalogue, service directory, or knowledge portal get zero results unless they type the exact keyword used in your database.",
    solution:
      "We combine traditional keyword filters with vector embeddings and semantic search so customers and staff can find relevant products, services, or articles using natural-language questions.",
    suitableFor: [
      "Product discovery",
      "Internal knowledge search",
      "Service recommendations",
      "Website search",
      "Customer guidance",
      "Related-content suggestions",
    ],
    deliverables: [
      "Hybrid search architecture (exact keyword + semantic vector matching)",
      "Automated indexing pipeline when products, stock, or articles change",
      "Relevance evaluation suite using real customer search queries",
      "Privacy-safe search analytics showing zero-result queries and click-throughs",
    ],
    safeguards: [
      "Deterministic business rules (e.g., never recommend out-of-stock or archived items)",
      "Ongoing evaluation for search relevance, privacy, and unintended bias",
      "Tenant and user-permission filtering applied before search results return",
      "Fast fallback to standard database search if vector services are unavailable",
    ],
    image: "/images/ai/ai-search-recommendations.webp",
    alt: "Analytics interface evaluating search relevance, catalogue discovery, and recommendation performance",
    honestNote:
      "Search and recommendation results are continuously evaluated for relevance, data privacy, and bias, and combined with deterministic business filters.",
  },
];

export const AI_IMPLEMENTATION_PROCESS: AIProcessStage[] = [
  {
    step: "01",
    name: "Discover",
    summary: "Understand the business process and desired outcome.",
    activities: [
      "Map how staff or customers handle the task today and where time or quality is lost",
      "Define measurable operational goals (e.g., faster draft preparation, fewer manual lookups)",
    ],
    deliverable: "Workflow Problem & Outcome Brief",
  },
  {
    step: "02",
    name: "Assess",
    summary: "Determine whether AI, automation, custom software, or process redesign is appropriate.",
    activities: [
      "Evaluate whether deterministic code, database restructuring, or rule-based automation solves the problem better",
      "Estimate token/API operating costs and maintenance requirements upfront",
    ],
    deliverable: "Build vs. Automate vs. AI Feasibility Decision",
  },
  {
    step: "03",
    name: "Prepare",
    summary: "Review data quality, permissions, privacy, source documents, and integrations.",
    activities: [
      "Audit source documents for outdated policies, contradictions, or sensitive personal data",
      "Define role-based access rules and data redaction boundaries",
    ],
    deliverable: "Data Readiness & Privacy Specification",
  },
  {
    step: "04",
    name: "Design",
    summary: "Define user journeys, prompts, interfaces, fallback behavior, and human review.",
    activities: [
      "Design the human-in-the-loop review interface, citation display, and confidence indicators",
      "Specify exact fallback behavior when the model is uncertain or an API is unreachable",
    ],
    deliverable: "UX Wireframes, Prompt Architecture & Fallback Spec",
  },
  {
    step: "05",
    name: "Build",
    summary: "Develop the application and connect required systems.",
    activities: [
      "Implement backend services, retrieval pipelines, structured output schemas, and UI screens",
      "Connect securely with existing databases, ERPs, CRMs, or document storage",
    ],
    deliverable: "Working Application in Staging Environment",
  },
  {
    step: "06",
    name: "Test",
    summary: "Test accuracy, safety, reliability, security, performance, and failure scenarios.",
    activities: [
      "Run evaluation sets covering real business queries, edge cases, and adversarial/prompt-injection inputs",
      "Verify rate limits, permission boundaries, timeout recovery, and output validation",
    ],
    deliverable: "Evaluation & Safety Test Report",
  },
  {
    step: "07",
    name: "Pilot",
    summary: "Release to a limited group and collect feedback.",
    activities: [
      "Deploy to a small internal team or controlled user segment with active logging",
      "Review real interactions, thumbs-up/down feedback, and human correction patterns",
    ],
    deliverable: "Pilot Review & Prompt/Retrieval Refinements",
  },
  {
    step: "08",
    name: "Launch",
    summary: "Deploy with monitoring and documented operating procedures.",
    activities: [
      "Release to production with cost caps, error alerts, and usage dashboards",
      "Train staff on how to review outputs, update source documents, and handle escalations",
    ],
    deliverable: "Production Release & Operator Runbook",
  },
  {
    step: "09",
    name: "Improve",
    summary: "Evaluate usage, errors, feedback, costs, and business outcomes.",
    activities: [
      "Periodically audit flagged responses, update knowledge bases as business rules evolve, and optimize model selection",
      "Track API spend and latency against actual time saved",
    ],
    deliverable: "Ongoing Evaluation & Maintenance Cycle",
  },
];

export const AI_TRUST_SAFETY_SECTION = {
  heading: "How Webntric approaches responsible, trustworthy AI.",
  corePolicy:
    "AI outputs are treated as suggestions or assisted results unless the workflow has been specifically validated for automated action.",
  subtitle:
    "We do not claim formal AI safety certifications where none exist. Instead, we implement concrete engineering safeguards around every model interaction so your business stays in control of its data, spend, and customer reputation.",
  controls: [
    {
      title: "Clear use-case definition",
      description:
        "Every AI feature is scoped to a specific, bounded task rather than an open-ended chatbot that tries to answer everything.",
      category: "Governance",
    },
    {
      title: "Human oversight",
      description:
        "High-impact actions—such as sending external replies, posting accounting entries, or publishing content—include a human review step.",
      category: "Governance",
    },
    {
      title: "Privacy-conscious data handling",
      description:
        "We configure API integrations so sensitive business data is not used to train public foundation models, and minimize PII sent in prompts.",
      category: "Data & Privacy",
    },
    {
      title: "Access control",
      description:
        "Retrieval pipelines respect existing user roles so an employee cannot use an AI assistant to summarize records they are not authorized to view.",
      category: "Security",
    },
    {
      title: "Prompt and input protection",
      description:
        "User inputs are sanitized, length-bounded, and separated from system instructions to reduce manipulation.",
      category: "Security",
    },
    {
      title: "Output validation",
      description:
        "Model responses are checked against strict JSON schemas, business rules, and citation requirements before being shown or stored.",
      category: "Security",
    },
    {
      title: "Protection against prompt injection",
      description:
        "We isolate untrusted user or document text from privileged actions and never allow an LLM to execute raw database or shell commands.",
      category: "Security",
    },
    {
      title: "Protection against data leakage",
      description:
        "System prompts, API keys, and cross-customer records are isolated on the server side and never exposed to the browser.",
      category: "Data & Privacy",
    },
    {
      title: "Logging and monitoring",
      description:
        "Requests, latency, token usage, validation failures, and user feedback are logged for quality auditing.",
      category: "Operations",
    },
    {
      title: "Rate limiting and cost controls",
      description:
        "Per-user rate limits, daily token budgets, and anomaly alerts prevent unexpected API bills from automated scripts or traffic spikes.",
      category: "Operations",
    },
    {
      title: "Fallback behavior",
      description:
        "If an external AI service is slow, rate-limited, or uncertain, the application falls back cleanly to standard forms or human queues.",
      category: "Operations",
    },
    {
      title: "User disclosure where AI is being used",
      description:
        "Interfaces clearly label AI-generated summaries, drafts, and chat responses so customers and staff know how the output was produced.",
      category: "Governance",
    },
    {
      title: "Escalation to humans",
      description:
        "Every customer-facing assistant includes a direct way to reach a human team member via form, phone, or support ticket.",
      category: "Governance",
    },
    {
      title: "Evaluation against representative examples",
      description:
        "Before release, we test prompts and retrieval against a curated set of real business questions and tricky edge cases.",
      category: "Operations",
    },
    {
      title: "Ongoing review as source data and business rules change",
      description:
        "When your pricing, policies, or product catalogue change, we provide clear workflows to update the underlying knowledge sources.",
      category: "Governance",
    },
  ] satisfies AITrustControl[],
};

export const AI_TECHNOLOGY_SECTION = {
  heading: "Practical AI architecture—explained in business terms.",
  intro:
    "We do not lock you into a single AI vendor or add complex infrastructure when a simpler integration works. Every technical layer serves a specific operational purpose.",
  selectionCriteriaIntro:
    "We select language models, hosting environments, and retrieval architectures based on your specific operational requirements:",
  selectionCriteria: [
    "Privacy requirements",
    "Data sensitivity",
    "Cost",
    "Latency",
    "Accuracy",
    "Hosting needs",
    "Integration requirements",
    "Regulatory or contractual requirements",
  ],
  technologies: [
    {
      technology: "Large Language Model (LLM) APIs",
      businessPurpose:
        "Reads, summarizes, classifies, and drafts natural language or structured data without building a model from scratch.",
      whenUsed:
        "Selected per task—using fast, lightweight models for simple classification and deeper reasoning models for complex synthesis.",
    },
    {
      technology: "Retrieval-Augmented Generation (RAG)",
      businessPurpose:
        "Connects the AI to your actual company PDFs, policies, and database records so it answers using your facts rather than guessing.",
      whenUsed:
        "Essential for internal knowledge assistants and customer support bots that must cite approved sources.",
    },
    {
      technology: "Embeddings and Vector Search",
      businessPurpose:
        "Finds relevant paragraphs or products based on meaning rather than requiring an exact word-for-word match.",
      whenUsed:
        "Used alongside traditional database filters for product discovery, FAQ matching, and document search.",
    },
    {
      technology: "Document Processing & OCR",
      businessPurpose:
        "Converts scanned PDFs, invoices, and images into machine-readable text and tables for field extraction.",
      whenUsed:
        "Used in accounts payable, admission intake, and logistics challan processing workflows.",
    },
    {
      technology: "Structured Outputs (Schema Enforcement)",
      businessPurpose:
        "Forces the AI to return predictable, typed fields (such as Date, Invoice Number, Line Items, Category) that software can validate.",
      whenUsed:
        "Used whenever AI output feeds into a form, database, ERP, or approval screen.",
    },
    {
      technology: "Workflow Automation & Orchestration",
      businessPurpose:
        "Combines deterministic code rules with AI steps—such as checking math in code after an AI extracts invoice lines.",
      whenUsed:
        "Used to keep business logic predictable while using AI only for the unstructured parts of a workflow.",
    },
    {
      technology: "Secure API Integrations",
      businessPurpose:
        "Connects AI features safely to your existing CRM, ERP, website, or helpdesk over encrypted, authenticated channels.",
      whenUsed:
        "Implemented on the server side so API keys and internal endpoints are never exposed to client browsers.",
    },
    {
      technology: "Role-Based Access Control (RBAC)",
      businessPurpose:
        "Ensures staff and customers only retrieve or generate information they are permitted to see.",
      whenUsed:
        "Enforced at the database and document-retrieval layer before any context is passed to a model.",
    },
    {
      technology: "Monitoring and Evaluation Systems",
      businessPurpose:
        "Tracks response quality, latency, fallback rates, and monthly API cost so the system stays dependable after launch.",
      whenUsed:
        "Built into pilot and production deployments to catch drift or broken document links early.",
    },
  ] satisfies AITechnologyItem[],
};

export const AI_LIMITATIONS_SECTION = {
  heading: "AI is powerful, but it is not automatically correct.",
  subtitle:
    "Being honest about where generative AI falls short is the best way to design systems that actually succeed in daily operations.",
  limitations: [
    {
      title: "AI can produce incorrect or incomplete responses",
      explanation:
        "Language models predict likely text and can occasionally state inaccurate details ('hallucinations'), especially if source documents are missing or vague.",
    },
    {
      title: "AI may misunderstand ambiguous instructions",
      explanation:
        "When user questions or uploaded documents are poorly phrased or contradictory, the model may interpret them differently than a senior employee would.",
    },
    {
      title: "AI output should be reviewed for high-impact decisions",
      explanation:
        "Financial postings, legal commitments, medical/clinical communications, and customer pricing quotes should always require human verification.",
    },
    {
      title: "Source data quality affects results",
      explanation:
        "If your internal manuals contain three conflicting versions of a policy, an AI assistant will reflect that confusion until the source documents are cleaned up.",
    },
    {
      title: "AI systems require monitoring and maintenance",
      explanation:
        "Model versions change, API providers deprecate endpoints, and customer questions evolve—requiring periodic testing and prompt updates.",
    },
    {
      title: "Costs may change as usage grows",
      explanation:
        "Unlike static code, cloud AI APIs charge per token or document processed. We design caching, rate limits, and model routing to keep costs predictable.",
    },
    {
      title: "Business rules and content must be kept up to date",
      explanation:
        "When you launch a new service or change a return policy, someone on your team must update the approved knowledge base.",
    },
    {
      title: "Not every process should be automated",
      explanation:
        "High-trust relationship building, complex negotiation, and sensitive customer escalations belong with experienced people, not automated bots.",
    },
  ],
};

export const AI_ILLUSTRATIVE_USE_CASES: AIIllustrativeScenario[] = [
  {
    id: "illustrative-invoice-intake",
    title: "Supplier Invoice & Purchase Order Verification Workflow",
    badge: "Illustrative Architecture Example",
    businessProblem:
      "Accounts staff spend hours manually typing multi-line supplier invoices into inventory software and checking whether billed rates match the original purchase order.",
    existingProcess:
      "Paper and PDF invoices arrive by email or WhatsApp; operators manually key item codes, quantities, and tax amounts into the ledger.",
    aiSolution:
      "An intake screen extracts supplier details, line items, and tax totals from the PDF into a structured table and highlights any rate discrepancy against the purchase order.",
    humanReviewProcess:
      "The accounts operator sees the original PDF side-by-side with the extracted fields, corrects any flagged line item, and clicks 'Approve & Post' to commit to the database.",
    technologiesUsed: [
      "Document OCR & layout extraction",
      "Structured JSON schema validation",
      "Deterministic math & PO-matching rules",
      "Role-protected operator review UI",
    ],
    securityControls: [
      "Authenticated staff-only upload access",
      "Automated arithmetic verification (line sum vs. invoice total)",
      "Immutable audit log of operator edits and approval timestamp",
    ],
    expectedOutcome:
      "Reduces manual data-entry time per invoice while keeping 100% human sign-off before ledger posting.",
    limitations:
      "Handwritten carbon-copy challans or heavily smudged thermal receipts may still require manual entry when characters are illegible.",
  },
  {
    id: "illustrative-sop-assistant",
    title: "Internal SOP & Technical Manual Knowledge Assistant",
    badge: "Illustrative Architecture Example",
    businessProblem:
      "Service technicians and branch coordinators frequently call senior managers to ask how to handle specific equipment faults, warranty terms, or compliance steps.",
    existingProcess:
      "Staff search through dozens of 80-page PDF manuals on shared drives or ask colleagues in group chats.",
    aiSolution:
      "A permission-aware web portal where staff type a question in plain language and receive a concise answer quoting the exact section and page number of the approved manual.",
    humanReviewProcess:
      "Every answer displays clickable source excerpts so the technician verifies the exact specification, plus a 'Flag outdated info' button routed to operations leadership.",
    technologiesUsed: [
      "Retrieval-Augmented Generation (RAG)",
      "Document chunking & vector search",
      "Role-Based Access Control (RBAC)",
      "Citation verification layer",
    ],
    securityControls: [
      "Staff login required with role-based document filtering",
      "Strict instruction to answer 'Not found in approved manuals' when no source matches",
      "Zero public access to internal technical PDFs",
    ],
    expectedOutcome:
      "Faster onboarding for new staff and fewer repetitive interruptions for senior supervisors.",
    limitations:
      "Requires operations leadership to retire old PDF manuals whenever a procedure is revised.",
  },
  {
    id: "illustrative-enquiry-triage",
    title: "Website Enquiry Qualification & Support Assistant",
    badge: "Illustrative Architecture Example",
    businessProblem:
      "Website visitors ask detailed questions outside business hours, and sales teams receive vague enquiries lacking project scope or service category details.",
    existingProcess:
      "Visitors fill out a generic contact box or leave the site without enquiring; staff spend the next day calling to gather basic context.",
    aiSolution:
      "A grounded website assistant that answers common questions from approved service pages, asks 3–4 polite qualifying questions, and packages a clean summary for the sales team.",
    humanReviewProcess:
      "The assistant never invents custom quotes or contractual promises; it summarizes the visitor's requirement and hands off to a human consultant for follow-up.",
    technologiesUsed: [
      "Grounded retrieval over approved service content",
      "Structured lead-capture schema",
      "Rate-limited API gateway",
      "Email & CRM notification webhook",
    ],
    securityControls: [
      "Prompt-injection filtering and input length limits",
      "IP rate limiting and abuse protection",
      "Clear user disclosure and immediate 'Talk to a person' option",
    ],
    expectedOutcome:
      "Visitors get immediate clarity on standard questions, and your team receives better-structured enquiries.",
    limitations:
      "Cannot replace human consultation for custom pricing, complex architecture scoping, or negotiated terms.",
  },
];

export const AI_SERVICE_COMPARISON = [
  {
    criterion: "Best suited for",
    generativeAi:
      "Unstructured text, summarizing documents, natural-language Q&A over manuals, extracting fields from varied PDFs, and drafting content.",
    ruleBasedAutomation:
      "Predictable 'if-this-then-that' triggers, scheduled reminders, barcode scans, invoice math, and status notifications.",
    customSoftware:
      "Core system of record: counter POS billing, inventory ledgers, role permissions, approvals, and structured reporting.",
  },
  {
    criterion: "Predictability of output",
    generativeAi:
      "Probabilistic—requires grounding, schema validation, and human review for important decisions.",
    ruleBasedAutomation:
      "100% deterministic—the same input always produces the exact same output.",
    customSoftware:
      "100% deterministic—enforced by database constraints and tested application code.",
  },
  {
    criterion: "Ongoing operating cost",
    generativeAi:
      "Usage-based API/token costs plus periodic prompt and knowledge-base maintenance.",
    ruleBasedAutomation:
      "Low, fixed hosting or background job execution cost.",
    customSoftware:
      "Standard hosting/server cost (or zero cloud cost for offline Windows desktop deployments).",
  },
  {
    criterion: "Webntric recommendation",
    generativeAi:
      "Use selectively where language understanding or document synthesis genuinely saves human effort.",
    ruleBasedAutomation:
      "Use first whenever rules are clear and inputs are already structured.",
    customSoftware:
      "Build as the reliable foundation before adding AI assistants on top.",
  },
];

export const AI_FAQS = [
  {
    question: "What kind of AI application can you build?",
    answer:
      "We build practical business AI applications including grounded customer support chatbots, internal SOP and document knowledge assistants (RAG), invoice and document data-extraction workflows with human review, semantic product/catalogue search, internal content drafting workflows, and API integrations that connect language models to your existing CRM, ERP, or custom software.",
  },
  {
    question: "Is generative AI suitable for every business?",
    answer:
      "No. If your core bottleneck is slow counter billing, missing inventory tracking, or a lack of a clear website, traditional deterministic software or rule-based automation is almost always a better, more reliable first investment. We assess your workflow honestly and only recommend AI where unstructured text, document processing, or knowledge lookup creates a genuine bottleneck.",
  },
  {
    question: "Can an AI assistant use our internal documents?",
    answer:
      "Yes. Using Retrieval-Augmented Generation (RAG), we index your approved PDFs, policy manuals, and product guides so the assistant searches your specific documents and provides source citations alongside its answers.",
  },
  {
    question: "Can AI connect to our existing software?",
    answer:
      "Yes, provided your existing software has an API, database access, or structured import/export capability (such as webhook endpoints, REST APIs, or CSV/JSON sync). We design secure middleware with strict permissions so AI features can read approved context or create draft records safely.",
  },
  {
    question: "How do you protect confidential information?",
    answer:
      "We enforce role-based access controls before data reaches the model, strip unnecessary personal identifiers where appropriate, never expose API keys in client browsers, and use commercial enterprise/API tiers configured so your business prompts and documents are not used to train public AI models.",
  },
  {
    question: "Can users review AI-generated results?",
    answer:
      "Yes—and we strongly recommend it. We build side-by-side human-in-the-loop review interfaces where staff can inspect source citations, edit extracted invoice fields, or modify drafted replies before clicking approve.",
  },
  {
    question: "What happens when the AI gives an incorrect answer?",
    answer:
      "We design three layers of protection: (1) retrieval grounding that instructs the system to state when an answer is not found in approved documents rather than guessing, (2) source citations and confidence indicators so users can spot issues immediately, and (3) a one-click escalation or feedback mechanism so your team can correct the underlying document or prompt.",
  },
  {
    question: "Can AI automate customer support?",
    answer:
      "AI can reliably handle repetitive first-level questions (such as operating hours, standard service descriptions, documentation checklists, and initial enquiry qualification) when grounded in approved content. However, complex complaints, custom pricing, and sensitive issues should always escalate smoothly to a human team member.",
  },
  {
    question: "Do you build private or self-hosted AI systems?",
    answer:
      "Depending on your data sensitivity, hosting budget, and latency requirements, we can deploy solutions using private cloud endpoints (such as dedicated cloud regions with zero-data-retention policies) or self-hosted open-weights models on dedicated GPU infrastructure. Confirm your specific compliance and infrastructure budget with our team during discovery.",
  },
  {
    question: "How do you measure whether an AI application is useful?",
    answer:
      "Before building, we define practical operational metrics—such as reduction in manual document entry time, percentage of support questions resolved with verified citations, draft acceptance rate by staff, and monthly API cost per workflow completed.",
  },
  {
    question: "Can you maintain and improve the AI system after launch?",
    answer:
      "Yes. Because source documents, business rules, and external AI models evolve over time, we offer ongoing monitoring and maintenance plans covering prompt evaluation, document re-indexing, dependency updates, and cost/rate-limit monitoring.",
  },
  {
    question: "How much does an AI application cost?",
    answer:
      "Cost depends on scope: a focused website support assistant or single-document extraction workflow requires significantly less engineering than a multi-role enterprise knowledge portal integrated with custom ERP software. There are two cost components: one-time engineering/setup and ongoing cloud/API usage. We provide a transparent written scope and estimate both before development starts.",
  },
  {
    question: "How long does an AI project take?",
    answer:
      "A focused pilot—such as a grounded FAQ assistant or a structured document extraction prototype—typically takes 3 to 6 weeks including data preparation, evaluation testing, and human-review interface design. Larger multi-system integrations are delivered in phased milestones.",
  },
];
