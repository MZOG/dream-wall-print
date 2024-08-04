import Container from "@/components/common/container";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "TODO",
};

export default function Gallery() {
  return (
    <Container section className="py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold">Gallery</h1>
    </Container>
  );
}
