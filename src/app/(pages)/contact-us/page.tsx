import type { Metadata } from "next";
import Container from "@/components/common/container";

export const metadata: Metadata = {
  title: "Contact us",
  description: "TODO",
};

export default function Contact() {
  return (
      <Container section className="py-10 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact us</h1>
      </Container>
  );
}
