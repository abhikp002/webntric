import { AI_SERVICE_COMPARISON } from "@/data/ai-services";

export function ServiceComparison() {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="max-w-3xl space-y-2">
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
          Honest Fit Comparison
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          When to use Generative AI vs. Rule-Based Automation vs. Custom Software
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We help you choose the right tool for each part of your operation rather than forcing generative AI onto every problem.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-border text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <th className="py-3.5 pr-4 font-semibold">Decision Factor</th>
              <th className="py-3.5 px-4 font-semibold text-primary">
                Generative AI Applications
              </th>
              <th className="py-3.5 px-4 font-semibold text-foreground">
                Rule-Based Automation
              </th>
              <th className="py-3.5 pl-4 font-semibold text-foreground">
                Custom Business Software / POS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-xs sm:text-sm">
            {AI_SERVICE_COMPARISON.map((row) => (
              <tr key={row.criterion} className="align-top">
                <td className="py-4 pr-4 font-semibold text-foreground whitespace-nowrap">
                  {row.criterion}
                </td>
                <td className="py-4 px-4 text-muted-foreground leading-relaxed bg-primary/[0.03]">
                  {row.generativeAi}
                </td>
                <td className="py-4 px-4 text-muted-foreground leading-relaxed">
                  {row.ruleBasedAutomation}
                </td>
                <td className="py-4 pl-4 text-muted-foreground leading-relaxed">
                  {row.customSoftware}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
