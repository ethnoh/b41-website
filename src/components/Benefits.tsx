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

          /* MOBILE */
          min-h-[100svh]

          /* DESKTOP */
          md:min-h-0
        "
      >
        {/* BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-no-repeat bg-top

            /* MOBILE — FULL REVEAL */
            bg-cover

            /* DESKTOP */
            md:bg-[length:100%_auto]
          "
          style={{
            backgroundImage: "url(/assets/backgrounds/benefits.png)",
          }}
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex justify-center
            px-6

            /* MOBILE — content higher */
            pt-[10vh] pb-[18vh]

            /* DESKTOP — untouched */
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

                /* DESKTOP */
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
                    relative
                    font-semibold
                    tracking-wide
                    text-center

                    /* MOBILE */
                    text-[16px]
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

        {/* MOBILE — soft black tail for next section */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black md:hidden" />
      </div>
    </section>
  );
}
