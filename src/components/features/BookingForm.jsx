// components/features/BookingForm.jsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  ChevronDown,
  AlertCircle
} from "lucide-react";

export default function BookingForm({ preSelectedDoctorId, preSelectedService }) {
  // Form state
  const [formData, setFormData] = useState({
    doctorId: preSelectedDoctorId || "",
    service: preSelectedService || "",
    date: "",
    time: "",
    patientName: "",
    email: "",
    phone: "",
    reason: "",
    visitType: "in-person",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Available time slots (simplified – would be dynamic in production)
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM"
  ];

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];
  // Max date (e.g., 60 days from now)
  const maxDate = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  // Selected doctor object (with fallback)
  const selectedDoctor = useMemo(() => {
    if (!formData.doctorId) return null;
    const found = doctors.find(d => d.id === Number(formData.doctorId));
    return found || null;
  }, [formData.doctorId]);

  // Update doctorId if preSelectedDoctorId changes
  useEffect(() => {
    if (preSelectedDoctorId) {
      setFormData(prev => ({ ...prev, doctorId: preSelectedDoctorId }));
    }
  }, [preSelectedDoctorId]);

  // Update service if preSelectedService changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.doctorId) newErrors.doctorId = "Please select a doctor";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    if (!formData.patientName.trim()) newErrors.patientName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Booking submitted:", formData);
      setSubmitSuccess(true);
      // Reset form (optional)
      // setFormData({ ...initialState });
    } catch (error) {
      console.error("Booking failed:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Booking Confirmed!</h3>
        <p className="text-slate-600 mb-6">
          Thank you for scheduling your appointment. A confirmation email has been sent to {formData.email}.
        </p>
        <Button onClick={() => window.location.href = "/"} variant="outline">
          Return Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Doctor Selection */}
      <div>
        <label htmlFor="doctorId" className="block text-sm font-medium text-slate-700 mb-1.5">
          Select Doctor <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="doctorId"
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            className={`
              w-full appearance-none px-4 py-2.5 sm:py-3 bg-white border rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
              ${errors.doctorId ? 'border-red-300' : 'border-slate-200'}
            `}
          >
            <option value="">Choose a specialist</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} – {doc.specialty}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
        {errors.doctorId && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.doctorId}
          </p>
        )}
      </div>

      {/* Service Type (optional, pre-filled) */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
          Service / Reason
        </label>
        <input
          type="text"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="e.g., Cardiology consultation"
          className="w-full px-4 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      {/* Visit Type */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Visit Type
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="visitType"
              value="in-person"
              checked={formData.visitType === "in-person"}
              onChange={handleChange}
              className="w-4 h-4 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-sm text-slate-700">In-person</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="visitType"
              value="telehealth"
              checked={formData.visitType === "telehealth"}
              onChange={handleChange}
              className="w-4 h-4 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-sm text-slate-700">Telehealth</span>
          </label>
        </div>
      </div>

      {/* Date and Time Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1.5">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="date"
              id="date"
              name="date"
              min={today}
              max={maxDate}
              value={formData.date}
              onChange={handleChange}
              className={`
                w-full pl-9 pr-3 py-2.5 sm:py-3 bg-white border rounded-lg text-sm
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                ${errors.date ? 'border-red-300' : 'border-slate-200'}
              `}
            />
          </div>
          {errors.date && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-1.5">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`
                w-full appearance-none pl-9 pr-8 py-2.5 sm:py-3 bg-white border rounded-lg text-sm
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                ${errors.time ? 'border-red-300' : 'border-slate-200'}
              `}
            >
              <option value="">Select time</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          {errors.time && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.time}
            </p>
          )}
        </div>
      </div>

      {/* Patient Information */}
      <div className="border-t border-slate-200 pt-5">
        <h3 className="text-base font-semibold text-slate-800 mb-4">Patient Information</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`
                  w-full pl-9 pr-3 py-2.5 sm:py-3 bg-white border rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                  ${errors.patientName ? 'border-red-300' : 'border-slate-200'}
                `}
              />
            </div>
            {errors.patientName && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.patientName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`
                  w-full pl-9 pr-3 py-2.5 sm:py-3 bg-white border rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                  ${errors.email ? 'border-red-300' : 'border-slate-200'}
                `}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className={`
                  w-full pl-9 pr-3 py-2.5 sm:py-3 bg-white border rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                  ${errors.phone ? 'border-red-300' : 'border-slate-200'}
                `}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1.5">
              Additional Notes
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <textarea
                id="reason"
                name="reason"
                rows="3"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Please describe your symptoms or reason for visit..."
                className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Error */}
      {errors.submit && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {errors.submit}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Processing..." : "Confirm Appointment"}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        By booking, you agree to our{" "}
        <a href="/terms" className="text-teal-600 hover:underline">Terms</a> and{" "}
        <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
}