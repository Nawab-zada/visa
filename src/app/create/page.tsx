

"use client";
import { useState } from "react";

export default function JobForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    jobPosition: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/SendApplication", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Application sent successfully!");
    } else {
      alert("Failed to send application.");
    }
  };

  return (
    <div className="p-10 mt-10 w-full bg-gray-400 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Emails us</h2>
      <p>Fill the fallowing fields and click the submit button</p>
      <h3>NOTE</h3>
         <p>Fill the job position according the provided popular jobs catogory</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="p-2 border rounded-md" />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-2 border rounded-md" />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required className="p-2 border rounded-md" />
        <input type="text" name="jobPosition" placeholder="Job Position" onChange={handleChange} required className="p-2 border rounded-md" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">Send Email</button>
      </form>
    </div>
  );
}
