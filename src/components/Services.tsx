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
            lg:-mt-[50px]   /* crop top only */
            pointer-events-none
            select-none
          "
        />

        {/* GLOBAL DARKENING (RESTORES CONTRAST) */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* TOP FADE (hero → services) */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent pointer-events-none" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex justify-center pt-28 px-6 z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-6xl font-black mb-24">
              What we build
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-32 place-items-center">
              {items.map((item) => (
                <div key={item} className="text-plate">
                  <span className="neon-outline text-3xl md:text-4xl font-black tracking-tight whitespace-nowrap">
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
