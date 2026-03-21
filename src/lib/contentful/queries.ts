import "server-only";

import { unstable_cache } from "next/cache";

import { getContentfulClient, isContentfulConfigured } from "./client";

type ContentfulFields = Record<string, unknown>;

interface RawContentfulEntry {
  sys: { id: string };
  fields: ContentfulFields;
}

interface RawContentfulAsset {
  fields?: {
    title?: string;
    description?: string;
    file?: { url?: string };
  };
}

export interface PageContent {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  copy: Record<string, unknown>;
}

export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  benefits: string[];
}

export interface FaqContent {
  id: string;
  question: string;
  answer: string;
}

const PAGE_CONTENT_TYPE = process.env.CONTENTFUL_PAGE_CONTENT_TYPE ?? "pageContent";
const SERVICE_CONTENT_TYPE = process.env.CONTENTFUL_SERVICE_CONTENT_TYPE ?? "service";
const FAQ_CONTENT_TYPE = process.env.CONTENTFUL_FAQ_CONTENT_TYPE ?? "faq";

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asNumber(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function asObject(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return value as Record<string, unknown>;
}

function asAsset(value: unknown): RawContentfulAsset | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  return value as RawContentfulAsset;
}

function asAssetUrl(value: unknown): string {
  const rawUrl = asAsset(value)?.fields?.file?.url;
  if (!rawUrl) {
    return "";
  }

  return rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl;
}

async function getEntries(
  contentType: string,
  filters?: Record<string, string | number>,
): Promise<RawContentfulEntry[]> {
  const client = getContentfulClient();
  if (!client) {
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: contentType,
      include: 2,
      ...(filters ?? {}),
    } as never);

    return response.items as unknown as RawContentfulEntry[];
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(`Unable to load "${contentType}" entries from Contentful.`, error);
    }

    return [];
  }
}

const loadPageContent = async (slug: string): Promise<PageContent | null> => {
  if (!isContentfulConfigured) {
    return null;
  }

  const [entry] = await getEntries(PAGE_CONTENT_TYPE, {
    limit: 1,
    "fields.slug": slug,
  });

  if (!entry) {
    return null;
  }

  const { fields } = entry;
  return {
    slug: asString(fields.slug) || slug,
    seoTitle: asString(fields.seoTitle),
    seoDescription: asString(fields.seoDescription),
    copy: asObject(fields.copy),
  };
};

const loadServicesContent = async (): Promise<ServiceContent[]> => {
  if (!isContentfulConfigured) {
    return [];
  }

  const entries = await getEntries(SERVICE_CONTENT_TYPE);
  return entries
    .map((entry) => {
      const { fields } = entry;

      return {
        id: entry.sys.id,
        order: asNumber(fields.sortOrder),
        title: asString(fields.title),
        description: asString(fields.description),
        content: asString(fields.content),
        image: asAssetUrl(fields.image),
        benefits: asStringArray(fields.benefits),
      };
    })
    .filter((service) => service.title && service.description)
    .sort((a, b) => a.order - b.order)
    .map((service) => ({
      id: service.id,
      title: service.title,
      description: service.description,
      content: service.content,
      image: service.image,
      benefits: service.benefits,
    }));
};

const loadFaqContent = async (): Promise<FaqContent[]> => {
  if (!isContentfulConfigured) {
    return [];
  }

  const entries = await getEntries(FAQ_CONTENT_TYPE);
  return entries
    .map((entry) => {
      const { fields } = entry;
      return {
        id: entry.sys.id,
        order: asNumber(fields.sortOrder),
        question: asString(fields.question) || asString(fields.title),
        answer: asString(fields.answer),
      };
    })
    .filter((faq) => faq.question && faq.answer)
    .sort((a, b) => a.order - b.order)
    .map((faq) => ({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
    }));
};

export const getPageContent = unstable_cache(
  loadPageContent,
  ["contentful:page-content"],
  {
    revalidate: 300,
    tags: ["contentful", "contentful:pages"],
  },
);

export const getServicesContent = unstable_cache(
  loadServicesContent,
  ["contentful:services"],
  {
    revalidate: 300,
    tags: ["contentful", "contentful:services"],
  },
);

export const getFaqContent = unstable_cache(loadFaqContent, ["contentful:faqs"], {
  revalidate: 300,
  tags: ["contentful", "contentful:faqs"],
});
