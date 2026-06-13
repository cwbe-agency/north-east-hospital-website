import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import DoctorCard from "@/components/shared/DoctorCard";
import CtaSection from "@/components/shared/CtaSection";
import doctors from "@/data/doctors";
import departments from "@/data/departments";

const DoctorsPage = () => {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchQ =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialization.toLowerCase().includes(q) ||
        d.qualification.toLowerCase().includes(q);
      const matchD = dept === "all" || d.departmentSlug === dept;
      return matchQ && matchD;
    });
  }, [query, dept]);

  return (
    <>
      <Seo
        title="Our Doctors"
        description="Meet the experienced specialists at North East Multispeciality Hospital, Siliguri. Browse profiles across General Medicine, Cardiology, Orthopedics, Gynecology, Pediatrics and ENT."
        path="/doctors"
      />
      <PageHeader
        eyebrow="Our Doctors"
        title="Experienced specialists, ready to help."
        description="Browse our consultants and find the right specialist for you. Each profile includes qualifications, experience and availability."
      />

      <section className="section-sm">
        <div className="container-page">
          <div className="card-base p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-7 relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                data-testid="doctor-search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or speciality"
                className="input-base !pl-11"
                aria-label="Search doctors"
              />
            </div>
            <div className="md:col-span-5">
              <select
                data-testid="doctor-dept-filter"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="input-base"
                aria-label="Filter by department"
              >
                <option value="all">All departments</option>
                {departments.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Showing <span className="font-semibold text-slate-700">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "doctor" : "doctors"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-6">
            {filtered.map((doc) => (
              <DoctorCard key={doc.slug} doctor={doc} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              data-testid="doctors-empty-state"
              className="text-center py-16"
            >
              <p className="text-lg font-semibold text-slate-700">
                No doctors match your search.
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Try a different keyword or department.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaSection variant="compact" />
    </>
  );
};

export default DoctorsPage;
