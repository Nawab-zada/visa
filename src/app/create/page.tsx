"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../components/resend";
import Image from "next/image";

// Define TypeScript Types
interface Job {
  id: number;
  title: string;
  company: string;
  ownerEmail: string;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [applyingJob, setApplyingJob] = useState<number | null>(null);

  // Function to handle job posting
  const handlePostJob = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !company || !ownerEmail) {
      alert("Please fill in all fields.");
      return;
    }

    const newJob: Job = {
      id: jobs.length + 1,
      title,
      company,
      ownerEmail,
    };

    setJobs([...jobs, newJob]);
    setTitle("");
    setCompany("");
    setOwnerEmail("almaraicompony41@gmail.com");
  };

  // Function to apply for a job
  const handleApply = async (job: Job) => {
    setApplyingJob(job.id);

    try {
      await sendEmail(job.ownerEmail, job); // Send email to job owner
      alert(`Application for ${job.title} has been sent!`);
    } catch { 
      alert("Error sending email. Please try again.");
    }

    setApplyingJob(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Job Portal 🚀
        </h1>

        {/* Job Posting Form */}
        <motion.form
          onSubmit={handlePostJob}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-6"
        >
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
            placeholder="Owner Email (where applications are sent)"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p>Owner email: almaraicompany41@gmail.com</p>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Post Job
          </button>
        </motion.form>

        {/* Job Listings */}
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
                {job.title} at{" "}
                <span className="text-blue-600">{job.company}</span>
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
          <Image src={'/vacency.png'} alt="logo" width={500} height={400}/>
      </div>
    </div>
  );
}
