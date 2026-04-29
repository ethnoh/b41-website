"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "🔍",
    title: "Discovery",
    description:
      "We map your current workflows end-to-end, identify the highest-value automation opportunities, and define a clear project scope with measurable outcomes.",
  },
  {
    number: "02",
    emoji: "🏗️",
    title: "Architecture",
    description:
      "We design the AI system architecture tailored to your tech stack, data sources, and operational constraints - before writing a single line of code.",
  },
  {
    number: "03",
    emoji: "⚙️",
    title: "Build",
    description:
      "We develop, test, and iterate with your team in tight cycles. You see real progress every week - not a big reveal at the end.",
  },
  {
    number: "04",
    emoji: "🚀",
    title: "Deploy & Support",
    description:
      "We ship to production, monitor performance closely, and provide ongoing support as your operations evolve and the system grows.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-alt)" }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "var(--accent-secondary)" }}
          >
            How We Work
          </span>
          <h2
            id="process-heading"
            className="text-4xl lg:text-5xl text-gray-900 mb-5 leading-[1.1]"
          >
            From idea to{" "}
            <span className="gradient-text">production</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A clear, collaborative process that keeps you in control at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ originY: 0 }}
            className="absolute left-8 top-8 bottom-8 w-px hidden lg:block"
            aria-hidden
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))",
              }}
            />
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.14, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                className="flex gap-6 lg:gap-8 items-start"
              >
                {/* Step circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white flex flex-col items-center justify-center shadow-sm gap-0.5">
                    <span className="text-base leading-none">{step.emoji}</span>
                    <span className="text-[10px] font-black gradient-text leading-none">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="flex-1 bg-white rounded-2xl p-6 border border-gray-100"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
