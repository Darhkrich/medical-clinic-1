// data/doctors.js

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    title: "MD, FACC",
    specialty: "Cardiology",
    subSpecialty: "Interventional Cardiology",
    image: "/images/doctors/dr-sarah-jenkins.jpg", // Replace with actual image
    availability: [
      { day: "Monday", hours: "9:00 AM – 3:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Friday", hours: "1:00 PM – 6:00 PM" },
    ],
    bio: "Dr. Jenkins is a board-certified cardiologist specializing in preventive cardiology and advanced heart failure management. She takes a patient-centered approach, combining cutting-edge treatments with lifestyle medicine.",
    education: [
      "Fellowship in Cardiovascular Disease, Mayo Clinic",
      "Residency in Internal Medicine, Johns Hopkins Hospital",
      "MD, Harvard Medical School",
    ],
    experienceYears: 15,
    languages: ["English", "Spanish"],
    rating: 4.9,
    reviews: 124,
    specialInterests: [
      "Women's Heart Health",
      "Hypertension Management",
      "Cardiac Rehabilitation",
    ],
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    title: "MD, FAAP",
    specialty: "Pediatrics",
    subSpecialty: "General Pediatrics & Adolescent Medicine",
    image: "/images/doctors/dr-james-wilson.jpg", // Replace with actual image
    availability: [
      { day: "Tuesday", hours: "8:00 AM – 4:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 4:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
    ],
    bio: "Dr. Wilson is a dedicated pediatrician with a warm and reassuring demeanor. He provides comprehensive care for children from birth through young adulthood, emphasizing preventive health and developmental milestones.",
    education: [
      "Residency in Pediatrics, Children's Hospital of Philadelphia",
      "MD, University of Pennsylvania School of Medicine",
    ],
    experienceYears: 12,
    languages: ["English", "French"],
    rating: 4.8,
    reviews: 98,
    specialInterests: [
      "Newborn Care",
      "Childhood Nutrition & Obesity Prevention",
      "Behavioral Health",
    ],
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    title: "MD, FACOG",
    specialty: "Obstetrics & Gynecology",
    subSpecialty: "Minimally Invasive Gynecologic Surgery",
    image: "/images/doctors/dr-priya-sharma.jpg", // Replace with actual image
    availability: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "8:00 AM – 2:00 PM" },
    ],
    bio: "Dr. Sharma provides comprehensive women's health services with a compassionate touch. She is skilled in robotic-assisted surgery and is passionate about empowering women through education and personalized care plans.",
    education: [
      "Fellowship in Minimally Invasive Gynecologic Surgery, Cleveland Clinic",
      "Residency in Obstetrics & Gynecology, Northwestern University",
      "MD, University of Michigan Medical School",
    ],
    experienceYears: 10,
    languages: ["English", "Hindi", "Gujarati"],
    rating: 5.0,
    reviews: 87,
    specialInterests: [
      "High-Risk Pregnancy",
      "Menopause Management",
      "Contraceptive Counseling",
    ],
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    title: "MD, FAAFP",
    specialty: "Family Medicine",
    subSpecialty: "Sports Medicine",
    image: "/images/doctors/dr-michael-chen.jpg", // Replace with actual image
    availability: [
      { day: "Monday", hours: "8:00 AM – 5:00 PM" },
      { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
      { day: "Friday", hours: "8:00 AM – 12:00 PM" },
    ],
    bio: "Dr. Chen believes in building long-term relationships with patients and their families. He offers a full spectrum of primary care services and has additional training in non-surgical orthopedics and concussion management.",
    education: [
      "Fellowship in Sports Medicine, UCLA",
      "Residency in Family Medicine, University of Washington",
      "MD, Stanford University School of Medicine",
    ],
    experienceYears: 8,
    languages: ["English", "Mandarin"],
    rating: 4.9,
    reviews: 156,
    specialInterests: [
      "Preventive Care",
      "Chronic Disease Management",
      "Exercise Prescription",
    ],
  },
  {
    id: 5,
    name: "Dr. Olivia Martinez",
    title: "MD, FAAD",
    specialty: "Dermatology",
    subSpecialty: "Cosmetic Dermatology & Skin Cancer Surgery",
    image: "/images/doctors/dr-olivia-martinez.jpg", // Replace with actual image
    availability: [
      { day: "Tuesday", hours: "9:00 AM – 4:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 4:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
    ],
    bio: "Dr. Martinez combines medical expertise with an artistic eye to deliver natural-looking results. She treats a wide range of skin conditions and is dedicated to early detection and treatment of skin cancer.",
    education: [
      "Fellowship in Mohs Micrographic Surgery, MD Anderson Cancer Center",
      "Residency in Dermatology, NYU School of Medicine",
      "MD, University of Miami Miller School of Medicine",
    ],
    experienceYears: 14,
    languages: ["English", "Spanish"],
    rating: 4.7,
    reviews: 112,
    specialInterests: [
      "Acne & Rosacea Treatment",
      "Skin Cancer Screening",
      "Aesthetic Rejuvenation",
    ],
  },
];

// Helper function to get a doctor by ID
export const getDoctorById = (id) => {
  return doctors.find((doctor) => doctor.id === Number(id));
};

// Helper function to get all unique specialties
export const getSpecialties = () => {
  return [...new Set(doctors.map((doctor) => doctor.specialty))];
};