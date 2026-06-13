// Departments data. Slugs are URL-stable.
const departments = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    short: "Comprehensive primary and consultative care for adults.",
    icon: "Stethoscope",
    color: "emerald",
    image:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    overview:
      "Our General Medicine department is the first point of care for adults experiencing a wide range of health concerns — from fevers and infections to chronic disease management. Our experienced physicians take time to listen, evaluate, and create a clear treatment plan that fits your life.",
    services: [
      "Routine health check-ups & screenings",
      "Diabetes, hypertension & thyroid management",
      "Fever, infections & post-viral care",
      "Preventive vaccinations for adults",
      "Pre-operative medical clearance",
      "Chronic disease follow-up",
    ],
    doctorSlugs: ["dr-arnab-sen", "dr-rituparna-das"],
    faqs: [
      {
        q: "Do I need an appointment for General Medicine?",
        a: "Walk-ins are welcome 9 AM – 8 PM, but we recommend booking online to reduce wait time.",
      },
      {
        q: "Can I get my routine blood work done here?",
        a: "Yes, our in-house diagnostics lab can run most routine and specialised investigations on the same day.",
      },
    ],
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    short: "Advanced heart care, diagnostics, and lifestyle support.",
    icon: "HeartPulse",
    color: "rose",
    image:
      "https://images.unsplash.com/photo-1601839181465-c33194a13cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85",
    overview:
      "Our Cardiology team combines modern diagnostic technology with experienced clinical judgment to diagnose, treat and prevent heart disease. We support patients across the full journey — from screening to recovery.",
    services: [
      "ECG, ECHO & TMT (stress) tests",
      "24-hour Holter monitoring",
      "Hypertension & cholesterol clinics",
      "Heart attack emergency response",
      "Cardiac rehabilitation programs",
      "Preventive heart health check-ups",
    ],
    doctorSlugs: ["dr-prakash-roy"],
    faqs: [
      {
        q: "When should I see a cardiologist?",
        a: "If you experience chest pain, breathlessness, palpitations, or have a family history of heart disease, a consultation is recommended.",
      },
      {
        q: "Do you handle cardiac emergencies 24/7?",
        a: "Yes. Our emergency team is on standby 24 hours a day, with rapid ECG and stabilisation protocols.",
      },
    ],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    short: "Bones, joints, spine and sports injury specialists.",
    icon: "Bone",
    color: "amber",
    image:
      "https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    overview:
      "From sprains to complex joint replacements, our Orthopedic team helps you return to pain-free movement. We combine surgical expertise with conservative care and structured physiotherapy.",
    services: [
      "Fracture management & trauma care",
      "Knee & hip replacement surgery",
      "Arthroscopic (keyhole) surgery",
      "Spine consultations",
      "Sports injury rehabilitation",
      "Physiotherapy & pain management",
    ],
    doctorSlugs: ["dr-sandeep-thapa"],
    faqs: [
      {
        q: "Do you treat children's fractures?",
        a: "Yes, our team is experienced in paediatric orthopaedic care and coordinates closely with Paediatrics.",
      },
    ],
  },
  {
    slug: "gynecology",
    name: "Gynecology & Obstetrics",
    short: "Confidential, complete care for women at every stage.",
    icon: "Baby",
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1622253694238-3b22139576c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    overview:
      "Our Gynaecology team provides respectful, evidence-based care across women's health — from routine wellness and pregnancy to complex gynaecological conditions.",
    services: [
      "Antenatal & postnatal care",
      "Normal & caesarean deliveries",
      "Menstrual & hormonal disorders",
      "PCOS & fertility consultations",
      "Cervical cancer screening",
      "Menopause management",
    ],
    doctorSlugs: ["dr-mitali-banerjee"],
    faqs: [
      {
        q: "Are female doctors available?",
        a: "Yes — our Gynaecology team is led by experienced female consultants.",
      },
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    short: "Gentle, expert care for newborns, children and teens.",
    icon: "Baby",
    color: "sky",
    image:
      "https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    overview:
      "Children deserve a calm, friendly environment. Our Paediatric team focuses on growth, immunisation, nutrition and quick relief for childhood illnesses.",
    services: [
      "Newborn & well-baby care",
      "Childhood vaccinations",
      "Growth & nutrition assessment",
      "Fever, cough & infection care",
      "Asthma & allergy management",
      "Adolescent health counselling",
    ],
    doctorSlugs: ["dr-anirban-ghosh"],
    faqs: [
      {
        q: "What is the right age for a first paediatric visit?",
        a: "Ideally within the first week of birth, then as per the immunisation schedule.",
      },
    ],
  },
  {
    slug: "ent",
    name: "ENT (Ear, Nose & Throat)",
    short: "Care for hearing, sinus, voice and airway concerns.",
    icon: "Ear",
    color: "violet",
    image:
      "https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
    overview:
      "Our ENT specialists evaluate and treat conditions of the ear, nose and throat — including sinus, allergy, hearing and voice issues — for both children and adults.",
    services: [
      "Hearing assessment & audiometry",
      "Chronic sinusitis & allergy care",
      "Tonsil & adenoid surgery",
      "Voice & swallowing evaluation",
      "Ear infection management",
      "Endoscopic ENT procedures",
    ],
    doctorSlugs: ["dr-tashi-bhutia"],
    faqs: [
      {
        q: "Do you treat snoring & sleep apnoea?",
        a: "Yes, we offer evaluation and a multidisciplinary plan including ENT, sleep study and lifestyle support.",
      },
    ],
  },
];

export default departments;

export const getDepartmentBySlug = (slug) =>
  departments.find((d) => d.slug === slug);
