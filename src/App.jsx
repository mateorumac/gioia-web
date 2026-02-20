import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Pages — code-split so each route loads its own chunk
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.jsx"));
const MemberInfoPage = lazy(() => import("./pages/MemberInfoPage.jsx"));
const CookiesPage = lazy(() => import("./pages/CookiesPage.jsx"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.jsx"));
const TermsPage = lazy(() => import("./pages/TermsPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const langFromPath = location.pathname.split("/")[1];
    const lang = langFromPath === "en" ? "en" : "hr";

    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("lang", lang);
  }, [location.pathname, i18n]);

  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={null}>
      <Routes>
        {/* root → uvijek /hr */}
        <Route path="/" element={<Navigate to="/hr" replace />} />

        {/* HR rute */}
        <Route path="/hr" element={<HomePage />} />
        <Route path="/hr/galerija" element={<GalleryPage />} />
        <Route path="/hr/clanice" element={<MemberInfoPage />} />
        <Route path="/hr/politika-kolacica" element={<CookiesPage />} />
        <Route path="/hr/politika-privatnosti" element={<PrivacyPage />} />
        <Route path="/hr/uvjeti-koristenja" element={<TermsPage />} />

        {/* EN rute */}
        <Route path="/en" element={<HomePage />} />
        <Route path="/en/galerija" element={<GalleryPage />} />
        <Route path="/en/clanice" element={<MemberInfoPage />} />
        <Route path="/en/politika-kolacica" element={<CookiesPage />} />
        <Route path="/en/politika-privatnosti" element={<PrivacyPage />} />
        <Route path="/en/uvjeti-koristenja" element={<TermsPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
