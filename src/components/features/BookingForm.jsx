"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { CheckCircle2 } from "lucide-react";

export default function BookingForm({ preSelectedDoctorId, preSelectedService }) {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: preSelectedService || "",
    doctorId: preSelectedDoctorId || "",
    reason: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const servicesList = ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Emergency Care", "General Practice"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Show success state on the button
    setStatus("success");
    
    // Wait briefly so the user sees the button change, then redirect
    setTimeout(() => {
      router.push("/book/success");
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Patient Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
            placeholder="Emma Smith"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Email Address</label>
          <input
            required
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            placeholder="emma@example.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Department / Service</label>
          <select 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            <option value="">-- Choose a Service --</option>
            {servicesList.map(srv => (
              <option key={srv} value={srv}>{srv}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Select Specialist (Optional)</label>
          <select 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              value={formData.doctorId}
              onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
          >
            <option value="">-- Any Available Doctor --</option>
            {doctors.map(doc => (
              <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialty})</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Preferred Date</label>
        <input
            required
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 outline-none text-slate-600 transition-all"
            onChange={(e) => setFormData({...formData, date: e.target.value})}
        />
      </div>

      <Button 
        type="submit" 
        className={`w-full h-12 text-lg transition-all duration-300 ${status === "success" ? "bg-green-500 hover:bg-green-600" : ""}`}
        disabled={status !== "idle"}
      >
        {status === "loading" && "Processing Request..."}
        {status === "success" && (
          <>
            <CheckCircle2 className="w-5 h-5 mr-2" /> Confirmed! Redirecting...
          </>
        )}
        {status === "idle" && "Confirm Appointment"}
      </Button>
    </form>
  );
}