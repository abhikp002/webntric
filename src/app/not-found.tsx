import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-background py-20 sm:py-28">
      <div className="container-editorial max-w-2xl text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3 py-1 rounded bg-primary/10">
          <Compass className="w-3.5 h-3.5" aria-hidden="true" />
          404 — Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          The page you are looking for has moved or does not exist.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Explore our core software, website, and digital growth capabilities or
          return to the Webntric Software homepage below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface text-foreground border border-border text-sm font-semibold hover:bg-surface-muted transition-colors"
          >
            Browse All 13 Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface text-foreground border border-border text-sm font-semibold hover:bg-surface-muted transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
