export type SecurityControl = {
  slug: string;
  title: string;
  description: string;
  scope: string[];
  frequency?: string;
  dependsOn?: string[];
  status: "available" | "optional" | "requires-confirmation";
  precisionNote: string;
};

export interface SecurityPackageTier {
  id: "essential" | "business" | "managed";
  name: string;
  tagline: string;
  bestFor: string;
  availabilityNote: string;
  features: {
    label: string;
    detail: string;
    status: "available" | "optional" | "requires-confirmation";
  }[];
}

export interface ClaimValidationEntry {
  area: string;
  status: "Confirmed" | "Requires business confirmation" | "Remove from public page";
  publicWordingUsed: string;
  internalVerificationQuestion: string;
}

export const SECURITY_HERO_CONTENT = {
  eyebrow: "Website, Application & Data Security",
  h1: "Protect the systems your business depends on.",
  subtitle:
    "Webntric builds and maintains websites and software with practical security controls, tested deployments, automated backups, and ongoing support designed to reduce avoidable risk.",
  distinctionQuote:
    "HTTPS protects data in transit. Backups help recover from loss. Testing reduces deployment mistakes. Monitoring helps identify problems. Together, these controls create a more reliable digital system—but no single control eliminates every risk.",
  primaryCta: {
    label: "Review my website security",
    href: "/contact?service=website-data-security&challenge=security-review",
  },
  secondaryCta: {
    label: "Discuss a secure software project",
    href: "/contact?service=website-data-security",
  },
  heroImage: "/images/security/security-hero-operations.webp",
  heroAlt:
    "Engineering team reviewing application security checks, deployment status, and uptime monitoring",
};

export const SECURITY_PROBLEMS_SECTION = {
  heading: "Why operational security and reliability matter to everyday business",
  intro:
    "Most business disruptions do not come from cinematic cyberattacks. They happen because of expired SSL certificates, untested backups, shared admin passwords, outdated plugins, or rushed software updates.",
  concerns: [
    {
      title: "Website downtime can stop enquiries and sales",
      detail:
        "When a certificate expires or a server crashes during business hours, prospective customers and active ad campaigns hit an error page.",
    },
    {
      title: "A compromised website can damage customer trust",
      detail:
        "Browser security warnings, defaced pages, or spam redirects immediately erode the credibility you spent years building.",
    },
    {
      title: "Weak passwords and poor access control can expose systems",
      detail:
        "Shared administrator logins or former staff accounts that were never revoked create avoidable internal and external exposure.",
    },
    {
      title: "Outdated dependencies can introduce vulnerabilities",
      detail:
        "Frameworks, third-party libraries, and CMS plugins regularly publish security patches that must be tested and applied.",
    },
    {
      title: "Data can be lost through accidental deletion or infrastructure failure",
      detail:
        "Hard drives fail, operators accidentally overwrite records, and cloud instances can experience outages without warning.",
    },
    {
      title: "Backups may exist but fail when restoration is needed",
      detail:
        "Many businesses assume backups are running—only to discover during an emergency that the backup job failed months ago or omitted the database.",
    },
    {
      title: "Deployments can introduce bugs or configuration errors",
      detail:
        "Pushing code directly to a live site without pre-release checks can break forms, database connections, or mobile layouts.",
    },
    {
      title: "Business owners may not know whether security controls are working",
      detail:
        "Without clear documentation and periodic checks, leadership has no visibility into who has access or where backups are stored.",
    },
    {
      title: "Developers may focus on features while operational security is overlooked",
      detail:
        "Building screens quickly without input validation, permission checks, or secret isolation leaves hidden operational debt.",
    },
  ],
};

export const SECURITY_CONTROLS: SecurityControl[] = [
  {
    slug: "ssl-https",
    title: "SSL and HTTPS Configuration",
    description:
      "Configures encrypted transport between your visitors' browsers and your website or web application so enquiry forms, login credentials, and session tokens are not transmitted in plain text.",
    scope: [
      "HTTPS encryption in transit (TLS configuration)",
      "SSL certificate installation and configuration",
      "Certificate renewal monitoring (automated Let's Encrypt / managed CA)",
      "Permanent secure redirect from HTTP to HTTPS",
      "Secure, HttpOnly, and SameSite cookie attributes where applicable",
      "Mixed-content checks so embedded assets load securely over HTTPS",
      "HTTP Strict Transport Security (HSTS) header configuration where appropriate",
    ],
    frequency: "Configured at launch; renewal monitored continuously per hosting setup",
    dependsOn: ["Domain DNS configuration", "Supported hosting or reverse-proxy environment"],
    status: "available",
    precisionNote:
      "SSL/HTTPS helps protect data while it travels between the visitor and the website. It does not by itself protect against every application, account, server, or database risk.",
  },
  {
    slug: "secure-development",
    title: "Secure Website and Application Development",
    description:
      "Designs security controls directly into application code, APIs, and database queries from day one—informed by current OWASP Top 10 web application security risks (including broken access control, security misconfiguration, software supply-chain failures, cryptographic failures, injection, authentication failures, and data-integrity issues).",
    scope: [
      "Server-side input validation and schema enforcement",
      "Contextual output encoding to prevent Cross-Site Scripting (XSS)",
      "Parameterized queries / ORM safeguards against SQL & NoSQL injection",
      "Authentication and role-based authorization checks on every protected route",
      "Secure session management and token handling",
      "Cross-Site Request Forgery (CSRF) protection where applicable",
      "API and form rate limiting to reduce automated abuse",
      "Secure file upload validation (file type, size, and storage isolation)",
      "Dependency management and software supply-chain vulnerability checks",
      "Safe error handling that logs diagnostics internally without leaking stack traces",
      "HTTP security headers (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)",
      "Secrets management via isolated server environment variables",
      "Separation of development, staging, and production environments",
      "Least-privilege database and service account access",
    ],
    frequency: "Applied throughout software architecture, coding, and code review",
    dependsOn: ["Application architecture scope"],
    status: "available",
    precisionNote:
      "We use OWASP guidance as an engineering and code-review reference to reduce common vulnerability classes—not as a claim of formal third-party certification.",
  },
  {
    slug: "access-control",
    title: "Access Control and Authentication",
    description:
      "Protects administrative dashboards, billing counters, and internal business portals so staff and partners only access the screens and records required for their role.",
    scope: [
      "Role-based permissions (e.g., Counter Operator, Store Manager, Accountant, Admin)",
      "Administrator route and dashboard access protection",
      "Strong password hashing and complexity requirements",
      "Multi-factor authentication (MFA) integration where supported by identity provider or scope",
      "Automatic session expiration and idle timeout controls",
      "Login rate limiting and brute-force lockout protection",
      "Secure, time-limited password reset workflows",
      "Strict separation of production and development credentials",
      "Account deactivation and removal workflows for departing staff",
      "Administrative audit logs recording sensitive record changes where scoped",
    ],
    frequency: "Designed during build; access reviewed periodically under active support plans",
    dependsOn: ["Selected authentication architecture", "Client user-management policies"],
    status: "optional",
    precisionNote:
      "Multi-factor authentication (MFA) and granular audit logging are implemented according to the agreed application scope and identity provider—never assumed unless explicitly configured and enabled.",
  },
  {
    slug: "automated-backups",
    title: "Automated Website and Database Backups",
    description:
      "Establishes scheduled, automated backup routines for application files, media assets, and relational or local databases—paired with retention policies and restoration checks.",
    scope: [
      "Automated daily website and configuration backups (where supported by plan/hosting)",
      "Automated daily database snapshots (cloud SQL or local Windows database dump + sync)",
      "Defined backup schedule aligned with business operating hours",
      "Configurable backup retention period (e.g., 7-day, 14-day, or 30-day rolling retention depending on plan)",
      "Separate off-server or secondary cloud bucket backup storage",
      "Encryption at rest where supported by storage provider",
      "Backup job status monitoring and failure notifications",
      "Restricted access to backup archives",
      "Documented step-by-step restoration procedures",
      "Scheduled restore testing in a non-production environment",
      "Recovery Point Objective (RPO) and Recovery Time Objective (RTO) alignment where defined in written agreement",
    ],
    frequency: "Daily or scheduled per hosting environment and selected maintenance plan",
    dependsOn: [
      "Hosting infrastructure or cloud storage provisioning",
      "Active support / maintenance plan",
      "Written confirmation of retention window and RPO/RTO targets",
    ],
    status: "requires-confirmation",
    precisionNote:
      "Daily backups reduce the risk of permanent data loss, but a backup is only dependable when it is monitored and restoration is tested. Backup frequency, retention duration, and recovery times depend on your hosting environment and selected support plan.",
  },
  {
    slug: "secure-deployment",
    title: "Secure Deployment and Release Testing",
    description:
      "Replaces risky live-server edits with a structured release pipeline that validates code quality, environment configuration, and database migrations before and after every deployment.",
    scope: [
      "Development, staging, and production environment separation",
      "Environment variables and secret management (zero hardcoded credentials in Git)",
      "Peer code review before merging changes",
      "Automated linting and static analysis",
      "Strict TypeScript type checking",
      "Unit, integration, and end-to-end tests where appropriate to project scope",
      "Third-party dependency audit checks",
      "Production build verification prior to release",
      "Database schema migration review and pre-migration snapshot",
      "Staging deployment and stakeholder preview",
      "Documented rollback plan in case of release regression",
      "Explicit production deployment approval",
    ],
    frequency: "Executed on every production release and feature update",
    dependsOn: ["Version-controlled repository", "Staging environment availability"],
    status: "available",
    precisionNote:
      "Structured deployment pipelines significantly reduce human release mistakes, while a pre-release backup and rollback plan ensure we can revert cleanly if an unexpected issue appears.",
  },
  {
    slug: "security-monitoring",
    title: "Security Monitoring and Maintenance",
    description:
      "Ongoing post-launch care to keep frameworks patched, certificates active, backups verified, and errors surfaced early rather than waiting for customers to report a broken site.",
    scope: [
      "Scheduled framework and dependency updates",
      "Security patching for identified library vulnerabilities",
      "Automated HTTP uptime checks",
      "Application runtime error monitoring",
      "Backup completion status review",
      "SSL certificate expiry monitoring",
      "Periodic administrative access review",
      "Server and application log review where appropriate",
      "Periodic vulnerability and configuration review",
      "Incident response guidance and containment assistance",
      "Annual or scheduled disaster recovery procedure review",
    ],
    frequency: "Scheduled according to selected maintenance tier (Business Hours IST support)",
    dependsOn: ["Active Website Maintenance / AMC Support Plan"],
    status: "optional",
    precisionNote:
      "Automated uptime and error alerts run continuously where configured, while human engineering review and incident response operate during agreed support hours unless a dedicated SLA is contracted.",
  },
];

export const BACKUP_LIFECYCLE_STAGES = [
  {
    step: "01",
    title: "Automated Capture",
    summary: "Scheduled database & file snapshots",
    detail:
      "Automated jobs capture database records and application configurations on an agreed schedule (such as daily off-peak snapshots) without relying on someone remembering to click export.",
  },
  {
    step: "02",
    title: "Isolated & Encrypted Storage",
    summary: "Stored separately from the primary server",
    detail:
      "Backups are transferred to separate cloud storage or an isolated secondary drive with restricted credentials and encryption at rest where supported—so a single server failure does not destroy both live data and backups.",
  },
  {
    step: "03",
    title: "Retention & Status Monitoring",
    summary: "Rolling retention & failure alerts",
    detail:
      "Old snapshots rotate according to your agreed retention policy (e.g., 7 to 30 days), and automated checks verify that backup jobs completed with non-zero file integrity.",
  },
  {
    step: "04",
    title: "Periodic Restore Testing",
    summary: "Verified recovery in staging",
    detail:
      "On scheduled maintenance plans, we periodically restore a backup snapshot into an isolated test environment to verify that tables, relations, and media actually recover cleanly.",
  },
];

export const PRE_DEPLOYMENT_CHECKLIST = [
  {
    category: "Code & Functionality",
    items: [
      "Functional testing of all new and modified workflows",
      "Form validation, submission, and notification testing",
      "Data validation and schema boundary checks",
      "API endpoint and third-party integration testing",
      "Error and failure-state handling verification",
    ],
  },
  {
    category: "Security & Access",
    items: [
      "Authentication flow testing (login, logout, session timeout)",
      "Role-based permission and authorization boundary testing",
      "Security review (headers, secrets isolation, dependency audit)",
      "Pre-release database and configuration backup verification",
    ],
  },
  {
    category: "Experience & Performance",
    items: [
      "Responsive layout testing across 320px mobile, tablet, laptop, and desktop",
      "Cross-browser compatibility testing",
      "Real mobile viewport and touch-target testing",
      "Accessibility testing (keyboard navigation, focus states, ARIA labels, contrast)",
      "Core Web Vitals and asset performance testing",
    ],
  },
];

export const POST_DEPLOYMENT_CHECKLIST = [
  "Homepage and key routes load with HTTP 200 status",
  "HTTPS is active with a valid TLS certificate and HTTP-to-HTTPS redirect",
  "Enquiry and contact forms submit and deliver notifications accurately",
  "Transactional emails and WhatsApp/webhook notifications work as expected",
  "Database reads, writes, and migrations operate cleanly",
  "Authentication (sign-in, session persistence, sign-out) works properly",
  "Role permissions restrict unauthorized routes as intended",
  "Analytics tags fire accurately without exposing PII or sensitive data",
  "sitemap.xml and robots.txt are publicly reachable and valid",
  "Canonical URLs and Open Graph metadata point to the production domain",
  "All responsive images and static assets load without broken links",
  "Runtime error monitoring and logging are active",
  "Scheduled backup jobs are enabled and verified",
  "Zero server secrets, API keys, or debug flags are exposed in client bundles",
  "Zero critical browser console or server-log errors exist",
  "Mobile layout and navigation drawer remain intact on live URLs",
  "Live page load speed and Core Web Vitals meet acceptable thresholds",
];

export const SECURITY_PRINCIPLES = [
  {
    title: "Least Privilege",
    description:
      "Users, API keys, and database accounts are granted only the minimum permissions needed to perform their intended function.",
  },
  {
    title: "Defense in Depth",
    description:
      "We layer multiple independent controls—HTTPS, input validation, access checks, rate limiting, and backups—so no single failure compromises everything.",
  },
  {
    title: "Secure Defaults",
    description:
      "New routes, admin panels, and storage buckets start restricted by default rather than open to public access.",
  },
  {
    title: "Data Minimization",
    description:
      "We collect and store only the business and customer fields genuinely required for the workflow, reducing exposure if an incident occurs.",
  },
  {
    title: "Separation of Environments",
    description:
      "Development and testing happen in isolated environments using non-production credentials so experiments never touch live customer data.",
  },
  {
    title: "Input Validation",
    description:
      "Every form field, URL parameter, file upload, and API payload is validated on the server side—never relying solely on browser checks.",
  },
  {
    title: "Safe Error Handling",
    description:
      "When something fails, users see a calm, helpful message while detailed diagnostic logs remain visible only to authorized engineers.",
  },
  {
    title: "Tested Recovery",
    description:
      "We treat backup configuration as incomplete until the restoration procedure has been documented and verified.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Security is not a one-time launch event; dependencies, certificates, and access lists require ongoing maintenance as threats and software evolve.",
  },
  {
    title: "Clear Responsibility",
    description:
      "We document clearly which operational controls Webntric manages and which account hygiene practices your internal team owns.",
  },
];

export const OWASP_AWARENESS_NOTE = {
  heading: "Informed by OWASP Top 10:2025 Web Application Security Guidance",
  description:
    "Our development and code-review checklists use the OWASP Top 10 as a practical engineering reference to address the most prevalent web application risks—including broken access control, security misconfiguration, software supply-chain failures, cryptographic failures, injection, insecure design, authentication failures, data integrity failures, logging and alerting failures, and mishandling exceptional conditions.",
  disclaimer:
    "Note: Referencing OWASP engineering guidelines reflects our internal secure development practice and does not represent a formal third-party certification or audit seal.",
};

export const SHARED_RESPONSIBILITY_MODEL = {
  heading: "Security is a shared responsibility between Webntric and your team.",
  intro:
    "Even the best-engineered application can be compromised if an administrator shares their password over chat or leaves a former employee's account active. Clear alignment prevents gaps.",
  webntricResponsibilities: [
    "Secure application architecture, input validation, and access-control coding",
    "HTTPS/SSL configuration, security headers, and environment secret isolation",
    "Structured pre-deployment testing and post-deployment verification checks",
    "Automated backup setup and storage isolation according to the agreed hosting plan",
    "Uptime, error, and backup status monitoring according to the selected maintenance tier",
    "Scheduled dependency and security patching under active maintenance agreements",
    "Incident containment, log investigation, and restoration assistance within agreed scope",
  ],
  clientResponsibilities: [
    "Maintaining strong, unique passwords for all administrator, hosting, and email accounts",
    "Enabling Multi-Factor Authentication (MFA) wherever supported",
    "Limiting administrative access strictly to staff who require it",
    "Reviewing and approving legitimate user accounts and role assignments",
    "Promptly notifying Webntric when an employee or contractor leaves so access can be revoked",
    "Reporting suspicious emails, unusual login alerts, or unexpected system behavior early",
    "Keeping business contact, domain registrar, and billing details accurate",
    "Following agreed backup custody guidelines (such as keeping secondary offline drives secure)",
    "Never sharing passwords, API keys, or OTP codes over unencrypted channels",
  ],
};

// Internal configuration file structure for Security & Reliability Plans (no invented pricing)
export const SECURITY_PLAN_CONFIG: SecurityPackageTier[] = [
  {
    id: "essential",
    name: "Essential Baseline",
    tagline: "Core launch security and deployment hygiene for websites and initial builds.",
    bestFor: "Startups, informational business websites, and focused v1 releases.",
    availabilityNote: "Included in standard Webntric project launches or basic care plans; hosting-specific items depend on selected server environment.",
    features: [
      {
        label: "HTTPS & SSL Configuration",
        detail: "TLS encryption in transit, HTTP-to-HTTPS redirect, and mixed-content verification.",
        status: "available",
      },
      {
        label: "Baseline HTTP Security Headers",
        detail: "X-Content-Type-Options, Referrer-Policy, frame protection, and secure cookie flags.",
        status: "available",
      },
      {
        label: "Automated Backup Configuration",
        detail: "Initial setup of scheduled hosting or local database backup routines.",
        status: "optional",
      },
      {
        label: "Pre- & Post-Deployment Verification",
        detail: "Structured release checklist executed before and immediately after launch.",
        status: "available",
      },
      {
        label: "Scheduled Maintenance Window",
        detail: "Periodic dependency checks and core framework updates on an agreed schedule.",
        status: "optional",
      },
    ],
  },
  {
    id: "business",
    name: "Business Continuity",
    tagline: "Monitored daily backups, restore testing, and proactive patching for active operations.",
    bestFor: "Clinics, retail/wholesale systems, educational institutes, and growing companies.",
    availabilityNote: "Available under an active Webntric Annual Maintenance Contract (AMC) with supported cloud or managed hosting.",
    features: [
      {
        label: "Daily Website & Database Backups",
        detail: "Automated daily snapshots stored separately from the primary application server.",
        status: "requires-confirmation",
      },
      {
        label: "Backup Status Monitoring & Alerts",
        detail: "Verification that scheduled backup jobs complete successfully.",
        status: "requires-confirmation",
      },
      {
        label: "Periodic Restore Testing",
        detail: "Scheduled test restorations in a non-production environment to confirm data integrity.",
        status: "requires-confirmation",
      },
      {
        label: "Dependency & Security Patching",
        detail: "Regular review and application of framework, library, and OS security updates.",
        status: "optional",
      },
      {
        label: "Uptime & Runtime Error Monitoring",
        detail: "Automated alerts for route downtime, SSL expiry, or critical server exceptions.",
        status: "optional",
      },
      {
        label: "Periodic Access & Security Review",
        detail: "Review of active admin accounts, role permissions, and configuration hygiene.",
        status: "optional",
      },
      {
        label: "Priority Business-Hours Support",
        detail: "Direct engineering response within 1 business day (faster for critical outages during IST hours).",
        status: "available",
      },
    ],
  },
  {
    id: "managed",
    name: "Managed Operations & Recovery",
    tagline: "Dedicated staging workflows, advanced access controls, and disaster recovery planning.",
    bestFor: "Multi-branch enterprises, high-volume portals, and custom ERP deployments.",
    availabilityNote: "Custom-scoped per infrastructure architecture and written SLA agreement.",
    features: [
      {
        label: "Everything in Business Continuity",
        detail: "Includes monitored daily backups, restore verification, and dependency management.",
        status: "requires-confirmation",
      },
      {
        label: "Dedicated Staging Environment Workflow",
        detail: "Isolated pre-production environment for testing every update and migration before live release.",
        status: "available",
      },
      {
        label: "Advanced Access Control & Audit Logging",
        detail: "Granular RBAC, MFA integration, and immutable audit logs for sensitive data changes.",
        status: "optional",
      },
      {
        label: "Higher-Frequency Monitoring & Retention",
        detail: "Extended backup retention windows and customized health checks tailored to critical routes.",
        status: "requires-confirmation",
      },
      {
        label: "Incident Response Coordination",
        detail: "Documented containment, credential rotation, and recovery runbook execution.",
        status: "optional",
      },
      {
        label: "Disaster Recovery Planning (RPO/RTO Alignment)",
        detail: "Written recovery architecture aligned with your business continuity targets.",
        status: "requires-confirmation",
      },
      {
        label: "Scheduled Security & Performance Reviews",
        detail: "Quarterly engineering review of database performance, logs, and security posture.",
        status: "optional",
      },
    ],
  },
];

export const HOMEPAGE_TRUST_CARDS = [
  {
    id: "https-ssl",
    title: "HTTPS and SSL",
    summary: "Encrypted data in transit, secure redirects, and certificate renewal checks.",
    href: "/services/website-data-security#ssl-https",
    linkLabel: "How transit encryption works",
  },
  {
    id: "automated-backups",
    title: "Automated Backups",
    summary: "Scheduled website and database snapshots with isolated storage and restore testing.",
    href: "/services/website-data-security#automated-backups",
    linkLabel: "View backup lifecycle",
  },
  {
    id: "tested-deployments",
    title: "Tested Deployments",
    summary: "Pre-release staging checks, type safety, and post-deployment verification.",
    href: "/services/website-data-security#secure-deployment",
    linkLabel: "See release checklists",
  },
  {
    id: "secure-access",
    title: "Secure Access",
    summary: "Role-based permissions, least-privilege credentials, and admin protection.",
    href: "/services/website-data-security#access-control",
    linkLabel: "Explore access controls",
  },
  {
    id: "post-launch-monitoring",
    title: "Post-Launch Monitoring",
    summary: "Dependency patching, uptime checks, and runtime error tracking.",
    href: "/services/website-data-security#security-monitoring",
    linkLabel: "Review maintenance scope",
  },
  {
    id: "human-support",
    title: "Human Support",
    summary: "Direct communication with senior engineers—no automated ticket runarounds.",
    href: "/support",
    linkLabel: "See support & continuity",
  },
];

export const SECURITY_FAQS = [
  {
    question: "Does SSL make my website completely secure?",
    answer:
      "No. SSL/HTTPS is essential because it encrypts information while it travels between a visitor's browser and your server, preventing eavesdropping in transit. However, SSL alone does not protect against weak admin passwords, outdated software dependencies, SQL injection, broken access controls, or server hardware failure. Complete security requires combining HTTPS with secure coding, access control, automated backups, and ongoing maintenance.",
  },
  {
    question: "Do you provide daily website backups?",
    answer:
      "Automated daily website and configuration backups are available depending on your hosting environment and selected support plan. During project setup or maintenance onboarding, we document the exact backup schedule in writing so you know how and when snapshots run.",
  },
  {
    question: "Do you back up the database separately?",
    answer:
      "Yes, for database-driven web applications and offline Windows software, database backups are handled specifically to ensure transactional consistency—either through automated cloud database snapshots or scheduled local database dumps synced to secondary/cloud storage, depending on your deployment architecture.",
  },
  {
    question: "How long are backups retained?",
    answer:
      "Backup retention periods (for example, 7-day, 14-day, or 30-day rolling retention) depend on your hosting provider's storage allocation and your selected maintenance plan. We configure and document the exact retention window in your project handover documentation.",
  },
  {
    question: "Do you test whether backups can be restored?",
    answer:
      "A backup is only useful if it can actually be restored. During initial deployment—and periodically under our Business Continuity and Managed support plans—we test restoring database and file snapshots into an isolated environment to verify data integrity and document the recovery steps.",
  },
  {
    question: "What happens if a deployment causes a problem?",
    answer:
      "Before deploying significant updates or database changes, we verify the build in a staging/preview environment and confirm a recent backup snapshot exists. If a regression appears after release, we follow a documented rollback procedure to revert to the previous stable version while diagnosing the issue.",
  },
  {
    question: "Do you test websites before going live?",
    answer:
      "Yes. Every release goes through our Pre-Deployment Testing Checklist covering functional flows, responsive layouts from 320px upwards, form submissions, authentication, role permissions, accessibility, performance, and security headers.",
  },
  {
    question: "Do you verify the website after deployment?",
    answer:
      "Yes. Immediately after a production release, we execute a 17-point Post-Deployment Verification Checklist confirming live HTTP 200 status, active HTTPS, working forms and notifications, database reads/writes, sitemap/canonical integrity, zero exposed secrets, and clean server logs.",
  },
  {
    question: "Can you secure an existing website?",
    answer:
      "Yes. We can audit an existing website or web application to fix broken HTTPS/mixed-content issues, configure security headers, remove exposed credentials, patch outdated dependencies, tighten admin access, and set up automated backups—or recommend a clean rebuild if the legacy codebase is fundamentally unsupported.",
  },
  {
    question: "Can you secure custom business software?",
    answer:
      "Yes. Whether you run a browser-based ERP portal or an offline Windows desktop billing application, we implement role-based access control, input validation, encrypted database connections, local/off-site backup routines, and audit logging tailored to your workflow.",
  },
  {
    question: "Do you provide security monitoring?",
    answer:
      "Under our maintenance and support plans, we configure automated uptime checks, SSL expiry alerts, backup status checks, and dependency vulnerability reviews. Note that while automated monitors run continuously, human engineering review and response take place during our published business hours unless a custom SLA is agreed.",
  },
  {
    question: "Can you help after a website security incident?",
    answer:
      "Yes. If your website or application experiences an incident, we can assist with isolating the affected system, rotating compromised credentials, inspecting logs to identify the entry point, restoring from a clean backup snapshot, and hardening the configuration to prevent repeat issues.",
  },
  {
    question: "Do you offer staging environments?",
    answer:
      "Yes. We maintain separate development and staging/preview environments so new features, design changes, and database migrations can be reviewed and tested safely before touching your live production system.",
  },
  {
    question: "How do you protect administrator access?",
    answer:
      "We protect admin portals using strong password hashing, server-side role verification on every request, login rate limiting to block brute-force attempts, automatic session expiration, environment-isolated credentials, and optional multi-factor authentication (MFA).",
  },
  {
    question: "Do you provide multi-factor authentication?",
    answer:
      "Multi-factor authentication (MFA / 2FA) can be integrated into custom web applications and admin dashboards using authenticator apps (TOTP) or identity providers, and we strongly recommend enabling MFA on all hosting, domain, and email accounts.",
  },
  {
    question: "What security responsibilities remain with the client?",
    answer:
      "Security is a shared responsibility. While Webntric handles secure code, deployment verification, and agreed backup/maintenance tasks, your team is responsible for keeping administrator passwords strong and private, enabling MFA on company accounts, restricting who gets admin rights, and notifying us promptly when staff members leave so their access can be revoked.",
  },
];

// Honest Claim-Review Registry for internal verification before/during publication
export const CLAIM_VALIDATION_REGISTRY: ClaimValidationEntry[] = [
  {
    area: "Daily backups",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Available depending on hosting environment and selected support plan; schedule documented in writing per project.",
    internalVerificationQuestion: "Are website backups actually performed every day across all hosted client tiers?",
  },
  {
    area: "Database backups",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Configured per database architecture (cloud snapshots or local Windows DB dumps synced to secondary storage).",
    internalVerificationQuestion: "Are databases backed up separately from static files with verified consistency?",
  },
  {
    area: "Backup retention",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Configurable rolling retention (e.g., 7, 14, or 30 days) depending on storage allocation and maintenance plan.",
    internalVerificationQuestion: "Where are backups stored and how long are snapshots retained by default?",
  },
  {
    area: "Restore testing",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Performed during initial setup and periodically on Business Continuity & Managed maintenance plans.",
    internalVerificationQuestion: "How often is restoration tested in a non-production environment?",
  },
  {
    area: "SSL renewal",
    status: "Confirmed",
    publicWordingUsed:
      "HTTPS configuration, HTTP-to-HTTPS redirect, and automated/monitored SSL certificate renewal on supported hosts.",
    internalVerificationQuestion: "Do you provide SSL configuration and renewal monitoring?",
  },
  {
    area: "Monitoring",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Automated uptime, SSL, and error alerts where configured; human review during business hours IST (no unverified 24/7 SOC claim).",
    internalVerificationQuestion: "Do you provide uptime and vulnerability monitoring, and what is the review cadence?",
  },
  {
    area: "Incident response",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Incident containment, credential rotation, and clean backup restoration assistance according to agreed support scope.",
    internalVerificationQuestion: "Do you offer incident response and what is the exact escalation procedure?",
  },
  {
    area: "Response times",
    status: "Confirmed",
    publicWordingUsed:
      "Personal review and response within 1 business day (Monday–Friday, 9:00 AM – 6:00 PM IST); priority outage handling for AMC clients.",
    internalVerificationQuestion: "What support response time can you realistically promise?",
  },
  {
    area: "Uptime",
    status: "Confirmed",
    publicWordingUsed:
      "High-availability architecture and uptime monitoring without ever claiming 'zero downtime' or '100% uptime'.",
    internalVerificationQuestion: "Ensure zero '100% uptime' or 'zero downtime' claims appear anywhere.",
  },
  {
    area: "Security reviews",
    status: "Confirmed",
    publicWordingUsed:
      "Pre-deployment security review and periodic dependency/access hygiene reviews (informed by OWASP Top 10:2025).",
    internalVerificationQuestion: "Confirm pre-release security checklist is executed on deployments.",
  },
  {
    area: "AI accuracy",
    status: "Confirmed",
    publicWordingUsed:
      "Explicitly states AI is probabilistic, can make mistakes, and requires retrieval grounding, schema validation, and human review.",
    internalVerificationQuestion: "Ensure zero 'guaranteed AI accuracy' or 'AI never makes mistakes' claims exist.",
  },
  {
    area: "Data privacy",
    status: "Confirmed",
    publicWordingUsed:
      "Data minimization, role-based access control, server-side API key isolation, and commercial API tiers that do not train on client data.",
    internalVerificationQuestion: "Confirm enterprise/API zero-training settings are used for client AI integrations.",
  },
  {
    area: "Human review",
    status: "Confirmed",
    publicWordingUsed:
      "AI outputs are treated as suggestions or assisted results unless specifically validated; human-in-the-loop approval interfaces built in.",
    internalVerificationQuestion: "Confirm human review gates are included in AI workflow designs.",
  },
  {
    area: "Compliance",
    status: "Remove from public page",
    publicWordingUsed:
      "No unverified 'fully compliant' claims; references OWASP strictly as an engineering guide and respects domain rules (e.g., ICAI/BCI).",
    internalVerificationQuestion: "Never publish 'fully compliant' without naming and verifying the specific standard.",
  },
  {
    area: "Certifications",
    status: "Remove from public page",
    publicWordingUsed:
      "Explicitly disclaims formal third-party security or AI certifications where none exist; uses zero fake security badges.",
    internalVerificationQuestion: "Never publish 'certified secure' without a real certificate or audit.",
  },
  {
    area: "Hosting",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Supports modern cloud platforms, VPS/dedicated servers, and offline Windows local deployments; capabilities vary by hosting tier.",
    internalVerificationQuestion: "Confirm which hosting providers Webntric directly manages vs. client-managed accounts.",
  },
  {
    area: "Disaster recovery",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Documented restore procedures, off-server backup isolation, and rollback plans scoped to the client's support plan.",
    internalVerificationQuestion: "Can you provide a documented restore process for each managed system?",
  },
  {
    area: "Recovery time (RTO)",
    status: "Requires business confirmation",
    publicWordingUsed:
      "No universal recovery time promised unless defined in a written SLA; recovery speed depends on database size and hosting.",
    internalVerificationQuestion: "Do not promise a specific RTO unless backed by a documented SLA.",
  },
  {
    area: "Recovery point (RPO)",
    status: "Requires business confirmation",
    publicWordingUsed:
      "Aligned with agreed backup frequency (e.g., daily snapshots or higher-frequency replication when contracted).",
    internalVerificationQuestion: "Confirm RPO expectations with clients based on their backup schedule.",
  },
];
