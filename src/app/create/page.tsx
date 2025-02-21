"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function JobForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    jobPosition: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const jobCategories = [
    "electrician",
    "security guard",
    "cashier",
    "driver",
    "General worker",
    "factory worker",
    "cleaning worker",
    "housekeeping",
    "general labour",
    "Techinician",
    "Accountant",
    "light driver",
    'delivery driver',
    'food packing',
    'cooker',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch("/api/SendApplication", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Application sent successfully!");
    } else {
      alert("Failed to send application. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 mt-10 w-full bg-gray-100 rounded-lg shadow-md max-w-2xl mx-auto"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold mb-4 text-gray-800"
      >
        Apply now
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <p className="text-gray-600">Please fill in the following fields to submit your application.</p>
        
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-semibold text-blue-800 mb-2">Important Note</h3>
          <p className="text-blue-600">Please select a job position from the provided categories.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.input 
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <motion.input 
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <motion.input 
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <motion.input 
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <motion.select
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            name="jobPosition"
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select Job Category</option>
            {jobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </motion.select>

          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`bg-blue-600 text-white p-3 rounded-md transition-colors duration-200 font-semibold flex items-center justify-center gap-2 ${
              isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
