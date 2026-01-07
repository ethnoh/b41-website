export default function Benefits() {
  const benefits = [
    "Reduce manual work by 70%",
    "Cut operational costs",
    "Eliminate repetitive errors",
    "Scale operations instantly",
  ];

  const TOP_CROP_PX = 0;

  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND IMAGE (NO STRETCH, NO GLOBAL DARKEN) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 w-full bg-no-repeat bg-top"
          style={{
            top: `${TOP_CROP_PX}px`,
            height: `calc(100% + ${TOP_CROP_PX}px)`,
            backgroundImage: "url(/assets/backgrounds/benefits.png)",
            backgroundSize: "100% auto", // 🔥 НЕ растягиваем
          }}
        />
      </div>

      {/* TOP FADE (Services → Benefits) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE (Benefits → Clients) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-20 flex justify-center pt-40 pb-125 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-24">
            Why b41.ai
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-32 place-items-center">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="
                  relative
                  text-2xl
                  md:text-3xl
                  font-semibold
                  tracking-wide
                "
              >
                {/* LOCAL DARK HALO (НЕ УБИВАЕТ ФОН) */}
                <div className="absolute inset-[-24px] bg-black/55 blur-2xl rounded-full -z-10" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
