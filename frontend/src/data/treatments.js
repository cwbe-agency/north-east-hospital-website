const treatments = [
  {
    slug: "knee-replacement",
    title: "Knee Replacement Surgery",
    departmentSlug: "orthopedics",
    summary:
      "Restore pain-free mobility with partial or total knee replacement, followed by structured rehabilitation.",
    image:
      "https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "cardiac-health-checkup",
    title: "Cardiac Health Check-Up",
    departmentSlug: "cardiology",
    summary:
      "Comprehensive heart screening including ECG, ECHO, TMT, lipid profile and a cardiologist consultation.",
    image:
      "https://images.unsplash.com/photo-1601839181465-c33194a13cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "maternity-care",
    title: "Maternity & Antenatal Care",
    departmentSlug: "gynecology",
    summary:
      "End-to-end pregnancy support — from first trimester to safe delivery and post-natal recovery.",
    image:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "diabetes-management",
    title: "Diabetes Management",
    departmentSlug: "general-medicine",
    summary:
      "Personalised diabetes plans combining medication, nutrition and lifestyle coaching.",
    image:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "child-immunisation",
    title: "Child Immunisation",
    departmentSlug: "pediatrics",
    summary:
      "Complete vaccination program for newborns, infants and school-going children as per national schedules.",
    image:
      "https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "endoscopic-sinus-surgery",
    title: "Endoscopic Sinus Surgery",
    departmentSlug: "ent",
    summary:
      "Minimally invasive treatment for chronic sinusitis and nasal obstruction, with quick recovery.",
    image:
      "https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
];

export default treatments;

export const getTreatmentBySlug = (slug) =>
  treatments.find((t) => t.slug === slug);
