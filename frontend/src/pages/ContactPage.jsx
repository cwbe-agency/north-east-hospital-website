import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Siren,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import contact from "@/data/contact";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contact.hospital.googleMapsQuery
  )}&output=embed`;

  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact North East Multispeciality Hospital, Siliguri. Address, phone, email and 24-hour emergency number. ${contact.hospital.addressLine}`}
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact us"
        title="We're here to help — every hour of every day."
        description="Reach us by phone, email or in person. For emergencies, call our 24-hour line and our team will respond immediately."
      />

      {/* Emergency banner card */}
      <section className="container-page -mt-2 mb-2" id="emergency">
        <div
          className="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          style={{ backgroundColor: "rgb(254 242 242)", border: "1px solid rgb(254 202 202)" }}
        >
          <div className="flex items-center gap-4">
            <span
              className="grid h-12 w-12 place-items-center rounded-2xl text-white"
              style={{ backgroundColor: "rgb(var(--color-accent))" }}
            >
              <Siren size={22} />
            </span>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-red-900">
                Medical emergency? Call now.
              </h2>
              <p className="text-sm text-red-800/90 mt-0.5">
                Our emergency team is on standby 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>
          <a
            href={`tel:${contact.phone.emergencyTel}`}
            data-testid="contact-emergency-call"
            className="btn btn-accent"
          >
            <Phone size={16} /> {contact.phone.emergency}
          </a>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-5 space-y-4">
            <InfoCard
              icon={MapPin}
              title="Visit us"
              value={contact.hospital.addressLine}
            />
            <InfoCard
              icon={Phone}
              title="Phone"
              value={`${contact.phone.main} · ${contact.phone.appointment}`}
              href={`tel:${contact.phone.mainTel}`}
              hrefLabel="Call hospital"
              testId="contact-call-link"
            />
            <InfoCard
              icon={Mail}
              title="Email"
              value={contact.email.general}
              href={`mailto:${contact.email.general}`}
              hrefLabel="Send email"
              testId="contact-email-link"
            />
            <InfoCard
              icon={Clock}
              title="Hours"
              value={`${contact.hours.opd} · Emergency 24 / 7`}
            />
            <InfoCard
              icon={MessageCircle}
              title="WhatsApp"
              value={contact.phone.main}
              href={`https://wa.me/${contact.phone.whatsapp.replace(/[^0-9]/g, "")}`}
              hrefLabel="Chat on WhatsApp"
              testId="contact-whatsapp-link"
              external
            />
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {sent && (
              <div
                data-testid="contact-success"
                className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-900 p-5 flex items-start gap-3"
              >
                <CheckCircle2 size={20} className="mt-0.5 text-emerald-700" />
                <p className="text-sm">
                  Thanks for getting in touch — we&apos;ll get back within one
                  working day.
                </p>
              </div>
            )}
            <form
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="card-base p-6 md:p-8"
            >
              <h2 className="h3-display">Send us a message</h2>
              <p className="text-sm text-slate-500 mt-1">
                For non-urgent enquiries, billing or feedback.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-6">
                <div>
                  <label htmlFor="c-name" className="label-base">
                    Name
                  </label>
                  <input
                    id="c-name"
                    data-testid="contact-name"
                    className="input-base"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="label-base">
                    Phone
                  </label>
                  <input
                    id="c-phone"
                    data-testid="contact-phone"
                    className="input-base"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-email" className="label-base">
                    Email
                  </label>
                  <input
                    id="c-email"
                    data-testid="contact-email"
                    className="input-base"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="label-base">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    data-testid="contact-message"
                    rows={5}
                    required
                    className="input-base"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                data-testid="contact-submit-btn"
                className="btn btn-primary mt-6"
              >
                <Send size={16} /> Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm aspect-[16/9] bg-slate-100">
          <iframe
            data-testid="contact-map"
            title="Hospital location map"
            src={mapsSrc}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ icon: Icon, title, value, href, hrefLabel, testId, external }) => (
  <div className="card-base p-5">
    <div className="flex items-start gap-3">
      <span
        className="grid h-11 w-11 place-items-center rounded-xl shrink-0"
        style={{
          backgroundColor: "rgb(236 253 245)",
          color: "rgb(var(--color-primary))",
        }}
      >
        <Icon size={18} />
      </span>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </p>
        <p className="text-slate-900 font-medium mt-1">{value}</p>
        {href && (
          <a
            href={href}
            data-testid={testId}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="link-underline text-sm font-semibold mt-2 inline-block"
          >
            {hrefLabel} →
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ContactPage;
