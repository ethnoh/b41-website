import FadeOverlay from "./FadeOverlay";

export default function Projects() {
  const projects = [
    "OCR / BOL automation",
    "Maritime assistant",
    "Route optimization",
  ];

  return (
    <section
      id="projects"
      className="relative min-h-[130vh] w-full bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: 'url(/assets/backgrounds/projects.png)' }}
    >
      <FadeOverlay />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold mb-12">Our work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-teal-300/40 hover:shadow-teal-300/20 transition"
            >
              <div className="h-40 bg-black/20 rounded-md mb-6"></div>
              <p className="text-xl">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
