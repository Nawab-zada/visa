import React from 'react'
import Image from 'next/image'
const Almarias= () => {
  return (
    <div className=' min-w-md  flex flex-col lg:w-full md:w-[1000px] lg:flex-row overflow-hidden mt-3  '>
         <Image src={'/one.jpeg'} alt='logo' width={1000} height={500} className='lg:w-1/2 '/>
     <div className='overflow-hidden lg:h-[950px] lg:w-1/2  bg-blue-900 h-[250px]   text-white'>
             <h1 className='mx-auto  p-2 flex justify-center font-semibold text-[25px]'>Work Environment</h1>
          <p className='p-6 font-serif   lg:w-full'>
          Encouraging positive communication among employees through periodic meetings    
          </p>
          <button className='bg-white text-black font-sans p-3 mx-3 rounded-xl '>
            Read more
          </button>

     </div>  

    <div>

    </div >
   
    </div>
  )
}

export default Almarias