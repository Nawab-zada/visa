import React from "react";
import { FaCheckCircle, FaMedal, FaUsers, FaIndustry, FaHandshake, FaWhatsapp } from "react-icons/fa";

const TrustAlmarai = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800 mt-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">🚀 Why Trust Almarai?</h2>
      
      {/* Trust Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <FaMedal className="text-blue-600 text-3xl" />
          <p className="text-lg"><strong>45+ Years of Excellence</strong> - Founded in 1977, Almarai is a leader in the food industry.</p>
        </div>

        <div className="flex items-center space-x-3">
          <FaUsers className="text-blue-600 text-3xl" />
          <p className="text-lg"><strong>40,000+ Employees</strong> - A global workforce ensuring top-quality products.</p>
        </div>

        <div className="flex items-center space-x-3">
          <FaIndustry className="text-blue-600 text-3xl" />
          <p className="text-lg"><strong>State-of-the-Art Facilities</strong> - Modern technology for safe and efficient production.</p>
        </div>

        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-blue-600 text-3xl" />
          <p className="text-lg"><strong>Trusted Quality</strong> - Certified for high food safety and excellence.</p>
        </div>

        <div className="flex items-center space-x-3">
          <FaHandshake className="text-blue-600 text-3xl" />
          <p className="text-lg"><strong>Ethical & Inclusive Workplace</strong> - A company that values integrity and diversity.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-lg font-semibold">✅ Join Almarai today and be part of a company you can trust!</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          

          {/* WhatsApp Contact Button */}
          <a
            href="https://wa.me/+966599916876" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrustAlmarai;






