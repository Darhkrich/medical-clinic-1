// components/layout/Footer.jsx
import Link from "next/link";
import { Activity, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <Activity className="text-teal-500 h-6 w-6" />
            <span>Clinic<span className="text-teal-500">Name</span></span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Delivering exceptional medical care through innovative technology and compassionate specialists.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
            <li><Link href="/doctors" className="hover:text-teal-400 transition-colors">Find a Doctor</Link></li>
            <li><Link href="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
            <li><Link href="/book" className="hover:text-teal-400 transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-teal-500" />
              <span>+1 (000) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-teal-500" />
              <span>contact@medicare.clinic</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-teal-500 mt-1" />
              <span>123 Healing Way, Suite 100<br />Medical District, NY 10001</span>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="text-white font-semibold mb-4">Operating Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Mon - Fri</span>
              <span className="text-white">8:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Saturday</span>
              <span className="text-white">9:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Sunday</span>
              <span className="text-teal-400 font-medium">Emergency Only</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} DevMasters. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}