import { CheckCircle2, ClipboardCheck, Rocket } from "lucide-react";
import {
  PRE_DEPLOYMENT_CHECKLIST,
  POST_DEPLOYMENT_CHECKLIST,
} from "@/data/security-services";

export function DeploymentChecklist() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Pre-Deployment Testing */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-2 border-b border-border pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
            <span>Before Release</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            Pre-Deployment Testing Checklist (15 Checks)
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Every new build or major update is verified in development and staging before production approval.
          </p>
        </div>

        <div className="space-y-5">
          {PRE_DEPLOYMENT_CHECKLIST.map((group) => (
            <div key={group.category} className="space-y-2.5">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                {group.category}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Post-Deployment Verification */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-2 border-b border-border pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-success">
            <Rocket className="w-4 h-4" aria-hidden="true" />
            <span>Immediately After Release</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            Post-Deployment Verification Checklist (17 Checks)
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            A deployment is not finished when the build script finishes. We verify live production behavior immediately after release.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-2.5">
          {POST_DEPLOYMENT_CHECKLIST.map((check) => (
            <li
              key={check}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
            >
              <CheckCircle2
                className="w-4 h-4 text-success shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{check}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
