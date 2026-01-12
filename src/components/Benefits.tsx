export default function Benefits() {
  const benefits = [
    "Reduce manual work by 70%",
    "Cut operational costs",
    "Eliminate repetitive errors",
    "Scale operations instantly",
  ];

  return (
    <section id="benefits" className="relative w-full text-white">
      {/* WRAPPER */}
      <div
        className="
          relative w-full overflow-hidden

          /* MOBILE — grow by content (NO FORCED HEIGHT) */
          min-h-0

          /* DESKTOP — unchanged */
          md:min-h-0
        "
      >
        {/* BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-no-repeat bg-top

            /* MOBILE — same behavior as Services */
            bg-[length:100%_auto]

            /* DESKTOP — EXACTLY AS BEFORE */
            md:bg-[length:100%_auto]
          "
          style={{
            backgroundImage: "url(/assets/backgrounds/benefits.png)",
          }}
        />

        {/* DESKTOP OVERLAY — UNTOUCHED */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none md:block hidden" />

        {/* DESKTOP TOP FADE — UNTOUCHED */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none md:block hidden" />

        {/* DESKTOP BOTTOM FADE — UNTOUCHED */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none md:block hidden" />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex justify-center
            px-6

            /* MOBILE — pulled UP, no dead space */
            pt-[6vh] pb-[12vh]

            /* DESKTOP — 100% unchanged */
            md:pt-40 md:pb-48
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

                /* DESKTOP — unchanged */
                md:text-6xl
                md:mb-24
              "
            >
              Why b41.ai
            </h2>

            {/* BENEFITS */}
            <div
              className="
                grid grid-cols-1
                gap-y-5
                place-items-center

                /* DESKTOP — unchanged */
                md:grid-cols-2
                md:gap-y-20
                md:gap-x-32
              "
            >
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="
                    relative
                    font-semibold
                    tracking-wide
                    text-center

                    /* MOBILE */
                    text-[16px]
                    leading-snug

                    /* DESKTOP — unchanged */
                    md:text-3xl
                  "
                >
                  <span className="opacity-70 mr-1">•</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE — soft black tail ONLY */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black md:hidden" />
      </div>
    </section>
  );
}
