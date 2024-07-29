import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: false,
        port: 465,
        authMethod: "LOGIN",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        cc: email,
        subject: `Message from ${name}`,
        html: `
        <div>
            <p>Full name:<br><span style="font-weight:600">${name}</span></p>
            <p>Message:<br><span style="font-weight:600">${message}</span></p>
        </div>
        `
    }

    const sendMailPromise = async () => {
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve("Email sent successfully");
                } else {
                    reject(err.message)
                }
            })
        })

        try {
            await sendMailPromise();
            return NextResponse.json({message: "Email sent successfully"});
        } catch (err) {
            return NextResponse.json({error: err}, {status: 500});
        }
    }
}