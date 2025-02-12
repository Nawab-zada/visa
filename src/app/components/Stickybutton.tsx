"use client"; // For Next.js App Router (if using the app directory)
import { useRouter } from "next/navigation";

export default function StickyApplyButton() {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/create"); // Change "/apply" to your desired route
  };

  return (
    <div className="fixed right-4 bottom-10 md:bottom-20 lg:bottom-24 z-50">
      <button
        onClick={handleApplyClick}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700"
      >
        Apply Now
      </button>
    </div>
  );
}
