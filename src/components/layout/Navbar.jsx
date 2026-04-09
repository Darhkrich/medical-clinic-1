"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Activity, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full border-b border-slate-100 bg-white/70 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-800 z-50">
          <Activity className="text-teal-600 h-6 w-6" />
          <span>Clinic<span className="text-teal-600">Name</span></span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <Link href="/doctors" className="hover:text-teal-600 transition-colors">Specialists</Link>
          <Link href="/services" className="hover:text-teal-600 transition-colors">Services</Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/book">
            <Button>Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Glassmorphism design) */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
          <Link href="/" className="block text-lg font-medium text-slate-700 hover:text-teal-600" onClick={toggleMenu}>Home</Link>
          <Link href="/doctors" className="block text-lg font-medium text-slate-700 hover:text-teal-600" onClick={toggleMenu}>Specialists</Link>
          <Link href="/services" className="block text-lg font-medium text-slate-700 hover:text-teal-600" onClick={toggleMenu}>Services</Link>
          <div className="pt-4 border-t border-slate-100">
            <Link href="/book" onClick={toggleMenu}>
              <Button className="w-full">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}