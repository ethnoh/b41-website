"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const CONTENT_PT = "pt-32 md:pt-44";
  const CONTENT_PB = "pb-32 md:pb-72";

  return (
    <section
      id="contact"
      className="relative min-h-[100vh] w-full overflow-hidden text-white bg-black"
    >
      {/* ================= MOBILE BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url(/assets/backgrounds/contact.png)",
          backgroundSize: "120% auto",
          backgroundPosition: "center 35%",
        }}
      />

      {/* ================= DESKTOP BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url(/assets/backgrounds/contact.png)",
          backgroundSize: "70% auto",
          backgroundPosition: "center 10%",
        }}
      />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

      {/* CONTENT */}
      <div
        className={`relative z-20 flex justify-center px-6 ${CONTENT_PT} ${CONTENT_PB}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="
              font-black tracking-tight
              text-[clamp(36px,8.5vw,48px)]
              leading-[0.95]
              mb-8
              md:text-6xl
              md:mb-14
            "
          >
            Ready to automate your logistics?
          </h2>

          <div className="mt-10 md:mt-0 md:translate-y-67">
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
