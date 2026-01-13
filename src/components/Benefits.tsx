export default function Benefits() {
  const benefits = [
    "Reduce manual work by up to 70% in operations",
    "Eliminate repetitive human errors",
    "Cut operational costs across sales & back office",
    "Scale operations without hiring more people",
  ];

  return (
    <section
      id="benefits"
      className="
        relative w-full text-white

        /* MOBILE — THIS FIXES THE TOP HOLE */
        min-h-[100svh]

        /* DESKTOP */
        md:min-h-0
      "
    >
      {/* WRAPPER */}
      <div className="relative w-full h-full overflow-hidden">
        {/* BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-no-repeat

            /* MOBILE — enough height for content */
            bg-[length:180%_auto]
            bg-[position:center_25%]

            /* DESKTOP — UNTOUCHED */
            md:bg-top
            md:bg-[length:100%_auto]
          "
          style={{
            backgroundImage: "url(/assets/backgrounds/benefits.png)",
          }}
        />

        {/* DESKTOP OVERLAY — UNTOUCHED */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none hidden md:block" />

        {/* DESKTOP TOP FADE — UNTOUCHED */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none hidden md:block" />

        {/* DESKTOP BOTTOM FADE — UNTOUCHED */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none hidden md:block" />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex justify-center
            px-6

            /* MOBILE */
            pt-[10vh]
            pb-[16vh]

            /* DESKTOP — UNTOUCHED */
            md:pt-40
            md:pb-48
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
                md:text-6xl
                md:mb-24
              "
            >
              Why B41
            </h2>

            {/* BENEFITS */}
            <div
              className="
                grid grid-cols-1
                gap-y-5
                place-items-center

                /* DESKTOP */
                md:grid-cols-2
                md:gap-y-20
                md:gap-x-32
              "
            >
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="
                    font-semibold
                    tracking-wide
                    text-center

                    /* MOBILE */
                    text-[15px]
                    leading-snug

                    /* DESKTOP */
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

        {/* MOBILE — SOFT BOTTOM BLEND */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black md:hidden" />
      </div>
    </section>
  );
}
