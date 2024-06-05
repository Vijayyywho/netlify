import Hero from "./components/Hero";
import { navItems } from "@/data";
import Grid from "./components/ui/Grid";
import { FloatingNav } from "./components/ui/FloatingNav";
import RecentProject from "./components/RecentProject";
import { Clients } from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";

export default function Home() {
  console.log('Rendering Home component');
  console.log('navItems:', navItems);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-67xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
