import Container from "@/components/common/container";

const offer_items = [
    {
        id: 1,
        title: `Custom designs <span class="block">on request</span>`,
        description: 'We provide the opportunity to create personalized graphics tailored to individual needs and preferences. Whether it’s a company logo, photorealistic images, abstract designs, or favourite photographs – our services offer full customization.'
    },
    {
        id: 2,
        title: `High quality <span class="block">and durability</span>`,
        description: 'Our wall printing technology ensures exceptional quality and durability of graphics. The prints are resistant to UV rays, moisture, and mechanical damage, guaranteeing their longevity.'
    },
    {
        id: 3,
        title: `Versatility <span class="block">of application</span>`,
        description: 'Our services are perfect for both commercial and private spaces. They work excellently in offices, hotels, restaurants, shopping centres, as well as homes and apartments.'
    },
    {
        id: 4,
        title: `Professional <span class="block">consultation</span>`,
        description: 'We offer professional consultation at every stage of the project. Our experienced specialists assist in choosing the right designs, colours, and compositions to ensure a perfect final result.'
    },
    {
        id: 5,
        title: `Fast and clean <span class="block">execution</span>`,
        description: 'Thanks to advanced printing technology, the execution process is quick and causes minimal disruption. Our wall printing machine works quietly and efficiently, minimizing disturbance to the daily functioning of the space.'
    },
]
const services = ['Bricks walls', 'Glass', 'Concrete', 'Wood', 'Plaster', 'Tiles']
export default function Offer() {
    return (
        <Container full width="max-w-5xl" className="bg-orange py-10">
            <h2 className="text-4xl mx-auto text-white font-evermore leading-relaxed">Professional wall printing
                services</h2>

            <div className="flex flex-col md:flex-row justify-between items-center gap-5 my-10">
                <p className="text-white text-lg max-w-xl">
                    Dream Wall Print offers innovative and advanced wall printing services using state-of-the-art
                    technology to create high-quality, durable graphics directly on walls. Our unique wall printing
                    machine allows us to print on virtually any surface, including:
                </p>

                <ul className="columns-2 text-white text-lg">
                    {services.map(service => (
                        <li key={service} className="px-5 py-3">{service}</li>
                    ))}
                </ul>


            </div>

            <h2 className="text-4xl mx-auto text-white font-evermore leading-relaxed">Our offer</h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-10">
                {offer_items.map((offer) => (
                    <div key={offer.id} className="bg-white px-5 py-10 space-y-4">
                        <h3 className="text-orange md:text-xl" dangerouslySetInnerHTML={{ __html: offer.title }} />

                        <p>
                            {offer.description}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    )
}