'use server';

type JobDetails = {
  id: number;
  title: string;
  company: string;
  ownerEmail: string;
  firstName: string;
  lastName: string;
  contactEmail: string;
};

type EmailRecipient = string;
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (recipient: EmailRecipient, jobDetails: JobDetails) => {
  try {
    await resend.emails.send({
      from: 'almaraicompony41@gmail.com', // Ensure this email is verified
      to: recipient,
      subject: `New Job Application for ${jobDetails.title}`,
      text: `Someone has applied for the job "${jobDetails.title}" at "${jobDetails.company}". Please check your dashboard for details.`,
    });
    console.log('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

