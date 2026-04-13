"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DoctorCard from "@/components/features/DoctorCard";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { 
  Search, 
  X, 
  Filter, 
  ArrowUpDown, 
  ChevronDown,
  Users,
  Stethoscope
} from "lucide-react";
import FloatingLinkButton from "@/components/floatingButton";

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [sortBy, setSortBy] = useState("rating"); // rating, experience, name
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get unique specialties from doctors data
  const specialties = useMemo(() => {
    const unique = ["All", ...new Set(doctors.map(d => d.specialty))];
    return unique;
  }, []);

  // Filter and sort doctors
  const filteredDoctors = useMemo(() => {
    let filtered = doctors.filter((doctor) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        doctor.name.toLowerCase().includes(searchLower) || 
        doctor.specialty.toLowerCase().includes(searchLower) ||
        doctor.subSpecialty?.toLowerCase().includes(searchLower) ||
        doctor.bio.toLowerCase().includes(searchLower);
      
      const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
      
      return matchesSearch && matchesSpecialty;
    });

    // Sort
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "experience":
          return (b.experienceYears || 0) - (a.experienceYears || 0);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedSpecialty, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSpecialty("All");
    setSortBy("rating");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col">
      <Navbar />
      <FloatingLinkButton />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-white border-b border-slate-100 pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet Our <span className="text-teal-600">Specialists</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Board-certified physicians dedicated to providing exceptional, personalized care
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="sticky top-16 z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200 py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile: Search bar always visible */}
            <div className="relative mb-3 lg:hidden">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search doctors, specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 pl-9 pr-8 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                </button>
              )}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
              {/* Desktop: Search input */}
              <div className="hidden lg:block relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, specialty, or condition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 pl-9 pr-8 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                  </button>
                )}
              </div>

              {/* Filter Toggle Button (Mobile) */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center justify-between w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              >
                <span className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters & Sort
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Filters Container - collapsible on mobile */}
              <div className={`
                lg:flex lg:items-center lg:gap-3 lg:flex-1
                ${isFilterOpen ? 'block' : 'hidden lg:flex'}
                space-y-3 lg:space-y-0 mt-2 lg:mt-0
              `}>
                {/* Specialty Filter - Scrollable on mobile */}
                <div className="flex-1 overflow-x-auto pb-1 lg:pb-0">
                  <div className="flex gap-1.5 lg:gap-2 min-w-max lg:min-w-0 lg:flex-wrap">
                    {specialties.map((specialty) => (
                      <button
                        key={specialty}
                        onClick={() => setSelectedSpecialty(specialty)}
                        className={`
                          px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all
                          ${selectedSpecialty === specialty
                            ? "bg-teal-600 text-white shadow-sm"
                            : "bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600"
                          }
                        `}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Dropdown */}
                <div className="relative min-w-[140px] lg:min-w-[160px]">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none h-9 lg:h-10 pl-3 pr-8 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
                  >
                    <option value="rating">Top Rated</option>
                    <option value="experience">Most Experienced</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                  <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active Filters & Results Count */}
            {(searchTerm || selectedSpecialty !== "All") && (
              <div className="flex items-center justify-between mt-3 text-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-slate-500">
                    <span className="font-semibold text-slate-700">{filteredDoctors.length}</span> doctor{filteredDoctors.length !== 1 ? 's' : ''} found
                  </span>
                  {selectedSpecialty !== "All" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-50 text-teal-700 rounded-full text-xs">
                      {selectedSpecialty}
                      <button onClick={() => setSelectedSpecialty("All")}>
                        <X className="h-3 w-3 hover:text-teal-900" />
                      </button>
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-teal-600 hover:text-teal-700 text-xs font-medium"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Results Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-50 flex items-center justify-center">
                  <Stethoscope className="h-10 w-10 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  No specialists found
                </h3>
                <p className="text-slate-500 mb-6">
                  We couldn't find any doctors matching your criteria. Try adjusting your filters or search term.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}