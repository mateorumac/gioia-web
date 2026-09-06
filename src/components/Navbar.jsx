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
    { type: "anchor", hash: "o-nama",     label: t("nav.about",    "O studiju") },
    { type: "anchor", hash: "treninzi",   label: t("nav.classes",  "Treninzi") },
    { type: "anchor", hash: "cjenik",     label: t("nav.pricing",  "Cjenik") },
    { type: "anchor", hash: "trenerice",  label: t("nav.team",     "Trenerice") },
    { type: "anchor", hash: "recenzije",  label: t("nav.reviews",  "Recenzije") },
    { type: "anchor", hash: "galerija",   label: t("nav.gallery",  "Galerija") },
    { type: "anchor", hash: "kontakt",    label: t("nav.contact",  "Kontakt") },
    { type: "route",  to: "/clanovi",     label: t("nav.clanice",  "Članovi") },
    { type: "anchor", hash: "rezervacija",label: t("nav.book",     "Rezerviraj"), drawerLabel: t("nav.bookDrawer", "Rezerviraj termin"), cta: true },
  ];

  const currentHash = location.hash || "";

  const getAnchorHref = (hash) => {
    if (isHome) return `#${hash}`;
    return langPath(`/#${hash}`);
  };

  // HomePage is lazy-loaded, so when arriving from another route its
  // sections may not exist in the DOM yet on the first animation frame —
  // retry across frames until the target shows up. Once it does, the page
  // can still be mid-reflow for a while (webfonts swapping in, images
  // settling, slower devices taking longer to lay everything out), so
  // instead of guessing a fixed delay we watch the document's height and
  // wait until it stops changing for a handful of consecutive frames
  // before actually scrolling — otherwise we land short, at whatever the
  // page's not-yet-final layout put at that scroll offset.
  const scrollToHashWhenReady = (hash, cancelledRef) => {
    const id = (hash || "").replace("#", "");
    if (!id) return;

    const waitForElement = (attemptsLeft) => {
      if (cancelledRef.current) return;
      const el = document.getElementById(id);
      if (!el) {
        if (attemptsLeft <= 0) return;
        requestAnimationFrame(() => waitForElement(attemptsLeft - 1));
        return;
      }
      waitForStableLayout(el, -1, 0, 120);
    };

    const waitForStableLayout = (el, lastHeight, stableFrames, framesLeft) => {
      if (cancelledRef.current) return;

      const height = document.documentElement.scrollHeight;
      const isStable = height === lastHeight;
      const nextStableFrames = isStable ? stableFrames + 1 : 0;

      // ~6 consecutive unchanged frames (~100ms), or give up waiting after
      // ~2s and scroll anyway so a click never just does nothing.
      if (nextStableFrames >= 6 || framesLeft <= 0) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      requestAnimationFrame(() =>
        waitForStableLayout(el, height, nextStableFrames, framesLeft - 1)
      );
    };

    waitForElement(60);
  };

  useEffect(() => {
    if (!isHome) return;
    if (!location.hash) return;

    const cancelledRef = { current: false };
    scrollToHashWhenReady(location.hash, cancelledRef);
    return () => {
      cancelledRef.current = true;
    };
  }, [isHome, location.hash]);

  const onAnchorClick = (e, hash) => {
    e.preventDefault();

    // Close the drawer and release its scroll lock synchronously —
    // the "no-scroll" class is normally cleared by an effect that only
    // runs after this handler returns, which is too late for the
    // scrollIntoView below to have any effect on mobile.
    setDrawerOpen(false);
    document.body.classList.remove("no-scroll");

    const next = `#${hash}`;

    if (isHome) {
      if (window.location.hash !== next) {
        window.history.pushState(null, "", next);
      }
      scrollToHashWhenReady(next, { current: false });
      return;
    }

    // Navigate to the home page with the hash — client-side, so we don't
    // hard-reload — and let the effect above (which retries until the
    // lazy-loaded section actually exists) handle the scroll once we land.
    navigate(langPath(`/${next}`));
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
                const isCta = item.cta === true;
                const nextItem = navItems[idx + 1];
                const nextIsCta = nextItem?.cta === true;
                const showSep = !!nextItem && !isCta && !nextIsCta;

                if (item.type === "anchor") {
                  const active = isHome && currentHash === `#${item.hash}`;
                  return (
                    <span className="nav-item" key={item.hash}>
                      <a
                        href={getAnchorHref(item.hash)}
                        className={`nav-link ${isCta ? "nav-cta" : ""} ${active ? "active" : ""}`}
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
                        `nav-link ${isActive ? "active" : ""}`
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
          <span className="drawer-eyebrow drawer-eyebrow--nav">
            {t("nav.navigationLabel", "Navigacija")}
          </span>
          <div className="drawer-divider drawer-divider--nav" aria-hidden="true" />
          <nav className="drawer-nav" aria-label="Navigacija">
            {navItems.map((item) => {
              const isCta = item.cta === true;

              if (item.type === "anchor") {
                return (
                  <a
                    key={item.hash}
                    href={getAnchorHref(item.hash)}
                    className={`drawer-link ${isCta ? "drawer-cta" : ""}`}
                    onClick={(e) => onAnchorClick(e, item.hash)}
                  >
                    {item.drawerLabel ?? item.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={langPath(item.to)}
                  className={({ isActive }) =>
                    `drawer-link ${isActive ? "active" : ""}`
                  }
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="drawer-lang-block">
            <span className="drawer-eyebrow drawer-eyebrow--lang">
              {t("nav.languageLabel", "Jezik")}
            </span>
            <div className="drawer-divider drawer-divider--lang" aria-hidden="true" />
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
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Navbar;
