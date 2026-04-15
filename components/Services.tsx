"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Sales & Operations Automation",
    description:
      "End-to-end pipeline automation. Cut response times from hours to seconds, eliminate manual follow-ups, and let your team focus on closing.",
    color: "purple" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Document & Invoice Automation (OCR)",
    description:
      "AI reads, extracts, validates, and routes logistics documents automatically. No more manual data entry from invoices, BOLs, or freight docs.",
    color: "cyan" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "AI Assistants for Logistics Teams",
    description:
      "Private AI trained on your company's data, SOPs, and workflows. Your team gets instant answers without searching through docs or asking colleagues.",
    color: "purple" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Custom AI Systems",
    description:
      "Bespoke AI solutions designed for your exact workflow. From custom models to full integration with your TMS, ERP, or CRM systems.",
    color: "cyan" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
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
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-500 mb-4 block">
            What We Build
          </span>
          <h2
            id="services-heading"
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-[1.1]"
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
              className="group bg-white rounded-2xl p-8 border border-gray-100 cursor-default"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "purple"
                    ? "bg-purple-50 text-purple-600"
                    : "bg-cyan-50 text-cyan-600"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{service.description}</p>

              <div
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-gap ${
                  service.color === "purple" ? "text-purple-600" : "text-cyan-600"
                }`}
              >
                Learn more
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
