import { WORK_BLUEPRINTS, type WorkBlueprintItem } from "@/data/work";

export function getBlueprintVisual(item: WorkBlueprintItem) {
  return {
    src: `/images/work/${item.id}.webp`,
    alt: `System architecture and interface blueprint for ${item.title} in ${item.industry}`,
    caption: `${item.projectTypeLabel}: ${item.title} (representative architecture, no private client data exposed).`,
  };
}

export { WORK_BLUEPRINTS };
