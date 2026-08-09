import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduce ? 0.01 : 0.45, delay: reduce ? 0 : (index % 2) * 0.06 }}
      className="group flex h-full flex-col rounded-xl border-2 border-border bg-card shadow-[5px_5px_0_0_var(--border)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_0_var(--accent)]"
    >
      <span className="h-1 rounded-t-[0.6rem] bg-accent" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
            <span className="text-accent">{project.index}</span> // {project.category}
          </p>
          {project.featured && (
            <span className="rounded-md bg-accent px-2 py-1 font-mono text-[9px] font-bold tracking-[0.12em] text-accent-foreground">
              {project.featured}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl sm:text-2xl">{project.title}</h3>
        
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.highlights && (
          <ul className="mt-3 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 rounded-lg border border-hairline bg-secondary/60 p-3">
          <p className="mono-label">System Architecture Pipeline Schema</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.pipeline.map((p, i) => (
              <div key={p.label} className="flex items-center gap-2">
                <div className="rounded-md border-[1.5px] border-accent bg-card px-2.5 py-1.5">
                  <p className="text-[11px] font-bold text-accent">
                    {p.label}
                  </p>
                  <p className="font-mono text-[9px] text-muted-foreground">{p.sub}</p>
                </div>
                {i < project.pipeline.length - 1 && (
                  <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="chip border-hairline text-muted-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-accent px-4 py-2 text-xs font-bold tracking-wide text-accent-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-md border-2 border-border bg-card px-4 py-2 text-xs font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5 ${
              project.demo ? "" : "w-full justify-center"
            }`}
          >
            <Github className="h-3.5 w-3.5" />
            {project.demo ? "GitHub" : "View Source on GitHub"}
          </a>
        </div>
      </div>
    </motion.article>
  );
}
