import { About } from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/NavBar/NavBar";
import { Offer } from "@/components/Offer";
import { Products } from "@/components/Products/Products";
import { Services } from "@/components/Services/Services";
import { Team } from "@/components/Team/Team";
import { Testimonial } from "@/components/Testimonial";
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
      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}
