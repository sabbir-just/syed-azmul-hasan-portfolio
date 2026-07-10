"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.6, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="grid-faint relative overflow-hidden border-b border-navy-900/10 dark:border-paper/10"
    >
      <div className="container-page grid grid-cols-1 gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="ms-index mb-6"
          >
            §1 — CANDIDATE PROFILE
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight text-navy-950 dark:text-paper sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl font-body text-base font-medium text-navy-700 dark:text-paper/70 sm:text-lg"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 max-w-xl text-balance font-body text-[15px] leading-relaxed text-navy-600 dark:text-paper/60"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/Syed_Azmul_Hasan_CV.pdf"
              className="inline-flex items-center gap-2 rounded-sm bg-navy-900 px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-gold-600 dark:bg-paper dark:text-navy-900 dark:hover:bg-gold-400"
            >
              Download CV
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-sm border border-navy-900/20 px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-paper/20 dark:text-paper dark:hover:border-gold-400 dark:hover:text-gold-400"
            >
              View Research
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-navy-700 underline decoration-navy-300 underline-offset-4 transition-colors hover:text-gold-600 dark:text-paper/70 dark:decoration-paper/30 dark:hover:text-gold-400"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-9 flex items-center gap-5"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-navy-600 transition-colors hover:text-gold-600 dark:text-paper/60 dark:hover:text-gold-400"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-navy-600 transition-colors hover:text-gold-600 dark:text-paper/60 dark:hover:text-gold-400"
            >
              <Github size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-navy-600 transition-colors hover:text-gold-600 dark:text-paper/60 dark:hover:text-gold-400"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 border border-gold-400/40" />

          <Image
            src="/Sabbir%20formal%20pic.png"
            alt="Syed Azmul Hasan"
            width={400}
            height={500}
            priority
            className="aspect-[4/5] w-full object-cover"
          />

          <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-navy-500 dark:text-paper/40">
            <span>Fig. 1</span>
            <span>{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
