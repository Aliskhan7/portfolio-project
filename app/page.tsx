import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex items-center justify-between flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Services />
        <Projects />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
