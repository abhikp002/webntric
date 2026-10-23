"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Linkedin, Facebook } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import {
  SERVICE_NAV_GROUPS,
  GENERATIVE_AI_NAV_ITEMS,
  SECURITY_RELIABILITY_NAV_ITEMS,
  INDUSTRY_NAV_ITEMS,
  BUSINESS_STAGE_NAV_ITEMS,
} from "@/data/site-config";
import { trackEvent } from "@/lib/analytics";

type OpenDropdown =
  | "services"
  | "ai"
  | "security"
  | "industries"
  | "stages"
  | null;

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownState, setDropdownState] = useState<{
    path: string;
    menu: OpenDropdown;
  }>({ path: pathname, menu: null });
  const [mobileMenuState, setMobileMenuState] = useState<{
    path: string;
    open: boolean;
  }>({ path: pathname, open: false });
  const navRef = useRef<HTMLElement>(null);

  const openDropdown =
    dropdownState.path === pathname ? dropdownState.menu : null;
  const isMobileMenuOpen =
    mobileMenuState.path === pathname ? mobileMenuState.open : false;

  const setOpenDropdown = (
    next: OpenDropdown | ((prev: OpenDropdown) => OpenDropdown)
  ) => {
    setDropdownState((prev) => {
      const currentMenu = prev.path === pathname ? prev.menu : null;
      const resolved =
        typeof next === "function" ? next(currentMenu) : next;
      return { path: pathname, menu: resolved };
    });
  };

  const setIsMobileMenuOpen = (
    next: boolean | ((prev: boolean) => boolean)
  ) => {
    setMobileMenuState((prev) => {
      const currentOpen = prev.path === pathname ? prev.open : false;
      const resolved =
        typeof next === "function" ? next(currentOpen) : next;
      return { path: pathname, open: resolved };
    });
  };

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownState((prev) => ({ ...prev, menu: null }));
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownState((prev) => ({ ...prev, menu: null }));
        setMobileMenuState((prev) => ({ ...prev, open: false }));
      }
      if (event.key === "Tab" && navRef.current) {
        const drawer = navRef.current.querySelector(
          "#mobile-navigation-drawer"
        ) as HTMLElement | null;
        if (drawer) {
          const focusable = drawer.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile drawer is open
  const serviceColumns = React.useMemo(() => {
    const col1Groups = [
      SERVICE_NAV_GROUPS.find((g) => g.groupTitle === "Build Credibility & Presence"),
      SERVICE_NAV_GROUPS.find((g) => g.groupTitle === "Security and Reliability"),
    ].filter((g): g is (typeof SERVICE_NAV_GROUPS)[number] => Boolean(g));

    const col2Groups = [
      SERVICE_NAV_GROUPS.find((g) => g.groupTitle === "Work More Efficiently"),
      SERVICE_NAV_GROUPS.find((g) => g.groupTitle === "Generative AI"),
    ].filter((g): g is (typeof SERVICE_NAV_GROUPS)[number] => Boolean(g));

    const col3Groups = [
      SERVICE_NAV_GROUPS.find((g) => g.groupTitle === "Reach the Right Customers"),
    ].filter((g): g is (typeof SERVICE_NAV_GROUPS)[number] => Boolean(g));

    const handled = new Set(
      [...col1Groups, ...col2Groups, ...col3Groups].map((g) => g.groupTitle)
    );
    const unhandled = SERVICE_NAV_GROUPS.filter(
      (g) => !handled.has(g.groupTitle)
    );
    if (unhandled.length > 0) {
      col3Groups.push(...unhandled);
    }

    return [col1Groups, col2Groups, col3Groups];
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (menu: Exclude<OpenDropdown, null>) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container-editorial h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap">
        {/* Brand Logo */}
        <Link
          href="/"
          className="shrink-0 py-1 rounded-md"
          aria-label="Webntric Software — Home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 whitespace-nowrap flex-nowrap shrink-0"
        >
          {/* Services Mega Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("services")}
              aria-expanded={openDropdown === "services"}
              aria-controls="nav-services-menu"
              className={`inline-flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                pathname === "/services"
                  ? "text-primary font-semibold bg-primary/5"
                  : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "services" ? "rotate-180 text-primary" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "services" && (
              <div
                id="nav-services-menu"
                role="region"
                aria-label="Services menu"
                className="absolute left-0 mt-2 w-[840px] 2xl:w-[920px] max-w-[calc(100vw-2.5rem)] max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl p-5 2xl:p-6 z-50"
              >
                <div className="grid grid-cols-3 gap-5">
                  {serviceColumns.map((columnGroups, colIdx) => (
                    <div key={colIdx} className="space-y-4">
                      {columnGroups.map((group) => (
                        <div key={group.groupTitle} className="space-y-1.5">
                          <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-1">
                            {group.groupTitle}
                          </div>
                          <ul className="space-y-0.5">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="block px-2.5 py-1.5 rounded-lg hover:bg-secondary/70 transition-colors group"
                                >
                                  <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.label}
                                  </div>
                                  {item.description && (
                                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-2">
                                      {item.description}
                                    </p>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3.5 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-primary/10 text-primary font-mono font-semibold uppercase text-[10px]">
                      Our SaaS Product
                    </span>
                    <a
                      href="https://vidyasetu.pro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      VidyaSetu — School ERP Platform
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/services"
                      onClick={() => setOpenDropdown(null)}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      View all 15 services
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpenDropdown(null)}
                      className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                      Discuss your requirement
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Generative AI Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("ai")}
              aria-expanded={openDropdown === "ai"}
              aria-controls="nav-ai-menu"
              className={`inline-flex items-center gap-1 px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                pathname.startsWith("/services/generative-ai-applications")
                  ? "text-primary font-semibold bg-primary/5"
                  : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <span>Generative AI</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "ai" ? "rotate-180 text-primary" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "ai" && (
              <div
                id="nav-ai-menu"
                role="region"
                aria-label="Generative AI menu"
                className="absolute left-0 mt-2 w-[660px] max-w-[calc(100vw-2.5rem)] max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl p-5 sm:p-6 z-50"
              >
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-2 mb-3">
                  Practical Generative AI Applications & Human-in-the-Loop Workflows
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {GENERATIVE_AI_NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block p-2.5 rounded-lg hover:bg-secondary/70 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {item.label}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">
                    AI built around real business processes, permissions, and human review.
                  </span>
                  <Link
                    href="/services/generative-ai-applications"
                    onClick={() => setOpenDropdown(null)}
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Explore Generative AI
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Security and Reliability Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("security")}
              aria-expanded={openDropdown === "security"}
              aria-controls="nav-security-menu"
              className={`inline-flex items-center gap-1 px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                pathname.startsWith("/services/website-data-security")
                  ? "text-primary font-semibold bg-primary/5"
                  : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <span>Security & Reliability</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "security" ? "rotate-180 text-primary" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "security" && (
              <div
                id="nav-security-menu"
                role="region"
                aria-label="Security and Reliability menu"
                className="absolute left-0 mt-2 w-[680px] max-w-[calc(100vw-2.5rem)] max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl p-5 sm:p-6 z-50"
              >
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-2 mb-3">
                  Website, Application & Data Security Controls
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {SECURITY_RELIABILITY_NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block p-2.5 rounded-lg hover:bg-secondary/70 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {item.label}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">
                    HTTPS, OWASP-informed code, automated backups, and tested releases.
                  </span>
                  <Link
                    href="/services/website-data-security"
                    onClick={() => setOpenDropdown(null)}
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Explore Security & Reliability
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("industries")}
              aria-expanded={openDropdown === "industries"}
              aria-controls="nav-industries-menu"
              className={`inline-flex items-center gap-1 px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                pathname.startsWith("/industries")
                  ? "text-primary font-semibold"
                  : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "industries" ? "rotate-180 text-primary" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "industries" && (
              <div
                id="nav-industries-menu"
                role="region"
                aria-label="Industries menu"
                className="absolute left-0 mt-2 w-[620px] max-w-[calc(100vw-2.5rem)] max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl p-5 sm:p-6 z-50"
              >
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-2 mb-3">
                  Solutions Tailored by Industry Operation
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {INDUSTRY_NAV_ITEMS.map((ind) => (
                    <li key={ind.href}>
                      <Link
                        href={ind.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block p-2.5 rounded-lg hover:bg-secondary/70 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {ind.label}
                        </div>
                        {ind.description && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {ind.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">
                    See how operational workflows shape technology choices.
                  </span>
                  <Link
                    href="/industries"
                    onClick={() => setOpenDropdown(null)}
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Explore all industries
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Business Stages Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("stages")}
              aria-expanded={openDropdown === "stages"}
              aria-controls="nav-stages-menu"
              className={`inline-flex items-center gap-1 px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                pathname.startsWith("/businesses")
                  ? "text-primary font-semibold"
                  : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              <span>Business Stages</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "stages" ? "rotate-180 text-primary" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "stages" && (
              <div
                id="nav-stages-menu"
                role="region"
                aria-label="Business Stages menu"
                className="absolute left-0 mt-2 w-[380px] max-w-[calc(100vw-2.5rem)] max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl p-5 z-50"
              >
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-2 mb-2.5">
                  Right-Sized Guidance by Maturity
                </div>
                <ul className="space-y-1">
                  {BUSINESS_STAGE_NAV_ITEMS.map((stage) => (
                    <li key={stage.href}>
                      <Link
                        href={stage.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block p-2.5 rounded-lg hover:bg-secondary/70 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {stage.label}
                        </div>
                        {stage.description && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {stage.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-border text-right">
                  <Link
                    href="/businesses"
                    onClick={() => setOpenDropdown(null)}
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Compare all business stages
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/work"
            aria-current={pathname === "/work" ? "page" : undefined}
            className={`px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              pathname === "/work"
                ? "text-primary font-semibold"
                : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            Work
          </Link>

          <Link
            href="/process"
            aria-current={pathname === "/process" ? "page" : undefined}
            className={`px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              pathname === "/process"
                ? "text-primary font-semibold"
                : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            Process
          </Link>

          <Link
            href="/support"
            aria-current={pathname === "/support" ? "page" : undefined}
            className={`px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              pathname === "/support"
                ? "text-primary font-semibold"
                : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            Support
          </Link>

          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className={`px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              pathname === "/about"
                ? "text-primary font-semibold"
                : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            About
          </Link>

          <Link
            href="/insights"
            aria-current={pathname.startsWith("/insights") ? "page" : undefined}
            className={`px-2 2xl:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              pathname.startsWith("/insights")
                ? "text-primary font-semibold"
                : "text-foreground/85 hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            Insights
          </Link>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="/contact"
            onClick={() =>
              trackEvent("cta_clicked", {
                location: "header",
                label: "Discuss your business",
              })
            }
            className="inline-flex items-center justify-center h-11 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Discuss your business
          </Link>
        </div>

        {/* Mobile & Tablet Controls (< 1280px) */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">
          <Link
            href="/contact"
            onClick={() =>
              trackEvent("cta_clicked", {
                location: "header_mobile_compact",
                label: "Start a conversation",
              })
            }
            className="hidden sm:inline-flex items-center justify-center h-10 px-3.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
          >
            Start a conversation
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg bg-secondary border border-border text-foreground hover:bg-secondary/80 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 bg-background border-t border-border overflow-y-auto xl:hidden"
        >
          <div className="px-5 py-6 space-y-6 pb-24">
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => {
                  trackEvent("cta_clicked", {
                    location: "mobile_drawer",
                    label: "Discuss your business",
                  });
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center w-full h-11 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
              >
                Discuss your business
              </Link>
              <a
                href="https://vidyasetu.pro/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-secondary/80 border border-primary/30 text-foreground font-semibold text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-primary text-primary-foreground font-mono text-[9px] uppercase">
                    Our SaaS
                  </span>
                  <span>VidyaSetu School ERP</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              </a>
            </div>

            <nav aria-label="Mobile navigation" className="space-y-6">
              <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  All Services
                </Link>
                <Link
                  href="/work"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  Work & Blueprints
                </Link>
                <Link
                  href="/process"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  How We Work
                </Link>
                <Link
                  href="/support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  Support & Care
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  About Webntric
                </Link>
                <Link
                  href="/insights"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  Insights & Guides
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-card border border-border"
                >
                  FAQ
                </Link>
              </div>

              {/* Mobile Services */}
              {SERVICE_NAV_GROUPS.map((group) => (
                <div key={group.groupTitle} className="space-y-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.groupTitle}
                  </div>
                  <ul className="space-y-1 border-l-2 border-border pl-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 text-sm font-medium text-foreground hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Mobile Generative AI Capabilities */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                  Generative AI Capabilities
                </div>
                <ul className="grid grid-cols-1 gap-1 border-l-2 border-primary/40 pl-3">
                  {GENERATIVE_AI_NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1.5 text-sm font-medium text-foreground hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Security & Reliability Capabilities */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                  Security & Reliability Controls
                </div>
                <ul className="grid grid-cols-1 gap-1 border-l-2 border-primary/40 pl-3">
                  {SECURITY_RELIABILITY_NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1.5 text-sm font-medium text-foreground hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Business Stages */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                  By Business Stage
                </div>
                <ul className="grid grid-cols-1 gap-1 border-l-2 border-border pl-3">
                  {BUSINESS_STAGE_NAV_ITEMS.map((stage) => (
                    <li key={stage.href}>
                      <Link
                        href={stage.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1.5 text-sm font-medium text-foreground hover:text-primary"
                      >
                        {stage.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Industries */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                  Industries We Serve
                </div>
                <ul className="grid grid-cols-1 gap-1 border-l-2 border-border pl-3">
                  {INDUSTRY_NAV_ITEMS.map((ind) => (
                    <li key={ind.href}>
                      <Link
                        href={ind.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1.5 text-sm font-medium text-foreground hover:text-primary"
                      >
                        {ind.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-border flex flex-col gap-2.5">
                <span className="text-xs font-mono font-semibold uppercase text-muted-foreground">
                  Connect on Social Media:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/webntric"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Webntric on LinkedIn"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-[#0077b5]" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com/webntric"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Webntric on Facebook"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-3.5 w-3.5 text-[#1877f2]" aria-hidden="true" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
