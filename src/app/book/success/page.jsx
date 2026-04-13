// app/success/page.jsx (or pages/success.js for Pages Router)
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Mail, 
  ArrowLeft,
  Download,
  Share2
} from "lucide-react";

export default function SuccessPage() {
  // In a real app, you'd fetch appointment details from context, URL params, or session
  // For now, we'll use static example data
  const appointmentDetails = {
    doctor: "Dr. Sarah Jenkins",
    specialty: "Cardiology",
    date: "Monday, May 15, 2026",
    time: "10:30 AM",
    location: "123 Medical Plaza, Suite 200, Healthcare City",
    confirmationNumber: "APT-2026-0515-001",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="max-w-xl w-full">
          {/* Success Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Header with gradient accent */}
            <div className="relative bg-gradient-to-r from-teal-500 to-emerald-500 px-6 sm:px-8 py-10 sm:py-12 text-center">
              <div className="absolute inset-0 bg-white/10 pattern-dots opacity-20" />
              
              <div className="relative z-10">
                <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-5 shadow-lg">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Appointment Confirmed!
                </h1>
                <p className="text-teal-50 text-sm sm:text-base max-w-md mx-auto">
                  Your booking has been successfully scheduled. We look forward to seeing you.
                </p>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="p-6 sm:p-8">
              {/* Confirmation Number */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Confirmation Number
                </p>
                <p className="text-xl sm:text-2xl font-mono font-semibold text-slate-800 tracking-wide">
                  {appointmentDetails.confirmationNumber}
                </p>
              </div>

              {/* Details Grid */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Date & Time</p>
                    <p className="font-medium text-slate-800">
                      {appointmentDetails.date} at {appointmentDetails.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Provider</p>
                    <p className="font-medium text-slate-800">
                      {appointmentDetails.doctor} · {appointmentDetails.specialty}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium text-slate-800">
                      {appointmentDetails.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-amber-800 text-sm mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Important
                </h3>
                <ul className="text-sm text-amber-700 space-y-1.5">
                  <li>• Please arrive 10-15 minutes before your appointment time.</li>
                  <li>• Bring your insurance card and photo ID.</li>
                  <li>• A confirmation email has been sent to your address.</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return Home
                  </Button>
                </Link>
                <Button variant="secondary" className="flex-1" onClick={() => window.print()}>
                  <Download className="w-4 h-4 mr-2" />
                  Save Details
                </Button>
              </div>

              {/* Additional Links */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/appointments" 
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  View My Appointments
                </Link>
                <span className="text-slate-300">|</span>
                <Link 
                  href="/contact" 
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Need to Reschedule?
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-xs text-slate-500 mt-6">
            A confirmation email has been sent to your registered email address.
            <br className="hidden sm:block" />
            Please check your spam folder if you don't see it.
          </p>
        </div>
      </main>
    </div>
  );
}