import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUp, CheckCircle2, Github, Linkedin, Mail, Phone, AlertCircle, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Reveal, SectionFrame, SectionHeading } from "./primitives";
import { navItems, profile } from "@/data/portfolio";
import { sendContactEmail } from "@/lib/contact.functions";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const send = useServerFn(sendContactEmail);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!values.name.trim() || !values.email.includes("@") || values.message.trim().length < 5) {
      setErrorMessage("Please complete all three fields with a valid email.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      await send({ data: values });
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setErrorMessage(
        err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  const field =
    "mt-2 w-full rounded-lg border-2 border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent";


  return (
    <SectionFrame
      id="contact"
      topLeft={["SPEC MODULE: 07_CONNECT // CONTR_SYSTEM", profile.coords]}
      topRight={["SYS. REF: 0x99F7", "PORTFOLIO STAGE: ● FINAL_DEPL"]}
      bottomLeft="SYS_STATUS: READY_TO_TRANSMIT"
      bottomRight="AUTH_ID: MA-2026-LET-CON"
    >
      <Reveal>
        <SectionHeading
          title="Let's Build Something Intelligent."
          lead="Open to AI/ML engineering opportunities, intelligent application development, collaborations, and interesting technical projects."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="font-mono text-xs font-bold tracking-[0.16em] text-accent uppercase">
            Open to Opportunities
          </p>
          <h3 className="mt-4 text-2xl sm:text-3xl">Have an idea worth building?</h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Whether you're building an intelligent product, exploring machine learning, or looking
            for an AI/ML engineering collaborator, let's start a conversation.
          </p>

          <div className="mt-7 rounded-lg border-2 border-accent bg-card px-5 py-4">
            <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-accent uppercase">
              Available for opportunities
            </p>
            <p className="mono-label mt-1">AI / ML · GENERATIVE AI · FULL-STACK AI</p>
          </div>

          <dl className="mt-8">
            {[
              { label: "EMAIL", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
              {
                label: "LINKEDIN",
                value: profile.linkedinHandle,
                href: profile.linkedin,
                Icon: Linkedin,
              },
              {
                label: "GITHUB",
                value: profile.githubHandle,
                href: profile.github,
                Icon: Github,
              },
              {
                label: "PHONE",
                value: profile.phone,
                href: `tel:${profile.phone.replace(/\s/g, "")}`,
                Icon: Phone,
              },
            ].map(({ label, value, href, Icon }) => (
              <div
                key={label}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline py-4"
              >
                <div className="min-w-0">
                  <dt className="mono-label">{label}</dt>
                  <dd className="mt-1 truncate font-semibold">
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {value}
                    </a>
                  </dd>
                </div>
                <Icon className="h-4.5 w-4.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-[6px_6px_0_0_var(--border)] sm:p-8">
            <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
              Send a Message
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl">Start a Conversation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell me a little about your project, opportunity, or idea.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="mono-label text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className={field}
                  placeholder="Your name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mono-label text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  placeholder="your@email.com"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mono-label text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={field}
                  placeholder="Tell me about your project or opportunity..."
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-border bg-primary px-6 py-3.5 text-sm font-bold tracking-[0.08em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>
                    Sending <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="flex items-center gap-2 rounded-lg border-[1.5px] border-border bg-secondary px-4 py-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> Message sent — thanks for
                    reaching out, I'll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 rounded-lg border-[1.5px] border-destructive px-4 py-3 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" /> {errorMessage}
                  </p>
                )}
              </div>

            </form>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-4">
              <span className="mono-label">CONTACT_PROTOCOL: ONLINE</span>
              <span className="mono-label">STATUS: OPEN</span>
              <span className="mono-label">INPUTS: 03</span>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="mt-20 grid gap-10 border-t-2 border-border pt-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">
            Muhammad Ahmad<span className="text-accent">.</span>
          </p>
          <p className="mt-1 font-mono text-xs tracking-[0.14em] uppercase">AI/ML Engineer</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Building intelligent systems with data, models, and code.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
            Navigation
          </p>
          <ul className="mt-3 space-y-1.5">
            {navItems.slice(1).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
            Connect
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { label: "GitHub", href: profile.github },
              { label: "LinkedIn", href: profile.linkedin },
              { label: "Email", href: `mailto:${profile.email}` },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="chip font-mono text-xs transition-transform hover:-translate-y-0.5"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
          <p className="mono-label mt-8">© 2026 Muhammad Ahmad</p>
        </div>
      </footer>
    </SectionFrame>
  );
}
