"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    src: "/assets/logo-conway.png",
    name: "Conway Container Solutions",
    description: "Container shipping & intermodal logistics",
  },
  {
    src: "/assets/logo-speedit.png",
    name: "Speed-IT",
    description: "Technology-driven freight forwarding",
  },
  {
    src: "/assets/logo-latflex.png",
    name: "Latflex",
    description: "Flexible supply chain & warehousing solutions",
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-20 border-y border-gray-100"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          id="clients-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-12"
        >
          Trusted by leading logistics companies
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              {/* Logo image */}
              <div className="w-full h-14 flex items-center justify-center relative">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={56}
                  className="object-contain max-h-12"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-[15px] leading-snug">{c.name}</p>
                <p className="text-sm text-gray-500 mt-1">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
