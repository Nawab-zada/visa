import React from 'react'
import Image from 'next/image'
const Almarias= () => {
  return (
    <div className='flex flex-col lg:flex-row    '>
         <Image src={'/one.jpeg'} alt='logo' width={700} height={500} className=' sm:w-[700px] md:w-[1000px]'/>
     <div className=' w-full sm:w-[600px] md:w-[780px]  lg:w-[700px]  bg-blue-900   text-white'>
          
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