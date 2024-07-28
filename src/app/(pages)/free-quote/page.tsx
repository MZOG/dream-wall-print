import Container from "@/components/common/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free quote",
  description: "TODO",
};

export default function Quote() {
  return (
    <Container section>
      <p>Quote</p>
    </Container>
  );
}
