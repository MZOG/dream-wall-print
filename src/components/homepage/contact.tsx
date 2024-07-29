import Container from "@/components/common/container";
import ContactForm from "@/components/common/contact-form";

export default function Contact() {
    return (
        <Container section className="bg-primary md:rounded-xl py-10 md:py-20">
            <h2 className="text-4xl text-white text-center mb-12">Contact us</h2>

            <div className="grid md:grid-cols-2 items-center gap-10 text-white max-w-4xl mx-auto">
                <div className="space-y-4">
                    <p className="text-2xl font-medium">DREAM Wall Print</p>

                    <div>
                        <p className="text-sm text-gray-400">Call</p>
                        <a href="tel:+447459073560" className="text-xl font-medium hover:underline underline-offset-4 hover:text-orange">+44 7459 073560</a>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a href="mailto:michal@dreamwallpaint.com" className="text-xl font-medium hover:underline underline-offset-4 hover:text-orange">michal@dreamwallpaint.com</a>
                    </div>
                    <div className="flex gap-5">
                        <div className="size-10 bg-green-200"></div>
                        <div className="size-10 bg-green-200"></div>
                        <div className="size-10 bg-green-200"></div>
                        <div className="size-10 bg-green-200"></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl text-primary p-5">
                    <p className="font-medium mb-5">Send message</p>
                    <ContactForm />
                </div>
            </div>
        </Container>
    )
}