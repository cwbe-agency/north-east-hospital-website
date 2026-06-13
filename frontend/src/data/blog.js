const blog = [
  {
    slug: "5-everyday-habits-for-a-healthy-heart",
    title: "5 Everyday Habits for a Healthy Heart",
    excerpt:
      "Small, consistent choices matter more than dramatic changes. Here are five habits our cardiology team recommends.",
    category: "Cardiology",
    author: "Dr. Prakash Roy",
    date: "2026-01-08",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1601839181465-c33194a13cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "when-to-take-your-child-to-the-doctor",
    title: "When to Take Your Child to the Doctor",
    excerpt:
      "A quick guide for parents on fever, cough and the warning signs that need immediate medical attention.",
    category: "Pediatrics",
    author: "Dr. Anirban Ghosh",
    date: "2026-01-04",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "managing-diabetes-in-your-thirties",
    title: "Managing Diabetes in Your Thirties",
    excerpt:
      "Early action is the strongest medicine. Learn what your annual diabetes review should include.",
    category: "General Medicine",
    author: "Dr. Arnab Sen",
    date: "2025-12-22",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "preparing-for-knee-replacement-surgery",
    title: "Preparing for Knee Replacement Surgery",
    excerpt:
      "A practical checklist of what to expect before, during and after your knee replacement.",
    category: "Orthopedics",
    author: "Dr. Sandeep Thapa",
    date: "2025-12-15",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85",
  },
];

export default blog;

export const getBlogBySlug = (slug) => blog.find((b) => b.slug === slug);
