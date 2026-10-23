import { FaqAccordion } from "@/components/faq-accordion";
import { SECURITY_FAQS } from "@/data/security-services";

export function SecurityFAQ() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
          Security & Reliability FAQ
        </div>
        <h2 className="font-bold text-foreground">
          Common questions about SSL, backups, deployments, and security scope
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Clear, unexaggerated answers explaining what each security control does—and what depends on your hosting environment and maintenance plan.
        </p>
      </div>
      <FaqAccordion
        items={SECURITY_FAQS.map((item, idx) => ({
          id: `security-faq-${idx + 1}`,
          category: "process-security",
          question: item.question,
          answer: item.answer,
        }))}
      />
    </div>
  );
}
