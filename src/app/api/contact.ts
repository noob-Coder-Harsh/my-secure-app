import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // configure your transporter (example: Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "yourfixedemail@example.com", // fixed receiver
      subject: "New Contact Form Submission",
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
