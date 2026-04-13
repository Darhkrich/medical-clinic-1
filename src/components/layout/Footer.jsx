// components/layout/Footer.jsx
import Link from "next/link";
import { 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 

  ChevronRight,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 mb-12 border border-slate-700 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-sm sm:text-base text-slate-400">
                Subscribe to our newsletter for health tips, clinic updates, and exclusive offers.
              </p>
            </div>
            <form className="flex-1 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-center sm:text-left"
                aria-label="Email for newsletter"
              />
              <Button type="submit" size="md" className="sm:w-auto">
                Subscribe
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Grid - centered on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4 text-center sm:text-left">
            <Link href="/" className="flex items-center justify-center sm:justify-start gap-2 font-bold text-xl text-white">
              <Activity className="text-teal-500 h-6 w-6" />
              <span>Medi<span className="text-teal-500">Care</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Delivering exceptional medical care through innovative technology and compassionate specialists.
            </p>
         
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors inline-flex items-center gap-1 group justify-center sm:justify-start">
                  <ChevronRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-teal-400 transition-colors inline-flex items-center gap-1 group justify-center sm:justify-start">
                  <ChevronRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors inline-flex items-center gap-1 group justify-center sm:justify-start">
                  <ChevronRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-teal-400 transition-colors inline-flex items-center gap-1 group justify-center sm:justify-start">
                  <ChevronRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors inline-flex items-center gap-1 group justify-center sm:justify-start">
                  <ChevronRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Phone className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Mail className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">contact@medicare.clinic</span>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  123 Healing Way, Suite 100<br />Medical District, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2 justify-center sm:justify-start">
              <Clock className="w-4 h-4 text-teal-500" />
              Operating Hours
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2 flex-col xs:flex-row gap-1">
                <span className="text-slate-400">Monday - Friday</span>
                <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2 flex-col xs:flex-row gap-1">
                <span className="text-slate-400">Saturday</span>
                <span className="text-white font-medium">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between items-center flex-col xs:flex-row gap-1">
                <span className="text-slate-400">Sunday</span>
                <span className="text-teal-400 font-medium">Emergency Only</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-xs text-slate-400">
                <span className="text-teal-400 font-semibold">24/7 Emergency:</span> Call 911 or visit our ER
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - centered on mobile */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 text-center sm:text-left">
          <p>&copy; {currentYear} MediCare Clinic. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}