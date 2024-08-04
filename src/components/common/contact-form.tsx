'use client'
import {sendEmail} from "@/actions";
import {useEffect} from "react";
import {useFormState} from "react-dom";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {useToast} from "@/components/ui/use-toast"

export default function ContactForm() {
  const {toast} = useToast()
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  });

  useEffect(() => {
    if (sendEmailState.success) {
      toast({
        title: "Success",
        description: "Your message has been sent.",
      })
    }
    if (sendEmailState.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Sorry something went wrong. Try again.",
      })
    }
  }, [sendEmailState])


  return (
    <form action={sendEmailAction} className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-5">
        <div>
          <Input className="rounded-none ring-primary ring-1" type="text"
                 placeholder="Full name *" name="name" />

        </div>
        <div>
          <Input name="email" className="rounded-none ring-primary ring-1" type="email"
                 placeholder="E-mail *" />
        </div>
      </div>
      <Textarea className="rounded-none ring-primary ring-1"
                placeholder="Your message" name="message" />

      <Button type="submit" className="self-start disabled:cursor-not-allowed" variant="secondary">Submit</Button>
    </form>
  )
}