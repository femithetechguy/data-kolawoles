"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import siteContent from "@/content/site-content.json";

export default function Nav() {
  const { brand, nav } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 640) return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 40,
        padding: "var(--nav-y) var(--page-gutter)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "0.5px solid transparent",
        backdropFilter: "blur(0px)",
      }}
      className="nav-header"
      data-open={mobileOpen ? "true" : "false"}
    >
      <Link href={brand.homeHref} className="nav-brand" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{ fontFamily: "var(--font-syne)", fontSize: "13px", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-fg)" }}>
          {brand.primary}<span style={{ color: "var(--color-fg-faint)" }}>{brand.secondary}</span>
        </span>
        <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent-light)", fontWeight: 400 }}>
          {brand.subLabel}
        </span>
      </Link>

      <nav className="nav-links nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {nav.sections.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="nav-link"
            style={{ fontSize: "12px", letterSpacing: "0.08em", color: "var(--color-fg-muted)", fontWeight: 300, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-fg-muted)")}
          >
            {l.label}
          </a>
        ))}
        <a
          href={nav.cta.href}
          className="nav-cta"
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            padding: "6px 14px",
            border: "0.5px solid var(--accent)",
            borderRadius: "3px",
            color: "var(--accent-light)",
            fontWeight: 400,
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-glow)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          {nav.cta.label}
        </a>
      </nav>

      <button
        type="button"
        className="nav-mobile-toggle"
        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((current) => !current)}
      >
        {mobileOpen ? "Close" : "Menu"}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {nav.sections.map((l) => (
              <a
                key={`mobile-${l.label}`}
                href={l.href}
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              className="nav-mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              {nav.cta.label}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
