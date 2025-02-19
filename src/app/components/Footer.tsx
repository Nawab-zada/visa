"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Youtube, Rss, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="font-serif overflow-hidden w-full md:w-[1000px] lg:w-full  sm:w-[660px] sm:overflow-hidden ">
      {/* Contact Form Section */}
      <div className="bg-[#2642c0] text-white  px-4">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm">
                First name
              </label>
              <Input id="firstName" className="w-full bg-white text-black" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <Input id="email" type="email" className="w-full bg-white text-black" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" />
              <label
                htmlFor="privacy"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the privacy policy
              </label>
            </div>
            <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-black text-white py-8 px-4 overflow-hidden">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#" className="hover:opacity-80">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Rss className="h-6 w-6" />
              <span className="sr-only">RSS Feed</span>
            </Link>
          </div>
          <p className="text-center text-sm">© 2024 Almarai</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="bg-white shadow-lg ">
      <Link
        href="https://wa.me/+966599916876"
        className="fixed bottom-4 left-4 bg-[#25D366] p-3 rounded-full hover:opacity-90 transition-opacity mb-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="white"
          className="w-4 h-4"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="sr-only text-blue-50">Contact us on WhatsApp</span>
      </Link>
      </div>
    </footer>
  )
}

