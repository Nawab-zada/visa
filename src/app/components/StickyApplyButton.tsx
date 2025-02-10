"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function StickyApplyButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/create")}
     
      className="fixed right-[40px] lg:right-0 top-1/2  bg-blue-600 text-white  md:px-4 md:py-2 text-lg md:text-sm rounded-l-lg flex items-center gap-2 shadow-lg hover:bg-blue-700 "
    >
      <span className=" ">Apply Now</span> 
      <FaArrowRight className="text-xl md:text-base" />
    </motion.button>
  );
}
