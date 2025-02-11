import React from 'react'
import Image from 'next/image'
const Almarias= () => {
  return (
    <div className='flex flex-col lg:flex-row    '>
         <Image src={'/one.jpeg'} alt='logo' width={480} height={500} className=' sm:w-[480] md:w-[1200px]'/>
     <div className=' w-full sm:w-[480px]  lg:w-[700px]  bg-blue-900   text-white'>
          
          <p className='p-6   lg:w-full'>
            people our most important assests.Attracting the right people Training them and providing the resources they need  to stastify the requirement of a world-class food company continues to b a major part    
          </p>
          

     </div>

    <div>

    </div >
   
    </div>
  )
}

export default Almarias