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

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-top"
          style={{
            backgroundImage: "url(/assets/backgrounds/about.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
      </div>

      {/* TOP FADE (PROJECTS → ABOUT) */}
      <div
        className="absolute top-0 left-0 w-full h-56 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* BOTTOM FADE (ABOUT → PROCESS) */}
      <div
        className="absolute bottom-0 left-0 w-full h-56 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-30 flex justify-center pt-50 pb-60 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2
            className="
              font-black tracking-tight

              /* MOBILE */
              text-[clamp(38px,9vw,52px)]
              leading-[0.95]
              mb-12

              /* DESKTOP */
              md:text-6xl
              md:mb-28
            "
          >
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
