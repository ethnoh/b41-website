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
            opacity-90
            drop-shadow-[0_25px_100px_rgba(0,0,0,0.85)]

            /* MOBILE */
            w-[360px]

            /* DESKTOP */
            md:w-[420px]
            lg:w-[460px]
          "
        />
      </div>

      {/* TOP TEXT BLOCK */}
      <div className="absolute top-[12vh] left-1/2 -translate-x-1/2 z-10 text-center px-6 w-full max-w-5xl">
        <h1
          className="
            font-black tracking-tight leading-none
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]

            /* MOBILE */
            text-[clamp(2.2rem,7vw,3rem)]
            mb-3

            /* DESKTOP */
            md:text-[clamp(2.6rem,4.2vw,4.4rem)]
            md:whitespace-nowrap

            md:mb-4
          "
        >
          AI Solutions for Logistics Ops
        </h1>

        <p
          className="
            font-semibold tracking-tight opacity-90
            drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]

            /* MOBILE */
            text-[clamp(1.1rem,4.5vw,1.4rem)]

            /* DESKTOP */
            md:text-2xl
            lg:text-3xl
          "
        >
          We build AI that replaces manual work — not people.
        </p>
      </div>

      {/* CTA */}
      <div className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => setOpen(true)}
          className="
            whitespace-nowrap

            /* same visual logic as Contact block */
            px-14 py-5 text-lg font-semibold rounded-full
            bg-white text-black shadow-2xl
            hover:bg-neutral-200 hover:scale-105
            transition duration-200
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
