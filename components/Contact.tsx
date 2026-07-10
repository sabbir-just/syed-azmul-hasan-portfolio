"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  MessageCircle,
  Facebook,
} from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "syed-azmul-hasan-sabbir",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "sabbir-just",
    href: profile.github,
    icon: Github,
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: `https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`,
    icon: MessageCircle,
  },
  {
    label: "Phone",
    value: `${profile.phonePrimary} / ${profile.phoneSecondary}`,
    href: `tel:${profile.phonePrimary.replace(/[^\d+]/g, "")}`,
    icon: Phone,
  },
  {
    label: "Facebook",
    value: "Syed Azmul Hasan",
    href: profile.facebook,
    icon: Facebook,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-navy-950">
      <div className="container-page py-24 sm:py-32">
        <p className="ms-index mb-4 text-gold-400">§11 — CONTACT</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance max-w-2xl font-display text-3xl font-medium tracking-tight text-paper sm:text-5xl"
        >
          Let&apos;s talk research, roles, or collaborations.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/60"
        >
          Open to AI/ML and analyst roles, graduate research positions, and
          collaborations at the intersection of mathematics and machine
          learning.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group flex items-center justify-between gap-4 bg-navy-950 px-6 py-6 transition-colors hover:bg-navy-900"
            >
              <div className="flex items-center gap-3">
                <l.icon size={17} className="shrink-0 text-gold-400" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
                    {l.label}
                  </p>
                  <p className="mt-0.5 text-[14px] text-paper/85">{l.value}</p>
                </div>
              </div>
              <ExternalLink
                size={14}
                className="shrink-0 text-paper/30 transition-transform group-hover:translate-x-0.5 group-hover:text-gold-400"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
