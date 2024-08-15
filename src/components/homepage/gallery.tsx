"use client";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

import Container from "@/components/common/container";
import Image from "next/image";

import image1 from "../../../public/gallery/1.webp";
import image2 from "../../../public/gallery/4.webp";
import image3 from "../../../public/gallery/6.webp";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const GalleryImages = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
];

export default function HomepageGallery() {
  return (
    <Container section className="my-10 lg:my-20" width="max-w-5xl">
      <h2 className="text-2xl md:text-4xl mx-auto text-orange mb-12 font-evermore">
        Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Gallery>
          {GalleryImages.map((image, index) => (
            <Item
              key={index}
              original={image.image.src}
              thumbnail={image.image.src}
              width={image.image.width}
              height={image.image.height}
            >
              {({ ref, open }) => (
                <Image
                  className="hover:cursor-pointer"
                  ref={ref}
                  onClick={open}
                  width={image.image.width}
                  height={image.image.height}
                  src={image.image.src}
                  alt="Dream Wall Print"
                />
              )}
            </Item>
          ))}
        </Gallery>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button asChild variant="orange">
          <Link href="/gallery">Check more examples</Link>
        </Button>
      </div>
    </Container>
  );
}
