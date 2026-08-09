import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionFrame, SectionHeading } from "./primitives";
import { certifications, education } from "@/data/portfolio";

export function Education() {
  return (
    <SectionFrame
      id="education"
      topLeft={["SPEC MODULE: 06_EDU_CERT", "STATUS: VERIFIED"]}
      topRight={["SYS. REF: 0x99E2", "SCALE. 1:1.0"]}
      bottomLeft="MODULE: EDUCATION"
      bottomRight="STATUS: VERIFIED"
    >
      <Reveal>
        <SectionHeading
          title="Education & Certifications"
          lead="Building a strong foundation in data science while continuously developing practical expertise in machine learning, deep learning, and modern AI systems."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-12 rounded-xl border-2 border-border bg-card p-6 shadow-[5px_5px_0_0_var(--border)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <span className="mono-label">// ACADEMIC FOUNDATION</span>
            <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-accent px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {education.status}
            </span>
          </div>
          <h3 className="mt-5 text-2xl sm:text-3xl">{education.degree}</h3>
          <p className="mt-1 text-muted-foreground">{education.school}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-sm">
              <span className="font-bold">Duration:</span>{" "}
              <span className="text-muted-foreground">{education.duration}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {education.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border-[1.5px] border-border px-3 py-1 font-mono text-[10px] tracking-[0.12em]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 flex flex-wrap items-end justify-between gap-3">
        <h3 className="text-2xl sm:text-3xl">Certifications</h3>
        <span className="mono-label">PROFESSIONAL LEARNING // VERIFIED</span>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.no} delay={(i % 2) * 0.05}>
            <div className="flex h-full flex-col rounded-xl border-2 border-border bg-card shadow-[5px_5px_0_0_var(--border)] transition-transform hover:-translate-y-1">
              <span className="h-1 rounded-t-[0.6rem] bg-accent" aria-hidden="true" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-accent">
                    CERT // {c.no}
                  </p>
                  <span className="rounded-full border-[1.5px] border-border px-3 py-1 font-mono text-[10px] tracking-[0.12em]">
                    {c.tag}
                  </span>
                </div>
                <h4 className="mt-4 text-lg">{c.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">Verified by {c.issuer}</p>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1 self-end pt-8 font-mono text-xs text-muted-foreground"
                >
                  View Certificate <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-border bg-card px-6 py-4 shadow-[5px_5px_0_0_var(--border)]">
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
            <span className="h-2 w-2 rounded-full bg-accent" /> Continuous Learning // Always
            Building
          </p>
          <p className="mono-label">DATA SCIENCE PIPELINE COMPLIANCE APPROVED</p>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
