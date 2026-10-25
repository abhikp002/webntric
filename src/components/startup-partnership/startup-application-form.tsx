"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Lock,
  Info,
} from "lucide-react";
import {
  STARTUP_STAGE_OPTIONS,
  FOUNDER_COUNT_OPTIONS,
  TEAM_SIZE_OPTIONS,
  SUPPORT_TYPE_OPTIONS,
  StartupStage,
  StartupApplicationInput,
  validateStartupApplication,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

export function StartupApplicationForm() {
  const [formData, setFormData] = useState<Partial<StartupApplicationInput>>({
    founderName: "",
    email: "",
    phone: "",
    location: "",
    linkedinProfile: "",
    projectName: "",
    website: "",
    industry: "",
    stage: "idea",
    founderCount: "1",
    founderRoles: "",
    teamSize: "1-2",
    registrationStatus: "",
    existingUsers: "",
    currentRevenue: "",
    problem: "",
    targetCustomer: "",
    proposedSolution: "",
    whyImportant: "",
    currentAlternatives: "",
    differentiation: "",
    progress: "",
    buildFirst: "",
    requestedSupport: "",
    sixMonthSuccess: "",
    founderCommitment: "",
    founderResponsibilities: "",
    whyPartner: "",
    whyWebntric: "",
    expectedTimeline: "",
    externalCostsPlan: "",
    supportType: "technology",
    previousInvestment: "",
    confirmAccurate: false,
    understandNoGuarantee: false,
    understandNoAutomaticPartnership: false,
    noSecretsSubmitted: false,
    contactConsent: false,
    privacyConsent: false,
    marketingConsent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const formStartedRef = useRef(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent("startup_form_started", { location: "startup_application" });
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Client-side validation
    const validation = validateStartupApplication(formData);
    if (!validation.success || !validation.data) {
      setErrors(validation.errors as Record<string, string>);
      trackEvent("startup_form_error", {
        location: "startup_application",
        label: "client_validation_failed",
      });

      // Focus first error field
      const firstErrorField = Object.keys(validation.errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);
    trackEvent("startup_form_completed", { location: "startup_application" });

    try {
      const response = await fetch("/api/startup-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        trackEvent("startup_form_success", { location: "startup_application" });
      } else {
        setServerError(
          result.message ||
            "Unable to submit your application. Please verify your details."
        );
        if (result.errors) {
          setErrors(result.errors);
        }
        trackEvent("startup_form_error", {
          location: "startup_application",
          label: "server_validation_failed",
        });
      }
    } catch {
      setServerError(
        "A network error occurred. Please check your internet connection or email info@webntric.com."
      );
      trackEvent("startup_form_error", {
        location: "startup_application",
        label: "network_exception",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section id="apply" className="section-padding border-b border-border bg-card">
        <div className="container-editorial max-w-3xl">
          <div className="p-8 sm:p-12 rounded-2xl border border-primary/30 bg-primary/5 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Application Received
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Thank you for sharing your startup idea.
              </h2>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border text-sm text-foreground leading-relaxed text-left max-w-2xl mx-auto">
              Our team will review the information and contact you if there appears to be a potential fit. Submission does not guarantee acceptance or create a partnership.
            </div>

            <div className="text-xs sm:text-sm text-muted-foreground space-y-2 max-w-xl mx-auto">
              <p>
                We review applications on a rolling basis. If there is mutual alignment with our technical capabilities, a senior engineer will reach out via email or phone to schedule an exploratory discovery call.
              </p>
              <p>
                Need to discuss an urgent operational detail? Reach out directly via{" "}
                <a href="mailto:info@webntric.com" className="text-primary font-semibold hover:underline">
                  info@webntric.com
                </a>.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="apple-pill-primary px-6 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                Return to Webntric Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="section-padding border-b border-border bg-card">
      <div className="container-editorial max-w-4xl space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Confidential Application
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
            Tell us what you are building
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Share enough information for us to understand the opportunity. Please do not submit confidential trade secrets, source code, passwords, or highly sensitive personal information through this initial form.
          </p>
        </div>

        {serverError && (
          <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            <div>{serverError}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-12">
          {/* Honeypot Spam Trap */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot || ""}
              onChange={handleInputChange}
            />
          </div>

          {/* SECTION 1: FOUNDER INFORMATION */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
            <div className="border-b border-border pb-3 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                1. Founder Information
              </h3>
              <span className="text-xs font-mono text-muted-foreground">Personal Details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="founderName" className="block text-xs font-semibold text-foreground mb-1.5">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="founderName"
                  name="founderName"
                  type="text"
                  required
                  value={formData.founderName || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Priya Sharma"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.founderName ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.founderName && (
                  <p className="text-xs text-destructive mt-1">{errors.founderName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. priya@mycompany.com"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.email ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-1.5">
                  Phone / WhatsApp Number <span className="text-primary">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.phone ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="block text-xs font-semibold text-foreground mb-1.5">
                  City & Country <span className="text-primary">*</span>
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={formData.location || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Bengaluru, India"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.location ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.location && (
                  <p className="text-xs text-destructive mt-1">{errors.location}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="linkedinProfile" className="block text-xs font-semibold text-foreground mb-1.5">
                  LinkedIn Profile / Professional URL <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <input
                  id="linkedinProfile"
                  name="linkedinProfile"
                  type="url"
                  value={formData.linkedinProfile || ""}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: STARTUP INFORMATION */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
            <div className="border-b border-border pb-3 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                2. Startup & Venture Overview
              </h3>
              <span className="text-xs font-mono text-muted-foreground">Team & Maturity</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="projectName" className="block text-xs font-semibold text-foreground mb-1.5">
                  Startup or Project Name <span className="text-primary">*</span>
                </label>
                <input
                  id="projectName"
                  name="projectName"
                  type="text"
                  required
                  value={formData.projectName || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. LogiTrack"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.projectName ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.projectName && (
                  <p className="text-xs text-destructive mt-1">{errors.projectName}</p>
                )}
              </div>

              <div>
                <label htmlFor="industry" className="block text-xs font-semibold text-foreground mb-1.5">
                  Industry or Category <span className="text-primary">*</span>
                </label>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  required
                  value={formData.industry || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. EdTech, Logistics, Retail ERP"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.industry ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.industry && (
                  <p className="text-xs text-destructive mt-1">{errors.industry}</p>
                )}
              </div>

              <div>
                <label htmlFor="stage" className="block text-xs font-semibold text-foreground mb-1.5">
                  Current Business Stage <span className="text-primary">*</span>
                </label>
                <select
                  id="stage"
                  name="stage"
                  required
                  value={formData.stage || "idea"}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {STARTUP_STAGE_OPTIONS.map((st) => (
                    <option key={st.value} value={st.value}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="founderCount" className="block text-xs font-semibold text-foreground mb-1.5">
                  Number of Founders <span className="text-primary">*</span>
                </label>
                <select
                  id="founderCount"
                  name="founderCount"
                  required
                  value={formData.founderCount || "1"}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {FOUNDER_COUNT_OPTIONS.map((fc) => (
                    <option key={fc.value} value={fc.value}>
                      {fc.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="founderRoles" className="block text-xs font-semibold text-foreground mb-1.5">
                  Founder Roles & Backgrounds <span className="text-primary">*</span>
                </label>
                <input
                  id="founderRoles"
                  name="founderRoles"
                  type="text"
                  required
                  value={formData.founderRoles || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Solo founder: 8 yrs domain sales / operations"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.founderRoles ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.founderRoles && (
                  <p className="text-xs text-destructive mt-1">{errors.founderRoles}</p>
                )}
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-xs font-semibold text-foreground mb-1.5">
                  Current Total Team Size <span className="text-primary">*</span>
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  required
                  value={formData.teamSize || "1-2"}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {TEAM_SIZE_OPTIONS.map((ts) => (
                    <option key={ts.value} value={ts.value}>
                      {ts.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="website" className="block text-xs font-semibold text-foreground mb-1.5">
                  Startup Website <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website || ""}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="registrationStatus" className="block text-xs font-semibold text-foreground mb-1.5">
                  Business Registration Status <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <input
                  id="registrationStatus"
                  name="registrationStatus"
                  type="text"
                  value={formData.registrationStatus || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Not registered yet / Private Limited / LLP"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="existingUsers" className="block text-xs font-semibold text-foreground mb-1.5">
                  Existing Users or Customers <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <input
                  id="existingUsers"
                  name="existingUsers"
                  type="text"
                  value={formData.existingUsers || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. 50 waitlist signups, 3 pilot letters of intent"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="currentRevenue" className="block text-xs font-semibold text-foreground mb-1.5">
                  Current Revenue or Traction <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <input
                  id="currentRevenue"
                  name="currentRevenue"
                  type="text"
                  value={formData.currentRevenue || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Pre-revenue / ₹25k monthly manual consulting"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: IDEA & PROBLEM INFORMATION */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
            <div className="border-b border-border pb-3 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                3. Idea, Customer & Solution Details
              </h3>
              <span className="text-xs font-mono text-muted-foreground">The Business Case</span>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="problem" className="block text-xs font-semibold text-foreground mb-1.5">
                  What customer problem are you solving? <span className="text-primary">*</span>
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  rows={3}
                  required
                  value={formData.problem || ""}
                  onChange={handleInputChange}
                  placeholder="Explain the real, day-to-day bottleneck or frustration customers face..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-y ${
                    errors.problem ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.problem && (
                  <p className="text-xs text-destructive mt-1">{errors.problem}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="targetCustomer" className="block text-xs font-semibold text-foreground mb-1.5">
                    Who experiences this problem? <span className="text-primary">*</span>
                  </label>
                  <input
                    id="targetCustomer"
                    name="targetCustomer"
                    type="text"
                    required
                    value={formData.targetCustomer || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. Independent coaching institutes with 100+ students"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.targetCustomer ? "border-destructive ring-1 ring-destructive" : "border-border"
                    }`}
                  />
                  {errors.targetCustomer && (
                    <p className="text-xs text-destructive mt-1">{errors.targetCustomer}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="whyImportant" className="block text-xs font-semibold text-foreground mb-1.5">
                    Why is solving this problem important? <span className="text-primary">*</span>
                  </label>
                  <input
                    id="whyImportant"
                    name="whyImportant"
                    type="text"
                    required
                    value={formData.whyImportant || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. It wastes 15 hours weekly and causes fee leakage"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.whyImportant ? "border-destructive ring-1 ring-destructive" : "border-border"
                    }`}
                  />
                  {errors.whyImportant && (
                    <p className="text-xs text-destructive mt-1">{errors.whyImportant}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="proposedSolution" className="block text-xs font-semibold text-foreground mb-1.5">
                  What is your proposed solution? <span className="text-primary">*</span>
                </label>
                <textarea
                  id="proposedSolution"
                  name="proposedSolution"
                  rows={3}
                  required
                  value={formData.proposedSolution || ""}
                  onChange={handleInputChange}
                  placeholder="Describe how your software or portal solves the workflow practically..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-y ${
                    errors.proposedSolution ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.proposedSolution && (
                  <p className="text-xs text-destructive mt-1">{errors.proposedSolution}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="currentAlternatives" className="block text-xs font-semibold text-foreground mb-1.5">
                    What alternatives do customers use today? <span className="text-primary">*</span>
                  </label>
                  <input
                    id="currentAlternatives"
                    name="currentAlternatives"
                    type="text"
                    required
                    value={formData.currentAlternatives || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. WhatsApp groups, manual Excel sheets, paper ledgers"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.currentAlternatives ? "border-destructive ring-1 ring-destructive" : "border-border"
                    }`}
                  />
                  {errors.currentAlternatives && (
                    <p className="text-xs text-destructive mt-1">{errors.currentAlternatives}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="differentiation" className="block text-xs font-semibold text-foreground mb-1.5">
                    What makes your approach different? <span className="text-primary">*</span>
                  </label>
                  <input
                    id="differentiation"
                    name="differentiation"
                    type="text"
                    required
                    value={formData.differentiation || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. Zero-training mobile interface tailored to regional staff"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.differentiation ? "border-destructive ring-1 ring-destructive" : "border-border"
                    }`}
                  />
                  {errors.differentiation && (
                    <p className="text-xs text-destructive mt-1">{errors.differentiation}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="buildFirst" className="block text-xs font-semibold text-foreground mb-1.5">
                    What would you like to build first? <span className="text-primary">*</span>
                  </label>
                  <input
                    id="buildFirst"
                    name="buildFirst"
                    type="text"
                    required
                    value={formData.buildFirst || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. Focused MVP web app / Clickable prototype"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.buildFirst ? "border-destructive ring-1 ring-destructive" : "border-border"
                    }`}
                  />
                  {errors.buildFirst && (
                    <p className="text-xs text-destructive mt-1">{errors.buildFirst}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="requestedSupport" className="block text-xs font-semibold text-foreground mb-1.5">
                    What technology support do you need? <span className="text-primary">*</span>
                  </label>
                  <input
                    id="requestedSupport"
                    name="requestedSupport"
                    type="text"
                    required
                    value={formData.requestedSupport || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. Database design, Next.js web portal, SMS integration"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.requestedSupport ? "border-destructive ring-1 ring-destructive" : "border-border"
                    }`}
                  />
                  {errors.requestedSupport && (
                    <p className="text-xs text-destructive mt-1">{errors.requestedSupport}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="progress" className="block text-xs font-semibold text-foreground mb-1.5">
                    What progress have you made so far? <span className="text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <input
                    id="progress"
                    name="progress"
                    type="text"
                    value={formData.progress || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. Completed 15 customer interviews, defined 5 core screens"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="sixMonthSuccess" className="block text-xs font-semibold text-foreground mb-1.5">
                    What would success look like in 6 months? <span className="text-primary">*</span>
                  </label>
                  <input
                    id="sixMonthSuccess"
                    name="sixMonthSuccess"
                    type="text"
                    required
                    value={formData.sixMonthSuccess || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 20 paying institutes using the portal daily"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.sixMonthSuccess ? "border-destructive ring-1 ring-destructive" : "border-border"
                    }`}
                  />
                  {errors.sixMonthSuccess && (
                    <p className="text-xs text-destructive mt-1">{errors.sixMonthSuccess}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: COMMITMENT & COLLABORATION FIT */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
            <div className="border-b border-border pb-3 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                4. Commitment & Collaboration Plan
              </h3>
              <span className="text-xs font-mono text-muted-foreground">Accountability</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="founderCommitment" className="block text-xs font-semibold text-foreground mb-1.5">
                  How much time can the founding team commit weekly? <span className="text-primary">*</span>
                </label>
                <input
                  id="founderCommitment"
                  name="founderCommitment"
                  type="text"
                  required
                  value={formData.founderCommitment || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Full-time (40+ hrs) / 20 hrs per week"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.founderCommitment ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.founderCommitment && (
                  <p className="text-xs text-destructive mt-1">{errors.founderCommitment}</p>
                )}
              </div>

              <div>
                <label htmlFor="founderResponsibilities" className="block text-xs font-semibold text-foreground mb-1.5">
                  What responsibilities remain with founders? <span className="text-primary">*</span>
                </label>
                <input
                  id="founderResponsibilities"
                  name="founderResponsibilities"
                  type="text"
                  required
                  value={formData.founderResponsibilities || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. User testing, direct sales, legal compliance, onboarding"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.founderResponsibilities ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.founderResponsibilities && (
                  <p className="text-xs text-destructive mt-1">{errors.founderResponsibilities}</p>
                )}
              </div>

              <div>
                <label htmlFor="whyPartner" className="block text-xs font-semibold text-foreground mb-1.5">
                  Why are you looking for a technology partner? <span className="text-primary">*</span>
                </label>
                <input
                  id="whyPartner"
                  name="whyPartner"
                  type="text"
                  required
                  value={formData.whyPartner || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. We lack technical co-founders and need disciplined engineers"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.whyPartner ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.whyPartner && (
                  <p className="text-xs text-destructive mt-1">{errors.whyPartner}</p>
                )}
              </div>

              <div>
                <label htmlFor="whyWebntric" className="block text-xs font-semibold text-foreground mb-1.5">
                  Why do you believe Webntric is a good fit? <span className="text-primary">*</span>
                </label>
                <input
                  id="whyWebntric"
                  name="whyWebntric"
                  type="text"
                  required
                  value={formData.whyWebntric || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Practical approach to SaaS and operational software"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.whyWebntric ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.whyWebntric && (
                  <p className="text-xs text-destructive mt-1">{errors.whyWebntric}</p>
                )}
              </div>

              <div>
                <label htmlFor="expectedTimeline" className="block text-xs font-semibold text-foreground mb-1.5">
                  Target Timeline for First Version <span className="text-primary">*</span>
                </label>
                <input
                  id="expectedTimeline"
                  name="expectedTimeline"
                  type="text"
                  required
                  value={formData.expectedTimeline || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. 4–8 weeks for prototype / 3 months for MVP"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.expectedTimeline ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.expectedTimeline && (
                  <p className="text-xs text-destructive mt-1">{errors.expectedTimeline}</p>
                )}
              </div>

              <div>
                <label htmlFor="externalCostsPlan" className="block text-xs font-semibold text-foreground mb-1.5">
                  How will external infrastructure costs be covered? <span className="text-primary">*</span>
                </label>
                <input
                  id="externalCostsPlan"
                  name="externalCostsPlan"
                  type="text"
                  required
                  value={formData.externalCostsPlan || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Founder will pay domain & server bills directly (~₹2,000/mo)"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.externalCostsPlan ? "border-destructive ring-1 ring-destructive" : "border-border"
                  }`}
                />
                {errors.externalCostsPlan && (
                  <p className="text-xs text-destructive mt-1">{errors.externalCostsPlan}</p>
                )}
              </div>

              <div>
                <label htmlFor="supportType" className="block text-xs font-semibold text-foreground mb-1.5">
                  Primary Support Requested <span className="text-primary">*</span>
                </label>
                <select
                  id="supportType"
                  name="supportType"
                  required
                  value={formData.supportType || "technology"}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {SUPPORT_TYPE_OPTIONS.map((st) => (
                    <option key={st.value} value={st.value}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="previousInvestment" className="block text-xs font-semibold text-foreground mb-1.5">
                  Previous Investment or Grants <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <input
                  id="previousInvestment"
                  name="previousInvestment"
                  type="text"
                  value={formData.previousInvestment || ""}
                  onChange={handleInputChange}
                  placeholder="e.g. Bootstrapped from personal savings / None"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* SECTION 5: CONSENT & DECLARATION */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-5">
            <div className="border-b border-border pb-3">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                5. Consent & Declarations
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Please review and check each declaration below to proceed.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-foreground">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="confirmAccurate"
                  name="confirmAccurate"
                  checked={formData.confirmAccurate || false}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  I confirm that the information provided is accurate to the best of my knowledge. <span className="text-primary">*</span>
                </span>
              </label>
              {errors.confirmAccurate && (
                <p className="text-xs text-destructive pl-7">{errors.confirmAccurate}</p>
              )}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="understandNoGuarantee"
                  name="understandNoGuarantee"
                  checked={formData.understandNoGuarantee || false}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  I understand that submitting this form does not guarantee acceptance. <span className="text-primary">*</span>
                </span>
              </label>
              {errors.understandNoGuarantee && (
                <p className="text-xs text-destructive pl-7">{errors.understandNoGuarantee}</p>
              )}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="understandNoAutomaticPartnership"
                  name="understandNoAutomaticPartnership"
                  checked={formData.understandNoAutomaticPartnership || false}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  I understand that submitting this form does not create a partnership, investment relationship, or confidentiality agreement. <span className="text-primary">*</span>
                </span>
              </label>
              {errors.understandNoAutomaticPartnership && (
                <p className="text-xs text-destructive pl-7">{errors.understandNoAutomaticPartnership}</p>
              )}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="noSecretsSubmitted"
                  name="noSecretsSubmitted"
                  checked={formData.noSecretsSubmitted || false}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  I will not submit passwords, source code, financial account credentials, or highly confidential trade secrets through this form. <span className="text-primary">*</span>
                </span>
              </label>
              {errors.noSecretsSubmitted && (
                <p className="text-xs text-destructive pl-7">{errors.noSecretsSubmitted}</p>
              )}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="contactConsent"
                  name="contactConsent"
                  checked={formData.contactConsent || false}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  I consent to Webntric contacting me regarding this application via email or phone. <span className="text-primary">*</span>
                </span>
              </label>
              {errors.contactConsent && (
                <p className="text-xs text-destructive pl-7">{errors.contactConsent}</p>
              )}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent || false}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  I have read and agree to the{" "}
                  <Link href="/privacy-policy" target="_blank" className="text-primary underline">
                    privacy policy
                  </Link>. <span className="text-primary">*</span>
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-xs text-destructive pl-7">{errors.privacyConsent}</p>
              )}

              <label className="flex items-start gap-3 cursor-pointer pt-2 border-t border-border">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={formData.marketingConsent || false}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-muted-foreground">
                  I agree to receive occasional startup and technology updates from Webntric. (Optional)
                </span>
              </label>
            </div>
          </div>

          {/* CRITICAL FORM DISCLAIMER (Immediately Above Submit Button) */}
          <div className="p-4 sm:p-5 rounded-xl bg-surface border border-border text-xs text-muted-foreground leading-relaxed flex items-start gap-3">
            <Lock className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong>Important Disclaimer: </strong>
              By submitting this application, you understand that Webntric has not promised acceptance, funding, free development, investment, ownership, partnership, confidentiality, or business success. Please do not submit passwords, source code, financial credentials, or confidential trade secrets through this initial form. Any future collaboration will be discussed and documented separately.
            </div>
          </div>

          {/* SUBMIT BUTTON & PRIVACY NOTE */}
          <div className="space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[240px] px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-hover transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" aria-hidden="true" />
                  <span>Submit Startup Application</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>
                Encrypted in transit. We respect founder ideas and never share application details publicly.
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
