"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceModals = [
  {
    label: "Sales Automation",
    emoji: "⚡",
    title: "Sales & Operations Automation",
    intro:
      "Our AI-powered sales pipeline automation cuts response times from hours to seconds. We eliminate manual follow-ups, streamline lead qualification, and let your sales team focus on closing deals instead of administrative work.",
    features: [
      "Automated lead scoring and routing",
      "Real-time pipeline updates and notifications",
      "Intelligent follow-up scheduling",
      "CRM integration with zero manual input",
      "Performance analytics and reporting",
    ],
    results: [
      "70% reduction in manual data entry",
      "3x faster sales cycle",
      "24/7 automated pipeline operations",
      "Deal progression improved by 3x after deployment",
    ],
  },
  {
    label: "Document OCR",
    emoji: "📄",
    title: "Document & Invoice Automation (OCR)",
    intro:
      "Our advanced OCR and document processing AI reads, extracts, validates, and automatically routes logistics documents with 98.7%+ field-level accuracy. Handles PDFs, scanned docs, and email attachments with a human-review fallback for edge cases.",
    features: [
      "Multi-format document ingestion (PDF, scan, email)",
      "Intelligent field extraction and validation",
      "Automatic routing to correct department or ERP",
      "Integration with existing TMS and ERP systems",
      "Human-review fallback for low-confidence documents",
    ],
    results: [
      "Processing time reduced from 4 hours/day to under 10 minutes",
      "98.7% field-level accuracy on standard freight invoices",
      "Zero mis-routing errors",
      "Handles 14+ document types automatically",
    ],
  },
  {
    label: "AI Assistants",
    emoji: "🤖",
    title: "AI Assistants for Logistics Teams",
    intro:
      "Deploy a private AI assistant trained exclusively on your company's SOPs, rate cards, and operational procedures. Zero data leaves your environment. Your team gets instant answers around the clock.",
    features: [
      "Trained on your SOPs, rate cards, and procedures",
      "Deployed as Slack bot or internal web interface",
      "Generates quotes and answers operational questions",
      "Escalates to a human when needed",
      "Zero data leaves your environment",
    ],
    results: [
      "Instant answers to operational questions 24/7",
      "Reduced time spent searching documentation",
      "Improved team consistency and compliance",
      "Scales to handle entire team simultaneously",
    ],
  },
  {
    label: "Custom AI Systems",
    emoji: "🔧",
    title: "Custom AI Systems",
    intro:
      "Bespoke AI solutions engineered specifically for your unique workflows. From custom models to full integration with your TMS, ERP, or CRM, we build the exact AI layer your logistics operation needs to compete.",
    features: [
      "Deep-dive workflow analysis and mapping",
      "Custom model training on your operational data",
      "Full integration with TMS, ERP, CRM systems",
      "Real-time monitoring dashboards and alerts",
      "Continuous optimisation and model improvement",
    ],
    results: [
      "AI purpose-built for your specific constraints",
      "Leverages your unique historical data",
      "Seamless fit with existing tech stack",
      "Competitive advantage that compounds over time",
    ],
  },
];

type ServiceModal = (typeof serviceModals)[0];

export default function Footer() {
  const [selected, setSelected] = useState<ServiceModal | null>(null);

  return (
    <footer style={{ background: "#111111" }}>
      {/* Gradient divider */}
      <div className="h-px gradient-bg opacity-40" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/assets/logo.svg"
                alt="B41 - Based on AI"
                width={64}
                height={40}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              AI automation solutions for logistics operations. We build AI that replaces manual
              work - not people.
            </p>
            <a
              href="mailto:sales@b41.ai"
              className="text-sm font-medium transition-colors"
              style={{ color: "#636e72" }}
            >
              sales@b41.ai
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceModals.map((s) => (
                <li key={s.label}>
                  <button
                    onClick={() => setSelected(s)}
                    className="text-sm text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} B41 - Based on AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Service modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div
                className="p-8 pb-6 relative"
                style={{ background: "var(--accent-light)", borderBottom: "1px solid var(--accent-border)" }}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 hover:bg-white transition-colors flex items-center justify-center text-gray-500 hover:text-gray-900"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
                <div className="text-4xl mb-4">{selected.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 leading-snug pr-10">
                  {selected.title}
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-gray-600 leading-relaxed text-[15px]">{selected.intro}</p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[15px] text-gray-600">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-primary)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Results</h4>
                  <ul className="space-y-2">
                    {selected.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-[15px] text-gray-600">
                        <span className="font-bold flex-shrink-0" style={{ color: "var(--accent-primary)" }}>✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
