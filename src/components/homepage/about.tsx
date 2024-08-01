import Container from "@/components/common/container";
import Image from "next/image";
import AboutImage from "../../../public/about-image.jpg"
export default function About() {
    return (
        <Container section width="max-w-5xl" className="py-20">
            <h2 className="text-4xl mx-auto text-orange mb-14 font-evermore">About wall print</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <p className="">
                    Printing graphics on a wall using a machine is a novel and fascinating process that transforms blank, dull surfaces into grand works of art. Imagine a futuristic device, like an artistic robot, moving along the wall, applying ink or paint with precision that would impress even the most skilled painter. This machine, equipped with advanced technologies, can transfer intricate, detailed images from a computer screen directly onto the wall, creating spectacular murals.
                    The entire process starts with a digital design uploaded to the machine. Then, with clockwork precision, the device meticulously reproduces the graphic, applying colours and shapes in perfect harmony. The end result is an impressive, realistic image that can adorn the interiors of homes, offices, and the exterior walls of buildings. This technology not only shortens the time needed to create large-scale paintings but also allows for unprecedented accuracy and detail, opening new horizons in the world of decoration and street art.
                </p>

                <Image src={AboutImage} alt="About wall print" />
            </div>
        </Container>
    )
}