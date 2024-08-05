'use client'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image from "next/image";

import image1 from "../../public/gallery/1.webp";
import image2 from "../../public/gallery/2.webp";
import image3 from "../../public/gallery/3.webp";
import image4 from "../../public/gallery/4.webp";
import image5 from "../../public/gallery/5.webp";
import image6 from "../../public/gallery/6.webp";
import image7 from "../../public/gallery/7.webp";
import image8 from "../../public/gallery/8.webp";
import image9 from "../../public/gallery/9.webp";
import image10 from "../../public/gallery/10.webp";

const GalleryImages = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
  {
    image: image9,
  },
  {
    image: image10,
  }

]

const MyGallery = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 py-10">
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
            <Image className="hover:cursor-pointer" ref={ref} onClick={open} width={image.image.width} height={image.image.height} src={image.image.src} alt="elo" />
          )}
        </Item>
      ))}

    </Gallery>
  </div>

)

export default MyGallery;