import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, UserCheck, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
    
      {/* Hero Section (Enhanced with glass panel) */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-slate-50 to-white -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-teal-800 text-sm font-semibold shadow-sm border-teal-100/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              Accepting New Patients
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Advanced Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                Absolute Clarity.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
              Experience healthcare designed around you. Top-tier specialists in a sterile, modern environment, ready to support your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/book">
                <Button className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-teal-600/20">Book Appointment</Button>
              </Link>
              <Link href="/doctors">
                <Button variant="ghost" className="h-14 px-8 text-lg w-full sm:w-auto glass-panel">
                  View Specialists <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Abstract Medical Graphic Area */}
          <div className="relative h-[600px] w-full rounded-[2rem] glass-panel p-2 flex items-center justify-center transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
             <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-[2rem] m-2 border border-white/50" />
             <img 
              src="/clinic-hero.jpg" 
              alt="Medical Clinic" 
              className="rounded-[2rem] object-cover h-full w-full"
             />
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-12 bg-teal-900 mt-[-2rem] relative z-20 mx-4 md:mx-12 rounded-3xl glass-panel-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50">
            {[
              { label: "Patients Served", value: "10k+" },
              { label: "Specialists", value: "24" },
              { label: "Years Experience", value: "15+" },
              { label: "Patient Satisfaction", value: "4.9/5" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
                <span className="text-sm text-teal-200 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose US?</h2>
            <p className="mt-4 text-slate-500">Built on a foundation of excellence, hygiene, and patient comfort.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Sterile Environment", text: "We exceed ISO-certified cleanliness standards to ensure zero cross-contamination." },
              { icon: UserCheck, title: "Expert Specialists", text: "Our board-certified doctors bring decades of experience from top medical institutions." },
              { icon: Clock, title: "Zero Wait Times", text: "Our streamlined booking system ensures you are seen at your exact appointment time." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-[1.5rem] glass-panel group hover:bg-white/80 transition-all duration-300">
                <div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <feature.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}