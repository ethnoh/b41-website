export default function Projects() {
  const projects = [
    "Automation (n8n)",
    "Messanger bots",
    "Custom LLM bots",
  ];

  // 🔧 CONTROL — crop top of background image (px)
  const TOP_CROP_PX = 10;

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND (CROPPED FROM TOP, NO STRETCH) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 w-full bg-no-repeat bg-top"
          style={{
            top: `${TOP_CROP_PX}px`,
            height: `calc(100% + ${TOP_CROP_PX}px)`,
            backgroundImage: "url(/assets/backgrounds/projects.png)",
            backgroundSize: "100% auto",
          }}
        />
      </div>

      {/* TOP FADE (CLIENTS → PROJECTS) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* BOTTOM FADE (PROJECTS → NEXT SECTION) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-20 flex justify-center pt-10 pb-60 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-6xl font-black mb-24">
            What we deliver
          </h2>

          {/* PROJECT CARDS (TEMPORARY) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <div
                key={i}
                className="
                  bg-white/5
                  backdrop-blur-md
                  p-8
                  rounded-xl
                  border
                  border-white/10
                  hover:border-teal-300/40
                  hover:shadow-teal-300/20
                  transition
                "
              >
                <div className="h-40 bg-black/20 rounded-md mb-6" />
                <p className="text-xl opacity-90">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
