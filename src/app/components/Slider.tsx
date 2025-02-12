'use client'
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import MouthwateringMeals from './Mouthwatering'; 

const testimonials = [
  {
    id: 1,
    content: "This product completely transformed our workflow. The efficiency gains were immediate and substantial.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/one.jpeg"
  },
  {
    id: 2,
    content: "Outstanding support team and feature set. It's been a game-changer for our organization.",
    author: "Michael Chen",
    role: "CTO",
    company: "Innovation Labs",
    image: "/two.jpeg"
  },
  {
    id: 3,
    content: "The best investment we've made this year. The ROI has been exceptional.",
    author: "Emma Rodriguez",
    role: "Operations Director",
    company: "Global Solutions",
    image: "/three.jpeg"
  },
  {
    id: 4,
    content: "The best investment we've made this year. The ROI has been exceptional.",
    author: "Emma Rodriguez",
    role: "Operations Director",
    company: "Global Solutions",
    image: "/four.jpeg"
  }
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);
  

 

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setFadeOpacity(0);
      setTimeout(() => {
        emblaApi.scrollNext();
        setFadeOpacity(1);
      }, ); // Set a small delay for the transition effect
    }
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (autoplayInterval) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 3000);
    setAutoplayInterval(interval);
  }, [autoplayInterval, scrollNext]);

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    }
  }, [autoplayInterval]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  return (
    <div>
      

      {/* Container for carousel and MouthwateringMeals */}
      <div className=' overflow-hidden flex flex-col lg:flex-row mt-16'>
        {/* Testimonial Carousel */}
        <div 
          className="  overflow-hidden relative   sm:w-[660px] h-[500px] w-full md:w-[1000px]  flex bg-blue-800 lg:h-[800px] lg:py-11 lg:w-1/2"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden   md:w-[1000px] w-[450px] lg:w-[800px]" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={`flex-[0_0_100%] relative fade-transition`} style={{ opacity: fadeOpacity }}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-5 group">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={800}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MouthwateringMeals Component */}
        <MouthwateringMeals />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
