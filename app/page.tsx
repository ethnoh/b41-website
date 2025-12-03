import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Benefits from "../src/components/Benefits";
import Clients from "../src/components/Clients";
import Projects from "../src/components/Projects";
import About from "../src/components/About";
import Process from "../src/components/Process";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-white">
      <Hero />
      <Services />
      <Benefits />
      <Clients />
      <Projects />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
