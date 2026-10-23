import {
  Database,
  Cpu,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Lock,
} from "lucide-react";

const WORKFLOW_NODES = [
  {
    step: "Stage 01",
    title: "Approved Business Data",
    icon: Database,
    items: [
      "Approved SOPs, policy PDFs & product manuals",
      "Uploaded supplier invoices, forms & purchase orders",
      "Role-filtered CRM / ERP records",
    ],
    controlBadge: "Permission & Privacy Filter",
  },
  {
    step: "Stage 02",
    title: "Grounded AI Processing",
    icon: Cpu,
    items: [
      "Retrieval-Augmented Generation (RAG) & OCR",
      "Structured JSON schema field extraction",
      "Source citation linking & math/rule validation",
    ],
    controlBadge: "Prompt & Schema Guardrails",
  },
  {
    step: "Stage 03",
    title: "Human-in-the-Loop Review",
    icon: UserCheck,
    items: [
      "Side-by-side source PDF vs. extracted field review",
      "Confidence flags for ambiguous or missing values",
      "Operator edits, approves, or escalates",
    ],
    controlBadge: "Mandatory Human Oversight",
  },
  {
    step: "Stage 04",
    title: "Verified Business Action",
    icon: CheckCircle2,
    items: [
      "Approved record committed to ERP / billing database",
      "Verified customer response sent with audit trail",
      "Feedback logged for ongoing evaluation",
    ],
    controlBadge: "Audit Log & Rate Limits",
  },
];

export function AIWorkflowDiagram() {
  return (
    <div
      aria-label="Human-in-the-loop Generative AI architecture diagram"
      className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-5">
        <div className="space-y-1">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            System Architecture Blueprint
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            How Business Data, AI Processing, Human Review & Action Connect
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-muted border border-border text-xs font-medium text-foreground">
          <Lock className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
          <span>No raw unverified database writes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {WORKFLOW_NODES.map((node, index) => {
          const Icon = node.icon;
          return (
            <div
              key={node.step}
              className="relative p-5 rounded-xl bg-surface-muted border border-border flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary">
                    {node.step}
                  </span>
                  {index < WORKFLOW_NODES.length - 1 && (
                    <ArrowRight
                      className="hidden xl:block w-4 h-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground">
                    {node.title}
                  </h4>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {node.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5"
                    >
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-border">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface border border-border text-[11px] font-mono font-semibold text-foreground">
                  Control: {node.controlBadge}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
