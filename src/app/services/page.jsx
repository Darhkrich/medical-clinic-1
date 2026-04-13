// app/services/page.jsx (or pages/services.js for Pages Router)
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import DoctorCard from "@/components/features/DoctorCard";
import { doctors } from "@/data/doctors";
import Link from "next/link";
import { 
  Heart, 
  Brain, 
  Bone, 
  Activity, 
  Stethoscope, 
  Baby, 
  ArrowRight,
  ChevronDown,
  Calendar,
  Users
} from "lucide-react";

export const metadata = {
  title: 'Medical Services & Departments | Your Clinic Name',
  description: 'Comprehensive medical services including cardiology, neurology, orthopedics, pediatrics, and emergency care. Book with top specialists today.',
  keywords: 'medical services, cardiology, neurology, orthopedics, pediatrics, emergency care, family medicine',
};

// Enhanced services with mapping to specialties in doctors data
const services = [
  {
    id: 1,
    icon: Heart,
    title: "Cardiology",
    slug: "cardiology",
    description: "Comprehensive care for your heart, from routine checkups to advanced diagnostics and interventional procedures.",
    longDescription: "Our cardiology department provides state-of-the-art diagnostic testing including echocardiograms, stress tests, and cardiac catheterization. We specialize in preventive cardiology, heart failure management, and arrhythmia treatment.",
    conditions: ["Hypertension", "Coronary Artery Disease", "Heart Failure", "Arrhythmias"],
  },
  {
    id: 2,
    icon: Brain,
    title: "Neurology",
    slug: "neurology",
    description: "Expert diagnosis and management of disorders affecting the brain, spinal cord, and nervous system.",
    longDescription: "Our neurologists use advanced imaging and neurophysiological testing to diagnose and treat conditions like epilepsy, multiple sclerosis, Parkinson's disease, and stroke. We offer personalized treatment plans and rehabilitation support.",
    conditions: ["Migraine", "Epilepsy", "Multiple Sclerosis", "Parkinson's Disease"],
  },
  {
    id: 3,
    icon: Bone,
    title: "Orthopedics",
    slug: "orthopedics",
    description: "Specialized treatment for bones, joints, ligaments, tendons, and muscles to keep you moving pain-free.",
    longDescription: "From sports injuries to joint replacement surgery, our orthopedic team provides comprehensive musculoskeletal care. We utilize minimally invasive techniques and personalized rehabilitation programs.",
    conditions: ["Arthritis", "Fractures", "Sports Injuries", "Joint Pain"],
  },
  {
    id: 4,
    icon: Baby,
    title: "Pediatrics",
    slug: "pediatrics",
    description: "Compassionate, expert medical care tailored specifically for infants, children, and adolescents.",
    longDescription: "Our pediatricians provide well-child visits, immunizations, developmental screenings, and acute care. We create a child-friendly environment to make every visit comfortable for your family.",
    conditions: ["Well-Child Visits", "Vaccinations", "Developmental Delays", "Childhood Illnesses"],
  },
  {
    id: 5,
    icon: Activity,
    title: "Emergency Care",
    slug: "emergency-care",
    description: "24/7 immediate medical attention for urgent, life-threatening injuries and illnesses.",
    longDescription: "Our emergency department is staffed by board-certified emergency physicians and critical care nurses. We have rapid access to CT, MRI, and laboratory services to ensure fast, accurate diagnosis.",
    conditions: ["Chest Pain", "Stroke Symptoms", "Severe Trauma", "Respiratory Distress"],
  },
  {
    id: 6,
    icon: Stethoscope,
    title: "Family Medicine",
    slug: "family-medicine",
    description: "Your first point of contact for routine health issues, preventative care, and ongoing wellness.",
    longDescription: "Our family medicine practitioners care for patients of all ages, managing chronic conditions, providing preventive screenings, and coordinating specialist referrals when needed.",
    conditions: ["Annual Physicals", "Diabetes Management", "High Blood Pressure", "Preventive Care"],
  },
];

// Helper to get doctors by specialty
const getDoctorsBySpecialty = (specialty) => {
  return doctors.filter(doc => 
    doc.specialty.toLowerCase() === specialty.toLowerCase() ||
    doc.subSpecialty?.toLowerCase().includes(specialty.toLowerCase())
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Departments & <span className="text-teal-600">Services</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            We offer a wide range of specialized medical services utilizing state-of-the-art technology in a sterile, patient-first environment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const relatedDoctors = getDoctorsBySpecialty(service.title);
            const hasDoctors = relatedDoctors.length > 0;
            
            return (
              <div 
                key={service.id} 
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-teal-50 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-teal-600" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* Doctor count badge */}
                {hasDoctors && (
                  <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-teal-600">
                    <Users className="w-4 h-4" />
                    <span>{relatedDoctors.length} specialist{relatedDoctors.length !== 1 ? 's' : ''} available</span>
                  </div>
                )}
                
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group/link"
                  >
                    Learn more 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                  {hasDoctors && (
                    <Link 
                      href={`/book?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors sm:ml-auto"
                    >
                      <Calendar className="mr-1.5 h-4 w-4" />
                      Book now
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Related Specialists Preview Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Meet Our Specialists
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
              Our team of board-certified physicians is here to provide you with exceptional care across all specialties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/doctors">
              <Button variant="outline" size="lg">
                View All Doctors
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500">
              Everything you need to know about our services and billing.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              { 
                q: "Do you accept walk-in patients?", 
                a: "While we prioritize scheduled appointments to maintain zero wait times, our Emergency Care department operates 24/7 for immediate, urgent needs. For non-emergency visits, we recommend booking online or calling ahead." 
              },
              { 
                q: "What insurance providers do you accept?", 
                a: "We accept most major insurance networks including Medicare, Medicaid, and private insurers. Please contact our billing department at (555) 123-4567 prior to your visit to verify your specific coverage and understand any out-of-pocket costs." 
              },
              { 
                q: "Can I request a specific specialist?", 
                a: "Absolutely. When using our booking engine, you can browse our directory of specialists, read their bios, and directly select the physician you wish to see based on availability and your preferences." 
              },
              { 
                q: "Are telehealth appointments available?", 
                a: "Yes, we offer secure video consultations for routine checkups, follow-ups, and prescription refills. During booking, select 'Telehealth' as your appointment type. You'll receive a link via email prior to your visit." 
              },
              { 
                q: "What should I bring to my first appointment?", 
                a: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records or test results. Arriving 15 minutes early helps us complete necessary paperwork." 
              }
            ].map((faq, i) => (
              <details 
                key={i} 
                className="group bg-white rounded-xl border border-slate-200 hover:border-teal-200 transition-all duration-200"
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-800 pr-8">
                    {faq.q}
                  </h4>
                  <ChevronDown className="w-5 h-5 text-teal-600 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-2">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Need help finding the right service?
            </h2>
            <p className="text-teal-50 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Our care coordinators are available to guide you to the appropriate specialist for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button 
                  size="lg" 
                  className="bg-white text-teal-700 hover:bg-teal-50 shadow-lg w-full sm:w-auto"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Contact Care Coordinator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}