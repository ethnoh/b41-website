"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "I'm pleased to provide this letter of recommendation for B41. We have been working together on an AI Chatbot assistant for our EQSPRO container software application and the early results have been positive.",
    name: "Ms Frances Claibourn",
    title: "Sales & Marketing Director",
    company: "Speed-IT Limited",
    initials: "FC",
    gradient: "from-[#2D3436] to-[#1A1A1A]",
  },
  {
    quote:
      "Great experience working with B41. They understood our document workflow immediately and delivered an automation solution that saved us hours every single day.",
    name: "Operations Manager",
    title: "Head of Operations",
    company: "Conway Container Solutions",
    initials: "OM",
    gradient: "from-[#1A1A1A] to-[#2D3436]",
  },
  {
    quote:
      "The AI assistant they built for us is something our team actually uses daily. It answers questions about our SOPs and rate cards instantly — no more digging through spreadsheets.",
    name: "Logistics Director",
    title: "Director of Logistics",
    company: "Latflex",
    initials: "LD",
    gradient: "from-[#2D3436] to-[#111111]",
  },
  {
    quote:
      "B41 delivered exactly what was promised, on time and within budget. Their technical expertise combined with a real understanding of logistics operations sets them apart.",
    name: "Senior Manager",
    title: "Senior Operations Manager",
    company: "Speed-IT Limited",
    initials: "SM",
    gradient: "from-[#636E72] to-[#1A1A1A]",
  },
];

const CARD_WIDTH = 480;
const GAP = 24;
const INTERVAL = 5000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, index]);

  return (
    <section
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
            Client Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl lg:text-5xl text-gray-900 leading-[1.1]"
          >
            What our clients{" "}
            <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards track */}
          <div className="flex items-center justify-center gap-6 min-h-[280px]">
            <AnimatePresence mode="popLayout">
              {/* Show 2 cards on lg+, 1 on mobile */}
              {[0, 1].map((offset) => {
                const cardIndex = (index + offset) % total;
                const card = testimonials[cardIndex];
                return (
                  <motion.article
                    key={`${cardIndex}-${index}`}
                    initial={{ opacity: 0, x: 60, scale: 0.96 }}
                    animate={{ opacity: offset === 1 ? 0.55 : 1, x: 0, scale: offset === 1 ? 0.97 : 1 }}
                    exit={{ opacity: 0, x: -60, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className={`bg-white rounded-2xl p-8 flex-shrink-0 ${offset === 1 ? "hidden lg:flex" : "flex"} flex-col gap-6`}
                    style={{
                      width: CARD_WIDTH,
                      maxWidth: "calc(100vw - 3rem)",
                      border: "1px solid rgba(0,0,0,0.10)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1" aria-label="5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <span key={s} style={{ color: "#636E72" }}>★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 leading-relaxed text-[15px] flex-1">
                      &ldquo;{card.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-xs font-black text-white flex-shrink-0`}
                      >
                        {card.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{card.name}</p>
                        <p className="text-xs text-gray-500">
                          {card.title} · {card.company}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => { prev(); setPaused(true); }}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              style={{ borderColor: "var(--accent-border)", color: "var(--accent-primary)" }}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIndex(i); setPaused(true); }}
                  className="rounded-full transition-all"
                  style={{
                    width: i === index ? 24 : 8,
                    height: 8,
                    background: i === index ? "var(--accent-primary)" : "var(--accent-border)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setPaused(true); }}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              style={{ borderColor: "var(--accent-border)", color: "var(--accent-primary)" }}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
