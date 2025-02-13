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
    <div className=' overflow-hidden sm:w-[660px]  md:w-[1000px]lg:w-full font-serif '>
      <p className=' w-full lg:w-full lg:flex flex-col justify-center items-center mt-20 text-[30px] '>
        Training development
       
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:w-full shadow-2xl">
        {cardData.map((card, index) => (
          <Card key={index} className="hover: transition-shadow">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-[300px] rounded-2xl relative'>
                <Image 
                  src={card.imageUrl} 
                  alt={card.description} 
                  layout="fill"
                  objectFit="cover"
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