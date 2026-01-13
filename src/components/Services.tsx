export default function Services() {
  const items = [
    "Sales & Operations\nAutomation",
    "Document & Invoice\nAutomation (OCR)",
    "AI Assistants for\nLogistics Teams",
    "Custom AI Systems for\nYour Workflow",
  ];

  return (
    <section id="services" className="relative w-full text-white">
      {/* WRAPPER */}
      <div
        className="
          relative w-full overflow-hidden

          /* MOBILE — grow by content */
          min-h-[100svh]
          max-md:min-h-0

          /* DESKTOP */
          lg:min-h-0
        "
      >
        {/* BACKGROUND */}
        <img
          src="/assets/backgrounds/services.png"
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover object-top
            pointer-events-none select-none

            /* MOBILE — slight crop */
            -mt-[8vh]

            /* DESKTOP */
            lg:static
            lg:w-full
            lg:h-auto
            lg:mt-0
            lg:-mt-[50px]
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* TOP FADE */}
        <div className="absolute top-0 left-0 w-full h-[14vh] bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none lg:hidden" />
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent pointer-events-none hidden lg:block" />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex justify-center
            px-5

            /* MOBILE — tuned offset */
            pt-[16vh]

            /* DESKTOP */
            lg:absolute
            lg:inset-0
            lg:pt-28
          "
        >
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* TITLE */}
            <h2
              className="
                font-black tracking-tight

                /* MOBILE */
                text-[clamp(38px,9vw,52px)]
                leading-[0.95]
                mb-8

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
                grid

                /* MOBILE — single column */
                grid-cols-1
                gap-y-6

                /* DESKTOP */
                md:grid-cols-2
                md:gap-x-32
                md:gap-y-20
              "
            >
              {items.map((item) => (
                <div key={item} className="text-plate">
                  <span
                    className="
                      neon-outline
                      font-black
                      text-center
                      whitespace-pre-line

                      /* MOBILE — REDUCED */
                      text-[14px]
                      leading-snug

                      /* DESKTOP — REDUCED */
                      md:text-[28px]
                      md:leading-tight
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
