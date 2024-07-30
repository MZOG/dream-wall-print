'use client'
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
    const endpoint: string = '/api/email'
    const { toast } = useToast()

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors  },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    type FormProps = {
        name: string,
        email: string,
        message: string
    }

    const onSubmit = (data: FormProps) => {
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((response) => response.json())
            .then((response) => {
            if (response.status === 200) {
                reset();
                toast({
                    title: "Success",
                    description: "Your message has been sent.",
                })
            }
        }).catch((err) => {
            reset();
            toast({
                variant: "destructive",
                title: "Error",
                description: "Sorry something went wrong. Try again.",
            })
        })
    }

    const isSub = true;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
                <div>
                    <Input className="rounded-none ring-primary ring-1" type="text"
                           placeholder="Full name *" {...register("name", {required: true})}/>
                    {errors.name && (
                        <span className="text-red-400 font-medium text-xs">
                            This field is required
                          </span>
                    )}
                </div>
                <div>
                    <Input className="rounded-none ring-primary ring-1" type="email"
                           placeholder="E-mail *" {...register("email", {required: true})}/>
                    {errors.name && (
                        <span className="text-red-400 font-medium text-xs">
                        This field is required
                      </span>
                    )}
                </div>
            </div>
            <Textarea className="rounded-none ring-primary ring-1"
                      placeholder="Your message" {...register("message")} />

            <Button type="submit" className="self-start disabled:cursor-not-allowed" variant="secondary">Submit</Button>
        </form>
    )
}