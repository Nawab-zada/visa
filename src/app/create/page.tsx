
"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../components/resend";
import Image from "next/image";

interface Job {
  id: number;
  firstName: string;
  lastName: string;
  contactEmail: string;
  title: string;
  company: string;
  ownerEmail: string;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const ownerEmail = "almaraicompony41@gmail.com"; // Fixed constant value

  const handlePostJob = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !contactEmail || !title || !company) {
      alert("Please fill in all fields.");
      return;
    }

    const newJob: Job = {
      id: jobs.length + 1,
      firstName,
      lastName,
      contactEmail,
      title,
      company,
      ownerEmail,
    };

    setJobs([...jobs, newJob]);
    setFirstName("");
    setLastName("");
    setContactEmail("");
    setTitle("");
    setCompany("");

    try {
      await sendEmail(ownerEmail, newJob);
      alert("Application sent successfully! ✅");
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          APPLICATION FORM
        </h1>

        <motion.form
          onSubmit={handlePostJob}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-6"
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Contact Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Image 
          src="/vacency.png" 
          alt="logo" 
          width={500} 
          height={400} 
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        />
      </div>
    </div>
  );
}

