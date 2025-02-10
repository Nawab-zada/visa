import Image from 'next/image';
import React from 'react';

const Almaraipic = () => {
  return (
    <div className="relative w-[200px] h-[100px] lg:w-full">
      <Image 
        src="/Capture.png" 
        alt="capture" 
        layout="intrinsic" 
        width={500} 
        height={100} 
        className="object-contain"
      />
    </div>
  );
};

export default Almaraipic;

