import React from 'react'
import Image from 'next/image'
const Almarias= () => {
  return (
    <div className=' min-w-md flex flex-col lg:w-full md:w-[1000px] lg:flex-row overflow-hidden mt-3  '>
         <Image src={'/one.jpeg'} alt='logo' width={1000} height={500} className='lg:w-1/2 '/>
     <div className='overflow-hidden  lg:w-1/2  bg-blue-900   text-white'>
          
          <p className='p-6 font-serif   lg:w-full'>
            people our most important assests.Attracting the right people Training them and providing the resources they need  to stastify the requirement of a world-class food company continues to b a major part    
          </p>
          

     </div>

    <div>

    </div >
   
    </div>
  )
}

export default Almarias