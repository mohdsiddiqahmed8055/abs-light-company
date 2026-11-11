import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { Route } from "@/routes/__root";

type IconLink = { rel?: string; href?: string; type?: string; sizes?: string };

// The browser-tab icon is the brand mark: every page inherits these declarations
// from the root route's head(), so assert they are all present and point at the
// real files in public/.
const ICON_FILES = ["/favicon.ico", "/favicon.png", "/apple-touch-icon.png"];

describe("Site icon", () => {
  const head = (
    Route.options as unknown as { head: (ctx?: unknown) => { links?: IconLink[] } }
  ).head;
  const byHref = new Map((head({}).links ?? []).map((link) => [link.href, link]));

  it.each(ICON_FILES)("declares %s as an icon", (href) => {
    expect(byHref.has(href)).toBe(true);
  });

  it("ships every declared icon file", () => {
    for (const href of ICON_FILES) {
      const file = resolve(process.cwd(), "public", href.replace(/^\//, ""));
      expect(existsSync(file), `${href} is missing from public/`).toBe(true);
    }
  });

  it("declares the png mark at 128x128", () => {
    expect(byHref.get("/favicon.png")).toMatchObject({
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
    });
  });

  it("declares the apple-touch-icon at 180x180", () => {
    expect(byHref.get("/apple-touch-icon.png")).toMatchObject({
      rel: "apple-touch-icon",
      sizes: "180x180",
    });
  });

  it("does not point at the removed svg mark", () => {
    expect(byHref.has("/favicon.svg")).toBe(false);
  });
});
