"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary/30 border-t border-border mt-auto">
      {/* Footer Pre-CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-border/50">
        <ScrollReveal className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-card border border-border p-8 md:p-12 rounded-3xl glow-indigo">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Let's turn your idea into a digital product that works. Get in touch with our tech and creative team today.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 group"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="group focus:outline-none">
            <Logo />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We design and build premium, high-performance websites, native mobile applications, reliable offline desktop software, and growth-driven digital marketing campaigns.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com/webntric"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
              aria-label="Facebook Profile"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/webntric"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
              aria-label="X Profile"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/webntric"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-foreground/80 uppercase">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-foreground/80 uppercase">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/mobile-app-development" className="text-muted-foreground hover:text-primary transition-colors">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services/offline-windows-software" className="text-muted-foreground hover:text-primary transition-colors">
                Offline Desktop Systems
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">
                SEO Optimization
              </Link>
            </li>
            <li>
              <Link href="/services/social-media-management" className="text-muted-foreground hover:text-primary transition-colors">
                Social Media
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <h4 className="text-sm font-semibold tracking-wider text-foreground/80 uppercase">Get In Touch</h4>
          <div className="flex items-start gap-3 mt-1">
            <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
            <a href="mailto:info@webntric.com" className="hover:text-primary transition-colors">
              info@webntric.com
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
            <a href="tel:+918090972654" className="hover:text-primary transition-colors">
              +91 8090972654
            </a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
            <span>Jungle Dhusar, Gorakhpur, Uttar Pradesh-273014</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-4.5 w-4.5 text-primary shrink-0" />
            <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-secondary/50 border-t border-border/50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Webntric Software. All rights reserved.</span>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
