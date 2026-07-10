"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="section-rule">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading index="10" label="SKILLS" title="Technical Toolkit" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-gold-600 dark:text-gold-400">
                {group}
              </h3>
              <ul className="mt-4 space-y-2.5 border-t border-navy-900/10 pt-4 dark:border-paper/10">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[14.5px] text-navy-800 dark:text-paper/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
