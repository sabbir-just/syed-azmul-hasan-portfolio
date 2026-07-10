"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section-rule bg-navy-50/60 dark:bg-navy-900/30">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading index="9" label="CERTIFICATIONS" title="Certifications & Training" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
              className="flex items-start gap-3 border border-navy-900/10 bg-paper p-5 dark:border-paper/10 dark:bg-navy-950"
            >
              <Award size={16} className="mt-0.5 shrink-0 text-gold-500" />
              <p className="text-[14px] leading-snug text-navy-800 dark:text-paper/75">{c}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
