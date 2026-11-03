import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import * as images from "@/lib/images";
import originals from "./image-originals.json";

describe("Portable original images", () => {
  it("includes all 34 existing images as unchanged local files", () => {
    expect(originals).toHaveLength(34);
    expect(readdirSync(resolve("public/images")).sort()).toEqual(originals.map((image) => image.filename).sort());
    for (const image of originals) {
      const bytes = readFileSync(resolve("public/images", image.filename));
      expect(bytes.byteLength, image.filename).toBe(image.size);
      expect(createHash("sha256").update(bytes).digest("hex"), image.filename).toBe(image.sha256);
    }
  });

  it("references every original under /images/ without CDN dependencies", () => {
    expect(Object.values(images).map((image) => image.url).sort()).toEqual(originals.map((image) => `/images/${image.filename}`).sort());
  });
});