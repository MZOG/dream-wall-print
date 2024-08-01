import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();

    const transport = nodemailer.createTransport({
        host: "smtp.mail.ovh.ca",
        secure: true,
        port: 465,
        authMethod: "NORMAL PASSWORD",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions: Mail.Options = {
        from: "no-reply@dreamwallprint.com",
        to: process.env.EMAIL,
        cc: email,
        subject: `Message from ${name}`,
        html: `
        <div>
            <p>Full name:<br><span style="font-weight:600">${name}</span></p>
            <p>Message:<br><span style="font-weight:600">${message}</span></p>
        </div>
        `
    }

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve("Email sent");
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: "Email sent" });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}