import Hero from "@/components/homepage/hero";
import Contact from "@/components/homepage/contact";
import Gallery from "@/components/homepage/gallery";
import Offer from "@/components/homepage/offer";

export default function Home() {
  return (
      <>
          <Hero/>
          <Offer />
          <Gallery />
          <Contact/>
      </>
  );
}
