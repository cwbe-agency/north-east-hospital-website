import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import contact from "@/data/contact";

const CtaSection = ({
  variant = "default",
  title = "Ready to take the next step?",
  description = "Book an appointment with our specialists, or call our team for guidance. We're here 24 hours a day.",
}) => {
  if (variant === "compact") {
    return (
      <section className="container-page py-12">
        <div
          className="rounded-3xl px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ backgroundColor: "rgb(var(--color-primary))" }}
          data-testid="cta-compact"
        >
          <div className="text-white">
            <h3 className="h3-display text-white">{title}</h3>
            <p className="text-emerald-50/90 mt-1.5 text-base">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/appointment"
              data-testid="cta-book-link"
              className="btn bg-white text-emerald-900 hover:bg-emerald-50"
            >
              <Calendar size={16} /> Book Appointment
            </Link>
            <a
              href={`tel:${contact.phone.mainTel}`}
              data-testid="cta-call-link"
              className="btn btn-outline border-white text-white hover:bg-white/10 hover:text-white"
            >
              <Phone size={16} /> {contact.phone.main}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" data-testid="cta-section final-cta-section">
      <div className="container-page">
        <div
          className="rounded-[2rem] overflow-hidden relative"
          style={{ backgroundColor: "rgb(var(--color-primary-dark))" }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.4), transparent 50%), radial-gradient(circle at 80% 60%, rgba(13,148,136,0.4), transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative grid lg:grid-cols-2 gap-10 px-6 py-14 md:px-14 md:py-20">
            <div className="text-white">
              <p
                className="eyebrow mb-4"
                style={{ color: "rgb(167, 243, 208)" }}
              >
                We&apos;re here for you
              </p>
              <h2 className="h2-display text-white max-w-xl">{title}</h2>
              <p className="text-emerald-50/85 mt-5 max-w-lg text-lg leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/appointment"
                  data-testid="cta-main-book"
                  className="btn bg-white text-emerald-900 hover:bg-emerald-50"
                >
                  <Calendar size={16} /> Book Appointment
                </Link>
                <a
                  href={`tel:${contact.phone.mainTel}`}
                  data-testid="cta-main-call"
                  className="btn btn-outline border-white text-white hover:bg-white/10 hover:text-white"
                >
                  <Phone size={16} /> Call {contact.phone.main}
                </a>
                <Link
                  to="/contact"
                  data-testid="cta-main-contact"
                  className="btn btn-ghost text-white hover:bg-white/10"
                >
                  Contact us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-[2px]">
                  <p className="text-emerald-100 text-sm uppercase tracking-widest font-semibold">
                    Emergency
                  </p>
                  <p className="text-white text-2xl font-bold mt-2">
                    24 / 7
                  </p>
                  <p className="text-emerald-50/80 text-sm mt-1">
                    Always open · {contact.phone.emergency}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6">
                  <p className="text-emerald-100 text-sm uppercase tracking-widest font-semibold">
                    Appointments
                  </p>
                  <p className="text-white text-2xl font-bold mt-2">
                    9 AM – 8 PM
                  </p>
                  <p className="text-emerald-50/80 text-sm mt-1">
                    Mon – Sat, OPD
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 col-span-2">
                  <p className="text-emerald-100 text-sm uppercase tracking-widest font-semibold">
                    Location
                  </p>
                  <p className="text-white text-base font-medium mt-2">
                    {contact.hospital.addressLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
