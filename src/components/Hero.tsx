/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/assets/backgrounds/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    > 
      {/* LOGO */}
      <div className="absolute top-[4vh]">
        <Image
          src="/assets/logos/logo-b41.png"
          alt="B41 Logo"
          width={150}
          height={150}
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        />
      </div>


      {/* PYRAMID TEXT */}
      <div className="text-center mt-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
          We automate logistics
        </h1>

        <p className="text-3xl md:text-4xl font-bold opacity-90 mb-1">
          With experience
        </p>

        <p className="text-2xl md:text-3xl font-semibold opacity-80">
          With AI
        </p>
      </div>

      {/* CTA BUTTON */}
      <div className="mt-8">
        <a
          href="#contact"
          className="
            px-8 py-4 text-lg font-semibold rounded-full
            bg-white text-black shadow-xl
            hover:bg-neutral-200 transition duration-200
          "
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
