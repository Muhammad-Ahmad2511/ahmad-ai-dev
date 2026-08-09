import { Reveal, SectionFrame, SectionHeading } from "./primitives";
import { approach, currentlyBuilding, keyDetails, principles, profile } from "@/data/portfolio";
import profileAsset from "@/assets/profile.jpg.asset.json";

export function About() {
  return (
    <SectionFrame
      id="about"
      topLeft={["SYS.REF: 0x99B4 // ABOUT_ME", profile.coords]}
      topRight={["SCALE 1:1.0", "SHEET: A2"]}
      bottomLeft="MODULE: ABOUT"
      bottomRight="SYSTEM: AI/ML"
    >
      <Reveal>
        <SectionHeading
          kicker="Who I Am"
          title="Building Intelligent Systems That Solve Real Problems"
          lead={profile.intro}
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:gap-14">
        <Reveal>
          <div className="flex items-center justify-between pb-3">
            <span className="mono-label">// PROFILE_MODULE</span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Active
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-border shadow-[5px_5px_0_0_var(--border)]">
            <img
              src={profileAsset.url}
              alt="Portrait of Muhammad Ahmad, AI/ML Engineer"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={892}
              height={664}
            />
            <div className="border-t-2 border-border bg-accent" style={{ height: 3 }} />
          </div>
          <p className="mt-4 font-display text-lg font-bold">{profile.name}</p>
          <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">{profile.role}</p>
          <p className="mono-label mt-1">SYS_ID: MA-2511 · LOC: LAHORE · UPD: 2026</p>
        </Reveal>

        <div className="min-w-0 space-y-12">
          <Reveal delay={0.05}>
            <h3 className="text-2xl">Key Details</h3>
            <dl className="mt-5">
              {keyDetails.map((d) => (
                <div
                  key={d.label}
                  className="grid gap-1 border-b border-hairline py-3 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4"
                >
                  <dt className="text-sm font-semibold">{d.label}</dt>
                  <dd className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                    {d.live && <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />}
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-2xl">AI Engineering Approach</h3>
            <ul className="mt-5 space-y-5">
              {approach.map((a) => (
                <li key={a.title} className="border-l-2 border-border pl-4">
                  <p className="text-sm font-bold">{a.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-xl border-2 border-border bg-card p-6 shadow-[5px_5px_0_0_var(--border)]">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                <span className="h-2 w-2 rounded-full bg-accent" /> Currently Building
              </p>
              <p className="mt-3 font-display text-xl font-bold">{currentlyBuilding.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{currentlyBuilding.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentlyBuilding.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border-[1.5px] border-accent px-3 py-1 text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <h3 className="mt-20 text-2xl sm:text-3xl">Engineering Principles</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="flex h-full flex-col rounded-xl border-2 border-border bg-card shadow-[5px_5px_0_0_var(--border)] transition-transform hover:-translate-y-1"
            >
              <span className="h-1 rounded-t-[0.6rem] bg-accent" aria-hidden="true" />
              <div className="p-5">
                <p className="font-display text-lg font-bold">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionFrame>
  );
}
