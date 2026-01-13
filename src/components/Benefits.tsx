export default function Benefits() {
  const benefits = [
    "Reduce manual work by up to 70% in operations",
    "Eliminate repetitive human errors",
    "Cut operational costs across sales & back office",
    "Scale operations without hiring more people",
  ];

  return (
    <section id="benefits" className="relative w-full text-white">
      <div className="relative w-full overflow-hidden">
        {/* BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-no-repeat bg-top

            /* MOBILE */
            bg-[length:140%_auto]

            /* DESKTOP */
            md:bg-[length:100%_auto]
          "
          style={{
            backgroundImage: "url(/assets/backgrounds/benefits.png)",
          }}
        />

        {/* DESKTOP OVERLAY */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none hidden md:block" />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex justify-center
            px-6

            /* MOBILE */
            pt-[10vh]
            pb-[12vh]

            /* DESKTOP */
            md:pt-40
            md:pb-48
          "
        >
          <div className="max-w-6xl mx-auto text-center w-full">
            <h2
              className="
                font-black tracking-tight
                text-[clamp(38px,9vw,52px)]
                leading-[0.95]
                mb-8
                md:text-6xl
                md:mb-24
              "
            >
              Why B41
            </h2>

            <div
              className="
                grid grid-cols-1
                gap-y-5
                place-items-center
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
                    text-[15px]
                    leading-snug
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

        {/* MOBILE BOTTOM FADE — склейка с Clients */}
        <div className="absolute bottom-0 left-0 w-full h-[12vh] bg-gradient-to-b from-transparent to-black md:hidden" />
      </div>
    </section>
  );
}
