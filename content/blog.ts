import {
  INSIGHT_ARTICLES,
  SOCIAL_CONTENT_TEMPLATES,
  type InsightArticle,
} from "@/data/insights";

export function getInsightVisual(article: InsightArticle) {
  return {
    src: `/images/insights/${article.slug}.webp`,
    alt: `Editorial decision framework diagram for ${article.title}`,
    caption: `Practical engineering comparison: ${article.title}.`,
  };
}

export { INSIGHT_ARTICLES, SOCIAL_CONTENT_TEMPLATES };
