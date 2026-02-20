import { MotionConfig } from "framer-motion";
import Header from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CookieBanner from "./CookieBanner.jsx";
import "../styles/layout.css";

function Layout({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="layout">
        <Header />
        <main className="layout-main">{children}</main>
        <Footer />
        <CookieBanner />
      </div>
    </MotionConfig>
  );
}

export default Layout;
