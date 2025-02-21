import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfessionalCards = () => {
  const cardData = [
    {
      title: "Laboratory Research",
      description: "Scientists conducting careful laboratory work",
      imageUrl: "/lab.png"
    },
    {
      title: "workplace",
      description: "Businessmen shaking hands in a professional setting",
      imageUrl: "/work.png"
    },
    {
      title: "Workplace Interaction",
      description: "Colleagues engaging in a friendly conversation",
      imageUrl: "/interaction.png"
    }
  ];
  
  return (
    <div className=' overflow-hidden    md:w-[1000px] lg:w-full font-serif '>
      <p className='  flex justify-center mb-3 mt-20 text-[30px] '>
        Training development
       
      </p>
      <div className="grid grid-cols-1 min-w-md md:grid-cols-3 lg:grid-cols-3 gap-4 md:w-full shadow-2xl">
        {cardData.map((card, index) => (
          <Card key={index} className="hover: transition-shadow">
            <CardHeader className=''>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className=' w-[300px] h-[300px] lg:w-[350px] rounded-2xl relative'>
                <Image 
                  src={card.imageUrl} 
                  alt={card.description} 
                  layout="fill"
                  
                  className="rounded-2xl"
                  priority={index === 0} // Prioritize first image for better LCP
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCards;