import React from 'react'
import Image from 'next/image'
const Almarias= () => {
  return (
    <div className='flex flex-col lg:flex-row overflow-hidden mt-3  '>
         <Image src={'/one.jpeg'} alt='logo' width={700} height={500} className='lg:w-1/2 sm:w-[660px] md:w-[1100px]'/>
     <div className='overflow-hidden w-full sm:w-[660px] md:w-[1000px]  lg:w-1/2  bg-blue-900   text-white'>
          
          <p className='p-6    lg:w-full'>
            people our most important assests.Attracting the right people Training them and providing the resources they need  to stastify the requirement of a world-class food company continues to b a major part    
          </p>
          

     </div>

    <div>

    </div >
   
    </div>
  )
}

export default Almarias