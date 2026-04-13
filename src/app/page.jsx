// app/page.jsx (or pages/index.jsx depending on your Next.js version)
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import DoctorCard from "@/components/features/DoctorCard";
import { doctors } from "@/data/doctors";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Star,
  ChevronRight 
} from "lucide-react";

export default function Home() {
  // Get top 3 doctors for featured section (or use rating)
  const featuredDoctors = doctors
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-slate-50 to-white -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100 shadow-sm text-teal-800 text-xs sm:text-sm font-semibold">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-teal-500"></span>
              </span>
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Advanced Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                Absolute Clarity.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              Experience healthcare designed around you. Top-tier specialists in a sterile, modern environment, ready to support your well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href="/book" className="w-full sm:w-auto">
                <Button size="lg" className="w-full shadow-lg shadow-teal-600/20">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/doctors" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  View Specialists <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full order-1 lg:order-2">
            <div className="relative h-full w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border-8 border-white/50 shadow-xl">
              <Image
                src="/clinic-hero.jpg"
                alt="Modern medical clinic interior with caring staff"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-100 rounded-full opacity-20 blur-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-100 rounded-full opacity-20 blur-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-10 sm:py-12 bg-teal-900 mt-[-1rem] sm:mt-[-2rem] relative z-20 mx-4 sm:mx-6 lg:mx-12 rounded-2xl sm:rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { label: "Patients Served", value: "10k+" },
              { label: "Specialists", value: "24" },
              { label: "Years Experience", value: "15+" },
              { label: "Patient Satisfaction", value: "4.9/5" }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center py-4 sm:py-0"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-teal-200 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section (NEW) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Meet Our Specialists
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500">
                Top-rated doctors dedicated to your health and wellness
              </p>
            </div>
            <Link 
              href="/doctors" 
              className="mt-4 sm:mt-0 inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm sm:text-base group"
            >
              View all doctors 
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Choose Us?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
              Built on a foundation of excellence, hygiene, and patient comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Sterile Environment", 
                text: "We exceed ISO-certified cleanliness standards to ensure zero cross-contamination." 
              },
              { 
                icon: UserCheck, 
                title: "Expert Specialists", 
                text: "Our board-certified doctors bring decades of experience from top medical institutions." 
              },
              { 
                icon: Clock, 
                title: "Zero Wait Times", 
                text: "Our streamlined booking system ensures you are seen at your exact appointment time." 
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-2xl sm:rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-teal-50 flex items-center justify-center mb-5 sm:mb-6 group-hover:-translate-y-1 transition-transform">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to prioritize your health?
            </h2>
            <p className="text-teal-50 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Book an appointment today and experience healthcare that puts you first.
            </p>
            <Link href="/book">
              <Button 
                size="lg" 
                className="bg-white text-teal-700 hover:bg-teal-50 shadow-lg w-full sm:w-auto"
              >
                Schedule Your Visit
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}