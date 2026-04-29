"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const services = [
  {
    emoji: "⚡",
    title: "Sales & Operations Automation",
    description:
      "End-to-end pipeline automation. Cut response times from hours to seconds, eliminate manual follow-ups, and let your team focus on closing.",
    accent: "primary" as const,
    details: {
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
        "3× faster sales cycle",
        "24/7 automated pipeline operations",
        "Deal progression improved by 3× after deployment",
      ],
    },
  },
  {
    emoji: "📄",
    title: "Document & Invoice Automation (OCR)",
    description:
      "AI reads, extracts, validates, and routes logistics documents automatically. No more manual data entry from invoices, BOLs, or freight docs.",
    accent: "secondary" as const,
    details: {
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
  },
  {
    emoji: "🤖",
    title: "AI Assistants for Logistics Teams",
    description:
      "Private AI trained on your company's data, SOPs, and workflows. Your team gets instant answers without searching through docs or asking colleagues.",
    accent: "primary" as const,
    details: {
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
  },
  {
    emoji: "🔧",
    title: "Custom AI Systems",
    description:
      "Bespoke AI solutions designed for your exact workflow. From custom models to full integration with your TMS, ERP, or CRM systems.",
    accent: "secondary" as const,
    details: {
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
  },
];

type Service = (typeof services)[0];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-16"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "var(--accent-primary)" }}
          >
            What We Build
          </span>
          <h2
            id="services-heading"
            className="text-4xl lg:text-5xl text-gray-900 mb-5 leading-[1.1]"
          >
            AI automation for every part of your operation
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From sales pipelines to document processing - we build the AI layer your logistics
            business needs to compete.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group bg-white rounded-2xl p-8 border"
              style={{
                borderColor: "var(--card-border)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--accent-light)" }}
              >
                {service.emoji}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{service.description}</p>

              <button
                onClick={() => setSelected(service)}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{
                  color:
                    service.accent === "primary"
                      ? "var(--accent-primary)"
                      : "var(--accent-secondary)",
                }}
              >
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Modal header */}
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
                <h3
                  id="service-modal-title"
                  className="text-2xl font-bold text-gray-900 leading-snug pr-10"
                >
                  {selected.title}
                </h3>
              </div>

              {/* Modal body */}
              <div className="p-8 space-y-6">
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {selected.details.intro}
                </p>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selected.details.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[15px] text-gray-600">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-primary)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {selected.details.results.map((r) => (
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
    </section>
  );
}
