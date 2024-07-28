import type { Metadata } from "next";
import Container from "@/components/common/container";
export const metadata: Metadata = {
  title: "About us",
  description: "TODO",
};

export default function About() {
  return (
    <Container section>
      <p>About us</p>
    </Container>
  );
}
