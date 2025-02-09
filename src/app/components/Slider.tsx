'use client'
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/components/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import Image from 'next/image';
import MouthwateringMeals from './Mouthwatering';

const testimonials = [
  { id: 1, content: "This product completely transformed our workflow.", author: "Sarah Johnson", role: "Product Manager", company: "TechCorp", image: "/one.jpeg" },
  { id: 2, content: "Outstanding support team and feature set.", author: "Michael Chen", role: "CTO", company: "Innovation Labs", image: "/two.jpeg" },
  { id: 3, content: "The best investment we've made this year.", author: "Emma Rodriguez", role: "Operations Director", company: "Global Solutions", image: "/three.jpeg" },
  { id: 4, content: "The best investment we've made this year.", author: "Emma Rodriguez", role: "Operations Director", company: "Global Solutions", image: "/four.jpeg" }
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);
  const [user] = useAuthState(auth);
  const router = useRouter();

  // Redirect to sign-in page if user is not authenticated
  useEffect(() => {
    const userSession = sessionStorage.getItem('user');
    if (!user && !userSession) {
      router.push('/sign-in');
    }
  }, [user, router]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setFadeOpacity(0);
      setTimeout(() => {
        emblaApi.scrollNext();
        setFadeOpacity(1);
      }, 1500);
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
      <button onClick={() => {
          signOut(auth);
          sessionStorage.removeItem('user');
        }}>
        Log out
      </button>

      {/* Carousel and MouthwateringMeals Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Carousel Section */}
        <div 
          className="relative mx-auto h-[500px] w-full flex bg-blue-800 lg:h-[800px] lg:py-11"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden w-[450px] lg:w-[800px]" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] relative fade-transition" style={{ opacity: fadeOpacity }}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-8 group">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={500} 
                        height={500} 
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mouthwatering Meals Component */}
        <MouthwateringMeals />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
