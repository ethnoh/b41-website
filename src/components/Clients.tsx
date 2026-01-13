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

  const TOP_CROP_PX = 20;

  return (
    <section
      id="clients"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 w-full bg-no-repeat bg-top"
          style={{
            top: `${TOP_CROP_PX}px`,
            height: `calc(100% + ${TOP_CROP_PX}px)`,
            backgroundImage: "url(/assets/backgrounds/clients.png)",
            backgroundSize: "100% auto",
          }}
        />
      </div>

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* CONTENT */}
      <div
        className="
          relative z-20
          flex justify-center

          /* MOBILE — немного выше */
          px-6 pt-[4.5vh] pb-[10vh]

          /* DESKTOP — чуть ниже (аккуратно) */
          md:px-50 md:pt-[6vh] md:pb-100
        "
      >
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* TITLE */}
          <h2
            className="
              font-black tracking-tight

              /* MOBILE — same as Contact style */
              text-[clamp(36px,8.5vw,48px)]
              leading-[0.95]
              mb-4

              /* DESKTOP */
              md:text-6xl md:mb-6
            "
          >
            Trusted by
          </h2>

          {/* SUBTITLE */}
          <p
            className="
              opacity-85

              /* MOBILE */
              text-[15px]
              mb-8

              /* DESKTOP */
              md:text-2xl md:mb-20
            "
          >
            Companies who rely on our expertise.
          </p>

          {/* LOGOS */}
          <div
            className="
              flex flex-col gap-8 items-center

              /* DESKTOP */
              md:flex-row md:flex-wrap md:gap-20 md:justify-center
            "
          >
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
                    select-none

                    /* MOBILE — чуть меньше */
                    h-10 w-auto

                    /* DESKTOP — как было */
                    md:h-20
                    drop-shadow-[0_0_20px_rgba(0,255,255,0.25)]
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
