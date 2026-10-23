export function HeroArchitectureBlueprint() {
  return (
    <div
      className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm"
      aria-label="Webntric Systems & Growth Architecture Blueprint"
    >
      {/* Top window bar */}
      <div className="px-4 py-3 bg-surface-muted border-b border-border flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="ml-2 text-xs font-mono text-muted-foreground">
            webntric-system-blueprint.arch
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-primary/10 text-primary font-medium">
          Full-Stack Delivery
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Layer 1: Customer Trust & Acquisition */}
        <div className="p-4 rounded-lg bg-surface-muted border border-border">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
              Layer 01 — Customer Trust & Acquisition
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              Next.js / Technical SEO
            </span>
          </div>
          <p className="text-sm font-semibold text-foreground">
            Fast Business Website, Local Search Visibility & Qualified Lead Capture
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded text-[11px] bg-surface border border-border text-muted-foreground">
              Sub-2s Mobile Load
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] bg-surface border border-border text-muted-foreground">
              Schema.org Markup
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] bg-surface border border-border text-muted-foreground">
              Direct WhatsApp & Form Routing
            </span>
          </div>
        </div>

        {/* Layer 2: Operational Software & Billing */}
        <div className="p-4 rounded-lg bg-surface-muted border border-border">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
              Layer 02 — Daily Operations & Offline Software
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              C# .NET / PostgreSQL / SQLite
            </span>
          </div>
          <p className="text-sm font-semibold text-foreground">
            Offline Windows POS, Barcode Inventory, Party Ledgers & Custom Portals
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded text-[11px] bg-surface border border-border text-muted-foreground">
              0ms Internet Dependency
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] bg-surface border border-border text-muted-foreground">
              Thermal & GST Invoicing
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] bg-surface border border-border text-muted-foreground">
              Role-Based Staff Permissions
            </span>
          </div>
        </div>

        {/* Layer 3: Long-Term Maintenance & Security */}
        <div className="p-4 rounded-lg bg-surface-muted border border-border">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
              Layer 03 — Post-Launch Continuity
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              Direct Engineering Support
            </span>
          </div>
          <p className="text-sm font-semibold text-foreground">
            Automated Encrypted Backups, Uptime Monitoring & Iterative Improvements
          </p>
        </div>
      </div>
    </div>
  );
}
