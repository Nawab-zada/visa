import Image from "next/image";
import React from 'react'

export const Almari = () => {
  return (
    <div className="flex flex-col mx-[20px] mt-10  ">
   <Image src={'/18-1.webp'} alt="logo" width={500} height={500} className=" sm:w-[460px] sm:mr-[160px] sm:p-4 md:mx-[400px]"/>

   <div className=" sm:text-xs w-[300px] lg:w-full lg:text-2xl sm:w-[440px] ">Although there is information suggesting that Al-Mrai can assist with work visas for potential employees in Saudi Arabia, and Canada, the details can be difficult to navigate. :</div>

    </div>
  )
}
export default Almari




