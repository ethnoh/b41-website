"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "OCR Invoice Processor",
    client: "Conway Container Solutions",
    description:
      "Automated extraction system that reads, validates, and routes freight invoices using OCR and AI. Reduced manual processing from 4 hours/day to under 10 minutes.",
    details:
      "Full pipeline from document ingestion to ERP integration. Handles PDFs, scanned docs, and email attachments automatically. Achieves 98.7% field-level accuracy on standard freight invoices with a human-review fallback for edge cases.",
    tags: ["OCR", "AI", "ERP Integration"],
    gradient: "from-[#1A1A1A] to-[#2D3436]",
  },
  {
    id: 2,
    title: "Sales Pipeline Automation",
    client: "Speed-IT",
    description:
      "End-to-end CRM automation that qualifies leads, sends follow-up sequences, and updates records automatically - no human touch required on routine deals.",
    details:
      "Integrated with existing CRM via API. Handles lead scoring, personalised email sequences, task creation, and Slack notifications for the sales team. Deal progression improved by 3× after deployment.",
    tags: ["CRM", "Sales", "Automation"],
    gradient: "from-[#2D3436] to-[#1A1A1A]",
  },
  {
    id: 3,
    title: "Logistics AI Assistant",
    client: "Latflex",
    description:
      "Private GPT-powered assistant trained on company SOPs, rate cards, and operational procedures. Teams get instant answers without searching through docs.",
    details:
      "Deployed as an internal Slack bot and web interface. Trained on all company documentation - can generate quotes, answer operational questions, and escalate to a human when needed. Zero data leaves the client's environment.",
    tags: ["AI Assistant", "LLM", "Private Deployment"],
    gradient: "from-[#2D3436] to-[#111111]",
  },
  {
    id: 4,
    title: "Document Classification Engine",
    client: "Conway Container Solutions",
    description:
      "AI that automatically classifies, tags, and routes 14 types of incoming logistics documents to the correct department and workflow - without human review.",
    details:
      "Connected to email, a document portal, and the operations system. Trained on 3 years of historical documents. Saves 2+ hours per day in manual sorting and routing, and eliminates mis-routing errors.",
    tags: ["Classification", "AI", "Workflow"],
    gradient: "from-[#2D3436] to-[#1A1A1A]",
  },
  {
    id: 5,
    title: "Operations Dashboard & Alerts",
    client: "Speed-IT",
    description:
      "Real-time AI monitoring dashboard that surfaces anomalies, flags at-risk shipments, and sends proactive alerts before issues escalate.",
    details:
      "Live data feeds from TMS, carrier APIs, and email. AI-powered anomaly detection with configurable thresholds. Sends alerts via Slack and email. Fully mobile-responsive. Reduced incident response time by over 60%.",
    tags: ["Monitoring", "Alerts", "Dashboard"],
    gradient: "from-[#636E72] to-[#2D3436]",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-alt)" }}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
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
            What We Deliver
          </span>
          <h2
            id="portfolio-heading"
            className="text-4xl lg:text-5xl text-gray-900 mb-5 leading-[1.1]"
          >
            Real projects, real results
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Each project is built specifically for the client's workflow - not a template, not a
            SaaS tool.
          </p>
        </motion.div>

        {/* Grid — flex-wrap so last 2 cards center on desktop */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {/* Tag bar */}
              <div className={`h-10 bg-gradient-to-br ${project.gradient} relative flex items-center px-3 gap-1.5 overflow-hidden`}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] font-semibold text-white whitespace-nowrap flex-shrink-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {project.client}
                </p>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2 leading-snug transition-colors"
                  style={{ color: undefined }}
                >
                  <span className="group-hover:text-[#A0522D] transition-colors">
                    {project.title}
                  </span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div
                  className="mt-4 text-sm font-semibold flex items-center gap-1"
                  style={{ color: "var(--accent-primary)" }}
                >
                  View details →
                </div>
              </div>
            </motion.article>
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
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              {/* Modal gradient header */}
              <div className={`h-52 bg-gradient-to-br ${selected.gradient} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white text-lg leading-none"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Modal body */}
              <div className="p-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {selected.client}
                </p>
                <h3 id="modal-title" className="text-2xl font-bold text-gray-900 mb-4">
                  {selected.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 text-[15px]">
                  {selected.description}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{selected.details}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: "var(--accent-light)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
