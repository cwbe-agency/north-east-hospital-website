import React from "react";
import { Award, Users, Building2, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import CtaSection from "@/components/shared/CtaSection";
import statistics from "@/data/statistics";
import contact from "@/data/contact";
import LeadershipSection from "@/components/shared/LeadershipSection";
import leadership from "@/data/leadership";

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-first",
    text: "Every decision starts with what's best for the patient — not what's easiest for the system.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & sterile",
    text: "Strict infection control, modern theatres and well-trained nursing care.",
  },
  {
    icon: Sparkles,
    title: "Clarity always",
    text: "Plain-language diagnoses, transparent estimates, and time to ask questions.",
  },
  {
    icon: Users,
    title: "Team-led care",
    text: "Specialists, nurses and support staff who work as one team across departments.",
  },
];

const AboutPage = () => (
  <>
    <Seo
      title="About Us"
      description="Learn about North East Multispeciality Hospital — our mission, doctors, facilities and commitment to compassionate, 24-hour healthcare in Siliguri."
      path="/about"
    />
    <PageHeader
      eyebrow="About the hospital"
      title="Healthcare with heart, for North Bengal."
      description="North East Multispeciality Hospital is a modern healthcare facility in Siliguri serving the people of Darjeeling district and the wider region. We combine experienced doctors, modern infrastructure and a deeply patient-first culture."
      image="https://images.unsplash.com/photo-1587351021821-f871837248c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85"
    />

    {/* MISSION */}
    <section className="section">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Our mission"
            title="To make excellent healthcare feel calm and human."
            description="We believe that great medicine is only half the job — the other half is listening, explaining, and treating every patient with respect."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.title} className="card-base p-6">
              <span
                className="grid h-11 w-11 place-items-center rounded-xl mb-4"
                style={{
                  backgroundColor: "rgb(236 253 245)",
                  color: "rgb(var(--color-primary))",
                }}
              >
                <v.icon size={20} />
              </span>
              <h3 className="font-semibold text-slate-900">{v.title}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Manager Information */}
    <LeadershipSection
      {...leadership.managingDirector}
    />

    {/* STATS */}
    <section
      className="section"
      style={{ backgroundColor: "rgb(var(--color-alt))" }}
    >
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Our journey"
          title="Trusted by thousands of families."
          description="Real, growing impact across Siliguri and beyond."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {statistics.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>

    {/* TRUST / CERTIFICATIONS */}
    <section className="section">
      <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1601839181465-c33194a13cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85"
            alt="Hospital interior"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Quality & safety"
            title="Care you can trust, every visit."
            description="We are committed to evidence-based medicine, hygiene standards and continuous improvement. Our staff is regularly trained in patient safety, infection control and emergency response."
          />
          <ul className="mt-8 space-y-3">
            {[
              "Accredited-standard infection control protocols",
              "Trained emergency & ICU teams on-site 24/7",
              "Multidisciplinary case reviews for complex care",
              "Patient feedback reviewed weekly by leadership",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-slate-700"
              >
                <Award
                  size={18}
                  className="mt-0.5 shrink-0"
                  style={{ color: "rgb(var(--color-primary))" }}
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <CtaSection
      variant="compact"
      title="Have a question about your visit?"
      description={`Our patient services team is happy to help — ${contact.phone.main}`}
    />
  </>
);

export default AboutPage;
