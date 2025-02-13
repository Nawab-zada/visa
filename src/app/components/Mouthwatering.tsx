import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

const MouthwateringMeals = () => {
  return (
    <div className=" overflow-hidden text-white px-8 py-12  sm:w-[660px]  w-full lg:w-1/2 lg:h-[800px] bg-blue-800  md:w-[1000px]">
      <h2 className="lg:text-3xl font-bold mb-6 mx-8 lg:mt-[260px] font-serif">
        Mouthwatering Meals For The Whole Family To Enjoy!
      </h2>
      
      <p className="text-lg mb-8 mx-8 font-serif">
        PEOPLE are our most important asset. Attracting the right people, training them, and providing the resources they need to satisfy the requirements of a world-class food company, continues to be a major priority of Almarai.
      </p>

      <div className="grid grid-cols-1 md:grid-col-2 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-4">
          <Image
            src="/yougurt.png"
            alt="Yogurt"
            width={300} // ✅ Add width
            height={200} // ✅ Add height
            className="w-full h-40 sm:h-48 lg:h-32"
          />
          <h3 className="text-white font-bold mt-2 text-center font-serif">Yogurt</h3>
        </div>

        <div className="p-4">
          <Image
            src="/creamychicken.png"
            alt="Creamy Chicken"
            width={300}
            height={200}
            className="w-full h-40 sm:h-48 lg:h-32"
          />
          <h3 className="text-white font-bold mt-2 text-center font-serif">Creamy Chicken</h3>
        </div>

        <div className="p-4">
          <Image
            src="/pumpkinsoup.png"
            alt="Pumpkin Soup"
            width={300}
            height={200}
            className="w-full h-40 sm:h-48 lg:h-32"
          />
          <h3 className="text-white text-center font-bold mt-2 font-serif">Pumpkin Soup</h3>
        </div>
      </div>
    </div>
  );
};

export default MouthwateringMeals;