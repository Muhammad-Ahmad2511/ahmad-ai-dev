import { ArrowRight } from "lucide-react";
import { Chip, Reveal, SectionFrame, SectionHeading } from "./primitives";
import { pipelineFlow, stackGroups } from "@/data/portfolio";

export function TechnicalStack() {
  return (
    <SectionFrame
      id="skills"
      topLeft={["SPEC MODULE: 05_TECH_STACK"]}
      topRight={["SYS. REF: 0x99D5", "STACK STATUS: ● ACTIVE"]}
      bottomLeft="MODULE: TECH_STACK"
      bottomRight="STATUS: ACTIVE"
    >
      <Reveal>
        <SectionHeading
          title="Tools I Use to Build Intelligent Systems"
          lead="A practical engineering stack spanning machine learning, generative AI, backend systems, data pipelines, and modern web applications."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((g, i) => (
          <Reveal key={g.no} delay={(i % 3) * 0.05}>
            <div className="flex h-full flex-col rounded-xl border-2 border-border bg-card p-6 shadow-[5px_5px_0_0_var(--border)]">
              <p className="font-mono text-[11px] tracking-[0.14em]">
                <span className="font-bold text-accent">{g.no}</span>
                <span className="mx-2 text-hairline">|</span>
                <span className="text-muted-foreground">{g.kicker}</span>
              </p>
              <h3 className="mt-3 text-xl sm:text-2xl">{g.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Chip key={item} primary={true}>
                    {item}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 rounded-xl border border-hairline bg-secondary/50 p-6">
          <p className="mono-label">// Pipeline Architecture Flow</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {pipelineFlow.map((p, i) => (
              <div key={p.no} className="flex items-center gap-3">
                <div className="rounded-md border-[1.5px] border-border bg-card px-4 py-3">
                  <p className="font-mono text-[11px] font-bold tracking-[0.1em] text-accent">
                    {p.no} / {p.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.sub}</p>
                </div>
                {i < pipelineFlow.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
