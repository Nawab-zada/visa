import React from 'react'
import Image from 'next/image'
const Almarias= () => {
  return (
    <div className=' min-w-md  flex flex-col lg:w-full md:w-[1000px] lg:flex-row overflow-hidden mt-3  '>
         <Image src={'/one.jpeg'} alt='logo' width={1000} height={500} className='lg:w-1/2 '/>
     <div className='overflow-hidden lg:h-[950px] lg:w-1/2  bg-blue-900 h-[800px]   text-white'>
             <h1 className='mx-auto  p-2 flex justify-center font-semibold text-[25px]'>Work Environment</h1>
          <p className='p-6 font-serif   lg:w-full'>
          Almarai fosters a professional and dynamic work environment that encourages growth, innovation, and teamwork. Employees work in modern facilities equipped with the latest technology, ensuring efficiency and high standards in production and operations.

The company promotes a diverse and inclusive workplace, where employees from different nationalities collaborate in a respectful and supportive atmosphere. Training and career development programs help employees enhance their skills and advance within the organization.

Almarai prioritizes employee well-being, offering safe working conditions, free accommodation, transportation, and healthcare benefits. The company follows strict health and safety policies to ensure a secure workplace for all staff.

 🚀   
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