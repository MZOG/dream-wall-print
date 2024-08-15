import type { Metadata } from "next";
import Container from "@/components/common/container";
import ContactForm from "@/components/common/contact-form";
import Image from "next/image";
import contactUsLogo from "../../../../public/logo-bw.svg";
import facebook from "../../../../public/facebook.svg";
import instagram from "../../../../public/instagram.svg";
import youtube from "../../../../public/youtube.svg";
import whatsapp from "../../../../public/whatsapp.svg";
const social = [
  {
    name: "DREAM Wall Paint - Facebook",
    icon: facebook,
    href: "#",
  },
  {
    name: "DREAM Wall Paint - Instagram",
    icon: instagram,
    href: "#",
  },
  {
    name: "DREAM Wall Paint - YouTube",
    icon: youtube,
    href: "#",
  },
  {
    name: "DREAM Wall Paint - WhatsApp",
    icon: whatsapp,
    href: "#",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamwallprint.com"),
  title: "Contact us",
  description:
    "If you want to learn more about our services or discuss your project details, feel free to contact us:",
};

export default function Contact() {
  return (
    <Container section className="py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact us</h1>

      <div className="grid md:grid-cols-2 items-center gap-10 text-white mx-auto py-10">
        <div className="space-y-5">
          <Image src={contactUsLogo} alt="Contact Us" />

          <div>
            <p className="text-sm text-gray-400">Call</p>
            <a
              href="tel:+447459073560"
              className="text-xl text-orange hover:underline underline-offset-4 "
            >
              +44 7459 073560
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <a
              href="mailto:contact@dreamwallpaint.com"
              className="text-xl hover:underline underline-offset-4 text-orange"
            >
              contact@dreamwallpaint.com
            </a>
          </div>
          <div className="hidden gap-5">
            {social.map((item, i) => (
              <a key={i} href={item.href}>
                <Image src={item.icon} alt={item.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white text-black border border-black p-5">
          <p className="font-medium mb-5">Send message</p>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
