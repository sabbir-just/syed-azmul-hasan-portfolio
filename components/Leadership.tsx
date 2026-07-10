"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { leadership } from "@/lib/data";

export function Leadership() {
  return (
    <section id="leadership" className="section-rule">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading index="8" label="LEADERSHIP" title="Leadership & Service" />

        {leadership.map((l, i) => (
          <motion.div
            key={l.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 border-t border-navy-900/10 pt-8 dark:border-paper/10 sm:grid-cols-[1fr_2fr]"
          >
            <div>
              <h3 className="font-display text-xl font-medium text-navy-950 dark:text-paper">
                {l.role}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400">
                {l.org}
              </p>
            </div>
            <ul className="space-y-3">
              {l.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-3 text-[14.5px] leading-relaxed text-navy-700 dark:text-paper/65"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
