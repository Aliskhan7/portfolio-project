import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative flex items-center justify-between flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
