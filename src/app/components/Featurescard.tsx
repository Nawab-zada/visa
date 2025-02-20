import React from "react";
import { 
  FaHardHat, FaShieldAlt, FaCashRegister, FaTruck, FaUsers, 
  FaPlug, FaBroom, FaConciergeBell, FaTools, FaCalculator, 
  FaCar, FaShippingFast, FaBox, FaUtensils 
} from "react-icons/fa";

const features = [
  {
    title: "Factory Worker",
    description: "Work in a factory setting, handling machinery and production tasks.",
    salary: "SAR 2500",
    icon: <FaHardHat size={30} />,
  },
  {
    title: "Security Guard",
    description: "Ensure safety and security at company premises.",
    salary: "SAR 3500",
    icon: <FaShieldAlt size={30} />,
  },
  {
    title: "Cashier",
    description: "Manage transactions, handle cash, and assist customers.",
    salary: "SAR 4000",
    icon: <FaCashRegister size={30} />,
  },
  {
    title: "Driver",
    description: "Transport goods and employees safely to designated locations.",
    salary: "SAR 3500",
    icon: <FaTruck size={30} />,
  },
  {
    title: "General Worker",
    description: "Perform various labor tasks as required by the company.",
    salary: "SAR 2400",
    icon: <FaUsers size={30} />,
  },
  {
    title: "Electrician",
    description: "Install, maintain, and repair electrical systems.",
    salary: "SAR 3500",
    icon: <FaPlug size={30} />,
  },
  {
    title: "Cleaning Worker",
    description: "Ensure cleanliness and hygiene in work areas.",
    salary: "SAR 2100",
    icon: <FaBroom size={30} />,
  },
  {
    title: "Housekeeping",
    description: "Maintain rooms and common areas clean and tidy.",
    salary: "SAR 3000",
    icon: <FaConciergeBell size={30} />,
  },
  {
    title: "General Labour",
    description: "Assist in various manual labor tasks within the company.",
    salary: "SAR 3500",
    icon: <FaUsers size={30} />,
  },
  {
    title: "Technician",
    description: "Repair and maintain company machinery and systems.",
    salary: "SAR 3500",
    icon: <FaTools size={30} />,
  },
  {
    title: "Accountants",
    description: "Manage financial records and transactions.",
    salary: "SAR 6000",
    icon: <FaCalculator size={30} />,
  },
  {
    title: "Light Driver",
    description: "Drive light vehicles for company operations.",
    salary: "SAR 2500",
    icon: <FaCar size={30} />,
  },
  {
    title: "Delivery Driver",
    description: "Deliver goods to customers in a timely manner.",
    salary: "SAR 2500",
    icon: <FaShippingFast size={30} />,
  },
  {
    title: "Food Packing",
    description: "Pack and prepare food products for distribution.",
    salary: "SAR 2200",
    icon: <FaBox size={30} />,
  },
  {
    title: "Cooker",
    description: "Prepare and cook meals according to company standards.",
    salary: "SAR 3000",
    icon: <FaUtensils size={30} />,
  },
];

const FeatureCards = () => {
  return (
    <>
              <p className="font-bold font-serif text-[30px] flex  justify-center items-center mt-2">Popular jobs categories</p>
      <div className="grid grid-cols-1 gap-6 md:w-[1000px] lg:w-full font-serif md:p-10 md:grid-cols-2 lg:grid-cols-3 md:gap-7 p-10 lg:p-0 overflow-hidden">
        {features.map((feature, index) => (
          <div key={index} className="bg-blue-500 text-white  lg:mx-4 lg:p-6 h-[150px] flex flex-col justify-center items-center text-center">
            {feature.icon}
            <h3 className="text-xl font-bold mt-3">{feature.title}</h3>
            <p className="mt-1">{feature.description}</p>
            <p className="mt-2 font-bold">{feature.salary}</p>
          </div>
        ))}
      </div>
      <div className="font-serif flex justify-center items-center w-full md:ml-[100px] lg:w-full lg:text-[35px] text-center mt-6">
        Almarai Company Visa 2024 - Almarai Jobs Saudi Arabia, Canada 2024
      </div>
    </>
  );
};

export default FeatureCards;

