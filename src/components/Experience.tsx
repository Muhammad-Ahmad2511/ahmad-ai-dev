import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionFrame, SectionHeading } from "./primitives";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <SectionFrame
      id="experience"
      topLeft={["SYS. REF: 0x99C5 // PROFESSIONAL_TIMELINE"]}
      topRight={["SCALE. 1:1.0", "SHEET: A3"]}
      bottomLeft="MODULE: EXPERIENCE"
      bottomRight="STATUS: VERIFIED"
    >
      <Reveal>
        <SectionHeading
          title="Experience That Shaped My Engineering Approach"
          lead="Hands-on experience across AI, machine learning, full-stack development, automation, and intelligent software systems."
        />
      </Reveal>

      <ol className="mt-14 space-y-14">
        {experiences.map((exp, i) => (
          <li key={exp.company}>
            <Reveal delay={i * 0.05}>
              <div className="grid gap-5 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-10">
                <div className="lg:pt-1">
                  <p
                    className={`font-mono text-sm font-bold tracking-tight ${
                      exp.current ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {exp.period}
                  </p>
                  <span
                    className={`mt-2 inline-block rounded-md border-[1.5px] px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] ${
                      exp.current
                        ? "border-accent text-accent"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {exp.tag}
                  </span>
                </div>

                <div className="relative min-w-0 border-l-2 border-border pb-2 pl-6 lg:pl-8">
                  <span
                    className={`absolute top-1.5 -left-[7px] h-3 w-3 rounded-full border-2 border-border ${
                      exp.current ? "bg-accent" : "bg-foreground"
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl sm:text-2xl">{exp.role}</h3>
                  <p className="mt-1 text-sm">
                    <span className="font-bold">{exp.company}</span>
                    <span className="text-muted-foreground"> · {exp.mode}</span>
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {exp.summary}
                  </p>
                  {exp.bullets.length > 0 && (
                    <ul className="mt-4 max-w-3xl space-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span key={s} className="chip border-hairline text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground"
                    >
                      View Certificate <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-14 grid gap-5 rounded-xl border-2 border-border bg-card p-6 shadow-[5px_5px_0_0_var(--border)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold uppercase">
              From Backend Automation to AI Systems
            </p>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              My experience has gradually moved toward building intelligent systems that combine
              machine learning, retrieval, software engineering, and real-world applications.
            </p>
          </div>
          <span className="justify-self-start rounded-md border-[1.5px] border-accent px-3 py-2 font-mono text-[10px] tracking-[0.14em] text-accent">
            CURRENT DIRECTION // AI / ML ENGINEERING
          </span>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
