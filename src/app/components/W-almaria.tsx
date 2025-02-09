import React from 'react'
import Image from 'next/image'
const Almaria= () => {
  return (
    <div className='flex flex-col lg:flex-row'>
     <div className=' w-[400px] lg:w-[700px]  bg-blue-900 mt-[30px]  text-white'>
          <h1 className='flex   font-bold text-[40px] p-12 '>Working with Almarai</h1>
          <p className='p-6'>
            people our most important assests.Attracting the right people Training them and providing the resources they need  to stastify the requirement of a world-class food company continues to b a major part    
          </p>
          <p className='p-6'>Almarai invests in its talentsto maintain its competitive  advantage. We believe in creating a learning organization, where individuals are provided opportunities to enhance their abilities and to perform their roles effectively. A comprehensive induction program, combined with training and development initiatives. Great importance is also placed on improving employee awareness of health and safety issues and appropriate training is provided.</p>

     </div>

    <div>

    </div >
     <Image src={'/three.jpeg'} alt='logo' width={700} height={700} className='mt-7'/>
    </div>
  )
}

export default Almaria