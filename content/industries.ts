import { INDUSTRIES_DATA, type IndustryDetailData } from "@/data/industries";

export function getIndustryVisual(industry: IndustryDetailData) {
  return {
    src: `/images/industries/${industry.slug}-operations-blueprint.webp`,
    alt: `Operational workflow and software architecture diagram for ${industry.title}`,
    caption: `Tailored digital, billing, and operational architecture for ${industry.title}.`,
  };
}

export { INDUSTRIES_DATA };
