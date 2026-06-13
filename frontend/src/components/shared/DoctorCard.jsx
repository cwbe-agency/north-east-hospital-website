import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, GraduationCap } from "lucide-react";

const DoctorCard = ({ doctor, compact = false }) => (
  <Link
    to={`/doctors/${doctor.slug}`}
    data-testid={`doctor-card-${doctor.slug}`}
    className="card-base card-hover group flex flex-col overflow-hidden"
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
      <img
        src={doctor.photo}
        alt={`${doctor.name} — ${doctor.specialization}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute top-3 left-3 chip-teal">
        {doctor.experience}+ yrs experience
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-semibold text-slate-900 text-lg leading-snug">
        {doctor.name}
      </h3>
      <p className="text-sm text-emerald-800 font-medium mt-0.5">
        {doctor.specialization}
      </p>
      {!compact && (
        <div className="mt-3 space-y-1.5 text-sm text-slate-500">
          <p className="inline-flex items-center gap-1.5">
            <GraduationCap size={14} className="text-slate-400" />
            {doctor.qualification}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Stethoscope size={14} className="text-slate-400" />
            {doctor.availability}
          </p>
        </div>
      )}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
        View profile
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>
  </Link>
);

export default DoctorCard;
