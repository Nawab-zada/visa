import React from 'react';

const MouthwateringMeals = () => {
  return (
    <div className=" text-black px-8 py-12  w-full    lg:w-[900px] lg:h-[800px]  bg-blue-800">
      <h2 className="lg:text-3xl  font-bold mb-6 mx-8 lg:mt-[260px]">Mouthwatering Meals For The Whole Family To Enjoy!</h2>
      <p className="text-lg mb-8  mx-8">
        PEOPLE are our most important asset. Attracting the right people, training them, and providing the resources they need to satisfy the requirements of a world-class food company, continues to be a major priority of Almarai.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="p-4">
    <img src="/yougurt.png" alt="Pasta Dish" className="w-full h-40 sm:h-48 lg:h-32 " />
    <h3 className="text-blue-500 font-bold mt-2">Yogurt</h3>
  </div>

  <div className="p-4">
    <img src="/creamychicken.png" alt="Soup" className="w-full h-40 sm:h-48 lg:h-32 " />
    <h3 className="text-blue-500 font-bold mt-2">Creamy Chicken</h3>
  </div>

  <div className="p-4">
    <img src="/pumpkinsoup.png" alt="Pastries" className="w-full h-40 sm:h-48 lg:h-32 " />
    <h3 className="text-blue-500 font-bold mt-2">Pumpkin Soup</h3>
  </div>
</div>
    </div>
  );
};

export default MouthwateringMeals;