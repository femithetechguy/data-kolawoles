"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import siteContent from "@/content/site-content.json";

// ── helpers ──────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

function InView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── page ─────────────────────────────────────────────────────
export default function DataPage() {
  const { hero, work, stack, about, contact, footer } = siteContent;

  return (
    <div className="data-page" style={{ background: "var(--color-bg)", minHeight: "100vh", position: "relative" }}>
      <Cursor />
      <Nav />

      {/* Orb */}
      <div style={{
        position: "fixed", top: "-200px", left: "-150px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "#1a6cf5", filter: "blur(120px)",
        opacity: 0.08, pointerEvents: "none", zIndex: 0,
      }} />

      {/* ── HERO ── */}
      <section className="hero-section" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: "0 var(--page-gutter)", maxWidth: "900px", margin: "0 auto",
        position: "relative", zIndex: 1,
      }}>
        <motion.p {...fadeUp(0.1)} style={{
          fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--accent-light)", marginBottom: "1.5rem", fontWeight: 400,
        }}>
          {hero.eyebrow}
        </motion.p>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "var(--font-syne)", fontSize: "clamp(44px, 7vw, 80px)",
          fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em",
          color: "var(--color-fg)", marginBottom: "1.8rem",
        }}>
          {hero.title.lineOne}<br />
          <span style={{ color: "var(--accent-light)" }}>{hero.title.accentLine}</span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} style={{
          fontSize: "16px", fontWeight: 300, lineHeight: 1.7,
          color: "var(--color-fg-muted)", maxWidth: "520px", marginBottom: "3rem",
        }}>
          {hero.description}
        </motion.p>

        <motion.div className="hero-cta-row" {...fadeUp(0.4)} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a className="hero-cta-button" href={hero.primaryCta.href} style={{
            padding: "10px 24px", background: "var(--accent)",
            borderRadius: "3px", fontSize: "12px", letterSpacing: "0.08em",
            fontWeight: 500, color: "#fff", transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {hero.primaryCta.label}
          </a>
          <a className="hero-cta-button" href={hero.secondaryCta.href} style={{
            padding: "10px 24px", border: "0.5px solid var(--color-border-hover)",
            borderRadius: "3px", fontSize: "12px", letterSpacing: "0.08em",
            fontWeight: 400, color: "var(--color-fg-muted)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--color-fg)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.color = "var(--color-fg-muted)"; }}
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ position: "absolute", bottom: "var(--hero-scroll-bottom)", left: "var(--page-gutter)", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--color-fg-faint)", textTransform: "uppercase" }}>{hero.scrollHint}</span>
        </motion.div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ padding: "var(--section-work-y) var(--page-gutter)", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>{work.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3.5rem", color: "var(--color-fg)" }}>
            {work.title}
          </h2>
        </InView>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {work.projects.map((p, i) => (
            <InView key={p.title} delay={i * 0.07}>
              <div
                className="project-card"
                style={{
                  padding: "var(--project-card-padding)",
                  border: `0.5px solid ${p.accent ? "rgba(26,108,245,0.3)" : "var(--color-border)"}`,
                  borderRadius: "6px",
                  background: p.accent ? "rgba(26,108,245,0.04)" : "var(--color-bg-card)",
                  marginBottom: "12px",
                  transition: "border-color 0.3s, background 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(26,108,245,0.35)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(26,108,245,0.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = p.accent ? "rgba(26,108,245,0.3)" : "var(--color-border)";
                  (e.currentTarget as HTMLDivElement).style.background = p.accent ? "rgba(26,108,245,0.04)" : "var(--color-bg-card)";
                }}
              >
                {p.accent && (
                  <span style={{
                    position: "absolute", top: "var(--project-badge-top)", right: "var(--project-badge-right)",
                    fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "var(--accent-light)", padding: "3px 8px",
                    border: "0.5px solid var(--accent)", borderRadius: "2px",
                  }}>{work.currentBadgeLabel}</span>
                )}
                <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "4px" }}>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: "var(--color-fg)" }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "1rem", fontWeight: 400 }}>{p.context}</p>
                <div style={{ display: "grid", gap: "0.85rem", marginBottom: "1.2rem" }}>
                  {[
                    { label: "Problem", value: p.problem },
                    { label: "Solution", value: p.solution },
                    { label: "Impact", value: p.impact },
                  ].map((item) => (
                    <div key={`${p.title}-${item.label}`}>
                      <p style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-fg-faint)", marginBottom: "0.25rem" }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.7, color: "var(--color-fg-muted)" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontSize: "10px", padding: "3px 9px", borderRadius: "2px",
                      background: "rgba(240,237,230,0.05)", color: "rgba(240,237,230,0.4)",
                      letterSpacing: "0.05em",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" style={{ padding: "var(--section-standard-y) var(--page-gutter)", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>{stack.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3rem", color: "var(--color-fg)" }}>
            {stack.title}
          </h2>
        </InView>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(var(--stack-card-min), 1fr))", gap: "12px" }}>
          {stack.groups.map((s, i) => (
            <InView key={s.category} delay={i * 0.05}>
              <div style={{
                padding: "1.4rem 1.6rem",
                border: "0.5px solid var(--color-border)",
                borderRadius: "6px",
                background: "var(--color-bg-card)",
                transition: "border-color 0.25s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(26,108,245,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-border)")}
              >
                <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.8rem" }}>{s.category}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontSize: "12px", color: "var(--color-fg-muted)", fontWeight: 300 }}>{item}</span>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "var(--section-standard-y) var(--page-gutter)", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>{about.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2rem", color: "var(--color-fg)" }}>
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--color-fg-muted)",
                maxWidth: "620px",
                marginBottom: index === about.paragraphs.length - 1 ? 0 : "1.2rem",
              }}
            >
              {paragraph}
            </p>
          ))}
        </InView>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "var(--section-standard-y) var(--page-gutter) var(--section-contact-bottom)", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="contact-card" style={{
          padding: "var(--contact-card-padding)", border: "0.5px solid rgba(26,108,245,0.2)",
          borderRadius: "8px", background: "rgba(26,108,245,0.04)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem",
        }}>
          <InView>
            <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.6rem" }}>{contact.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-fg)" }}>
              {contact.title}
            </h2>
          </InView>
          <InView delay={0.1}>
            <a href={contact.cta.href} style={{
              padding: "12px 28px", background: "var(--accent)",
              borderRadius: "3px", fontSize: "13px", letterSpacing: "0.08em",
              fontWeight: 500, color: "#fff", transition: "opacity 0.2s", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {contact.cta.label}
            </a>
          </InView>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "0.5px solid var(--color-border)",
        padding: "var(--footer-y) var(--page-gutter)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem",
        position: "relative", zIndex: 1,
      }}>
        <span style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} {footer.copyrightOwner}
        </span>
        <div className="footer-links" style={{ display: "flex", gap: "1.5rem" }}>
          {footer.links.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.08em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-fg-muted)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-fg-faint)")}
            >{l.label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
