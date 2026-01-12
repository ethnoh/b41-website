export default function Services() {
  const items = [
    "AI Automation",
    "Logistics AI",
    "OCR / Documents",
    "Custom Tools",
  ];

  return (
    <section id="services" className="relative w-full text-white">
      {/* IMAGE — DEFINES HEIGHT (NO STRETCH) */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/assets/backgrounds/services.png"
          alt=""
          className="
            w-full
            h-auto
            object-cover
            object-top
            lg:-mt-[50px]   /* crop top only (desktop) */
            pointer-events-none
            select-none
          "
        />

        {/* GLOBAL DARKENING — DESKTOP ETALON */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* TOP FADE — DESKTOP ETALON */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent pointer-events-none" />

        {/* CONTENT — SAME OVERLAY, MOBILE SAFE */}
        <div
          className="
            absolute inset-0 z-10
            flex justify-center
            px-6

            /* MOBILE */
            pt-20 pb-40

            /* DESKTOP */
            lg:pt-28 lg:pb-0
          "
        >
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* TITLE */}
            <h2
              className="
                font-black tracking-tight text-center

                /* MOBILE */
                text-[clamp(40px,9vw,54px)]
                leading-[1]
                mb-12

                /* DESKTOP */
                lg:text-6xl
                lg:mb-24
              "
            >
              What we build
            </h2>

            {/* ITEMS */}
            <div
              className="
                grid place-items-center

                /* MOBILE */
                grid-cols-1
                gap-y-10

                /* DESKTOP */
                md:grid-cols-2
                md:gap-y-20
                md:gap-x-32
              "
            >
              {items.map((item) => (
                <div key={item} className="text-plate">
                  <span
                    className="
                      neon-outline font-black tracking-tight

                      /* MOBILE */
                      text-lg
                      whitespace-normal

                      /* DESKTOP */
                      md:text-4xl
                      md:whitespace-nowrap
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
