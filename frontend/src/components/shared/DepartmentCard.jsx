import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Bone,
  Baby,
  Ear,
  Activity,
} from "lucide-react";

const iconMap = {
  Stethoscope,
  HeartPulse,
  Bone,
  Baby,
  Ear,
  Activity,
};

const DepartmentCard = ({ department }) => {
  const Icon = iconMap[department.icon] || Stethoscope;
  return (
    <Link
      to={`/departments/${department.slug}`}
      data-testid={`department-card-${department.slug}`}
      className="card-base card-hover group p-6 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-5">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl text-emerald-700"
          style={{ backgroundColor: "rgb(236 253 245)" }}
        >
          <Icon size={22} />
        </span>
        <ArrowRight
          size={18}
          className="text-slate-300 transition-all group-hover:text-emerald-800 group-hover:translate-x-1"
        />
      </div>
      <h3 className="font-semibold text-lg text-slate-900">
        {department.name}
      </h3>
      <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-1">
        {department.short}
      </p>
      <span className="mt-5 text-sm font-medium text-emerald-800 inline-flex items-center gap-1.5">
        Explore department <ArrowRight size={14} />
      </span>
    </Link>
  );
};

export default DepartmentCard;
