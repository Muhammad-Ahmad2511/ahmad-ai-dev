import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionFrame, SectionHeading } from "./primitives";
import { ProjectCard } from "./ProjectCard";
import { projectFilters, projects } from "@/data/portfolio";

export function Projects() {
  const [filter, setFilter] = useState<string>("ALL");
  const visible = filter === "ALL" ? projects : projects.filter((p) => p.filter === filter);

  return (
    <SectionFrame
      id="projects"
      topLeft={["SPEC MODULE: 04_SYSTEM_WORK"]}
      topRight={["SYS. REF: 0x99D4", "BUILD YEAR: 2026"]}
      bottomLeft="MODULE: PROJECTS"
      bottomRight="STATUS: SHIPPED"
    >
      <Reveal>
        <SectionHeading
          title="Engineering Ideas Into Working Systems"
          lead="A selection of machine learning, generative AI, data, and full-stack systems I've built."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mono-label mt-10 border-b border-hairline pb-3">
          9 PROJECTS // AI / ML · GENERATIVE AI · DATA · FULL STACK
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5" role="tablist" aria-label="Project categories">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border-[1.5px] px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-all ${
                filter === f
                  ? "border-border bg-primary text-primary-foreground"
                  : "border-hairline hover:border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {visible.map((p, i) => (
          <ProjectCard key={p.index} project={p} index={i} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-4 rounded-xl border-2 border-border bg-card p-6 shadow-[5px_5px_0_0_var(--border)] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold uppercase">
              Building Systems, Not Just Demos
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              From machine learning experiments to retrieval-augmented and full-stack AI
              applications.
            </p>
          </div>
          <a
            href="https://github.com/Muhammad-Ahmad2511"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-border px-4 py-2 text-xs font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5"
          >
            View All Projects <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
