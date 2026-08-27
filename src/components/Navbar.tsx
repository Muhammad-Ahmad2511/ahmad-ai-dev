import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        let current = "home";
        for (const item of navItems) {
          const el = document.querySelector(item.href);
          if (el && el.getBoundingClientRect().top <= 140) current = item.href.slice(1);
        }
        setActive(current);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border/80 bg-background/90 backdrop-blur-md" : "bg-background",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12"
      >
        <a href="#home" className="min-w-0 font-display text-2xl font-extrabold tracking-tight">
          MA<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1.5 lg:flex">
          {navItems.slice(1).map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "inline-block rounded-full border-[1.5px] px-4 py-1.5 text-sm transition-all",
                  active === item.href.slice(1)
                    ? "border-border bg-primary text-primary-foreground"
                    : "border-hairline hover:border-border hover:-translate-y-0.5",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#contact");
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="hidden rounded-full border-2 border-border bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-[3px_3px_0_0_var(--border)] transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Hire Me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[1.5px] border-border lg:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-hairline bg-background lg:hidden"
          >
            <ul className="mx-auto flex max-w-[1400px] flex-col px-5 py-3 sm:px-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-hairline py-3 font-display text-lg last:border-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
