import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Phone,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import Seo from "@/components/seo/Seo";
import SectionHeading from "@/components/shared/SectionHeading";
import DepartmentCard from "@/components/shared/DepartmentCard";
import DoctorCard from "@/components/shared/DoctorCard";
import FacilityCard from "@/components/shared/FacilityCard";
import StatCard from "@/components/shared/StatCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CtaSection from "@/components/shared/CtaSection";
import departments from "@/data/departments";
import doctors, { featuredDoctors } from "@/data/doctors";
import facilities from "@/data/facilities";
import statistics from "@/data/statistics";
import testimonials from "@/data/testimonials";
import faq from "@/data/faq";
import whyChooseUs from "@/data/whyChooseUs";
import contact from "@/data/contact";
import * as Icons from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Multispeciality Hospital in Siliguri"
        description="North East Multispeciality Hospital in Siliguri offers 24-hour emergency care, experienced doctors and modern facilities across General Medicine, Cardiology, Orthopedics, Gynecology, Pediatrics and ENT."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: contact.hospital.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: contact.hospital.addressLine,
            addressLocality: contact.hospital.city,
            addressRegion: contact.hospital.state,
            addressCountry: contact.hospital.country,
          },
          telephone: contact.phone.main,
          openingHours: "Mo-Su 00:00-24:00",
        }}
      />

      {/* HERO ------------------------------------------------------------ */}
      <section
        data-testid="hero-section"
        className="relative overflow-hidden bg-white border-b border-slate-100"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 grain-bg pointer-events-none"
        />
        <div className="container-page relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center py-14 md:py-20 lg:py-24">
          <div className="lg:col-span-7 anim-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <p className="text-xs font-semibold text-emerald-800 tracking-wide">
                24 Hours · Emergency, ICU & Pharmacy Open Now
              </p>
            </div>

            <h1 className="h1-display">
              Compassionate, expert healthcare for{" "}
              <span style={{ color: "rgb(var(--color-primary))" }}>
                Siliguri
              </span>{" "}
              and North Bengal.
            </h1>
            <p className="body-lg mt-6 max-w-2xl">
              A modern multispeciality hospital with experienced doctors,
              round-the-clock emergency care and a patient-first approach.
              We&apos;re here when you need us — day or night.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                data-testid="hero-book-btn"
                className="btn btn-primary"
              >
                <Calendar size={16} />
                Book Appointment
              </Link>
              <a
                href={`tel:${contact.phone.mainTel}`}
                data-testid="hero-call-btn"
                className="btn btn-outline"
              >
                <Phone size={16} />
                Call {contact.phone.main}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-700" />
                Trusted patient care
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-emerald-700" />
                Always open · 24 / 7
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-emerald-700" />
                Central Siliguri
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative anim-fade-in anim-delay-2">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85"
                alt="Doctor caring for a smiling patient"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-3 lg:-left-8 bottom-6 lg:bottom-10 card-base p-4 pr-6 max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{ backgroundColor: "rgb(var(--color-primary))" }}
                >
                  <Icons.HeartHandshake size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Patients served</p>
                  <p className="font-bold text-slate-900 text-lg leading-none">
                    75,000+
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 lg:-right-6 top-8 card-base p-4 max-w-[220px] hidden sm:block">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                &ldquo;Calm, compassionate emergency team. They saved my father&apos;s
                life.&rdquo;
              </p>
              <p className="text-[11px] text-slate-400 mt-1">— Subhadip M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK APPOINTMENT STRIP --------------------------------------- */}
      <section
        data-testid="quick-appointment-strip"
        className="border-b border-slate-100 bg-white"
      >
        <div className="container-page py-6 md:py-7 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span
              className="grid h-11 w-11 place-items-center rounded-xl"
              style={{
                backgroundColor: "rgb(236 253 245)",
                color: "rgb(var(--color-primary))",
              }}
            >
              <Calendar size={20} />
            </span>
            <div>
              <p className="font-semibold text-slate-900">
                Book your appointment in under a minute
              </p>
              <p className="text-sm text-slate-500">
                Select a department, pick a time, and we&apos;ll confirm by phone.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/appointment"
              data-testid="quick-book-btn"
              className="btn btn-primary !py-2.5 text-sm"
            >
              Start booking <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${contact.phone.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="quick-whatsapp-btn"
              className="btn btn-outline !py-2.5 text-sm"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS --------------------------------------------------- */}
      <section data-testid="departments-grid" className="section">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Care under one roof"
              title="Departments designed around you"
              description="Find the right specialist quickly. Our care teams collaborate so you get clear answers and a coordinated plan."
            />
            <Link
              to="/departments"
              data-testid="all-departments-link"
              className="btn btn-ghost !px-3 self-start md:self-end"
            >
              All departments <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {departments.map((d) => (
              <DepartmentCard key={d.slug} department={d} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DOCTORS ---------------------------------------------- */}
      <section
        data-testid="featured-doctors"
        className="section"
        style={{ backgroundColor: "rgb(var(--color-alt))" }}
      >
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Meet our specialists"
              title="Doctors who listen first."
              description="Experienced consultants across every major speciality, with the time to understand your concern and explain your options."
            />
            <Link
              to="/doctors"
              data-testid="all-doctors-link"
              className="btn btn-ghost !px-3"
            >
              View all doctors <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {featuredDoctors.slice(0, 4).map((doc) => (
              <DoctorCard key={doc.slug} doctor={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US ------------------------------------------------- */}
      <section data-testid="why-choose-us" className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why North East Hospital"
            title="A calm hospital experience, built around trust."
            description="From the moment you arrive, every detail is designed to make care simpler — for you and your family."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-12">
            {whyChooseUs.map((item) => {
              const Icon = Icons[item.icon] || Icons.Sparkles;
              return (
                <div
                  key={item.title}
                  data-testid={`why-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                    style={{
                      backgroundColor: "rgb(236 253 245)",
                      color: "rgb(var(--color-primary))",
                    }}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITIES ---------------------------------------------------- */}
      <section
        data-testid="facilities-section"
        className="section"
        style={{ backgroundColor: "rgb(var(--color-paper))" }}
      >
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Facilities & infrastructure"
                title="Modern facilities. Familiar warmth."
                description="A clean, well-equipped hospital that supports every step of your care — from diagnosis to recovery."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  data-testid="facilities-about-link"
                  className="btn btn-primary"
                >
                  About the hospital <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {facilities.map((f) => (
                <FacilityCard key={f.title} facility={f} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS ---------------------------------------------------- */}
      <section data-testid="statistics-section" className="section">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="By the numbers"
            title="A hospital trusted by thousands."
            description="Our team's experience and the families we've cared for tell the story better than we can."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {statistics.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS -------------------------------------------------- */}
      <section
        data-testid="testimonials-section"
        className="section"
        style={{ backgroundColor: "rgb(var(--color-alt))" }}
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient stories"
            title="Care, in their own words."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-12">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ----------------------------------------------------------- */}
      <section data-testid="faq-section" className="section">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Frequently asked"
              title="Quick answers for patients & families."
              description="If you can't find what you need here, our team is just a call away."
            />
            <a
              href={`tel:${contact.phone.mainTel}`}
              data-testid="faq-call-link"
              className="btn btn-outline mt-6"
            >
              <Phone size={16} /> Talk to us
            </a>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      {/* FINAL CTA ----------------------------------------------------- */}
      <CtaSection
        title="Your care, our priority — 24 hours a day."
        description="Whether it's a routine check-up or an emergency, our team is ready to help. Reach out in the way that's easiest for you."
      />
    </>
  );
};

export default HomePage;
