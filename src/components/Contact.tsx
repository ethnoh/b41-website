"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [open, setOpen] = useState(false);

  // 🔥 REAL CROP — percentage of image to SKIP from top
  // 60–75 is the zone
  const BG_Y = "10%";

  // 🔧 content vertical control
  const CONTENT_PT = "pt-44";
  const CONTENT_PB = "pb-72";

  return (
    <section
      id="contact"
      className="relative min-h-[100vh] w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND — TRUE HARD CROP */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/backgrounds/contact.png)",
          backgroundSize: "70% auto",
          backgroundPosition: `center ${BG_Y}`, // 💥 HERE IS THE MAGIC
        }}
      />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE (soft, keep glow alive) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

      {/* CONTENT */}
      <div className={`relative z-20 flex justify-center px-6 ${CONTENT_PT} ${CONTENT_PB}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-14">
            Ready to automate your logistics?
          </h2>

          {/* BUTTON — FINAL MICRO POSITION */}
          <div className="translate-y-67">
            <button
              onClick={() => setOpen(true)}
              className="
                px-14 py-5 text-lg font-semibold rounded-full
                bg-white text-black shadow-2xl
                hover:bg-neutral-200 hover:scale-105
                transition duration-200
              "
            >
              Contact us
            </button>
          </div>
        </div>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
