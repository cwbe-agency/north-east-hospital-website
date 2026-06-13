import React from "react";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import contact from "@/data/contact";

// Top-of-page red emergency strip — visible site-wide.
const EmergencyBanner = () => (
  <div
    data-testid="emergency-banner"
    className="w-full text-white"
    style={{ backgroundColor: "rgb(var(--color-accent))" }}
  >
    <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-2 py-2 text-xs sm:text-sm">
      <div className="flex items-center gap-2 font-medium">
        <AlertTriangle size={16} className="shrink-0" />
        <span>
          24-Hour Emergency · {contact.hours.emergency}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={`tel:${contact.phone.emergencyTel}`}
          data-testid="emergency-call-link"
          className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
        >
          <Phone size={14} />
          Emergency: {contact.phone.emergency}
        </a>
        <Link
          to="/appointment"
          data-testid="emergency-book-link"
          className="hidden md:inline-flex font-medium underline-offset-4 hover:underline"
        >
          Book Appointment →
        </Link>
      </div>
    </div>
  </div>
);

export default EmergencyBanner;
