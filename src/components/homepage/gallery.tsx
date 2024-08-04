import Container from "@/components/common/container";
import Image from "next/image";

import image1 from "../../../public/gallery/1.webp"
import image2 from "../../../public/gallery/4.webp"
import image3 from "../../../public/gallery/6.webp"
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Gallery() {
  return (
    <Container section className="my-10 lg:my-20" width="max-w-5xl">
      <h2 className="text-2xl md:text-4xl mx-auto text-orange mb-12 font-evermore">Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Image src={image1} alt="image 1"/>
        <Image src={image2} alt="image 2"/>
        <Image src={image3} alt="image 3"/>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button asChild variant="orange">
          <Link href="/gallery">
            Check more examples
          </Link>
        </Button>
      </div>
    </Container>
  )
}