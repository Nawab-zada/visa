import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { recipient, jobDetails } = await req.json();

    await resend.emails.send({
      from: "your-verified-email@example.com",
      to: recipient,
      subject: `New Job Application for ${jobDetails.title}`,
      text: `Someone has applied for the job "${jobDetails.title}" at "${jobDetails.company}".`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
