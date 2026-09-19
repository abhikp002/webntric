"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Code, PhoneCall, Monitor, Megaphone, Search, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";

const servicesList = [
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Custom websites and fast-loading web applications.",
    icon: Code,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Native iOS & Android app engineering.",
    icon: PhoneCall,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    name: "Offline Windows Software",
    href: "/services/offline-windows-software",
    description: "Secure, reliable offline database and business systems.",
    icon: Monitor,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Growth campaigns designed to acquire customers.",
    icon: Megaphone,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    name: "SEO Optimization",
    href: "/services/seo",
    description: "Technical SEO audits and content visibility growth.",
    icon: Search,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
    description: "Community building and creative content production.",
    icon: Share2,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for header background transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  // Click outside mega-menu logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-md shadow-md border-b border-border"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group focus:outline-none">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none ${
                pathname === "/" ? "text-primary" : "text-foreground/70"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none ${
                pathname === "/about" ? "text-primary" : "text-foreground/70"
              }`}
            >
              About
            </Link>

            {/* Mega Menu Dropdown */}
            <div className="relative" ref={megaMenuRef}>
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none cursor-pointer ${
                  pathname.startsWith("/services") ? "text-primary" : "text-foreground/70"
                }`}
                aria-expanded={isMegaMenuOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-[600px] rounded-2xl bg-card border border-border shadow-2xl p-6 grid grid-cols-2 gap-4"
                  >
                    {servicesList.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="group flex gap-4 p-3 rounded-xl hover:bg-secondary transition-colors duration-200 focus:outline-none"
                      >
                        <div className={`p-2.5 rounded-lg ${svc.bg} ${svc.color} h-fit`}>
                          <svc.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {svc.name}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {svc.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-2 pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
                      <span>Need a custom technology solution?</span>
                      <Link
                        href="/contact"
                        className="text-primary font-semibold hover:underline flex items-center gap-1 focus:outline-none"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        Start a project <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none ${
                pathname === "/contact" ? "text-primary" : "text-foreground/70"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#030712]"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-secondary border border-border text-foreground hover:bg-secondary/80 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg font-semibold overflow-y-auto max-h-[70vh] pb-8">
              <Link
                href="/"
                className="pb-2 border-b border-border/50 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="pb-2 border-b border-border/50 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services List */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Our Services
                </span>
                <div className="grid grid-cols-1 gap-3 pl-2 mt-1">
                  {servicesList.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="flex items-center gap-3 py-1.5 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`p-1.5 rounded ${svc.bg} ${svc.color}`}>
                        <svc.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{svc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="pb-2 border-b border-border/50 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-auto pb-10 flex flex-col gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full h-12 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
