"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../components/resend";
import Image from "next/image";

export default function JobApplication() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !jobTitle || !contactNumber || !company) {
      alert("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    
    try {
      await sendEmail("almaraicompony41@gmail.com", {
        firstName,
        lastName,
        email,
        jobTitle,
        contactNumber,
        company,
      });
      alert("Application submitted successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setJobTitle("");
      setContactNumber("");
      setCompany("");
    } catch {
      alert("Error sending application. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 p-20 mt-9">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Apply for a Job 🚀
        </h1>

        <motion.form
          onSubmit={handleSubmit}
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
            className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="p-3  border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className={`bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </motion.form>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Image src={'/vacency.png'} alt="logo" width={500} height={400} />
      </div>
    </div>
  );
}
