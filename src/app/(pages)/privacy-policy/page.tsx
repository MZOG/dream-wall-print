import Container from "@/components/common/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "TODO",
};

export default function Privacy() {
    return (
        <Container section className="py-20">
            <h1 className="text-2xl md:text-4xl font-semibold">Privacy policy</h1>
        </Container>
    );
}
