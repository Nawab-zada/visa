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
      from: 'Almaraicompany41@gmail.com', // Ensure this email is verified
      to: recipient,
      subject: `New Application: ${jobDetails.title} at ${jobDetails.company}`,
      text: `
        A new job application has been submitted.
        
        Job Title: ${jobDetails.title}
        Company: ${jobDetails.company}
        
        Applicant Details:
        First Name: ${jobDetails.firstName}
        Last Name: ${jobDetails.lastName}
        Contact Email: ${jobDetails.contactEmail}
        
        Please review the application at your earliest convenience.
      `,
    });
    console.log('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

