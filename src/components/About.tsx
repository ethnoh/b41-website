import FadeOverlay from "./FadeOverlay";

export default function About() {
  const people = [
    { name: "Aleksandrs Gnedovs", role: "Business Development" },
    { name: "Edgars Jubelis", role: "AI Development Specialist" },
    { name: "Zinovi Lipinski", role: "IT Specialist" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[110vh] w-full bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: 'url(/assets/backgrounds/about.png)' }}
    >
      <FadeOverlay />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Who we are</h2>
        <p className="text-xl mb-12 opacity-80">Logistics meets AI.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {people.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <div className="h-32 bg-black/20 rounded-md mb-6"></div>
              <p className="text-2xl font-semibold">{p.name}</p>
              <p className="opacity-80">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
