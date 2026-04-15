"use client";

import { motion } from "framer-motion";

const team = [
  {
    initials: "EH",
    name: "Edgars Jubelis",
    role: "Founder & Lead Engineer",
    description:
      "Builds AI automation systems for logistics companies across Eastern Europe. Specialises in LLMs, document processing, and end-to-end operations automation.",
    gradient: "from-[#A0522D] to-[#8B4513]",
    ring: "rgba(160,82,45,0.2)",
  },
  {
    initials: "AI",
    name: "AI Engineer",
    role: "Machine Learning & Integration",
    description:
      "Designs and deploys custom AI pipelines. Takes ML models from research prototype to production in live logistics environments.",
    gradient: "from-[#CD5C5C] to-[#A0522D]",
    ring: "rgba(205,92,92,0.2)",
  },
  {
    initials: "OL",
    name: "Operations Lead",
    role: "Logistics & Process Design",
    description:
      "Logistics industry veteran. Maps workflows, identifies the highest-value automation opportunities, and ensures every AI solution fits real operational constraints.",
    gradient: "from-[#8B4513] to-[#5C3D2E]",
    ring: "rgba(139,69,19,0.2)",
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
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "var(--accent-primary)" }}
          >
            About
          </span>
          <h2
            id="team-heading"
            className="text-4xl lg:text-5xl text-gray-900 mb-5 leading-[1.1]"
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
                <div
                  className="absolute -inset-1.5 rounded-full blur-sm"
                  style={{ background: member.ring }}
                />
                <div
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl font-black text-white`}
                >
                  {member.initials}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <span
                className="text-sm font-semibold mb-4 block"
                style={{ color: "var(--accent-primary)" }}
              >
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
