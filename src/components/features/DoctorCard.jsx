// components/features/DoctorCard.jsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Star, MapPin, Clock, Languages, Award } from "lucide-react";

export default function DoctorCard({ doctor }) {
  // Safely extract data with fallbacks
  const {
    id,
    name,
    title,
    specialty,
    subSpecialty,
    image,
    availability,
    bio,
    experienceYears,
    languages = [],
  
    reviews,
    specialInterests = [],
  } = doctor;

  // Get the next available day (simplified for preview)
  const nextAvailable = availability?.[0];

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-br from-teal-50 to-slate-50 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Dr. ${name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        ) : (
          // Fallback placeholder when image is missing
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-3xl font-bold">
              {name.split(' ')[1]?.[0] || 'D'}
            </div>
          </div>
        )}
        {/* Overlay gradient for better text contrast on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
      
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Specialty Badge */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-block text-xs font-semibold tracking-wide text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
            {specialty}
          </span>
          {subSpecialty && (
            <span className="inline-block text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">
              {subSpecialty}
            </span>
          )}
        </div>

        {/* Doctor Name & Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 leading-tight">
          {name}
        </h3>
        {title && (
          <p className="text-xs text-slate-500 mt-0.5 font-medium">{title}</p>
        )}

        {/* Quick Info Icons */}
        <div className="mt-3 space-y-1.5">
          {experienceYears && (
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Award className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span>{experienceYears}+ years experience</span>
            </div>
          )}
          {languages.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Languages className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span>Speaks {languages.join(', ')}</span>
            </div>
          )}
          {nextAvailable && (
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Clock className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span>Next: {nextAvailable.day} ({nextAvailable.hours})</span>
            </div>
          )}
        </div>

        {/* Bio Preview */}
        <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
          {bio}
        </p>

        {/* Special Interests Tags (hidden on mobile, visible on larger screens) */}
        {specialInterests.length > 0 && (
          <div className="hidden sm:block mt-3">
            <div className="flex flex-wrap gap-1.5">
              {specialInterests.slice(0, 2).map((interest, idx) => (
                <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                  {interest}
                </span>
              ))}
              {specialInterests.length > 2 && (
                <span className="text-[10px] text-slate-400 px-1">+{specialInterests.length - 2}</span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
        
          <Link href={`/book?doctor=${id}`} className="flex-1">
            <Button
              size="sm"
              className="w-full text-xs sm:text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
            >
              Book Visit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}