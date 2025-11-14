import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/NavBar/NavBar";
import { TopBar } from "@/components/TopBar/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
    </>
  );
}
