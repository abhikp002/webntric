import { DatabaseBackup, ShieldAlert } from "lucide-react";
import { BACKUP_LIFECYCLE_STAGES } from "@/data/security-services";
import { ResponsiveFigure } from "@/components/responsive-figure";

export function BackupLifecycle() {
  return (
    <div
      id="backup-lifecycle"
      className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-8 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            <DatabaseBackup className="w-4 h-4" aria-hidden="true" />
            <span>Automated Backup & Restore Lifecycle</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Backups are only dependable when they are automated, isolated, monitored, and tested for restoration.
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Daily backups reduce the risk of permanent data loss, but a backup file sitting on the same server as your live website will not save you if that server fails. Depending on your hosting environment and selected support plan, we structure backups around four practical stages:
          </p>
        </div>

        <div className="lg:col-span-5">
          <ResponsiveFigure
            src="/images/security/security-backup-recovery.webp"
            alt="Managed cloud and server infrastructure supporting automated database backups and off-site retention"
            aspectRatio="16/10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {BACKUP_LIFECYCLE_STAGES.map((stage) => (
          <div
            key={stage.step}
            className="p-5 rounded-xl bg-surface-muted border border-border space-y-2.5"
          >
            <div className="text-xs font-mono font-bold text-primary">
              Stage {stage.step}
            </div>
            <h4 className="text-base font-bold text-foreground">
              {stage.title}
            </h4>
            <div className="text-xs font-semibold text-foreground/90">
              {stage.summary}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {stage.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-surface-muted border border-border flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
        <ShieldAlert
          className="w-4 h-4 text-primary shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <span>
          <strong className="text-foreground">Important Operational Note: </strong>
          Exact backup frequency (daily vs. scheduled), retention duration (7, 14, or 30 days), and Recovery Point / Recovery Time Objectives (RPO/RTO) depend on your hosting infrastructure and active maintenance plan. We document your specific backup and restoration parameters in writing during project handover.
        </span>
      </div>
    </div>
  );
}
