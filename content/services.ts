import { SERVICES_DATA, type ServiceDetailData } from "@/data/services";

export interface ServiceVisualSet {
  hero: {
    src: string;
    alt: string;
    caption: string;
  };
  problem: {
    src: string;
    alt: string;
    caption: string;
  };
  deliverable: {
    src: string;
    alt: string;
    caption: string;
  };
  workflow: {
    src: string;
    alt: string;
    caption: string;
  };
  supportingCta: {
    src: string;
    alt: string;
    caption: string;
    creditCreator?: string;
    creditSourceUrl?: string;
  };
}

export function getServiceVisuals(service: ServiceDetailData): ServiceVisualSet {
  const isBillingOrOffline =
    service.slug === "billing-and-inventory-software" ||
    service.slug === "offline-windows-software";
  const isSearchOrGrowth =
    service.slug === "seo-services" ||
    service.slug === "digital-marketing" ||
    service.slug === "lead-generation";

  return {
    hero: {
      src: `/images/services/${service.slug}-hero.webp`,
      alt: `${service.title} architecture and interface overview showing ${service.expectedOutcomeType}`,
      caption: `${service.title}: engineered for ${service.bestFitCustomer.toLowerCase()}.`,
    },
    problem: {
      src: `/images/services/${service.slug}-problem.webp`,
      alt: `Operational problem analysis for ${service.title}: ${service.problemAddressed}`,
      caption: `Why businesses outgrow manual workarounds: ${service.problemAddressed}`,
    },
    deliverable: {
      src: `/images/services/${service.slug}-deliverable.webp`,
      alt: `Tangible deliverables and production interface preview for ${service.title}`,
      caption: `Production deliverables include ${service.expectedDeliverables
        .slice(0, 2)
        .join(" and ")}.`,
    },
    workflow: {
      src: `/images/services/${service.slug}-workflow.webp`,
      alt: `Four-stage execution workflow for ${service.title} from discovery to launch`,
      caption: `Milestone-driven delivery workflow with staging reviews at every stage.`,
    },
    supportingCta: isBillingOrOffline
      ? {
          src: "/images/services/retail-pos-counter-operation.webp",
          alt: "Store operator processing a customer transaction at a retail point-of-sale counter",
          caption:
            "Built for fast counter billing, thermal/A4 GST receipts, and zero internet dependency.",
          creditCreator: "Blake Wisz",
          creditSourceUrl: "https://unsplash.com/photos/1556742049-0cfed4f6a45d",
        }
      : isSearchOrGrowth
      ? {
          src: "/images/services/seo-analytics-review-meeting.webp",
          alt: "Analyst reviewing search performance and website conversion data on a laptop",
          caption:
            "Every growth campaign is measured by qualified customer enquiries and transparent tracking.",
          creditCreator: "Campaign Creators",
          creditSourceUrl:
            "https://unsplash.com/photos/person-using-macbook-pro-1542744173-05336fcc7ad4",
        }
      : {
          src: "/images/home/webntric-project-discovery-meeting.webp",
          alt: "Project team reviewing scope documents and workflow milestones on a laptop during a discovery meeting",
          caption:
            "Discuss your workflow directly with the engineers and strategists who will build your system.",
          creditCreator: "Headway",
          creditSourceUrl:
            "https://unsplash.com/photos/1517245386807-bb43f82c33c4",
        },
  };
}

export { SERVICES_DATA };
