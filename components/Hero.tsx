"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const stats = [
  { value: "70%", label: "Manual work reduced" },
  { value: "3×", label: "Faster processing" },
  { value: "24/7", label: "AI works nonstop" },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
      aria-label="Hero"
    >
      {/* Hero background image at 30% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero/hero_background_2.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
        aria-hidden
      />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <div
          className="blob absolute -top-48 -right-32 w-[520px] h-[520px] rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, #1a1a1a, transparent 65%)" }}
        />
        <div
          className="blob blob-delay-2 absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #2d3436, transparent 65%)" }}
        />
        <div
          className="blob blob-delay-4 absolute bottom-16 right-1/3 w-[320px] h-[320px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #333333, transparent 65%)" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-36 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style={{
            borderColor: "var(--accent-border)",
            background: "var(--accent-light)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full blink-red"
            style={{ background: "#e63946" }}
          />
          <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>
            AI-Powered Logistics Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-6 leading-[1.08]"
        >
          AI Solutions for{" "}
          <span className="gradient-text">Logistics</span>
          <br className="hidden sm:block" /> Operations
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We build AI that replaces manual work - not people.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
          >
            Start Your AI Project
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="px-8 py-4 rounded-full text-base font-semibold text-gray-900 border-2 border-gray-700 hover:border-gray-900 hover:bg-white transition-all flex items-center gap-2 active:scale-[0.98]"
          >
            See Our Work
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm leading-snug" style={{ color: "#444444" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-9 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
