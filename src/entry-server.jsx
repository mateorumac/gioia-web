import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import i18n from "./i18n-server.js";

export async function render(url) {
  // Set language based on URL prefix before rendering
  const lang = url.startsWith("/en") ? "en" : "hr";
  await i18n.changeLanguage(lang);

  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
