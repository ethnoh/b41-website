"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
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
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full opacity-18"
          style={{ background: "radial-gradient(circle, #0891b2, transparent 65%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-300">
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
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.08]"
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
          className="text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
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
          <a
            href="mailto:hello@b41.ai"
            className="px-10 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-all hover:scale-[1.03] shadow-xl shadow-purple-900/40 active:scale-[0.98]"
          >
            Let's Talk
          </a>
          <a
            href="mailto:hello@b41.ai"
            className="text-base font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            hello@b41.ai
            <span className="text-gray-600">→</span>
          </a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 text-sm text-gray-600"
        >
          No sales pitch. Just a conversation about what's possible.
        </motion.p>
      </div>
    </section>
  );
}
