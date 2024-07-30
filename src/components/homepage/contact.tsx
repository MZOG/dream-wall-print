import Container from "@/components/common/container";
import ContactForm from "@/components/common/contact-form";
import Image from "next/image";
import instagram from "../../../public/instagram.svg"
import facebook from "../../../public/facebook.svg"
import youtube from "../../../public/youtube.svg"
import whatsapp from "../../../public/whatsapp.svg"
import contactUsLogo from "../../../public/contact-us-logo.svg"

const social = [
    {
        name: "DREAM Wall Paint - Facebook",
        icon: facebook,
        href: "#"
    },
    {
        name: "DREAM Wall Paint - Instagram",
        icon: instagram,
        href: "#"
    },
    {
        name: "DREAM Wall Paint - YouTube",
        icon: youtube,
        href: "#"
    },
    {
        name: "DREAM Wall Paint - WhatsApp",
        icon: whatsapp,
        href: "#"
    }
]

export default function Contact() {
    return (
        <Container full className="bg-black py-10 ">
            <h2 className="text-4xl max-w-4xl mx-auto text-white mb-12">Contact us</h2>

            <div className="grid md:grid-cols-2 items-center gap-10 text-white max-w-4xl mx-auto">
                <div className="space-y-5">
                    <Image src={contactUsLogo} alt="Contact Us" />

                    <div>
                        <p className="text-sm text-gray-400">Call</p>
                        <a href="tel:+447459073560" className="text-xl hover:underline underline-offset-4 hover:text-orange">+44 7459 073560</a>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a href="mailto:contact@dreamwallpaint.com" className="text-xl hover:underline underline-offset-4 hover:text-orange">contact@dreamwallpaint.com</a>
                    </div>
                    <div className="flex gap-5">
                        {social.map((item, i) => (
                            <a key={i} href={item.href}>
                                <Image src={item.icon} alt={item.name} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bg-white text-primary p-5">
                    <p className="font-medium mb-5">Send message</p>
                    <ContactForm />
                </div>
            </div>
        </Container>
    )
}