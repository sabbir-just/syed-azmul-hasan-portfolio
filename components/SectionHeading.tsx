"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 max-w-2xl sm:mb-16"
    >
      <p className="ms-index mb-4">
        §{index} — {label}
      </p>
      <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-navy-950 dark:text-paper sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance font-body text-[15px] leading-relaxed text-navy-600 dark:text-paper/60">
          {description}
        </p>
      )}
    </motion.div>
  );
}
