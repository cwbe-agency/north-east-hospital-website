import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Phone, CheckCircle2 } from "lucide-react";
import Seo from "@/components/seo/Seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaSection from "@/components/shared/CtaSection";
import { getTreatmentBySlug } from "@/data/treatments";
import { getDepartmentBySlug } from "@/data/departments";
import contact from "@/data/contact";

const TreatmentDetailPage = () => {
  const { slug } = useParams();
  const t = getTreatmentBySlug(slug);
  if (!t) return <Navigate to="/treatments" replace />;
  const dept = getDepartmentBySlug(t.departmentSlug);

  return (
    <>
      <Seo
        title={t.title}
        description={t.summary}
        path={`/treatments/${t.slug}`}
        image={t.image}
      />
      <Breadcrumbs
        items={[
          { label: "Treatments", to: "/treatments" },
          { label: t.title, to: `/treatments/${t.slug}` },
        ]}
      />

      <section className="container-page py-10 md:py-14 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          {dept && (
            <Link
              to={`/departments/${dept.slug}`}
              data-testid="treatment-dept-link"
              className="chip-teal inline-flex mb-4"
            >
              {dept.name}
            </Link>
          )}
          <h1 className="h1-display">{t.title}</h1>
          <p className="body-lg mt-5">{t.summary}</p>

          <div className="mt-8 space-y-3">
            {[
              "Detailed consultation with a specialist",
              "Clear estimate, paperwork and insurance support",
              "Day-of procedure planning & safety briefing",
              "Structured follow-up & rehabilitation",
            ].map((line) => (
              <p
                key={line}
                className="flex items-start gap-2.5 text-slate-700"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-700"
                />
                <span>{line}</span>
              </p>
            ))}
          </div>

          <p className="text-sm text-slate-500 mt-8">
            This page is a placeholder summary. Full clinical details, costs
            and FAQs will be added soon.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/appointment"
              data-testid="treatment-book-btn"
              className="btn btn-primary"
            >
              <Calendar size={16} /> Book Consultation
            </Link>
            <a
              href={`tel:${contact.phone.appointmentTel}`}
              data-testid="treatment-call-btn"
              className="btn btn-outline"
            >
              <Phone size={16} /> Speak to a specialist
            </a>
          </div>

          <Link
            to="/treatments"
            data-testid="treatment-back-link"
            className="btn btn-ghost !px-3 mt-10 inline-flex"
          >
            <ArrowLeft size={16} /> All treatments
          </Link>
        </div>

        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <img src={t.image} alt={t.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <CtaSection variant="compact" />
    </>
  );
};

export default TreatmentDetailPage;
