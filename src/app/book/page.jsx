

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/features/BookingForm";
import FloatingLinkButton from "@/components/floatingButton";
// 1. Add 'async' to the function component
export default async function BookPage({ searchParams }) {
  // 2. Await the searchParams Promise
  const params = await searchParams;
  
  // 3. Access the properties from the resolved object
  const doctorId = params?.doctor || "";
  const serviceName = params?.service || "";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <FloatingLinkButton/>
      <div className="flex-grow max-w-3xl w-full mx-auto px-4 py-16">
        <div className="glass-panel rounded-3xl p-8 md:p-12">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900">Schedule Your Visit</h1>
            <p className="text-slate-500 mt-2">Fill in your details below to secure your appointment.</p>
          </div>
          {/* Pass the resolved params to the client component */}
          <BookingForm preSelectedDoctorId={doctorId} preSelectedService={serviceName} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
