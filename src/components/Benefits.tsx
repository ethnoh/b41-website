import FadeOverlay from "./FadeOverlay";

export default function Benefits() {
  const benefits = [
    "Reduce manual work by 70%",
    "Cut operational costs",
    "Eliminate repetitive errors",
    "Scale operations instantly",
  ];

  return (
    <section
      id="benefits"
      className="relative min-h-[100vh] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/assets/backgrounds/benefits.png)' }}
    >
      <FadeOverlay />

      <div className="relative z-10 max-w-4xl text-center px-4">
        <h2 className="text-5xl font-bold mb-12">Why b41.ai</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="text-2xl font-light tracking-wide">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
