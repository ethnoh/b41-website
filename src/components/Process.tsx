import FadeOverlay from "./FadeOverlay";

export default function Process() {
  const steps = ["Discovery", "Architecture", "Build", "Deploy & Support"];

  return (
    <section
      id="process"
      className="relative min-h-[120vh] w-full bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: 'url(/assets/backgrounds/process.png)' }}
    >
      <FadeOverlay />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold mb-12">How we work</h2>

        <div className="flex flex-col gap-12 border-l-2 border-white/20 pl-10 mx-auto w-fit">
          {steps.map((s, i) => (
            <div key={i} className="text-left">
              <div className="w-4 h-4 bg-teal-300 rounded-full mb-2"></div>
              <p className="text-2xl">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
