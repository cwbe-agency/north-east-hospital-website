// Realistic placeholder doctors. All names/bios are fictional.
const doctors = [
  {
    slug: "dr-arnab-sen",
    name: "Dr. Arnab Sen",
    qualification: "MBBS, MD (Internal Medicine)",
    specialization: "General Physician & Diabetologist",
    departmentSlug: "general-medicine",
    experience: 18,
    languages: ["English", "Hindi", "Bengali"],
    availability: "Mon – Sat · 10:00 AM – 2:00 PM",
    photo:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    bio: "Dr. Sen has over 18 years of experience in internal medicine, with a special focus on diabetes, hypertension and lifestyle-related illnesses. He believes in clear communication and shared decision-making with every patient.",
    featured: true,
  },
  {
    slug: "dr-rituparna-das",
    name: "Dr. Rituparna Das",
    qualification: "MBBS, DNB (General Medicine)",
    specialization: "Consultant Physician",
    departmentSlug: "general-medicine",
    experience: 11,
    languages: ["English", "Bengali", "Hindi"],
    availability: "Mon – Fri · 4:00 PM – 7:00 PM",
    photo:
      "https://images.unsplash.com/photo-1622253694238-3b22139576c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    bio: "Dr. Das brings warmth and clarity to every consultation. Her interests include geriatric medicine and preventive screening for working professionals.",
    featured: false,
  },
  {
    slug: "dr-prakash-roy",
    name: "Dr. Prakash Roy",
    qualification: "MBBS, MD, DM (Cardiology)",
    specialization: "Senior Consultant Cardiologist",
    departmentSlug: "cardiology",
    experience: 22,
    languages: ["English", "Hindi", "Bengali"],
    availability: "Tue, Thu, Sat · 11:00 AM – 3:00 PM",
    photo:
      "https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    bio: "A senior cardiologist with deep experience in non-invasive cardiology, coronary care and preventive heart health programs. Dr. Roy leads our cardiac wellness clinic.",
    featured: true,
  },
  {
    slug: "dr-sneha-thapa",
    name: "Dr. Sneha Thapa",
    qualification: "MBBS, MS (Orthopedics)",
    specialization: "Orthopedic & Joint Replacement Surgeon",
    departmentSlug: "orthopedics",
    experience: 15,
    languages: ["English", "Hindi", "Nepali"],
    availability: "Mon, Wed, Fri · 9:30 AM – 1:00 PM",
    photo:
      "https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    bio: "Dr. Thapa specialises in knee & hip replacement, arthroscopy and sports injuries. He works closely with our physiotherapy team to ensure full functional recovery.",
    featured: true,
  },
  {
    slug: "dr-rajesh-banerjee",
    name: "Dr. Rajesh Banerjee",
    qualification: "MBBS, MS (Obstetrics & Gynecology)",
    specialization: "Gynaecologist & Obstetrician",
    departmentSlug: "gynecology",
    experience: 17,
    languages: ["English", "Bengali", "Hindi"],
    availability: "Mon – Sat · 11:00 AM – 5:00 PM",
    photo:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    bio: "Dr. Banerjee combines obstetric expertise with empathetic counselling. She leads our antenatal program and high-risk pregnancy care.",
    featured: true,
  },
  {
    slug: "dr-sakshi-ghosh",
    name: "Dr. Sakshi Ghosh",
    qualification: "MBBS, MD (Pediatrics)",
    specialization: "Consultant Paediatrician",
    departmentSlug: "pediatrics",
    experience: 13,
    languages: ["English", "Bengali", "Hindi"],
    availability: "Mon – Sat · 10:00 AM – 1:00 PM, 5:00 PM – 7:00 PM",
    photo:
      "https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    bio: "Children are at the heart of Dr. Ghosh's practice. He focuses on developmental paediatrics, immunisation and parent counselling.",
    featured: true,
  },
  {
    slug: "dr-tashi-bhutia",
    name: "Dr. Tashi Bhutia",
    qualification: "MBBS, MS (ENT)",
    specialization: "ENT Surgeon",
    departmentSlug: "ent",
    experience: 12,
    languages: ["English", "Hindi", "Nepali", "Bengali"],
    availability: "Tue, Thu, Sat · 10:00 AM – 2:00 PM",
    photo:
      "https://images.unsplash.com/photo-1601839181465-c33194a13cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85",
    bio: "Dr. Bhutia is experienced in endoscopic ENT surgery, paediatric ENT and audiology. He is passionate about hearing health across all ages.",
    featured: false,
  },
  {
    slug: "dr-sneha-kapoor",
    name: "Dr. Sneha Kapoor",
    qualification: "MBBS, MD (Anaesthesia)",
    specialization: "Anaesthesiologist & ICU Lead",
    departmentSlug: "general-medicine",
    experience: 14,
    languages: ["English", "Hindi"],
    availability: "On-call · 24 Hours",
    photo:
      "https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85",
    bio: "Dr. Kapoor leads our anaesthesia and critical care services, ensuring safe surgical experiences and round-the-clock ICU coverage.",
    featured: false,
  },
];

export default doctors;

export const getDoctorBySlug = (slug) => doctors.find((d) => d.slug === slug);
export const getDoctorsByDepartment = (departmentSlug) =>
  doctors.filter((d) => d.departmentSlug === departmentSlug);
export const featuredDoctors = doctors.filter((d) => d.featured);
