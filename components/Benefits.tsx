"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Reduce manual work by up to 70%",
    description:
      "Free your team from repetitive tasks. AI handles the routine so your people focus on what actually matters.",
  },
  {
    number: "02",
    title: "Eliminate repetitive human errors",
    description:
      "AI doesn't lose focus or make typos. Every document processed and every record updated — accurately, every time.",
  },
  {
    number: "03",
    title: "Cut operational costs across sales & back office",
    description:
      "Reduce overhead without sacrificing quality. Automate the tasks that cost the most time and money.",
  },
  {
    number: "04",
    title: "Scale operations without hiring more people",
    description:
      "Handle 10× the volume with the same team. AI scales with your business — headcount doesn't have to.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-alt)" }}
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "var(--accent-secondary)" }}
          >
            Why B41
          </span>
          <h2
            id="benefits-heading"
            className="text-4xl lg:text-5xl text-gray-900 leading-[1.1]"
          >
            What you get when you{" "}
            <span className="gradient-text">automate with us</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
            >
              <span className="text-4xl font-black gradient-text block mb-5">{b.number}</span>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 leading-snug">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
