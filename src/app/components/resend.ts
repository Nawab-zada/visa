'use server';

type JobDetails = {
  jobTitle: string;
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
};

type EmailRecipient = string;
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (recipient: EmailRecipient, jobDetails: JobDetails) => {
  try {
    await resend.emails.send({
      from: 'your-verified-email@example.com', // Replace this with your verified sender email
      to: recipient, // The email of the job owner
      subject: `New Job Application for ${jobDetails.jobTitle}`,
      text: `Someone has applied for the job "${jobDetails.jobTitle}" at "${jobDetails.company}". Please check your dashboard for details.`,
    });
    console.log('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

