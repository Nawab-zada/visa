import Image from "next/image";
import React from 'react'

export const Almari = () => {
  return (
    <div className="flex flex-col mx-[20px] mt-10  overflow-hidden  ">
   <Image src={'/18-1.webp'} alt="logo" width={500} height={500} className=" lg: sm:w-[650px] sm:p-4 "/>

   <div className=" min-w-fit md:w-[750px]  sm:text-xs w-full lg:w-full lg:text-2xl sm:w-[640px] ">Although there is information suggesting that Al-Mrai can assist with work visas for potential employees in Saudi Arabia, and Canada, the details can be difficult to navigate. :</div>

    </div>
  )
}
export default Almari




