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

        /* MOBILE — background follows content */
        bg-[url('/assets/backgrounds/benefits.png')]
        bg-cover bg-top bg-no-repeat

        /* DESKTOP — reset background handling */
        md:bg-none
      "
    >
      {/* DESKTOP BACKGROUND — UNTOUCHED */}
      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute inset-0 bg-no-repeat bg-top"
          style={{
            backgroundImage: "url(/assets/backgrounds/benefits.png)",
            backgroundSize: "100% auto",
          }}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* MOBILE TOP FADE — SMALL & SAFE */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent md:hidden pointer-events-none" />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex justify-center px-6

          /* MOBILE */
          pt-24 pb-28

          /* DESKTOP */
          md:pt-40 md:pb-48
        "
      >
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* TITLE */}
          <h2
            className="
              font-black tracking-tight
              text-[clamp(38px,9vw,52px)]
              leading-[0.95]
              mb-10
              md:text-6xl md:mb-24
            "
          >
            Why B41
          </h2>

          {/* BENEFITS */}
          <div
            className="
              grid grid-cols-1 gap-y-6
              place-items-center
              md:grid-cols-2 md:gap-y-20 md:gap-x-32
            "
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="
                  font-semibold tracking-wide text-center
                  text-[15px] leading-snug
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

      {/* MOBILE BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent md:hidden pointer-events-none" />
    </section>
  );
}
