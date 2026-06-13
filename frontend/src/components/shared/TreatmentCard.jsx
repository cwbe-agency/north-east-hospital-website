import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TreatmentCard = ({ treatment }) => (
  <Link
    to={`/treatments/${treatment.slug}`}
    data-testid={`treatment-card-${treatment.slug}`}
    className="card-base card-hover group flex flex-col overflow-hidden"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={treatment.image}
        alt={treatment.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-semibold text-lg text-slate-900 group-hover:text-emerald-800">
        {treatment.title}
      </h3>
      <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-1">
        {treatment.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
        Learn more
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>
  </Link>
);

export default TreatmentCard;
