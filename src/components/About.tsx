export default function About() {
  const team = [
    {
      name: "Edgars Jubelis",
      role: "AI Development Specialist",
      image: "/assets/team/edgars.png",
    },
    {
      name: "Zinovi Lipinski",
      role: "IT Specialist",
      image: "/assets/team/zinoviy.png",
    },
  ];

  // 🔧 CONTROL — crop top of background image (px)
  const TOP_CROP_PX = 40;

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND (CROPPED FROM TOP, NO STRETCH) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 w-full bg-no-repeat bg-top"
          style={{
            top: `${TOP_CROP_PX}px`,
            height: `calc(100% + ${TOP_CROP_PX}px)`,
            backgroundImage: "url(/assets/backgrounds/about.png)",
            backgroundSize: "100% auto",
          }}
        />
      </div>

      {/* STRONG TOP FADE (VISIBLE GLUE) */}
      <div className="absolute top-0 left-0 w-full h-65 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-30 flex justify-center pt-50 pb-60 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-6xl font-black mb-28">
            Who we are
          </h2>

          {/* TEAM */}
          <div className="flex flex-col md:flex-row gap-32 justify-center items-center">
            {team.map((p, i) => (
              <div key={i} className="text-center">
                {/* PHOTO WITH NEON */}
                <div className="neon-avatar mb-10 mx-auto">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-56 h-56 object-cover rounded-full relative z-10"
                  />
                </div>

                {/* NAME */}
                <p className="text-2xl font-semibold">
                  {p.name}
                </p>

                {/* ROLE */}
                <p className="opacity-80 text-lg mt-2">
                  {p.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
