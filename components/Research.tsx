"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="section-rule bg-navy-900 dark:bg-navy-950">
      <div className="container-page py-20 sm:py-28">
        <p className="ms-index mb-4 text-gold-400">§3 — RESEARCH</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance max-w-3xl font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl"
        >
          {research.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-balance font-body text-[15px] leading-relaxed text-paper/65"
        >
          {research.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 divide-y divide-paper/10 border border-paper/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {research.metrics.map((m) => (
            <div key={m.label} className="px-6 py-8 first:pl-0 sm:first:pl-8">
              <p className="font-mono text-3xl font-medium text-gold-400 sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-paper/50">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
