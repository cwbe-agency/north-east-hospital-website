import React from "react";
import * as Icons from "lucide-react";

const FacilityCard = ({ facility }) => {
  const Icon = Icons[facility.icon] || Icons.Sparkles;
  return (
    <div
      data-testid={`facility-card-${facility.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="card-base p-6"
    >
      <span
        className="grid h-11 w-11 place-items-center rounded-xl mb-4"
        style={{
          backgroundColor: "rgb(240 253 250)",
          color: "rgb(var(--color-secondary-dark))",
        }}
      >
        <Icon size={20} />
      </span>
      <h3 className="font-semibold text-slate-900">{facility.title}</h3>
      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
        {facility.description}
      </p>
    </div>
  );
};

export default FacilityCard;
