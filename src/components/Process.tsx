export default function Process() {
  const steps = [
    "Discovery",
    "Architecture",
    "Build",
    "Deploy & Support",
  ];

  // 🔧 CONTROL — crop top of background image (px)
  const TOP_CROP_PX = 0;

  // 🔥 MANUAL DIAGONAL OFFSETS (DESKTOP ONLY)
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

      {/* ========================= */}
      {/* ===== DESKTOP (LOCKED) === */}
      {/* ========================= */}
      <div className="relative z-20 hidden md:flex justify-center pt-40 pb-56 px-6">
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
                  <span className="neon-outline text-4xl font-semibold tracking-wide">
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* ===== MOBILE ONLY ======= */}
      {/* ========================= */}
      <div className="relative z-20 md:hidden flex justify-center pt-3 pb-22 px-6">
        <div className="max-w-md w-full text-center">
          {/* TITLE — same logic as About */}
          <h2
            className="
              font-black tracking-tight
              text-[clamp(38px,9vw,52px)]
              leading-[0.95]
              mb-12
            "
          >
            How we work
          </h2>

          {/* STACKED PROCESS */}
          <div className="flex flex-col gap-10 items-start">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-6"
              >
                {/* DOT */}
                <div className="w-4 h-4 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(0,255,255,0.85)]" />

                {/* TEXT */}
                <span className="neon-outline text-2xl font-semibold tracking-wide">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
