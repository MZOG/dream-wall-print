import ContactForm from "@/components/common/contact-form";
import Container from "@/components/common/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offer",
  description:
    "We are pleased to present the offer of Dream Wall Print, a company specializing in creating unique wall graphics using innovative technology.",
};

const offer_items = [
  {
    title: "Innovative Technology:",
    description:
      "We utilize the latest technological solutions that enable us to create wall graphics with exceptional accuracy. Our machine can reproduce even the most complex designs on walls with perfect detail.",
  },
  {
    title: "Versatility:",
    description:
      "We offer our services across various sectors, including offices, hotels, gyms, restaurants, barbershops, and private homes. No matter the type of space, we tailor the graphics to suit the specific character and ambiance of the location.",
  },
  {
    title: "Customization:",
    description:
      "Every project is individually tailored to the client’s needs. We create graphics that align with the client’s vision, perfectly fitting into any interior.",
  },
  {
    title: "Exceptional Visual Impact:",
    description:
      "Our graphics give spaces a unique character, capture attention, and create an atmosphere that leaves a lasting impression.",
  },
  {
    title: "Speed and Efficiency:",
    description:
      "Our technology allows for quick and efficient project execution, minimizing downtime in the daily operation of your facility.",
  },
  {
    title: "Professional Service:",
    description:
      "The Dream Wall Print team consists of experienced professionals who manage every stage of the project – from concept to final execution – with great care.",
  },
];

export default function Offer() {
  return (
    <Container section className="py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold">Offer</h1>
      <p className="mt-5 max-w-xl">
        We are pleased to present the offer of Dream Wall Print, a company
        specializing in creating unique wall graphics using innovative
        technology. Our advanced wall printing machine allows us to execute
        projects with unparalleled precision, speed, and quality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {offer_items
          .map((item, index) => (
            <div key={index} className="p-7 bg-orange">
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-white">{item.description}</p>
            </div>
          ))
          .slice(0, 3)}
      </div>
      <h2 className="text-3xl md:text-3xl font-semibold my-14">
        Benefits of Working with Dream Wall Print:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {offer_items
          .map((item, index) => (
            <div key={index} className="p-7 bg-black">
              <h3 className="text-xl font-medium mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </div>
          ))
          .slice(3, 6)}
      </div>
      <div className="mt-20 flex flex-col md:flex-row md:items-center md:gap-10">
        <p className=" max-w-2xl text-lg">
          We invite you to contact us to discuss the details of our
          collaboration and to review our portfolio. We will be happy to answer
          any questions and tailor our offer to meet your specific needs.
        </p>

        <div className="md:max-w-[400px] mt-10 bg-black p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
