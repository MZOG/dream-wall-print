import Container from "@/components/common/container"
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../../public/footer-logo.svg";
import facebook from "../../../public/facebook-black.svg";
import instagram from "../../../public/instagram-black.svg";
import youtube from "../../../public/youtube-black.svg";
import whatsapp from "../../../public/whatsapp-black.svg";
import marcinzogrodnik from "../../../public/marcin-zogrodnik.svg"

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

export default function Footer() {
    return (
        <Container section width="md:max-w-4xl" className="py-10 md:py-20 flex flex-col gap-10 md:flex-row justify-between md:items-center">
            <div>
                <Image src={FooterLogo} alt="Dream wall print" />
            </div>
            
            <div className="space-y-4">
                <div>
                    <p className="text-xs">Call</p>
                    <a href="tel:+447459073560" className="hover:underline underline-offset-4 hover:text-orange">+44 7459 073560</a>
                </div>
                <div>
                    <p className="text-xs">Email</p>
                    <a href="mailto:contact@dreamwallprint.com" className="hover:underline underline-offset-4 hover:text-orange">contact@dreamwallprint.com</a>
                </div>
                <div className="hidden flex md:justify-between gap-5">
                    {social.map((item, i) => (
                        <a key={i} href={item.href}>
                            <Image src={item.icon} alt={item.name} />
                        </a>
                    ))}
                </div>
            </div>

            <div>
                <ul className="md:columns-2 md:text-lg font-medium">
                    <li className="py-2">
                        <Link href="/offer" className="hover:underline underline-offset-4 hover:text-orange">
                            Offer
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/gallery" className="hover:underline underline-offset-4 hover:text-orange">
                            Gallery
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/contact" className="hover:underline underline-offset-4 hover:text-orange">
                            Contact
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/privacy-policy" className="hover:underline underline-offset-4 hover:text-orange">
                            Privacy Policy
                        </Link>
                    </li>
                </ul>

                <a href="https://marcinzogrodnik.pl" className="flex items-center gap-3 mt-5 text-sm">
                    <span>Design & Development</span> <Image src={marcinzogrodnik} alt="Design & Development - Marcin Zogrodnik" />
                </a>
            </div>
        </Container>
    )
}