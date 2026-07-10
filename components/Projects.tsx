"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-rule">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading
          index="4"
          label="PROJECTS"
          title="Selected Work"
          description="Applied research and engineering across computer vision, model compression, and scientific machine learning."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 dark:border-paper/10 dark:bg-paper/10 sm:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col bg-paper p-7 transition-colors hover:bg-navy-50 dark:bg-navy-950 dark:hover:bg-navy-900"
            >
              <span className="ms-index">{p.id}</span>
              <h3 className="mt-4 font-display text-lg font-medium leading-snug text-navy-950 dark:text-paper">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-navy-600 dark:text-paper/60">
                {p.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-navy-900/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-navy-500 dark:border-paper/15 dark:text-paper/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
