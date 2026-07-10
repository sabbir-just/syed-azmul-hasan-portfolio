"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-800 transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-paper/15 dark:text-paper dark:hover:border-gold-400 dark:hover:text-gold-400"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
