// components/features/DoctorCard.jsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function DoctorCard({ doctor }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="h-48 bg-slate-50 relative overflow-hidden">
        {/* In production, use next/image with actual src */}
        <div className="absolute inset-0 bg-teal-900/5 group-hover:bg-teal-900/10 transition-colors" />
        <div className="flex items-center justify-center h-full text-slate-300">
          <img src={doctor.image} alt={doctor.name} className="object-cover h-full w-full" />
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-xs font-bold tracking-wider text-teal-600 uppercase bg-teal-50 px-2 py-1 rounded-full">
          {doctor.specialty}
        </span>
        <h3 className="text-lg font-bold text-slate-800 mt-3">{doctor.name}</h3>
        <p className="text-slate-500 text-sm mt-2 line-clamp-2">{doctor.bio}</p>
        
        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
          
<Link href={`/book?doctor=${doctor.id}`} className="w-full">
  <Button variant="outline" className="w-full">Schedule Visit</Button>
</Link>
        </div>
      </div>
    </div>
  );
}