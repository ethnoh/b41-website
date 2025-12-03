import FadeOverlay from "./FadeOverlay";

export default function Services() {
  const items = [
    "AI Automation",
    "Logistics AI",
    "Video/Audio AI",
    "Custom Tools",
  ];

  return (
    <section
      id="services"
      className="relative min-h-[120vh] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/assets/backgrounds/services.png)' }}
    >
      <FadeOverlay />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">What we build</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg hover:border-teal-300/40 hover:shadow-teal-300/20 transition cursor-pointer"
            >
              <p className="text-2xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
