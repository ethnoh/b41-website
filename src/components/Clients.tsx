import FadeOverlay from "./FadeOverlay";

export default function Clients() {
  const logos = [
    "/assets/logos/logo-conway.png",
    "/assets/logos/logo-speedit.png",
    "/assets/logos/logo-latflex.png",
  ];

  return (
    <section
      id="clients"
      className="relative min-h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/assets/backgrounds/clients.png)' }}
    >
      <FadeOverlay />

      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-4">Trusted by</h2>
        <p className="text-xl mb-12 opacity-80">
          Companies who rely on our expertise.
        </p>

        <div className="flex gap-16 justify-center items-center opacity-80">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-20 w-auto hover:scale-110 hover:opacity-100 transition-all duration-300 drop-shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
