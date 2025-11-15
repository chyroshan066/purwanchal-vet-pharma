import { About } from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/NavBar/NavBar";
import { Services } from "@/components/Services/Services";
import { TopBar } from "@/components/TopBar/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}
