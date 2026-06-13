import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calendar, Phone } from "lucide-react";
import Seo from "@/components/seo/Seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SectionHeading from "@/components/shared/SectionHeading";
import FaqAccordion from "@/components/shared/FaqAccordion";
import DoctorCard from "@/components/shared/DoctorCard";
import CtaSection from "@/components/shared/CtaSection";
import { getDepartmentBySlug } from "@/data/departments";
import { getDoctorsByDepartment } from "@/data/doctors";
import contact from "@/data/contact";

const DepartmentDetailPage = () => {
  const { slug } = useParams();
  const dept = getDepartmentBySlug(slug);
  if (!dept) return <Navigate to="/departments" replace />;
  const docs = getDoctorsByDepartment(dept.slug);

  return (
    <>
      <Seo
        title={`${dept.name} in Siliguri`}
        description={`${dept.name} at North East Multispeciality Hospital, Siliguri. ${dept.short}`}
        path={`/departments/${dept.slug}`}
        image={dept.image}
      />
      <Breadcrumbs
        items={[
          { label: "Departments", to: "/departments" },
          { label: dept.name, to: `/departments/${dept.slug}` },
        ]}
      />

      <section className="container-page py-10 md:py-14 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-3">Department</p>
          <h1 className="h1-display">{dept.name}</h1>
          <p className="body-lg mt-5">{dept.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/appointment"
              data-testid="dept-book-btn"
              className="btn btn-primary"
            >
              <Calendar size={16} /> Book Appointment
            </Link>
            <a
              href={`tel:${contact.phone.appointmentTel}`}
              data-testid="dept-call-btn"
              className="btn btn-outline"
            >
              <Phone size={16} /> {contact.phone.appointment}
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[5/4] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src={dept.image}
              alt={dept.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ backgroundColor: "rgb(var(--color-paper))" }}
      >
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What we treat"
              title="Services & procedures"
            />
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {dept.services.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-slate-700"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-700"
                />
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {docs.length > 0 && (
        <section className="section">
          <div className="container-page">
            <div className="flex items-end justify-between mb-8">
              <SectionHeading eyebrow="Our team" title={`Consultants in ${dept.name}`} />
              <Link
                to="/doctors"
                className="btn btn-ghost !px-3 hidden sm:inline-flex"
              >
                All doctors <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {docs.map((doc) => (
                <DoctorCard key={doc.slug} doctor={doc} />
              ))}
            </div>
          </div>
        </section>
      )}

      {dept.faqs && dept.faqs.length > 0 && (
        <section
          className="section"
          style={{ backgroundColor: "rgb(var(--color-alt))" }}
        >
          <div className="container-page grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Common questions"
                title={`About ${dept.name}`}
              />
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={dept.faqs} />
            </div>
          </div>
        </section>
      )}

      <CtaSection variant="compact" />
    </>
  );
};

export default DepartmentDetailPage;
