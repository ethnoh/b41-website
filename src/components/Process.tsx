export default function Process() {
  const steps = [
    "Discovery",
    "Architecture",
    "Build",
    "Deploy & Support",
  ];

  // 🔧 CONTROL — crop top of background image (px)
  const TOP_CROP_PX = 0;

  // 🔥 MANUAL DIAGONAL OFFSETS (px)
  const offsets = [90, 280, 0, 160];

  return (
    <section
      id="process"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 w-full bg-no-repeat bg-top"
          style={{
            top: `${TOP_CROP_PX}px`,
            height: `calc(100% + ${TOP_CROP_PX}px)`,
            backgroundImage: "url(/assets/backgrounds/process.png)",
            backgroundSize: "100% auto",
          }}
        />
      </div>

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-20 flex justify-center pt-40 pb-56 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <h2 className="text-6xl font-black mb-28">
            How we work
          </h2>

          {/* PROCESS */}
          <div className="relative flex flex-col gap-6 items-start max-w-xl mx-auto">

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex items-center gap-10"
                style={{
                  marginLeft: `${offsets[i]}px`,
                }}
              >
                {/* DOT */}
                <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_22px_rgba(0,255,255,0.9)]" />

                {/* TEXT */}
                <div className="text-plate">
                  <span className="neon-outline text-3xl md:text-4xl font-semibold tracking-wide">
                    {step}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
