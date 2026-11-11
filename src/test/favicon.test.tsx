import { describe, expect, it } from "vitest";

import { Route } from "@/routes/__root";

type IconLink = { rel?: string; href?: string; type?: string; sizes?: string };

// The browser-tab icon is the brand mark: every page inherits these declarations
// from the root route's head(), so assert they are all present and point at the
// real files in public/.
describe("Site icon", () => {
  const head = (Route.options as { head: () => { links?: IconLink[] } }).head();
  const byHref = new Map((head.links ?? []).map((link) => [link.href, link]));

  it.each(["/favicon.svg", "/favicon.ico", "/favicon.png", "/apple-touch-icon.png"])(
    "declares %s as an icon",
    (href) => {
      expect(byHref.has(href)).toBe(true);
    },
  );

  it("serves the scalable mark as the primary icon", () => {
    expect(byHref.get("/favicon.svg")).toMatchObject({
      rel: "icon",
      type: "image/svg+xml",
    });
  });

  it("declares the apple-touch-icon at 180x180", () => {
    expect(byHref.get("/apple-touch-icon.png")).toMatchObject({
      rel: "apple-touch-icon",
      sizes: "180x180",
    });
  });
});
