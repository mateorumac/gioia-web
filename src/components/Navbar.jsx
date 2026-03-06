import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import navLogo from "../assets/logos/nav-logo.webp";
import hrFlag from "../assets/icons/croatia.webp";
import enFlag from "../assets/icons/uk.webp";
import "../styles/Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/");
  const urlLang = pathSegments[1];
  const currentLang = urlLang === "en" ? "en" : "hr";

  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  const isHome = useMemo(() => {
    const p = location.pathname.replace(/\/+$/, "");
    return p === "/hr" || p === "/en" || p === "";
  }, [location.pathname]);

  const langPath = (path = "") => {
    if (!path || path === "/") return `/${currentLang}`;
    return `/${currentLang}${path}`;
  };

  const switchLanguage = (newLang) => {
    if (newLang === currentLang) return;

    const segments = [...pathSegments];

    if (segments.length < 2 || (segments[1] !== "hr" && segments[1] !== "en")) {
      segments[1] = newLang;
    } else {
      segments[1] = newLang;
    }

    const newPath = segments.join("/") || `/${newLang}`;
    const normalizedPath = newPath.startsWith("/") ? newPath : `/${newPath}`;

    navigate(normalizedPath);

    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute("lang", newLang);
    localStorage.setItem("gioia-lang", newLang);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };

    const onPointerDown = (e) => {
      const clickedInsideDrawer = drawerRef.current?.contains(e.target);
      const clickedHamburger = hamburgerRef.current?.contains(e.target);
      if (!clickedInsideDrawer && !clickedHamburger) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.body.classList.add("no-scroll");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.classList.remove("no-scroll");
    };
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!langOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLangOpen(false);
    };

    const onPointerDown = (e) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [langOpen]);

  const headerClass =
    "site-header" +
    (isHome && !isScrolled
      ? " site-header--transparent"
      : " site-header--solid");

  const navItems = [
    { type: "anchor", hash: "o-nama", label: t("nav.about", "O studiju") },
    { type: "anchor", hash: "treninzi", label: t("nav.classes", "Treninzi") },
    { type: "anchor", hash: "trenerice", label: t("nav.team", "Trenerice") },
    { type: "anchor", hash: "galerija", label: t("nav.gallery", "Galerija") },
    { type: "anchor", hash: "kontakt", label: t("nav.contact", "Kontakt") },
    { type: "route", to: "/clanice", label: t("nav.clanice", "Članovi") },
  ];

  const currentHash = location.hash || "";

  const getAnchorHref = (hash) => {
    if (isHome) return `#${hash}`;
    return langPath(`/#${hash}`);
  };

  const smoothScrollToHash = (hash) => {
    const id = (hash || "").replace("#", "");
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!isHome) return;
    if (!location.hash) return;

    const raf = requestAnimationFrame(() => smoothScrollToHash(location.hash));
    return () => cancelAnimationFrame(raf);
  }, [isHome, location.hash]);

  const onAnchorClick = (e, hash) => {
    if (!isHome) return;

    e.preventDefault();

    const next = `#${hash}`;
    if (window.location.hash !== next) {
      window.history.pushState(null, "", next);
    }

    smoothScrollToHash(next);
    setDrawerOpen(false);
  };

  const langMeta =
    currentLang === "hr"
      ? { code: "HR", name: "Hrvatski", flag: hrFlag }
      : { code: "EN", name: "English", flag: enFlag };

  const langOptions = [
    { code: "HR", name: "Hrvatski", lang: "hr", flag: hrFlag },
    { code: "EN", name: "English", lang: "en", flag: enFlag },
  ];

  return (
    <header className={headerClass}>
      <div className="site-header-inner">
        <div className="bar">
          <NavLink
            to={langPath("/")}
            className="site-logo"
            aria-label="Gioia Studio"
          >
            <img className="site-logo-img" src={navLogo} alt="Gioia Studio" width="128" height="112" />
          </NavLink>

          <div className="right desktop-only">
            <nav className="site-nav" aria-label="Glavna navigacija">
              {navItems.map((item, idx) => {
                const isCta = item.type === "route" && item.to === "/clanice";

                const nextItem = navItems[idx + 1];
                const nextIsCta =
                  nextItem &&
                  nextItem.type === "route" &&
                  nextItem.to === "/clanice";

                const showSep = !!nextItem && !nextIsCta;

                if (item.type === "anchor") {
                  const active = isHome && currentHash === `#${item.hash}`;
                  return (
                    <span className="nav-item" key={item.hash}>
                      <a
                        href={getAnchorHref(item.hash)}
                        className={`nav-link ${active ? "active" : ""}`}
                        onClick={(e) => onAnchorClick(e, item.hash)}
                      >
                        {item.label}
                      </a>
                      {showSep && <span className="nav-sep">|</span>}
                    </span>
                  );
                }

                return (
                  <span className="nav-item" key={item.to}>
                    <NavLink
                      to={langPath(item.to)}
                      className={({ isActive }) =>
                        `nav-link ${isCta ? "nav-cta" : ""} ${isActive ? "active" : ""}`
                      }
                      end={item.to === "/"}
                    >
                      {item.label}
                    </NavLink>
                    {showSep && <span className="nav-sep">|</span>}
                  </span>
                );
              })}
            </nav>

            <div className="lang-dropdown" ref={langRef}>
              <button
                type="button"
                className={`lang-trigger ${langOpen ? "open" : ""}`}
                aria-label={t("nav.selectLang", "Odabir jezika")}
                aria-haspopup="menu"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <img
                  className="lang-flag"
                  src={langMeta.flag}
                  alt={langMeta.code}
                  width="48"
                  height="48"
                />
                <span className="lang-code">{langMeta.code}</span>
                <span className="lang-caret" aria-hidden="true">
                  ▾
                </span>
              </button>

              <div
                className={`lang-menu ${langOpen ? "open" : ""}`}
                role="menu"
              >
                {langOptions.map((opt) => {
                  const active = opt.lang === currentLang;
                  return (
                    <button
                      key={opt.lang}
                      type="button"
                      className={`lang-option ${active ? "active" : ""}`}
                      role="menuitem"
                      onClick={() => {
                        switchLanguage(opt.lang);
                        setLangOpen(false);
                      }}
                    >
                      <img
                        className="lang-flag"
                        src={opt.flag}
                        alt={opt.code}
                        width="48"
                        height="48"
                      />
                      <span className="lang-option-text">
                        <span className="lang-option-name">{opt.name}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            ref={hamburgerRef}
            type="button"
            className={`hamburger mobile-only ${drawerOpen ? "is-open" : ""}`}
            aria-label={drawerOpen ? t("nav.closeMenu", "Zatvori izbornik") : t("nav.openMenu", "Otvori izbornik")}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>

        <div
          className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
          onClick={() => setDrawerOpen(false)}
        />

        <aside
          ref={drawerRef}
          className={`drawer ${drawerOpen ? "open" : ""}`}
          aria-hidden={!drawerOpen}
        >
          <nav className="drawer-nav" aria-label="Navigacija">
            {navItems.map((item) => {
              const isCta = item.type === "route" && item.to === "/clanice";

              if (item.type === "anchor") {
                return (
                  <a
                    key={item.hash}
                    href={getAnchorHref(item.hash)}
                    className="drawer-link"
                    onClick={(e) => onAnchorClick(e, item.hash)}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={langPath(item.to)}
                  className={({ isActive }) =>
                    `drawer-link ${isCta ? "drawer-cta" : ""} ${
                      isActive ? "active" : ""
                    }`
                  }
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="drawer-lang" aria-label="Jezik">
            <button
              type="button"
              className={`drawer-lang-btn ${currentLang === "hr" ? "active" : ""}`}
              onClick={() => {
                switchLanguage("hr");
                setDrawerOpen(false);
              }}
            >
              <img className="lang-flag" src={hrFlag} alt="HR" width="48" height="48" />
              <span>Hrvatski</span>
            </button>

            <button
              type="button"
              className={`drawer-lang-btn ${currentLang === "en" ? "active" : ""}`}
              onClick={() => {
                switchLanguage("en");
                setDrawerOpen(false);
              }}
            >
              <img className="lang-flag" src={enFlag} alt="EN" width="48" height="48" />
              <span>English</span>
            </button>
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Navbar;
