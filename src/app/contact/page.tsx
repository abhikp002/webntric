"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, RefreshCw, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "web-development",
    budget: "$5,000 - $10,000",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user edits
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errors.message = "Please enter details about your project.";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("loading");

    // Simulate safe client-side submission delay
    setTimeout(() => {
      // Simulate success
      setFormStatus("success");
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "web-development",
        budget: "$5,000 - $10,000",
        message: "",
      });
    }, 1800);
  };

  return (
    <div className="overflow-hidden">
      {/* Page Hero */}
      <section className="relative pt-32 pb-12 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Contact Us</span>
          </ScrollReveal>
          <AnimatedText
            text="Let's Build Something Great Together."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mt-2">
              Have a project or design in mind? Fill out our intake form below to receive a project quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form & Content Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-4 space-y-6">
          <ScrollReveal className="p-6 bg-card border border-border rounded-2xl flex gap-4 shadow-xs">
            <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Email Inquiry</h3>
              <a href="mailto:info@webntric.com" className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block">
                info@webntric.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="p-6 bg-card border border-border rounded-2xl flex gap-4 shadow-xs" delay={0.05}>
            <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Phone Support</h3>
              <a href="tel:+918090972654" className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block">
                +91 8090972654
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="p-6 bg-card border border-border rounded-2xl flex gap-4 shadow-xs" delay={0.1}>
            <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Our Headquarters</h3>
              <span className="text-xs text-muted-foreground mt-1 block leading-relaxed">
                Jungle Dhusar, Gorakhpur, Uttar Pradesh-273014
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="p-6 bg-card border border-border rounded-2xl flex gap-4 shadow-xs" delay={0.15}>
            <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Business Hours</h3>
              <span className="text-xs text-muted-foreground mt-1 block leading-relaxed">
                Mon - Fri: 9:00 AM - 6:00 PM IST
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Intake Form Panel */}
        <div className="lg:col-span-8">
          <ScrollReveal direction="up" className="p-8 bg-card border border-border rounded-3xl shadow-xl relative overflow-hidden">
            {formStatus === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold">Inquiry Sent Successfully!</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Thank you for starting a conversation with Webntric Software. Our technology specialist will review your details and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  Send another inquiry <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <h3 className="text-lg font-bold text-foreground pb-4 border-b border-border/50">Project Intake Form</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`h-11 px-4 rounded-lg bg-secondary border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary ${
                        validationErrors.name ? "border-rose-500 focus:ring-rose-500" : "border-border"
                      }`}
                      placeholder="e.g. Abhishek"
                      required
                    />
                    {validationErrors.name && (
                      <span className="text-[10px] text-rose-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="h-3 w-3" /> {validationErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`h-11 px-4 rounded-lg bg-secondary border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary ${
                        validationErrors.email ? "border-rose-500 focus:ring-rose-500" : "border-border"
                      }`}
                      placeholder="e.g. name@domain.com"
                      required
                    />
                    {validationErrors.email && (
                      <span className="text-[10px] text-rose-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="h-3 w-3" /> {validationErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-11 px-4 rounded-lg bg-secondary border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. +91 8090972654"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-11 px-4 rounded-lg bg-secondary border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. Acme Tech Solutions"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Type Selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Required Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="h-11 px-4 rounded-lg bg-secondary border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app-development">Mobile App Development</option>
                      <option value="offline-windows-software">Offline Windows Software</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="social-media-management">Social Media Management</option>
                    </select>
                  </div>

                  {/* Project Budget Selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Estimated Project Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="h-11 px-4 rounded-lg bg-secondary border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="under-$5000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="over-$50000">Over $50,000</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Project Requirements / Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`p-4 rounded-lg bg-secondary border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary resize-y min-h-[100px] ${
                      validationErrors.message ? "border-rose-500 focus:ring-rose-500" : "border-border"
                    }`}
                    placeholder="Tell us what you want to design, code, or scale. Be as specific as possible."
                    required
                  ></textarea>
                  {validationErrors.message && (
                    <span className="text-[10px] text-rose-500 flex items-center gap-1 font-semibold">
                      <AlertCircle className="h-3 w-3" /> {validationErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 cursor-pointer"
                >
                  {formStatus === "loading" ? (
                    <>
                      <RefreshCw className="h-4.5 w-4.5 animate-spin" />
                      Submitting Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Project Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
