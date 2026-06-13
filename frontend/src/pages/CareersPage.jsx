import React from "react";
import { MapPin, Briefcase, ArrowRight, Send } from "lucide-react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaSection from "@/components/shared/CtaSection";
import careers from "@/data/careers";
import contact from "@/data/contact";

const CareersPage = () => (
  <>
    <Seo
      title="Careers"
      description="Explore careers at North East Multispeciality Hospital, Siliguri. Open roles for doctors, nurses, technicians and support staff."
      path="/careers"
    />
    <PageHeader
      eyebrow="Careers"
      title="Grow your career with a hospital that cares."
      description={careers.intro}
      image="https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwY2FyZSUyMHNtaWxpbmd8ZW58MHx8fHwxNzgxMzI1MzE1fDA&ixlib=rb-4.1.0&q=85"
    />

    <section className="section">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <SectionHeading eyebrow="Current openings" title="Open roles" />
          <a
            href={`mailto:${contact.email.careers}`}
            data-testid="careers-email-link"
            className="btn btn-outline !py-2.5 text-sm"
          >
            <Send size={16} /> Send your CV
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {careers.openings.map((j) => (
            <article
              key={j.title}
              data-testid={`career-${j.title.toLowerCase().replace(/[^a-z]/g, "-")}`}
              className="card-base p-6 flex flex-col"
            >
              <div className="flex items-start gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{
                    backgroundColor: "rgb(236 253 245)",
                    color: "rgb(var(--color-primary))",
                  }}
                >
                  <Briefcase size={18} />
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-lg leading-snug">
                    {j.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{j.department}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="chip">{j.type}</span>
                <span className="chip-teal inline-flex items-center gap-1">
                  <MapPin size={12} /> {j.location}
                </span>
              </div>
              <a
                href={`mailto:${contact.email.careers}?subject=Application — ${encodeURIComponent(j.title)}`}
                data-testid={`apply-${j.title.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800"
              >
                Apply now <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <div className="card-base p-6 md:p-8 mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">
              Don&apos;t see the right role?
            </h3>
            <p className="text-sm text-slate-600 mt-1.5">
              Send us your CV and a short note — we&apos;ll keep you in mind as new
              positions open up.
            </p>
          </div>
          <a
            href={`mailto:${contact.email.careers}`}
            data-testid="careers-general-apply"
            className="btn btn-primary"
          >
            <Send size={16} /> Email Careers
          </a>
        </div>
      </div>
    </section>

    <CtaSection variant="compact" />
  </>
);

export default CareersPage;
