"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/lib/data";

const pillars = [
  {
    label: "Mathematics Foundation",
    detail:
      "Trained in rigorous proof, optimization, and formal reasoning — the discipline that underlies every model I build.",
  },
  {
    label: "Research Mindset",
    detail:
      "Comfortable with ambiguity, literature review, and hypothesis-driven experimentation rather than trial-and-error tuning.",
  },
  {
    label: "Analytical Thinking",
    detail:
      "Translate messy, real-world data into structured, decision-ready insight for technical and non-technical audiences alike.",
  },
  {
    label: "Corporate Readiness",
    detail:
      "Four years of client-facing tutoring and treasury leadership have sharpened communication, accountability, and delivery under deadlines.",
  },
];

export function About() {
  return (
    <section id="about" className="section-rule">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading index="2" label="ABOUT" title="Biography" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-balance font-body text-[17px] leading-relaxed text-navy-700 dark:text-paper/70"
          >
            {profile.intro}
          </motion.p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="border-l-2 border-gold-400/60 pl-4"
              >
                <h3 className="font-display text-base font-medium text-navy-900 dark:text-paper">
                  {p.label}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-600 dark:text-paper/60">
                  {p.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
