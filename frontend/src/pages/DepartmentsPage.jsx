import React from "react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import DepartmentCard from "@/components/shared/DepartmentCard";
import CtaSection from "@/components/shared/CtaSection";
import departments from "@/data/departments";

const DepartmentsPage = () => (
  <>
    <Seo
      title="Departments"
      description="Explore the multispeciality departments at North East Hospital Siliguri — General Medicine, Cardiology, Orthopedics, Gynecology, Pediatrics, ENT and more."
      path="/departments"
    />
    <PageHeader
      eyebrow="Departments"
      title="Comprehensive care, across specialities."
      description="Each department brings together experienced consultants, modern equipment and a calm patient experience."
    />
    <section className="section-sm">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {departments.map((d) => (
            <DepartmentCard key={d.slug} department={d} />
          ))}
        </div>
      </div>
    </section>
    <CtaSection variant="compact" />
  </>
);

export default DepartmentsPage;
