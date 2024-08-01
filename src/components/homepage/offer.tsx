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
        <Container full width="max-w-5xl" fullClassName="bg-orange py-10 md:py-20">
            <h2 className="text-2xl md:text-4xl mx-auto text-white font-evermore">Professional wall printing
                services</h2>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 my-10">
                <p className="text-white text-lg max-w-xl">
                    Dream Wall Print offers innovative and advanced wall printing services using state-of-the-art
                    technology to create high-quality, durable graphics directly on walls. Our unique wall printing
                    machine allows us to print on virtually any surface, including:
                </p>

                <ul className="columns-2 text-white text-lg">
                    {services.map(service => (
                        <li key={service} className="md:px-5 py-3">{service}</li>
                    ))}
                </ul>
            </div>

            <h2 className="text-2xl md:text-4xl mx-auto text-white font-evermore leading-relaxed">Our offer</h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-10 mb-20">
                {offer_items.map((offer) => (
                    <div key={offer.id} className="bg-white px-5 py-10 space-y-4">
                        <h3 className="text-orange font-medium text-xl" dangerouslySetInnerHTML={{__html: offer.title}}/>

                        <p>
                            {offer.description}
                        </p>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl md:text-4xl mx-auto text-white font-evermore leading-relaxed">How our service works</h2>

            <div className="space-y-14 my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between text-white">
                    <div className="relative">
                        <h3 className="text-2xl font-medium">Consultation and design</h3>
                        <p className="font-evermore leading-none text-[60px] absolute top-1/2 transform -translate-y-1/2 left-10 opacity-20">1</p>
                    </div>
                    <p>We start with a consultation to understand the client&apos;s vision and needs. Then we create a
                        graphic design tailored to individual requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between text-white">
                    <div className="relative">
                        <h3 className="text-2xl font-medium">Printing</h3>
                        <p className="font-evermore leading-none text-[60px] absolute top-1/2 transform -translate-y-1/2 left-10 opacity-20">2</p>
                    </div>
                    <p>We start with a consultation to understand the client&apos;s vision and needs. Then we create a
                        graphic design tailored to individual requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between text-white">
                    <div className="relative">
                        <h3 className="text-2xl font-medium">Finalization</h3>
                        <p className="font-evermore leading-none text-[60px] absolute top-1/2 transform -translate-y-1/2 left-10 opacity-20">3</p>
                    </div>
                    <p>We start with a consultation to understand the client&apos;s vision and needs. Then we create a
                        graphic design tailored to individual requirements.</p>
                </div>
            </div>

            <h2 className="text-2xl md:text-4xl mx-auto text-white font-evermore leading-relaxed">Contact us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white pt-10">
                <p>If you want to learn more about our services or discuss your project details, feel free to contact us:</p>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm">Call</p>
                        <a href="tel:+447459073560"
                           className="text-xl hover:underline underline-offset-4 hover:text-black">+44 7459 073560</a>
                    </div>
                    <div>
                        <p className="text-sm">Email</p>
                        <a href="mailto:contact@dreamwallpaint.com"
                           className="text-xl hover:underline underline-offset-4 hover:text-black">contact@dreamwallpaint.com</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}