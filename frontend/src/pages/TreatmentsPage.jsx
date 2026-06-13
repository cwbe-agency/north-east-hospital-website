import React from "react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import TreatmentCard from "@/components/shared/TreatmentCard";
import CtaSection from "@/components/shared/CtaSection";
import treatments from "@/data/treatments";

const TreatmentsPage = () => (
  <>
    <Seo
      title="Treatments & Procedures"
      description="Explore treatments and procedures offered at North East Multispeciality Hospital, Siliguri — from cardiac care to orthopedic surgery and maternity."
      path="/treatments"
    />
    <PageHeader
      eyebrow="Treatments"
      title="Modern treatments, gentle delivery."
      description="A glimpse into our most-requested treatments and procedures. Each is delivered by experienced specialists with personalised follow-up."
    />
    <section className="section-sm">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {treatments.map((t) => (
            <TreatmentCard key={t.slug} treatment={t} />
          ))}
        </div>
      </div>
    </section>
    <CtaSection variant="compact" />
  </>
);

export default TreatmentsPage;
