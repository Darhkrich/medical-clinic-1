"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DoctorCard from "@/components/features/DoctorCard";
import { doctors } from "@/data/doctors";
import { Search, SlidersHorizontal } from "lucide-react";
import FloatingLinkButton from "@/components/floatingButton";
export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cardiology", "Pediatrics", "Neurology", "Orthopedics", "General"];

  // Filter logic
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doctor.specialty === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col">
      <Navbar />
      <FloatingLinkButton/>
      <div className="flex-grow">
        <div className="bg-white border-b border-slate-100 pt-20 pb-16 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-teal-50/50 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet Our <span className="text-teal-600">Specialists</span>
            </h1>

            <div className="mt-10 max-w-3xl mx-auto">
              <div className="glass-panel p-2 rounded-2xl flex items-center gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search by name or specialty..." 
                    className="w-full h-12 pl-12 pr-4 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {categories.map((cat, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat 
                        ? "bg-teal-600 text-white shadow-md shadow-teal-600/20" 
                        : "bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No specialists found matching your criteria.</p>
              <button 
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-4 text-teal-600 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}