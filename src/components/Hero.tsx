"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative w-full h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/assets/backgrounds/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CENTER LOGO */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src="/assets/logos/logo.png"
          alt="b41.ai logo"
          className="
            w-[620px] md:w-[680px] lg:w-[720px]
            opacity-90
            drop-shadow-[0_25px_100px_rgba(0,0,0,0.85)]
          "
        />
      </div>



      {/* TOP TEXT BLOCK (UNCHANGED) */}
      <div className="absolute top-[12vh] left-1/2 -translate-x-1/2 z-10 text-center px-6 w-full max-w-5xl">
        <h1 className="whitespace-nowrap text-[clamp(3.5rem,6vw,6.5rem)] font-black tracking-tight leading-none mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]">
          We automate logistics
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight opacity-90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]">
          With experience. With AI.
        </p>
      </div>

      {/* CTA */}
      <div className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => setOpen(true)}
          className="
            px-12 py-4 text-lg font-semibold rounded-full
            bg-white text-black shadow-2xl
            hover:bg-neutral-200 transition duration-200
          "
        >
          Contact us
        </button>
      </div>

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-transparent to-black pointer-events-none" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* CONTACT MODAL */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
