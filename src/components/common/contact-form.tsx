"use client";
import { sendEmail } from "@/actions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (sendEmailState.success) {
      toast({
        title: "Success",
        description: "Your message has been sent.",
      });
    }
    if (sendEmailState.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Sorry something went wrong. Try again.",
      });
    }

    if (fullNameRef.current !== null) {
      fullNameRef.current.value = "";
    }
    if (emailRef.current !== null) {
      emailRef.current.value = "";
    }
    if (messageRef.current !== null) {
      messageRef.current.value = "";
    }
  }, [sendEmailState]);

  return (
    <form action={sendEmailAction} className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-5">
        <div>
          <Input
            ref={fullNameRef}
            className="rounded-none ring-primary ring-1 bg-white"
            type="text"
            placeholder="Full name *"
            name="name"
          />
        </div>
        <div>
          <Input
            name="email"
            ref={emailRef}
            className="rounded-none ring-primary ring-1 bg-white"
            type="email"
            placeholder="E-mail *"
          />
        </div>
      </div>
      <Textarea
        ref={messageRef}
        className="rounded-none ring-primary ring-1 bg-white"
        placeholder="Your message"
        name="message"
      />

      <Button
        type="submit"
        className="self-start disabled:cursor-not-allowed"
        variant="secondary"
      >
        Submit
      </Button>
    </form>
  );
}
