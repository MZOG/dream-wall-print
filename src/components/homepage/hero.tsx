import Image from "next/image";
import HeroImage from "../../../public/hero-logo.svg"

export default function Hero() {
  return (
    <section className="relative">
      <video autoPlay={true} loop muted className="hero-video">
        <source src="./dream-video.mp4" type="video/mp4"/>
      </video>

      <div className="md:absolute bg-gradient-to-t from-primary to-transparent top-0 left-0 w-full h-full"></div>

      <div
        className="px-5 text-center py-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:space-y-5">
        <Image src={HeroImage} alt="Dream Wall Print" className="mx-auto"/>
        <div className="hidden md:block md:text-white md:text-xl max-w-md">
          <h1>Dream Wall Print is ready to transform your walls into works of art. Let us create unforgettable interiors
            for you!</h1>
        </div>
      </div>
    </section>
  )
}