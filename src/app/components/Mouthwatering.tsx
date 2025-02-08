import React from 'react';

const MouthwateringMeals = () => {
  return (
    <div className=" text-white px-8 py-12 rounded-lg w-[350px] lg:w-[800px] h-[800px] mt-[200px]">
      <h2 className="text-3xl font-bold mb-6">Mouthwatering Meals For The Whole Family To Enjoy!</h2>
      <p className="text-lg mb-8">
        PEOPLE are our most important asset. Attracting the right people, training them, and providing the resources they need to satisfy the requirements of a world-class food company, continues to be a major priority of Almarai.
      </p>
      <div className="grid grid-cols-3 gap-6">
        <div className="   p-4">
          <img src="/yougurt.png" alt="Pasta Dish" className="w-full h-32 object-cover rounded-t-md" />
          <h3 className="text-blue-500 font-bold mt-2"></h3>
        </div>
        <div className="    ">
          <img src="/creamychicken.png" alt="Soup" className="w- h-25  mt-4" />
          <h3 className="text-blue-500 font-bold mt-2"></h3>
        </div>
        <div className=" rounded-md  p-4">
          <img src="/pumpkinsoup.png" alt="Pastries" className="w-full h-32 object-cover rounded-t-md" />
        
        </div>
      </div>
    </div>
  );
};

export default MouthwateringMeals;