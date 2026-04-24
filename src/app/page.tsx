"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

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

// ── data ─────────────────────────────────────────────────────
const projects = [
  {
    client: "HBGI / Social Finance",
    role: "Sr. Power BI Consultant",
    period: "2024 – Present",
    description:
      "Multi-provider behavioral health performance reporting system for Sacramento County. 20 providers, 15-page dashboard covering staffing, census, financial, CPO, and SE metrics. Full Python ETL pipeline with SharePoint integration via Microsoft Graph API.",
    tags: ["Power BI", "DAX", "Python", "Microsoft Fabric", "SharePoint API", "Deneb/Vega-Lite"],
    accent: true,
  },
  {
    client: "Northside Hospital",
    role: "BI Engineer",
    period: "2023",
    description:
      "Clinical and operational reporting across multiple hospital departments. Dimensional model design, semantic layer development, and executive dashboard delivery.",
    tags: ["Power BI", "SQL Server", "DAX", "Azure"],
  },
  {
    client: "Hiscox Insurance",
    role: "BI Developer",
    period: "2022 – 2023",
    description:
      "Underwriting and claims analytics. Built self-service reporting infrastructure enabling business users to explore policy performance without IT involvement.",
    tags: ["Power BI", "Snowflake", "dbt", "DAX"],
  },
  {
    client: "Manhattan Associates",
    role: "Data Analyst",
    period: "2021 – 2022",
    description:
      "Supply chain and logistics analytics. KPI tracking across warehouse operations, order fulfillment, and carrier performance.",
    tags: ["Power BI", "SQL", "Python", "Excel"],
  },
  {
    client: "Costco Wholesale",
    role: "BI Analyst",
    period: "2020 – 2021",
    description:
      "Retail performance dashboards across departments and regions. Membership analytics and inventory performance reporting.",
    tags: ["Power BI", "SQL", "Power Query"],
  },
];

const stack = [
  { category: "Visualization", items: ["Power BI", "Deneb / Vega-Lite", "Power Pages"] },
  { category: "Data Platform", items: ["Microsoft Fabric", "Azure Synapse", "Snowflake", "SQL Server"] },
  { category: "Languages", items: ["DAX", "Python", "SQL", "M (Power Query)", "TypeScript"] },
  { category: "ETL / Integration", items: ["Azure Data Factory", "Microsoft Graph API", "dbt", "Pandas"] },
  { category: "Modeling", items: ["Dimensional Modeling", "Star Schema", "Semantic Layer", "RLS/OLS"] },
  { category: "Tools", items: ["DAX Studio", "Tabular Editor", "VS Code", "Git"] },
];

// ── page ─────────────────────────────────────────────────────
export default function DataPage() {
  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", position: "relative" }}>
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
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: "0 2.5rem", maxWidth: "900px", margin: "0 auto",
        position: "relative", zIndex: 1,
      }}>
        <motion.p {...fadeUp(0.1)} style={{
          fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--accent-light)", marginBottom: "1.5rem", fontWeight: 400,
        }}>
          Analytics & BI · FTTG Solutions LLC
        </motion.p>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "var(--font-syne)", fontSize: "clamp(44px, 7vw, 80px)",
          fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em",
          color: "var(--color-fg)", marginBottom: "1.8rem",
        }}>
          Data that<br />
          <span style={{ color: "var(--accent-light)" }}>drives decisions.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} style={{
          fontSize: "16px", fontWeight: 300, lineHeight: 1.7,
          color: "var(--color-fg-muted)", maxWidth: "520px", marginBottom: "3rem",
        }}>
          Senior BI Engineer with 8+ years in the Microsoft data ecosystem.
          I build reporting systems that turn complex operational data into
          clear, actionable intelligence for stakeholders at every level.
        </motion.p>

        <motion.div {...fadeUp(0.4)} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="#work" style={{
            padding: "10px 24px", background: "var(--accent)",
            borderRadius: "3px", fontSize: "12px", letterSpacing: "0.08em",
            fontWeight: 500, color: "#fff", transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            View Work
          </a>
          <a href="mailto:adefemi@kolawoles.com" style={{
            padding: "10px 24px", border: "0.5px solid var(--color-border-hover)",
            borderRadius: "3px", fontSize: "12px", letterSpacing: "0.08em",
            fontWeight: 400, color: "var(--color-fg-muted)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--color-fg)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.color = "var(--color-fg-muted)"; }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--color-fg-faint)", textTransform: "uppercase" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ padding: "8rem 2.5rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>Selected Work</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3.5rem", color: "var(--color-fg)" }}>
            Client Engagements
          </h2>
        </InView>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {projects.map((p, i) => (
            <InView key={p.client} delay={i * 0.07}>
              <div
                style={{
                  padding: "2rem 2.2rem",
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
                    position: "absolute", top: "1.2rem", right: "1.5rem",
                    fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "var(--accent-light)", padding: "3px 8px",
                    border: "0.5px solid var(--accent)", borderRadius: "2px",
                  }}>Current</span>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "4px" }}>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: "var(--color-fg)" }}>{p.client}</h3>
                  <span style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.05em" }}>{p.period}</span>
                </div>
                <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.8rem", fontWeight: 400 }}>{p.role}</p>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.7, color: "var(--color-fg-muted)", marginBottom: "1.2rem" }}>{p.description}</p>
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
      <section id="stack" style={{ padding: "6rem 2.5rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>Technical Depth</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3rem", color: "var(--color-fg)" }}>
            Stack
          </h2>
        </InView>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
          {stack.map((s, i) => (
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
      <section id="about" style={{ padding: "6rem 2.5rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>Background</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2rem", color: "var(--color-fg)" }}>
            About
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.8, color: "var(--color-fg-muted)", maxWidth: "620px", marginBottom: "1.2rem" }}>
            Senior BI Engineer and consultant operating through FTTG Solutions LLC,
            based in McDonough, Georgia. 8+ years building reporting systems, semantic
            models, and data pipelines across behavioral health, insurance, logistics, and retail.
          </p>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.8, color: "var(--color-fg-muted)", maxWidth: "620px" }}>
            Specialized in the Microsoft data ecosystem — Power BI, Microsoft Fabric,
            Azure — with deep DAX authorship, dimensional modeling, and Python-based
            ETL. Currently engaged as a Sr. Power BI Consultant building behavioral
            health performance infrastructure for Sacramento County.
          </p>
        </InView>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "6rem 2.5rem 8rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          padding: "3rem", border: "0.5px solid rgba(26,108,245,0.2)",
          borderRadius: "8px", background: "rgba(26,108,245,0.04)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem",
        }}>
          <InView>
            <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.6rem" }}>Available for Engagements</p>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-fg)" }}>
              Let's build something.
            </h2>
          </InView>
          <InView delay={0.1}>
            <a href="mailto:adefemi@kolawoles.com" style={{
              padding: "12px 28px", background: "var(--accent)",
              borderRadius: "3px", fontSize: "13px", letterSpacing: "0.08em",
              fontWeight: 500, color: "#fff", transition: "opacity 0.2s", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              adefemi@kolawoles.com
            </a>
          </InView>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "0.5px solid var(--color-border)",
        padding: "1.5rem 2.5rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem",
        position: "relative", zIndex: 1,
      }}>
        <span style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} FTTG Solutions LLC
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "Hub", href: "https://kolawoles.com" },
            { label: "App Dev", href: "https://appdev.kolawoles.com" },
          ].map(l => (
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
