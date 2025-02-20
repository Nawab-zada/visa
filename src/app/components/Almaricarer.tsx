
import React from "react";

const Almaricareer = () => {
  return (
    <div className="overflow-hidden min-w-fit flex flex-col mt-3 bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-[24px] font-bold font-serif text-center mb-4">
        🌟 About Jobs at Almarai 🌟
      </h1>

      {/* Description */}
      <p className="font-serif text-lg leading-relaxed">
        Almarai is offering <strong>exciting job opportunities</strong> in various fields, including{" "}
        <strong>security, technical, and driving jobs</strong>.  
        The company provides a <strong>free visa and ticket</strong>, making it easier for international workers to apply.  
        These jobs offer <strong>competitive salaries</strong> and a chance to work in{" "}
        <strong>Saudi Arabia&apos;s growing industry</strong>.
      </p>

      <p className="font-serif text-lg font-semibold mt-4 text-center">
        ✅ Looking for a <strong>stable job</strong> with great benefits?  
        ✅ This is your chance to <strong>secure your future</strong> with Almarai!
      </p>

      {/* Facilities Section */}
      <div className="flex flex-col justify-center items-center bg-white text-black p-4 rounded-lg mt-6 shadow-lg">
        <h2 className="font-bold text-2xl mb-2">🏆 FACILITIES 🏆</h2>
        <ul className="text-lg">
          <li>✔ Free Visa</li>
          <li>✔ Free Ticket</li>
          <li>✔ Free Accommodation</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-white text-black text-center font-serif p-4 rounded-lg shadow-md w-[250px] mx-auto mt-6">
        <p className="font-semibold">
          📢 Interested in applying?  
          Contact us via <strong>WhatsApp</strong> or <strong>Email</strong> by clicking the buttons  
          for the following job categories.
        </p>
      </div>
    </div>
  );
};

export default Almaricareer;

