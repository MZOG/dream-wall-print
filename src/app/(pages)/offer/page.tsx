import Container from "@/components/common/container";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Offer",
  description: "Dream Wall Print offers innovative and advanced wall printing services using state-of-the-art technology to create high-quality, durable graphics directly on walls.",
};

export default function Offer() {
  return (
    <Container section className="py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold">Offer</h1>
    </Container>
  );
}
