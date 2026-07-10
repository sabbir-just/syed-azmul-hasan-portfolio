"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { publications } from "@/lib/data";

export function Publications() {
  return (
    <section id="publications" className="section-rule bg-navy-50/60 dark:bg-navy-900/30">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading
          index="5"
          label="PUBLICATIONS"
          title="Manuscripts"
        />

        <ol className="divide-y divide-navy-900/10 border-y border-navy-900/10 dark:divide-paper/10 dark:border-paper/10">
          {publications.map((pub, i) => (
            <motion.li
              key={pub.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >
              <div className="flex gap-4">
                <span className="font-mono text-xs text-gold-500 dark:text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-2xl text-balance font-body text-[15px] leading-snug text-navy-900 dark:text-paper">
                  {pub.title}
                </p>
              </div>
              <span className="ml-8 inline-flex w-fit shrink-0 items-center rounded-sm border border-gold-500/40 bg-gold-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold-700 dark:border-gold-400/30 dark:bg-transparent dark:text-gold-400 sm:ml-0">
                {pub.status}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
