import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import MemberInfoPage from "./pages/MemberInfoPage.jsx";
import CookiesPage from "./pages/CookiesPage.jsx";
import GDPRPage from "./pages/GDPRPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

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
      <Routes>
        {/* root → uvijek /hr */}
        <Route path="/" element={<Navigate to="/hr" replace />} />

        {/* HR rute */}
        <Route path="/hr" element={<HomePage />} />
        <Route path="/hr/galerija" element={<GalleryPage />} />
        <Route path="/hr/clanice" element={<MemberInfoPage />} />
        <Route path="/hr/members" element={<MemberInfoPage />} />
        <Route path="/hr/blog" element={<BlogListPage />} />
        <Route path="/hr/blog/:slug" element={<BlogPostPage />} />
        <Route path="/hr/cookies" element={<CookiesPage />} />
        <Route path="/hr/gdpr" element={<GDPRPage />} />
        <Route path="/hr/privacy" element={<PrivacyPage />} />
        <Route path="/hr/terms" element={<TermsPage />} />

        {/* EN rute */}
        <Route path="/en" element={<HomePage />} />
        <Route path="/en/gallery" element={<GalleryPage />} />
        <Route path="/en/blog" element={<BlogListPage />} />
        <Route path="/en/blog/:slug" element={<BlogPostPage />} />
        <Route path="/en/members" element={<MemberInfoPage />} />
        <Route path="/en/cookies" element={<CookiesPage />} />
        <Route path="/en/gdpr" element={<GDPRPage />} />
        <Route path="/en/privacy" element={<PrivacyPage />} />
        <Route path="/en/terms" element={<TermsPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
