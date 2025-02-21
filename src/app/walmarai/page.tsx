import React from 'react'
import Image from 'next/image'
const Almaria= () => {
  return (
    <div className='flex flex-col md:flex-col md:w-[1000px] lg:flex-row overflow-hidden font-serif lg:w-full '>
     <div className='overflow-hidden lg:w-1/2  bg-blue-900 mt-[30px] h-[750px] lg:h-[700px] text-white'>
          <h1 className='flex   font-bold text-[30px] font-serif '>About Almarai</h1>
          <p className='p-2 '>
          Almarai is the largest dairy and food company in the Middle East, headquartered in Riyadh, Saudi Arabia. Established in 1977, Almarai has grown into a market leader in dairy, bakery, poultry, and infant nutrition products, serving millions of customers across the GCC.

With a strong commitment to quality, innovation, and sustainability, Almarai operates cutting-edge farms, processing plants, and distribution networks to ensure the highest standards in food production. The company is dedicated to providing nutritious and high-quality products to households worldwide.

Almarai employs over 40,000 professionals across different sectors, offering excellent career opportunities in technical, logistics, security, and driving roles. The company provides free visa and ticket facilities for international workers, along with competitive salaries, accommodation, and other benefits.



Join Almarai today and become part of a world-class team driving the future of the food industry!   
          </p>
          
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