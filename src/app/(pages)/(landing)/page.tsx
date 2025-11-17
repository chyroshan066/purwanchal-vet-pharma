import { About } from "@/components/About/About";
// import { Offer } from "@/components/Offer";
import { Products } from "@/components/Products/Products";
import { Services } from "@/components/Services/Services";
// import { Team } from "@/components/Team/Team";
// import { Testimonial } from "@/components/Testimonial";
import { Hero } from "./_components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      {/* <Offer /> */}
      {/* <Team /> */}
      {/* <Testimonial /> */}
    </>
  );
}
