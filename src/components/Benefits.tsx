export default function Benefits() {
  const benefits = [
    "Reduce manual work by 70%",
    "Cut operational costs",
    "Eliminate repetitive errors",
    "Scale operations instantly",
  ];

  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 w-full bg-no-repeat bg-top"
          style={{
            backgroundImage: "url(/assets/backgrounds/benefits.png)",
            backgroundSize: "100% auto",
            height: "100%",
          }}
        />
      </div>

      {/* TOP FADE — glued to Services */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE — to Clients */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* CONTENT */}
      <div
        className="
          relative z-20 flex justify-center px-6

          /* MOBILE — pulled UP */
          pt-[14vh] pb-[12vh]

          /* DESKTOP — unchanged */
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
              grid grid-cols-1 gap-y-5
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
                {/* LOCAL DARK HALO */}
                <div className="absolute inset-[-18px] bg-black/55 blur-2xl rounded-full -z-10" />
                <span className="opacity-70 mr-1">•</span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
