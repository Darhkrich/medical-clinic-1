import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Calendar, ArrowLeft } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="glass-panel p-10 md:p-16 rounded-[2rem] max-w-lg w-full text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="mx-auto w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-8">
            <CheckCircle className="w-10 h-10 text-teal-600" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Appointment Confirmed!</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for choosing MediCare. Your appointment request has been successfully received. We have sent a confirmation email with your booking details.
          </p>

          <div className="bg-white/60 rounded-xl p-4 border border-slate-100 mb-8 flex items-center justify-center gap-3 text-slate-700 font-medium">
            <Calendar className="w-5 h-5 text-teal-600" />
            Please arrive 10 minutes early.
          </div>

          <Link href="/">
            <Button variant="outline" className="w-full h-12 bg-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}