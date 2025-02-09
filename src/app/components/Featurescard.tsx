import React from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Experienced professionals',
    description: 'Do you want to take your career to the next level?'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: '24/7 Support',
    description: 'Defacto lingo est ipgay atinlay. Marquee selectus non gravyio incongruous feline nolo contendre.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Cooperative Training',
    description: 'Broaden your knowledge by applying acquired academic knowledge to real work experience.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    title: '4 Million',
    description: 'Almarai produces 4 million liters of milk a day, an average of 40 liters per cow per day, roughly double the European average.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '9,000',
    description: 'The largest food and beverages fleet in the Middle East. Almarai fleet includes more than 9,000 vehicles.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    title: '220,000',
    description: 'Almarai products reaches 220,000 retail stores across 7 countries.'
  }
];

const FeatureCards = () => {
  return (
    < >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6    ">
      {features.map((feature, index) => (
        <div key={index} className="bg-blue-500 text-white    w-[500px] h-[250px]">
          <div className="flex items-center mb-4">
            {feature.icon}
            <h3 className="text-xl font-bold ">{feature.title}</h3>
          </div>
          <p className=''>{feature.description}</p>
        </div>
      ))}
      
    </div>
    <div className='flex justify-center items-center p-8 mx-3 w-full lg:w-full lg:text-[35px]'>Almarai Company Visa 2024 - Almarai Jobs Saudi Arabia, Canada 2024</div>
    </>
  );
};

export default FeatureCards;