import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  GraduationCap,
  Clock,
  Languages,
  Stethoscope,
  Calendar,
  Phone,
  ArrowRight,
} from "lucide-react";
import Seo from "@/components/seo/Seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaSection from "@/components/shared/CtaSection";
import DoctorCard from "@/components/shared/DoctorCard";
import { getDoctorBySlug } from "@/data/doctors";
import { getDepartmentBySlug } from "@/data/departments";
import doctors from "@/data/doctors";
import contact from "@/data/contact";

const DoctorDetailPage = () => {
  const { slug } = useParams();
  const doctor = getDoctorBySlug(slug);

  if (!doctor) return <Navigate to="/doctors" replace />;
  const department = getDepartmentBySlug(doctor.departmentSlug);
  const related = doctors
    .filter((d) => d.slug !== doctor.slug && d.departmentSlug === doctor.departmentSlug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={`${doctor.name} — ${doctor.specialization}`}
        description={`${doctor.name}, ${doctor.qualification}. ${doctor.specialization} at North East Multispeciality Hospital, Siliguri. ${doctor.experience}+ years experience.`}
        path={`/doctors/${doctor.slug}`}
        image={doctor.photo}
        type="profile"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: doctor.name,
          medicalSpecialty: doctor.specialization,
          worksFor: { "@type": "Hospital", name: contact.hospital.name },
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Doctors", to: "/doctors" },
          { label: doctor.name, to: `/doctors/${doctor.slug}` },
        ]}
      />

      <section className="container-page py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            {department && (
              <Link
                to={`/departments/${department.slug}`}
                data-testid="doctor-dept-link"
                className="chip-teal mb-4 inline-flex"
              >
                {department.name}
              </Link>
            )}
            <h1 className="h1-display">{doctor.name}</h1>
            <p className="mt-3 text-lg font-medium text-emerald-800">
              {doctor.specialization}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <InfoTile
                icon={GraduationCap}
                label="Qualification"
                value={doctor.qualification}
              />
              <InfoTile
                icon={Stethoscope}
                label="Experience"
                value={`${doctor.experience}+ years`}
              />
              <InfoTile
                icon={Clock}
                label="Availability"
                value={doctor.availability}
                testId="doctor-availability"
              />
              <InfoTile
                icon={Languages}
                label="Languages"
                value={doctor.languages.join(", ")}
              />
            </div>

            <h2 className="h3-display mt-10">About {doctor.name.split(" ")[1]}</h2>
            <p data-testid="doctor-bio" className="body-base mt-3">{doctor.bio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                data-testid="doctor-detail-book-btn"
                className="btn btn-primary"
              >
                <Calendar size={16} /> Book Appointment
              </Link>
              <a
                href={`tel:${contact.phone.appointmentTel}`}
                data-testid="doctor-call-btn"
                className="btn btn-outline"
              >
                <Phone size={16} /> {contact.phone.appointment}
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section
          data-testid="related-doctors"
          className="section"
          style={{ backgroundColor: "rgb(var(--color-alt))" }}
        >
          <div className="container-page">
            <div className="flex items-end justify-between mb-8">
              <h2 className="h2-display">More from {department?.name}</h2>
              <Link
                to="/doctors"
                className="btn btn-ghost !px-3 hidden sm:inline-flex"
              >
                All doctors <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {related.map((doc) => (
                <DoctorCard key={doc.slug} doctor={doc} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection variant="compact" />
    </>
  );
};

const InfoTile = ({ icon: Icon, label, value, testId }) => (
  <div data-testid={testId} className="rounded-2xl border border-slate-100 bg-white p-4">
    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 font-semibold">
      <Icon size={14} /> {label}
    </div>
    <p className="text-slate-900 font-medium mt-1.5">{value}</p>
  </div>
);

export default DoctorDetailPage;
