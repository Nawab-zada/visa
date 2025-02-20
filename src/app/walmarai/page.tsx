import React from 'react'
import Image from 'next/image'
const Almaria= () => {
  return (
    <div className='flex flex-col md:flex-col md:w-[1000px] lg:flex-row overflow-hidden font-serif lg:w-full '>
     <div className='overflow-hidden lg:w-1/2  bg-blue-900 mt-[30px] h-[500px] lg:h-[700px] text-white'>
          <h1 className='flex   font-bold text-[30px] font-serif '>Working with Almarai</h1>
          <p className='p-2 '>
            people our most important assests.Attracting the right people Training them and providing the resources they need  to stastify the requirement of a world-class food company continues to b a major part    
          </p>
          <p className='p-2'>Almarai invests in its talentsto maintain its competitive  advantage. We believe in creating a learning organization, where individuals are provided opportunities to enhance their abilities and to perform their roles effectively. A comprehensive induction program, combined with training and development initiatives. Great importance is also placed on improving employee awareness of health and safety issues and appropriate training is provided.</p>
          <button className='bg-white text-black font-sans p-2 mx-3 rounded-md '>
            Read more
          </button>
     </div>

    <div>

    </div >
     <Image src={'/three.jpeg'} alt='logo' width={1000} height={700} className=' overflow-hidden lg:w-1/2 mt-7 md:w-[1100px] '/>
    </div>
  )
}

export default Almaria