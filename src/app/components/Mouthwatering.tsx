import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

const MouthwateringMeals = () => {
  return (
    <div className="  text-white py-12       bg-blue-800  ">
      <h2 className=" p-6  text-3xl lg:text-3xl font-bold    font-serif">
        Mouthwatering Meals For The Whole Family To Enjoy!
      </h2>
      
      <p className="text-1xl mb-8 mx-8 font-serif">
        PEOPLE are our most important asset. Attracting the right people, training them, and providing the resources they need to satisfy the requirements of a world-class food company, continues to be a major priority of Almarai.
      </p>

      <div className="grid grid-cols-1 md:grid-col-2 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-4">
          <Image
            src="/yougurt.png"
            alt="Yogurt"
            width={300} // ✅ Add width
            height={200} // ✅ Add height
            className="h-[200px] w-[200px] mx-auto min-w-md lg:h-32 md:h-[200px] md:w-[400px] md:flex md:mx-auto"
          />
          <h3 className="text-white font-bold mt-2 text-center font-serif">Yogurt</h3>
        </div>

        <div className="p-4">
          <Image
            src="/creamychicken.png"
            alt="Creamy Chicken"
            width={300}
            height={200}
            className=" h-[200px] w-[200px] mx-auto lg:h-32 md:h-[200px] md:w-[400px] md:flex md:mx-auto"
          />
          <h3 className="text-white font-bold mt-2 text-center font-serif ">Creamy Chicken</h3>
        </div>

        <div className="p-4">
          <Image
            src="/pumpkinsoup.png"
            alt="Pumpkin Soup"
            width={300}
            height={200}
            className="h-[200px] w-[200px] mx-auto  lg:h-32 md:h-[200px] md:w-[400px] md:flex md:mx-auto"
          />
          <h3 className="text-white text-center font-bold mt-2 font-serif">Pumpkin Soup</h3>
        </div>
      </div>
    </div>
  );
};

export default MouthwateringMeals;