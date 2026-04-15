"use client";

import { motion } from "framer-motion";

const services = [
  {
    emoji: "⚡",
    title: "Sales & Operations Automation",
    description:
      "End-to-end pipeline automation. Cut response times from hours to seconds, eliminate manual follow-ups, and let your team focus on closing.",
    accent: "primary" as const,
  },
  {
    emoji: "📄",
    title: "Document & Invoice Automation (OCR)",
    description:
      "AI reads, extracts, validates, and routes logistics documents automatically. No more manual data entry from invoices, BOLs, or freight docs.",
    accent: "secondary" as const,
  },
  {
    emoji: "🤖",
    title: "AI Assistants for Logistics Teams",
    description:
      "Private AI trained on your company's data, SOPs, and workflows. Your team gets instant answers without searching through docs or asking colleagues.",
    accent: "primary" as const,
  },
  {
    emoji: "🔧",
    title: "Custom AI Systems",
    description:
      "Bespoke AI solutions designed for your exact workflow. From custom models to full integration with your TMS, ERP, or CRM systems.",
    accent: "secondary" as const,
  },
];

export default function Services() {
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
            From sales pipelines to document processing — we build the AI layer your logistics
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
              className="group bg-white rounded-2xl p-8 border cursor-default"
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

              <div
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{
                  color:
                    service.accent === "primary"
                      ? "var(--accent-primary)"
                      : "var(--accent-secondary)",
                }}
              >
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
