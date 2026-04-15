"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

export default function ContactCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
      aria-labelledby="contact-heading"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #a0522d, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #cd5c5c, transparent 65%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #cd853f, transparent 70%)" }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style={{
            borderColor: "rgba(160,82,45,0.35)",
            background: "rgba(160,82,45,0.12)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#cd853f" }}
          />
          <span className="text-sm font-medium" style={{ color: "#e8c8a8" }}>
            Ready to automate your logistics?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]"
        >
          Let's automate your{" "}
          <span className="gradient-text">logistics operations</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(250,250,248,0.65)" }}
        >
          Tell us about your workflow. We'll map the automation opportunities and show you exactly
          what's possible — no commitment required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{ boxShadow: "0 8px 32px rgba(160,82,45,0.45)" }}
          >
            Let's Talk
          </button>
          <a
            href="mailto:sales@b41.ai"
            className="text-base font-medium flex items-center gap-2 transition-colors"
            style={{ color: "rgba(250,250,248,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fafaf8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,248,0.5)")}
          >
            sales@b41.ai →
          </a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 text-sm"
          style={{ color: "rgba(250,250,248,0.3)" }}
        >
          No sales pitch. Just a conversation about what's possible.
        </motion.p>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
