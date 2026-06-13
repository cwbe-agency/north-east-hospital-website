import React, { useState } from "react";
import {
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import departments from "@/data/departments";
import doctors, { getDoctorsByDepartment } from "@/data/doctors";
import contact from "@/data/contact";

const initialState = {
  name: "",
  phone: "",
  email: "",
  department: "",
  doctor: "",
  date: "",
  time: "",
  message: "",
};

const AppointmentPage = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const filteredDoctors = form.department
    ? getDoctorsByDepartment(form.department)
    : doctors;

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: value,
      ...(name === "department" ? { doctor: "" } : {}),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: simulate submission
    setSubmitted(true);
    setForm(initialState);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title="Book an Appointment"
        description="Book an appointment with the doctors at North East Multispeciality Hospital, Siliguri. Choose a department, doctor and preferred time."
        path="/appointment"
      />
      <PageHeader
        eyebrow="Book an appointment"
        title="Tell us about your visit."
        description="Fill in a few details and our team will confirm your appointment by phone or WhatsApp. For urgent care, please call our emergency line directly."
      />

      <section className="section-sm">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {submitted && (
              <div
                data-testid="appointment-success"
                role="status"
                className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-900 p-5 flex items-start gap-3"
              >
                <CheckCircle2
                  size={22}
                  className="shrink-0 mt-0.5 text-emerald-700"
                />
                <div>
                  <p className="font-semibold">
                    Thanks! Your appointment request was received.
                  </p>
                  <p className="text-sm mt-1">
                    Our team will reach out shortly to confirm. For urgent
                    care, please call{" "}
                    <a
                      href={`tel:${contact.phone.emergencyTel}`}
                      className="underline font-semibold"
                    >
                      {contact.phone.emergency}
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            <form
              onSubmit={onSubmit}
              data-testid="appointment-form"
              className="card-base p-6 md:p-8"
            >
              <h2 className="h3-display mb-1">Appointment details</h2>
              <p className="text-sm text-slate-500 mb-6">
                Fields marked with <span className="text-red-600">*</span> are required.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Full name *"
                  name="name"
                  testId="appt-name"
                  required
                  value={form.name}
                  onChange={update}
                  placeholder="As per ID"
                />
                <Field
                  label="Phone *"
                  name="phone"
                  testId="appt-phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  placeholder="10-digit mobile"
                />
                <Field
                  label="Email"
                  name="email"
                  testId="appt-email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                />
                <Select
                  label="Department *"
                  name="department"
                  testId="appt-department"
                  required
                  value={form.department}
                  onChange={update}
                  options={[
                    { value: "", label: "Select a department" },
                    ...departments.map((d) => ({ value: d.slug, label: d.name })),
                  ]}
                />
                <Select
                  label="Preferred doctor"
                  name="doctor"
                  testId="appt-doctor"
                  value={form.doctor}
                  onChange={update}
                  options={[
                    { value: "", label: "Any available doctor" },
                    ...filteredDoctors.map((d) => ({
                      value: d.slug,
                      label: `${d.name} — ${d.specialization}`,
                    })),
                  ]}
                />
                <Field
                  label="Preferred date *"
                  name="date"
                  testId="appt-date"
                  required
                  type="date"
                  value={form.date}
                  onChange={update}
                />
                <Field
                  label="Preferred time"
                  name="time"
                  testId="appt-time"
                  type="time"
                  value={form.time}
                  onChange={update}
                />
              </div>

              <div className="mt-5">
                <label className="label-base" htmlFor="message">
                  Anything we should know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  data-testid="appt-message"
                  rows={4}
                  value={form.message}
                  onChange={update}
                  placeholder="Briefly describe your concern (optional)"
                  className="input-base"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  data-testid="appt-submit-btn"
                  className="btn btn-primary"
                >
                  <Calendar size={16} /> Request Appointment
                </button>
                <a
                  href={`tel:${contact.phone.appointmentTel}`}
                  data-testid="appt-call-link"
                  className="btn btn-outline"
                >
                  <Phone size={16} /> Call instead
                </a>
                <p className="text-xs text-slate-500">
                  We typically confirm within 30 minutes during OPD hours.
                </p>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-4 space-y-5">
            <Sidebar
              icon={Clock}
              title="Hours"
              lines={[contact.hours.opd, contact.hours.emergency]}
            />
            <Sidebar
              icon={Phone}
              title="Talk to us"
              lines={[
                `Appointments · ${contact.phone.appointment}`,
                `Emergency · ${contact.phone.emergency}`,
              ]}
            />
            <Sidebar
              icon={MessageCircle}
              title="WhatsApp"
              lines={[`Message us · ${contact.phone.main}`]}
              cta={{
                href: `https://wa.me/${contact.phone.whatsapp.replace(/[^0-9]/g, "")}`,
                label: "Open WhatsApp",
                testId: "appt-whatsapp-link",
              }}
            />
            <Sidebar
              icon={ShieldCheck}
              title="Insurance & TPA"
              lines={[
                "We support cashless treatment with most major insurers — please carry your card.",
              ]}
            />
          </aside>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, name, testId, ...props }) => (
  <div>
    <label htmlFor={name} className="label-base">
      {label}
    </label>
    <input
      id={name}
      name={name}
      data-testid={testId}
      className="input-base"
      {...props}
    />
  </div>
);

const Select = ({ label, name, testId, options, ...props }) => (
  <div>
    <label htmlFor={name} className="label-base">
      {label}
    </label>
    <select
      id={name}
      name={name}
      data-testid={testId}
      className="input-base"
      {...props}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

const Sidebar = ({ icon: Icon, title, lines, cta }) => (
  <div className="card-base p-5">
    <div className="flex items-center gap-2.5 mb-3">
      <span
        className="grid h-9 w-9 place-items-center rounded-xl"
        style={{
          backgroundColor: "rgb(236 253 245)",
          color: "rgb(var(--color-primary))",
        }}
      >
        <Icon size={16} />
      </span>
      <h3 className="font-semibold text-slate-900">{title}</h3>
    </div>
    {lines.map((l) => (
      <p key={l} className="text-sm text-slate-600 leading-relaxed">
        {l}
      </p>
    ))}
    {cta && (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={cta.testId}
        className="link-underline text-sm font-semibold mt-3 inline-block"
      >
        {cta.label} →
      </a>
    )}
  </div>
);

export default AppointmentPage;
