"use server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

interface State {
  error: string | null;
  success: boolean;
}

export const sendEmail = async (prevState: State, formData: FormData) => {
  const fullName = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (fullName === "" || email === "" || message === "") {
    return {
      error: "error",
      success: false,
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Dream Wall Print <contact@dreamwallprint.com>",
      to: "Dream Wall Print <contact@dreamwallprint.com>",
      reply_to: `${fullName} <${email}>`,
      subject: `Form Submission - ${fullName}`,
      react: EmailTemplate({ fullName, email, message }),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
