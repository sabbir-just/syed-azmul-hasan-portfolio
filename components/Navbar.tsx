"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-navy-900/10 bg-paper/90 backdrop-blur-md dark:border-paper/10 dark:bg-navy-950/90"
          : "border-b border-transparent bg-paper/0 dark:bg-navy-950/0"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-medium tracking-tight text-navy-900 dark:text-paper"
        >
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[13px] font-medium uppercase tracking-wide text-navy-700/80 transition-colors hover:text-gold-600 dark:text-paper/70 dark:hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="/Syed_Azmul_Hasan_CV.pdf"
            className="inline-flex items-center gap-2 rounded-sm bg-navy-900 px-4 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-gold-600 dark:bg-paper dark:text-navy-900 dark:hover:bg-gold-400"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 dark:border-paper/15 dark:text-paper"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy-900/10 bg-paper px-6 py-4 dark:border-paper/10 dark:bg-navy-950 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-body text-sm font-medium uppercase tracking-wide text-navy-800 dark:text-paper/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Syed_Azmul_Hasan_CV.pdf"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-navy-900 px-4 py-2.5 text-sm font-medium text-paper dark:bg-paper dark:text-navy-900"
            >
              <FileDown size={14} />
              Download Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
