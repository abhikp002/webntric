import { FaqAccordion } from "@/components/faq-accordion";
import { AI_FAQS } from "@/data/ai-services";

export function AIFAQ() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
          Generative AI FAQ
        </div>
        <h2 className="font-bold text-foreground">
          Practical questions about building, securing, and maintaining AI systems
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Straightforward answers on document grounding, privacy, human review, cost structure, and timelines.
        </p>
      </div>
      <FaqAccordion
        items={AI_FAQS.map((item, idx) => ({
          id: `ai-faq-${idx + 1}`,
          category: "custom-software",
          question: item.question,
          answer: item.answer,
        }))}
      />
    </div>
  );
}
