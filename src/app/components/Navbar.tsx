'use client'


import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white ">Almarai</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-black text-white">Home</Link>
          <Link href="/walmarai" className="hover:text-blue-600 text-white">About</Link>
          <Link href="/create" className="hover:text-blue-600 text-white">Apply</Link>
          <Link href="/jobs" className="hover:text-blue-600 text-white">Job Available</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-red-500  z-10 bg-blue-900 shadow-md flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="text-black hover:text-white">Home</Link>
          <Link href="/walmarai" className="text-black hover:text-white">About</Link>
          <Link href="/create" className="text-black hover:text-white">Apply</Link>
          <Link href="/jobs" className="text-black hover:text-white ">Job Available</Link>
        </div>
      )}
    </nav>
  );
}
