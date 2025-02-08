import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfessionalCards = () => {
  const cardData = [
    {
      title: "Laboratory Research",
      description: "Scientists conducting careful laboratory work",
      imageUrl: "/Development.webp"
    },
    {
      title: "Professional Collaboration",
      description: "Businessmen shaking hands in a professional setting",
      imageUrl: "/044.webp"
    },
    {
      title: "Workplace Interaction",
      description: "Colleagues engaging in a friendly conversation",
      imageUrl: "/033.webp"
    }
  ];

  return (
    < div>
                <p className='flex flex-col justify-center items-center mt-20 text-[40px]'>
                    Training development
                    <div className='bg-yellow-400 h-1 w-[160px]'
                    
                    
                    ></div>
                </p>
    <div className="grid grid-cols-3 gap-4 p-20 shadow-2xl">
      {cardData.map((card, index) => (
        <Card key={index} className="hover: transition-shadow">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='h-[500] rounded-'>
            <img 
              src={card.imageUrl} 
              alt={card.description} 
              className="w-full h-[300px] object-cover p-3 rounded-2xl  mb-2"
            /></div>
           
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default ProfessionalCards;