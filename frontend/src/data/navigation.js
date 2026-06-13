const navigation = {
  primary: [
    { label: "Home", to: "/", testId: "nav-home" },
    { label: "About", to: "/about", testId: "nav-about" },
    { label: "Doctors", to: "/doctors", testId: "nav-doctors" },
    { label: "Departments", to: "/departments", testId: "nav-departments" },
    { label: "Treatments", to: "/treatments", testId: "nav-treatments" },
    { label: "Blog", to: "/blog", testId: "nav-blog" },
    { label: "Contact", to: "/contact", testId: "nav-contact" },
  ],
  footer: {
    explore: [
      { label: "About Us", to: "/about" },
      { label: "Our Doctors", to: "/doctors" },
      { label: "Departments", to: "/departments" },
      { label: "Treatments", to: "/treatments" },
      { label: "Careers", to: "/careers" },
      { label: "Blog", to: "/blog" },
    ],
    patient: [
      { label: "Book Appointment", to: "/appointment" },
      { label: "Emergency", to: "/contact#emergency" },
      { label: "Contact Us", to: "/contact" },
      { label: "Patient Portal", to: "#" },
      { label: "Insurance & TPA", to: "#" },
      { label: "Health Packages", to: "#" },
    ],
  },
};

export default navigation;
