import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Clients from "@/components/Clients";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <Benefits />
      <Portfolio />
      <Team />
      <Process />
      <ContactCTA />
      <Footer />
    </main>
  );
}
