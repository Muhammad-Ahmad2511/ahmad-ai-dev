import { Suspense, lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { heroStats, marquee, profile } from "@/data/portfolio";

const ThreeAIVisualization = lazy(() => import("./ThreeAIVisualization"));

// ... existing imports ...

const badges = [
  { text: "EXPLAINABLE AI", style: { left: '6%', top: '2%' }, zIndex: 1 },
  { text: "LLM SYSTEMS", style: { left: '40%', top: '13%' }, zIndex: 1 },
  { text: "RAG", style: { left: '78%', top: '4%' }, zIndex: 1 },
  { text: "VECTOR SEARCH", style: { left: '38%', top: '64%' }, zIndex: 1 },
  { text: "PRODUCTION ML", style: { left: '22%', top: '95%' }, zIndex: 1 },
  { text: "FULL STACK AI", style: { left: '78%', top: '86%' }, zIndex: 1 },
];


export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative tech-grid overflow-hidden pt-24 sm:pt-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="hidden items-start justify-between pt-4 md:flex">
          <p className="mono-label whitespace-pre-line">{profile.coords}</p>
          <p className="mono-label text-right">SYS. REF: 0x99A3 · SCALE 1:1.0</p>
        </div>

        <div className="relative grid items-center gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-14">
          {/* Decorative badges (kept clear of content) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {badges.map((b, index) => {
              // Create unique animation variations for each badge
              const xDrift = index % 2 === 0 ? 8 : -8;  // Alternate left/right drift
              const yDrift = index % 3 === 0 ? 6 : -6;  // Staggered vertical drift
              const duration = 6 + index * 1.5;  // Different durations per badge
              const delay = index * 0.5;  // Staggered start times

              return (
                <motion.span
                  key={b.text}
                  className="absolute rounded-full border-[1.5px] border-accent bg-background px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-accent"
                  style={{ ...b.style, zIndex: b.zIndex }}
                  initial={{ y: -2, x: 0 }}
                  animate={{
                    y: [0, yDrift, -yDrift, 0],
                    x: [0, xDrift, -xDrift, 0]
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {b.text}
                </motion.span>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 min-w-0 lg:pt-20"
          >
            <div className="flex items-center gap-3">
              <span className="h-3.5 w-24 bg-accent sm:w-40" aria-hidden="true" />
              <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
                {profile.role}
              </span>
            </div>

            <h1 className="mt-6 text-[13.5vw] leading-[0.88] font-extrabold tracking-[-0.045em] uppercase sm:text-7xl lg:text-[5.6rem]">
              Muhammad
              <br />
              Ahmad<span className="text-accent">.</span>
            </h1>

            <p className="mt-7 max-w-xl font-display text-xl leading-snug font-semibold text-foreground/85 sm:text-2xl">
              {profile.headline}
            </p>
            <p classname="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Based in Lahore, PK • Open for Remote Roles
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {profile.supporting} at FAST-NUCES Lahore. I architect production-grade AI systems —
              from explainable ML pipelines and retrieval-augmented generation to full-stack
              intelligent applications built for reliability and real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[4px_4px_0_0_var(--border)] transition-transform hover:-translate-y-0.5"
              >
                View Featured Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-6 py-3 text-sm font-semibold shadow-[4px_4px_0_0_var(--border)] transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                { icon: Github, label: "GitHub", href: profile.github },
                { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>

            <div className="mt-9 max-w-xl rounded-xl border-2 border-border bg-card p-5 shadow-[4px_4px_0_0_var(--border)]">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                <span className="h-2 w-2 rounded-full bg-accent" /> Currently Building
              </p>
              <p className="mt-2 font-display text-lg font-bold">
                Production RAG Proposal Generation Platform
              </p>
              <p className="mono-label mt-3">Current Focus</p>
              <p className="mt-1 text-sm text-muted-foreground">
                RAG Pipelines · LangChain · Vector Search · Full Stack AI
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0.01 : 0.8, delay: 0.15 }}
            className="relative z-10 min-w-0"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card shadow-[6px_6px_0_0_var(--border)]">
              <div className="flex items-center justify-between gap-3 border-b-2 border-border px-4 py-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
                  <span className="ml-2 truncate font-mono text-[10px] tracking-[0.12em] sm:text-xs">
                    NEURAL_SYSTEM_CORE
                  </span>
                </div>
                <span className="mono-label shrink-0 whitespace-nowrap">v1.0.4 // ACTIVE</span>
              </div>
              <div className="tech-grid h-[340px] sm:h-[420px] lg:h-[520px]">
                <Suspense fallback={<div className="h-full w-full" />}>
                  <ThreeAIVisualization />
                </Suspense>
              </div>
              <div className="grid grid-cols-2 gap-px border-t-2 border-border bg-hairline sm:grid-cols-4">
                {[
                  ["DATA", "Ingestion"],
                  ["MODEL", "Training"],
                  ["INTELLIGENCE", "Retrieval + LLM"],
                  ["APPLICATION", "Delivery"],
                ].map(([k, v], i) => (
                  <div key={k} className="bg-card px-4 py-3">
                    <p className="font-mono text-[10px] tracking-[0.14em] text-accent">
                      0{i + 1} / {k}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border-2 border-border bg-card px-5 py-4 shadow-[4px_4px_0_0_var(--border)]"
            >
              <p className="font-display text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.14em] uppercase">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-y-2 border-border bg-primary py-3">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-8 motion-reduce:animate-none">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-8">
              {marquee.map((m) => (
                <span
                  key={m}
                  className="flex items-center gap-8 font-display text-sm font-bold tracking-wide text-primary-foreground"
                >
                  {m}
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
