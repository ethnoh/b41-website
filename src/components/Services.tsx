export default function Services() {
  const items = [
    "AI Automation",
    "Logistics AI",
    "OCR / Documents",
    "Custom Tools",
  ];

  return (
    <section id="services" className="relative w-full text-white">
      <div className="relative w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/assets/backgrounds/services.png"
          alt=""
          className="
            w-full
            h-auto
            object-cover
            object-top
            pointer-events-none
            select-none

            /* DESKTOP ONLY CROP */
            lg:-mt-[50px]
          "
        />

        {/* GLOBAL DARKENING */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* TOP FADE — MOBILE (LONG & SOFT) */}
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none lg:hidden" />

        {/* TOP FADE — DESKTOP (UNCHANGED) */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent pointer-events-none hidden lg:block" />

        {/* CONTENT */}
        <div
          className="
            absolute inset-0 z-10
            flex justify-center
            px-6

            /* MOBILE */
            pt-16

            /* DESKTOP */
            lg:pt-28
          "
        >
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* TITLE */}
            <h2
              className="
                font-black tracking-tight text-center

                /* MOBILE */
                text-[clamp(40px,9vw,52px)]
                leading-[0.95]
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

                /* MOBILE — 2x2 GRID */
                grid-cols-2
                gap-y-10
                gap-x-8

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
                      neon-outline font-black tracking-tight text-center

                      /* MOBILE */
                      text-lg
                      leading-tight

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
