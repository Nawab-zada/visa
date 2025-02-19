import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, contactNumber, jobPosition } = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password (not your email password)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "owner@example.com", // Job owner's email
      subject: `New Job Application for ${jobPosition}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Contact: ${contactNumber}
        Position: ${jobPosition}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
