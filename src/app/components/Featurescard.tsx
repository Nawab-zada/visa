
'use client'

import React, { useState } from "react";
import { 
  FaHardHat, FaShieldAlt, FaCashRegister, FaTruck, FaUsers, 
  FaPlug, FaBroom, FaConciergeBell, FaTools, FaCalculator, 
  FaCar, FaShippingFast, FaBox, FaUtensils 
} from "react-icons/fa";

const features = [
  { title: "Factory Worker", description: "Work in a factory setting, handling machinery and production tasks.", salary: 2500, icon: <FaHardHat size={30} /> },
  { title: "Security Guard", description: "Ensure safety and security at company premises.", salary: 3500, icon: <FaShieldAlt size={30} /> },
  { title: "Cashier", description: "Manage transactions, handle cash, and assist customers.", salary: 4000, icon: <FaCashRegister size={30} /> },
  { title: "Driver", description: "Transport goods and employees safely to designated locations.", salary: 3500, icon: <FaTruck size={30} /> },
  { title: "General Worker", description: "Perform various labor tasks as required by the company.", salary: 2400, icon: <FaUsers size={30} /> },
  { title: "Electrician", description: "Install, maintain, and repair electrical systems.", salary: 3500, icon: <FaPlug size={30} /> },
  { title: "Cleaning Worker", description: "Ensure cleanliness and hygiene in work areas.", salary: 2100, icon: <FaBroom size={30} /> },
  { title: "Housekeeping", description: "Maintain rooms and common areas clean and tidy.", salary: 3000, icon: <FaConciergeBell size={30} /> },
  { title: "General Labour", description: "Assist in various manual labor tasks within the company.", salary: 3500, icon: <FaUsers size={30} /> },
  { title: "Technician", description: "Repair and maintain company machinery and systems.", salary: 3500, icon: <FaTools size={30} /> },
  { title: "Accountant", description: "Manage financial records and transactions.", salary: 6000, icon: <FaCalculator size={30} /> },
  { title: "Light Driver", description: "Drive light vehicles for company operations.", salary: 2500, icon: <FaCar size={30} /> },
  { title: "Delivery Driver", description: "Deliver goods to customers in a timely manner.", salary: 2500, icon: <FaShippingFast size={30} /> },
  { title: "Food Packing", description: "Pack and prepare food products for distribution.", salary: 2200, icon: <FaBox size={30} /> },
  { title: "Cooker", description: "Prepare and cook meals according to company standards.", salary: 3000, icon: <FaUtensils size={30} /> },
];

const FeatureCards = () => {
  const [search, setSearch] = useState("");
  const [salaryRange, setSalaryRange] = useState(""); // Stores selected salary range

  // Filter jobs based on search and salary range
  const filteredFeatures = features.filter((feature) => {
    const matchesSearch = feature.title.toLowerCase().includes(search.toLowerCase());
    const matchesSalary =
      salaryRange === "" ||
      (salaryRange === "below2500" && feature.salary < 2500) ||
      (salaryRange === "2500-3500" && feature.salary >= 2500 && feature.salary <= 3500) ||
      (salaryRange === "above3500" && feature.salary > 3500);

    return matchesSearch && matchesSalary;
  });

  return (
    <div className="flex flex-col items-center w-full p-5">
      {/* Search Bar & Salary Filter */}
      <div className="w-full max-w-md flex flex-col md:flex-row gap-4 items-center mb-6">
        <input 
          type="text"
          placeholder="Search for a job..."
          className="w-full md:w-[60%] p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Salary Filter Dropdown */}
        <select
          className="w-full md:w-[40%] p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
        >
          <option value="">All Salaries</option>
          <option value="below2500">Below SAR 2500</option>
          <option value="2500-3500">SAR 2500 - 3500</option>
          <option value="above3500">Above SAR 3500</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 gap-6 md:w-[1000px] lg:w-full font-serif md:p-10 md:grid-cols-2 lg:grid-cols-3 md:gap-7 p-10 lg:p-0 overflow-hidden">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-500 text-white p-6 lg:mx-4 lg:p-6 h-[250px] flex flex-col justify-center items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-bold mt-3">{feature.title}</h3>
              <p className="mt-1">{feature.description}</p>
              <p className="mt-2 font-bold">SAR {feature.salary}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500 font-semibold text-lg">No jobs found</p>
        )}
      </div>

      {/* Footer */}
      <div className="font-serif flex justify-center items-center w-full md:ml-[100px] lg:w-full lg:text-[35px] text-center mt-6">
        Almarai Company Visa 2024 - Almarai Jobs Saudi Arabia, Canada 2024
      </div>
    </div>
  );
};

export default FeatureCards;


