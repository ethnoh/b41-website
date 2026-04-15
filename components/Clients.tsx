"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    src: "/assets/logo-conway.png",
    name: "Conway Container Solutions",
    description: "Container shipping & intermodal logistics",
    bg: "#5C3D2E",
  },
  {
    src: "/assets/logo-speedit.png",
    name: "Speed-IT",
    description: "Technology-driven freight forwarding",
    bg: "#4A3A2A",
  },
  {
    src: "/assets/logo-latflex.png",
    name: "Latflex",
    description: "Flexible supply chain & warehousing solutions",
    bg: "#3D2F23",
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-20 border-y border-gray-200"
      style={{ background: "#2A2018" }}
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          id="clients-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-12"
          style={{ color: "rgba(255,255,255,0.45)" }}
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
              className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl transition-all hover:-translate-y-1 hover:brightness-110"
              style={{
                background: c.bg,
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
              }}
            >
              {/* Logo image */}
              <div className="w-full h-16 flex items-center justify-center relative">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={160}
                  height={64}
                  className="object-contain max-h-14"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div>
                <p className="font-bold text-white text-[15px] leading-snug">{c.name}</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
