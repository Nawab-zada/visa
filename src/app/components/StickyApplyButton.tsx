"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function StickyApplyButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/create")}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-l-lg flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all"
    >
      Apply Now <FaArrowRight />
    </motion.button>
  );
}
