export default function Clients() {
  const logos = [
    {
      src: "/assets/logos/logo-conway.png",
      href: "https://conwaycs.com/",
      alt: "Conway Container Solutions",
    },
    {
      src: "/assets/logos/logo-speedit.png",
      href: "https://eqspro.global/",
      alt: "Speed-IT / EQSPro",
    },
    {
      src: "/assets/logos/logo-latflex.png",
      href: "https://latflex.com/",
      alt: "Latflex Logistics",
    },
  ];

  // 🔧 CONTROL — crop top of background image (px)
  const TOP_CROP_PX = 20;

  return (
    <section
      id="clients"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND (CROPPED FROM TOP, NO STRETCH) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 w-full bg-no-repeat bg-top"
          style={{
            top: `${TOP_CROP_PX}px`,
            height: `calc(100% + ${TOP_CROP_PX}px)`,
            backgroundImage: "url(/assets/backgrounds/clients.png)",
            backgroundSize: "100% auto", // ❗ НЕ РАСТЯГИВАЕМ
          }}
        />
      </div>

      {/* TOP FADE (BENEFITS → CLIENTS) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE (CLIENTS → PROJECTS) */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-48
          z-10
          pointer-events-none
        "
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
      }}
      />


      {/* CONTENT */}
      <div className="relative z-20 flex justify-center pt-0 pb-100 px-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-6xl font-black mb-6">
            Trusted by
          </h2>

          {/* SUBTITLE */}
          <p className="text-2xl opacity-85 mb-20">
            Companies who rely on our expertise.
          </p>

          {/* LOGOS */}
          <div className="flex flex-wrap gap-20 justify-center items-center">
            {logos.map((logo, i) => (
              <a
                key={i}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  opacity-80
                  transition-all
                  duration-300
                  hover:opacity-100
                  hover:scale-110
                  cursor-pointer
                "
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="
                    h-20
                    w-auto
                    drop-shadow-[0_0_20px_rgba(0,255,255,0.25)]
                    select-none
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
