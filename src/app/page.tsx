import Hero from "@/components/homepage/hero";
import Contact from "@/components/homepage/contact";
import Gallery from "@/components/homepage/gallery";
import Offer from "@/components/homepage/offer";
import About from "@/components/homepage/about";

export default function Home() {
  return (
      <>
          <Hero/>
          <About />
          <Offer />
          <Gallery />
          <Contact/>
      </>
  );
}
