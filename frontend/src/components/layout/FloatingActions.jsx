import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Calendar, Plus, X } from "lucide-react";
import contact from "@/data/contact";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-testid="floating-actions"
      className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-40 flex flex-col items-end gap-3"
    >
      {open && (
        <div className="flex flex-col items-end gap-2.5 anim-fade-up">
          <a
            href={`tel:${contact.phone.mainTel}`}
            data-testid="float-call-btn"
            className="group inline-flex items-center gap-2 rounded-full bg-white pl-4 pr-2 py-2 shadow-lg border border-slate-100"
            aria-label="Call hospital"
          >
            <span className="text-sm font-medium text-slate-800 group-hover:text-emerald-800">
              Call Now
            </span>
            <span
              className="grid h-9 w-9 place-items-center rounded-full text-white"
              style={{ backgroundColor: "rgb(var(--color-primary))" }}
            >
              <Phone size={16} />
            </span>
          </a>
          <a
            href={`https://wa.me/${contact.phone.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="float-whatsapp-btn"
            className="group inline-flex items-center gap-2 rounded-full bg-white pl-4 pr-2 py-2 shadow-lg border border-slate-100"
            aria-label="Message on WhatsApp"
          >
            <span className="text-sm font-medium text-slate-800 group-hover:text-emerald-800">
              WhatsApp
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full text-white bg-[#25D366]">
              <MessageCircle size={16} />
            </span>
          </a>
          <Link
            to="/appointment"
            data-testid="float-book-btn"
            className="group inline-flex items-center gap-2 rounded-full bg-white pl-4 pr-2 py-2 shadow-lg border border-slate-100"
            aria-label="Book appointment"
          >
            <span className="text-sm font-medium text-slate-800 group-hover:text-emerald-800">
              Book Appointment
            </span>
            <span
              className="grid h-9 w-9 place-items-center rounded-full text-white"
              style={{ backgroundColor: "rgb(var(--color-secondary))" }}
            >
              <Calendar size={16} />
            </span>
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-testid="float-toggle-btn"
        aria-expanded={open}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        className="pulse-ring grid h-14 w-14 place-items-center rounded-full text-white shadow-xl transition-transform active:scale-95"
        style={{ backgroundColor: "rgb(var(--color-accent))" }}
      >
        {open ? <X size={22} /> : <Plus size={24} strokeWidth={2.5} />}
      </button>
    </div>
  );
};

export default FloatingActions;
