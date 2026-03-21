export type CopyPayload = Record<string, unknown> | null | undefined;

export function getCopyValue(copy: CopyPayload, path: string): unknown {
  if (!copy || !path) {
    return undefined;
  }

  const segments = path.split(".");
  let current: unknown = copy;

  for (const segment of segments) {
    if (Array.isArray(current)) {
      const index = Number(segment);
      if (!Number.isInteger(index) || index < 0 || index >= current.length) {
        return undefined;
      }
      current = current[index];
      continue;
    }

    if (!current || typeof current !== "object") {
      return undefined;
    }

    const next = (current as Record<string, unknown>)[segment];
    if (typeof next === "undefined") {
      return undefined;
    }

    current = next;
  }

  return current;
}

export function getCopyText(copy: CopyPayload, path: string, fallback: string): string {
  const value = getCopyValue(copy, path);
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed || fallback;
}

export function getCopyStringArray(
  copy: CopyPayload,
  path: string,
  fallback: string[],
): string[] {
  const value = getCopyValue(copy, path);
  if (!Array.isArray(value)) {
    return fallback;
  }

  const cleaned = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);

  return cleaned.length ? cleaned : fallback;
}

export function getCopyObjectArray(copy: CopyPayload, path: string): Record<string, unknown>[] {
  const value = getCopyValue(copy, path);
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is Record<string, unknown> =>
      Boolean(item) && typeof item === "object" && !Array.isArray(item),
  );
}
