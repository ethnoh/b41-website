import FadeOverlay from "./FadeOverlay";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[100vh] w-full bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: 'url(/assets/backgrounds/contact.png)' }}
    >
      <FadeOverlay />

      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-6">Ready to automate your logistics?</h2>

        <a
          href="#"
          className="inline-block mt-6 px-8 py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Book a Call
        </a>

        <p className="mt-8 opacity-80 text-lg">hello@b41.ai</p>
      </div>
    </section>
  );
}
