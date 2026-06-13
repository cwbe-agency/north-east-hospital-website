import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Plus } from "lucide-react";
import contact from "@/data/contact";
import navigation from "@/data/navigation";
import departments from "@/data/departments";

const Footer = () => (
  <footer
    data-testid="site-footer"
    className="bg-slate-900 text-slate-300 mt-16"
  >
    <div className="container-page py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <Link
          to="/"
          data-testid="footer-brand-link"
          className="flex items-center gap-3"
        >
          <span
            className="grid h-11 w-11 place-items-center rounded-xl text-white"
            style={{ backgroundColor: "rgb(var(--color-primary-light))" }}
            aria-hidden="true"
          >
            <Plus size={22} strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <div
              className="font-bold text-white text-base"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {contact.hospital.shortName}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Multispeciality · Siliguri
            </div>
          </div>
        </Link>
        <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
          A multispeciality hospital serving Siliguri, Darjeeling and the wider
          North Bengal region — with 24-hour emergency, modern facilities and
          an experienced team committed to patient-first care.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm">
          <a
            href={`tel:${contact.phone.mainTel}`}
            data-testid="footer-call-link"
            className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white"
          >
            <Phone size={16} className="text-emerald-300" />
            {contact.phone.main}
          </a>
          <a
            href={`mailto:${contact.email.general}`}
            data-testid="footer-email-link"
            className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white"
          >
            <Mail size={16} className="text-emerald-300" />
            {contact.email.general}
          </a>
          <p className="inline-flex items-start gap-2.5 text-slate-400">
            <MapPin size={16} className="text-emerald-300 mt-0.5" />
            <span>{contact.hospital.addressLine}</span>
          </p>
          <p className="inline-flex items-start gap-2.5 text-slate-400">
            <Clock size={16} className="text-emerald-300 mt-0.5" />
            <span>{contact.hours.emergency}</span>
          </p>
        </div>
      </div>

      <div className="lg:col-span-2">
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
          Explore
        </h4>
        <ul className="space-y-2.5 text-sm">
          {navigation.footer.explore.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-slate-400 hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-3">
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
          Patients
        </h4>
        <ul className="space-y-2.5 text-sm">
          {navigation.footer.patient.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="text-slate-400 hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-3">
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
          Departments
        </h4>
        <ul className="space-y-2.5 text-sm">
          {departments.slice(0, 6).map((d) => (
            <li key={d.slug}>
              <Link
                to={`/departments/${d.slug}`}
                className="text-slate-400 hover:text-white"
              >
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-slate-800">
      <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {contact.hospital.name}. All rights reserved.
        </p>
        <p className="text-slate-500">
          For medical emergencies, call{" "}
          <a
            href={`tel:${contact.phone.emergencyTel}`}
            className="text-red-300 hover:text-red-200 font-semibold"
          >
            {contact.phone.emergency}
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
