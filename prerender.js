/**
 * Pre-render script — generates static HTML files for key routes.
 * Run after: vite build (client) + vite build --ssr (server bundle)
 * Output: dist/{route}/index.html for each route
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All routes to pre-render (mirrors App.jsx)
const routes = [
  "/hr",
  "/en",
  "/hr/galerija",
  "/en/gallery",
  "/hr/clanice",
  "/en/members",
  "/hr/privacy",
  "/en/privacy",
  "/hr/terms",
  "/en/terms",
  "/hr/cookies",
  "/en/cookies",
];

async function prerender() {
  // Import the SSR bundle built by `vite build --ssr`
  const { render } = await import("./dist/server/entry-server.js");

  // The client-build SPA shell is the template for all pages
  const template = fs.readFileSync(
    path.resolve(__dirname, "dist/index.html"),
    "utf-8"
  );

  // Build filename → hashed web URL map from the Vite client manifest.
  // SSR asset imports resolve to file:// paths at build time; we replace
  // them with the correct /assets/[name]-[hash].ext URLs from the client build.
  const manifestPath = path.resolve(__dirname, "dist/.vite/manifest.json");
  const assetMap = {};
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
    for (const [srcKey, entry] of Object.entries(manifest)) {
      if (entry.file) {
        assetMap[path.basename(srcKey)] = "/" + entry.file;
      }
    }
  }

  let succeeded = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const { html, helmet } = await render(route);

      // Collect per-page <head> tags from react-helmet-async
      const headTags = helmet
        ? [
            helmet.title?.toString(),
            helmet.meta?.toString(),
            helmet.link?.toString(),
          ]
            .filter((s) => s && s.trim().length > 0)
            .join("\n    ")
        : "";

      // Extract page-specific title string (content only, no tags)
      const titleTag = helmet?.title?.toString() ?? "";
      const titleText = titleTag.replace(/<title[^>]*>/, "").replace("</title>", "").trim();

      // Inject into template:
      //  1. Replace base <title> with the page-specific one
      //  2. Replace <!--app-head--> with remaining per-page head tags (meta, link)
      //  3. Replace empty root div with pre-rendered markup
      const extraTags = helmet
        ? [helmet.meta?.toString(), helmet.link?.toString()]
            .filter((s) => s && s.trim().length > 0)
            .join("\n    ")
        : "";

      let rendered = template;
      if (titleText) {
        rendered = rendered.replace(/<title>[^<]*<\/title>/, `<title>${titleText}</title>`);
      }
      rendered = rendered
        .replace("<!--app-head-->", extraTags)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      // Replace any file:// paths emitted by SSR asset resolution with the
      // correct hashed client-build URLs (e.g. /assets/IMG_1491-BnVx.webp)
      if (Object.keys(assetMap).length > 0) {
        rendered = rendered.replace(/file:\/\/[^"'\s]*/g, (match) => {
          const filename = decodeURIComponent(match.split("/").pop());
          return assetMap[filename] || match;
        });
      }

      const outDir = path.resolve(__dirname, `dist${route}`);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.resolve(outDir, "index.html"), rendered);

      console.log(`  ✓  ${route}`);
      succeeded++;
    } catch (err) {
      console.error(`  ✗  ${route} — ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone. ${succeeded} pre-rendered, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error("Pre-render script crashed:", err);
  process.exit(1);
});
