"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function StickyApplyButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/create")}
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-3 md:px-4 md:py-2 text-lg md:text-sm rounded-l-lg flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all"
    >
      <span className="hidden sm:inline">Apply Now</span> 
      <FaArrowRight className="text-xl md:text-base" />
    </motion.button>
  );
}
