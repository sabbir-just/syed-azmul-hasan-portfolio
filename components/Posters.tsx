"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { posters } from "@/lib/data";

export function Posters() {
  return (
    <section id="posters" className="section-rule">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading
          index="6"
          label="POSTER PRESENTATIONS"
          title="Conference & Symposium Record"
        />

        <div className="relative border-l border-navy-900/15 pl-8 dark:border-paper/15">
          {posters.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[2.31rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold-500 bg-paper dark:bg-navy-950" />
              <span className="font-mono text-xs text-navy-500 dark:text-paper/50">
                {p.year}
              </span>
              <p className="mt-1.5 max-w-2xl text-balance font-body text-[15px] leading-snug text-navy-900 dark:text-paper">
                {p.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
