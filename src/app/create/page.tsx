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
  const [ownerEmail, setOwnerEmail] = useState("almaraicompony41@gmail.com");
  const [applyingJob, setApplyingJob] = useState<number | null>(null);

  const handlePostJob = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !contactEmail || !title || !company || !ownerEmail) {
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
    setOwnerEmail("almaraicompony41@gmail.com");
  };

  const handleApply = async (job: Job) => {
    setApplyingJob(job.id);
    try {
      await sendEmail(job.ownerEmail, job);
      alert(`Application for ${job.title} has been sent!`);
    } catch {
      alert("Error sending email. Please try again.");
    }
    setApplyingJob(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Job Portal 🚀
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
          <input
            type="email"
            placeholder="Owner Email"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
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

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Available Jobs
        </h2>
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="border rounded-lg p-5 mb-4 bg-gray-50 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title} at <span className="text-blue-600">{job.company}</span>
              </h3>
              <p className="text-gray-600">Owner Email: {job.ownerEmail}</p>
              <button
                onClick={() => handleApply(job)}
                className={`mt-3 p-2 w-full rounded-md ${
                  applyingJob === job.id
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                } transition`}
                disabled={applyingJob === job.id}
              >
                {applyingJob === job.id ? "Applying..." : "Apply Now"}
              </button>
            </motion.div>
          ))
        )}
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



