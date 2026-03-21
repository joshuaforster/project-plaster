import "server-only";

import { createClient } from "contentful";

type ContentfulClientMode = "delivery" | "preview";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const DELIVERY_ACCESS_TOKEN = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? "master";

const clients: Partial<Record<ContentfulClientMode, ReturnType<typeof createClient>>> = {};

export const isContentfulConfigured = Boolean(SPACE_ID && DELIVERY_ACCESS_TOKEN);

function getAccessToken(mode: ContentfulClientMode): string | undefined {
  return mode === "preview" ? PREVIEW_ACCESS_TOKEN : DELIVERY_ACCESS_TOKEN;
}

export function getContentfulClient(
  mode: ContentfulClientMode = "delivery",
): ReturnType<typeof createClient> | null {
  const accessToken = getAccessToken(mode);
  if (!SPACE_ID || !accessToken) {
    return null;
  }

  if (clients[mode]) {
    return clients[mode]!;
  }

  clients[mode] = createClient({
    space: SPACE_ID,
    accessToken,
    environment: ENVIRONMENT,
    host: mode === "preview" ? "preview.contentful.com" : "cdn.contentful.com",
  });

  return clients[mode]!;
}
