import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionFrame({
  id,
  children,
  className,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  topLeft?: string[];
  topRight?: string[];
  bottomLeft?: string;
  bottomRight?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative border-t border-hairline tech-grid overflow-hidden", className)}
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {(topLeft || topRight) && (
          <div className="hidden gap-4 pt-6 md:flex md:items-start md:justify-between">
            <div className="space-y-0.5">
              {topLeft?.map((t) => (
                <p key={t} className="mono-label">
                  {t}
                </p>
              ))}
            </div>
            <div className="space-y-0.5 text-right">
              {topRight?.map((t) => (
                <p key={t} className="mono-label">
                  {t}
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="py-16 sm:py-20 lg:py-28">{children}</div>
        {(bottomLeft || bottomRight) && (
          <div className="hidden items-center justify-between border-t border-hairline py-4 md:flex">
            <p className="mono-label">{bottomLeft}</p>
            <p className="mono-label">{bottomRight}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
  className,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {kicker && (
        <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border bg-card px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase">{kicker}</span>
        </span>
      )}
      <h2
        className={cn(
          "text-[2.1rem] leading-[1.02] sm:text-5xl lg:text-6xl",
          kicker ? "mt-6" : "",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}

export function Chip({ children, primary }: { children: ReactNode; primary?: boolean }) {
  return (
    <span
      className={cn(
        "chip transition-colors",
        primary ? "font-semibold" : "border-hairline text-muted-foreground",
      )}
    >
      {primary && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
      {children}
    </span>
  );
}
