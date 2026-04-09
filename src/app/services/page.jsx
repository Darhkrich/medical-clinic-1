import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { Heart, Brain, Bone, Activity, Stethoscope, Baby, ArrowRight } from "lucide-react";

export const metadata = {
  title: 'Medical Services |  Clinic website',
  description: 'Comprehensive medical services and departments.',
};

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive care for your heart, from routine checkups to advanced diagnostics and treatments."
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert diagnosis and management of disorders affecting the brain, spinal cord, and nervous system."
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Specialized treatment for bones, joints, ligaments, tendons, and muscles to keep you moving."
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Compassionate, expert medical care tailored specifically for infants, children, and adolescents."
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 immediate medical attention for urgent, life-threatening injuries and illnesses."
  },
  {
    icon: Stethoscope,
    title: "General Practice",
    description: "Your first point of contact for routine health issues, preventative care, and health education."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
    
      {/* Header Section */}
      <div className="bg-white border-b border-slate-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Departments & <span className="text-teal-600">Services</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            We offer a wide range of specialized medical services utilizing state-of-the-art technology in a sterile, patient-first environment.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:border-teal-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-12 w-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                {/* Replace the existing Link with this: */}
<Link 
  href={`/book?service=${encodeURIComponent(service.title)}`} 
  className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
>
  Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-24 border-t border-slate-100 mt-auto">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-500">Everything you need to know about our services and billing.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Do you accept walk-in patients?", a: "While we prioritize scheduled appointments to maintain zero wait times, our Emergency Care department operates 24/7 for immediate, urgent needs." },
              { q: "What insurance providers do you accept?", a: "We accept most major insurance networks. Please contact our billing department prior to your visit to verify your specific coverage." },
              { q: "Can I request a specific specialist?", a: "Absolutely. When using our booking engine, you can browse our directory and directly select the specialist you wish to see." },
              { q: "Are telehealth appointments available?", a: "Yes, we offer secure video consultations for routine checkups, follow-ups, and prescription refills." }
            ].map((faq, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl cursor-pointer hover:bg-white/80 transition-colors">
                <h4 className="text-lg font-bold text-slate-800 mb-2">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      
      <Footer />
    </div>
  );
}

