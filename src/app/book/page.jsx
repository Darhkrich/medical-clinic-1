// app/book/page.jsx (or pages/book.js for Pages Router)
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/features/BookingForm";
import FloatingLinkButton from "@/components/floatingButton";
import { doctors } from "@/data/doctors";
import Image from "next/image";
import { Calendar, Clock, MapPin, Star, Award } from "lucide-react";

export default async function BookPage({ searchParams }) {
  const params = await searchParams;
  const doctorId = params?.doctor || "";
  const serviceName = params?.service || "";

  // Find the selected doctor (if ID provided)
  const selectedDoctor = doctorId ? doctors.find(d => d.id === Number(doctorId)) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <Navbar />
      <FloatingLinkButton />
      
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Schedule Your Visit
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Fill in your details below to secure your appointment with our specialists.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Booking Form Column */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 p-5 sm:p-6 md:p-8">
                <BookingForm 
                  preSelectedDoctorId={doctorId} 
                  preSelectedService={serviceName} 
                />
              </div>
            </div>

            {/* Sidebar - Appointment Summary / Selected Doctor */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 p-5 sm:p-6 sticky top-20">
                <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  Appointment Summary
                </h2>

                {/* Pre-filled Service Info */}
                {serviceName && (
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Service</p>
                    <p className="font-medium text-slate-800">{decodeURIComponent(serviceName)}</p>
                  </div>
                )}

                {/* Selected Doctor Card */}
                {selectedDoctor ? (
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Your Specialist</p>
                    <div className="flex items-start gap-3">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-teal-50 border border-teal-100">
                        {selectedDoctor.image ? (
                          <Image
                            src={selectedDoctor.image}
                            alt={selectedDoctor.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-teal-700 font-bold text-lg">
                            {selectedDoctor.name.split(' ')[1]?.[0] || 'D'}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 truncate">{selectedDoctor.name}</p>
                        <p className="text-sm text-slate-500">{selectedDoctor.specialty}</p>
                        {selectedDoctor.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-slate-600">{selectedDoctor.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {selectedDoctor.experienceYears && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                        <Award className="w-4 h-4 text-teal-600" />
                        <span>{selectedDoctor.experienceYears}+ years experience</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <p className="text-sm text-slate-500 italic">No doctor pre-selected. You can choose one in the form.</p>
                  </div>
                )}

                {/* Visit Information */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-700">Appointment Duration</p>
                      <p className="text-slate-500">30-60 minutes depending on visit type</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-700">Location</p>
                      <p className="text-slate-500">123 Medical Plaza, Suite 200<br />Healthcare City, HC 12345</p>
                    </div>
                  </div>
                </div>

                {/* Insurance Note */}
                <div className="mt-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-600">
                    <span className="font-medium">Insurance:</span> We accept most major plans. Please bring your card to your visit.
                  </p>
                </div>

                {/* Need Help Link */}
                <div className="mt-4 text-center">
                  <a 
                    href="tel:+1234567890" 
                    className="text-xs text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Need assistance? Call (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}