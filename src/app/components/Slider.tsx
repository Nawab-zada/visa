'use client'
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/components/firebase/config'
import  {useRouter}  from 'next/navigation';
import { signOut } from 'firebase/auth';
import {signInWithEmailAndPassword } from 'firebase/auth'

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
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      setFadeOpacity(0);
      setTimeout(() => {
        emblaApi.scrollPrev();
        setFadeOpacity(1);
      }, 1500);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setFadeOpacity(0);
      setTimeout(() => {
        emblaApi.scrollNext();
        setFadeOpacity(1);
      }, );
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
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

 const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');

  console.log({user})
 
  if (!user && !userSession){
    router.push('/sign-in')
  }
  const handleSignIn = async (email:string, password:any) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Check if the user's email is verified
      if (!user.emailVerified) {
        throw new Error("Please verify your email before signing in.");
      }
  
      // If email is verified, proceed with sign-in
      console.log("User signed in:", user);
      return user; // Return the user object for further use
    } catch (error) {
      console.error("Error signing in:", );
      throw error; // Re-throw the error for handling in the UI
    }
  };
  return (
    <div className=''>


    <div>
    <button onClick={() => {
        signOut(auth); // Ensure signOut is called with auth
        sessionStorage.removeItem('user');
      }}>
        Log out
      </button>
    </div>
    {/* div for both the carousel and moutwatering */}
    <div className='flex flex-col  lg:flex-row  '>
    <div 
      
      className="relative mx-auto h-[500px] w-full   flex  bg-blue-800 lg:h-[800px] lg:py-11 "
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      
      <div className="overflow-hidden w-[450px] lg:w-[800px]  " ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex-[0_0_100%]  relative fade-transition`}
              style={{ opacity: fadeOpacity }}
            >
              <div className=" flex flex-col items-center justify-center ">
                <div className="relative mb-8 group">
                  <div className="absolute  "></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                 
                   />
                </div>
                
               
              </div>
              
            </div>
          ))}
        </div>
       
      </div>

      
      
    </div>
    <MouthwateringMeals/>
    </div>
    
    </div>
  );
};

export default TestimonialCarousel;