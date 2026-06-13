# North East Multispeciality Hospital — Siliguri

> Production-quality, SEO-first, multi-page **frontend-only** healthcare website.

## Original problem statement (summary)
Build a multi-page hospital website for **North East Multispeciality Hospital, Siliguri (Darjeeling, West Bengal)** with focus on UI/UX, SEO architecture, accessibility, responsiveness, performance, trust, and patient conversion. Frontend only — no backend, DB, auth, or admin panel.

## Stack
- **React 19 + CRA (craco)** + **React Router v7** (multi-page client routing)
- **react-helmet-async** for per-page SEO (title, description, OG, Twitter, canonical, JSON-LD)
- **Tailwind CSS** + custom CSS variables (centralized design tokens)
- **lucide-react** icons · **Manrope** (headings) + **Inter** (body) via Google Fonts
- Frontend served on port 3000 via supervisor (`yarn start` / `craco`)

## User personas
- Patient / family member in Siliguri or wider North Bengal looking for: doctors, departments, emergency info, appointment booking, contact details.
- Senior citizens & non-technical users — large text, high contrast, big touch targets.

## Core requirements (static)
- 13 routes: `/`, `/about`, `/doctors`, `/doctors/:slug`, `/departments`, `/departments/:slug`, `/appointment`, `/contact`, `/careers`, `/blog`, `/blog/:slug`, `/treatments`, `/treatments/:slug` + 404.
- Site-wide red **Emergency Banner** + sticky navbar + floating actions (Call / WhatsApp / Book).
- Centralized **data layer** in `/app/frontend/src/data/*.js` — no content hardcoded in components.
- Centralized **design system** in `/app/frontend/src/index.css` — CSS variables + reusable component classes.
- All interactive elements & key info have `data-testid` attributes (kebab-case).
- Medical-Green primary (`#065F46`), Healthcare-Teal secondary (`#0D9488`), Emergency-Red accent (`#DC2626`).

## What's been implemented (2026-01-13 — MVP)
- ✅ Full multi-page architecture with proper SEO meta tags & canonical URLs (Helmet per route)
- ✅ Home page (11 sections): Hero · Quick Appointment · Departments · Featured Doctors · Why Choose Us · Facilities · Statistics (with count-up) · Testimonials · FAQ accordion · Final CTA · Footer
- ✅ About, Doctors (with live search + department filter), Doctor Detail (with related doctors), Departments grid, Department Detail (overview, services, doctors, FAQs)
- ✅ Appointment form (UI-only, success toast), Contact page (form, map iframe, emergency CTA)
- ✅ Careers (with placeholder roles + mailto-apply), Blog (4 posts + detail), Treatments (6 + detail)
- ✅ 404 page, breadcrumbs on detail pages, scroll-to-top on route change
- ✅ Responsive mobile menu, floating actions repositioned above platform badge (z-index fix)
- ✅ Reusable components: Navbar, Footer, EmergencyBanner, FloatingActions, MainLayout, PageHeader, SectionHeading, CtaSection, DoctorCard, DepartmentCard, FacilityCard, StatCard, TestimonialCard, FaqAccordion, BlogCard, TreatmentCard, Breadcrumbs, Seo
- ✅ Tested via testing-agent: ~85% success on first iteration; reported issues fixed in second pass (floating action overlap, mobile menu close, dept-detail title, missing testids)

## Backlog / future
- **P1**: Replace `+91-XXXXX-XXXXX` placeholders with real phone/email/address; replace logo SVG with actual hospital logo asset.
- **P1**: Hook appointment + contact forms to a real submission endpoint (Formspree/EmailJS or future backend).
- **P2**: Write real blog articles (currently placeholder bodies) and full treatment detail pages.
- **P2**: Add sitemap.xml and robots.txt for production deployment.
- **P3**: Add structured-data JSON-LD for FAQ, BreadcrumbList, and Physician on all relevant pages (Hospital schema already added on home).
- **P3**: Department-specific search/filter, doctor availability live calendar, patient reviews integration, multi-language (Bengali/Hindi/Nepali) support.

## Next tasks
1. Plug real contact details + hospital logo when the user provides them.
2. Connect forms to a delivery service (Formspree or similar) — frontend-only.
3. Add `sitemap.xml`, `robots.txt`, `manifest.json` updates for production.

## Run locally
```bash
sudo supervisorctl restart frontend   # CRA dev server on port 3000
```
External URL: `REACT_APP_BACKEND_URL` from `/app/frontend/.env` (no backend used — that URL just routes to the frontend pod).
