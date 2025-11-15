import { About } from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/NavBar/NavBar";
import { Offer } from "@/components/Offer/Offer";
import { Products } from "@/components/Products/Products";
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
      <Products />
      <Offer />
    </>
  );
}
