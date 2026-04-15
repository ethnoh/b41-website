"use client";

import { motion } from "framer-motion";

const team = [
  {
    initials: "EH",
    name: "Ethno H.",
    role: "Founder & Lead Engineer",
    description:
      "Builds AI automation systems for logistics companies across Eastern Europe. Specialises in LLMs, document processing, and end-to-end operations automation.",
    gradient: "from-purple-500 to-violet-600",
    ringGradient: "from-purple-400/30 to-violet-500/10",
  },
  {
    initials: "AI",
    name: "AI Engineer",
    role: "Machine Learning & Integration",
    description:
      "Designs and deploys custom AI pipelines. Takes ML models from research prototype to production in live logistics environments.",
    gradient: "from-cyan-500 to-blue-500",
    ringGradient: "from-cyan-400/30 to-blue-500/10",
  },
  {
    initials: "OL",
    name: "Operations Lead",
    role: "Logistics & Process Design",
    description:
      "Logistics industry veteran. Maps workflows, identifies the highest-value automation opportunities, and ensures every AI solution fits real operational constraints.",
    gradient: "from-violet-500 to-purple-700",
    ringGradient: "from-violet-400/30 to-purple-600/10",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="team-heading"
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
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-500 mb-4 block">
            About
          </span>
          <h2
            id="team-heading"
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-[1.1]"
          >
            The team behind B41
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A focused team of AI engineers and logistics specialists who build technology that
            actually works in operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 text-center flex flex-col items-center"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {/* Avatar with gradient ring */}
              <div className="relative mb-6">
                {/* Ring */}
                <div
                  className={`absolute -inset-1.5 rounded-full bg-gradient-to-br ${member.ringGradient} blur-sm`}
                />
                {/* Avatar */}
                <div
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl font-black text-white`}
                >
                  {member.initials}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <span className="text-sm font-semibold text-purple-500 mb-4 block">
                {member.role}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
