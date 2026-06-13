import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ t }) => (
  <article
    data-testid={`testimonial-${t.name.split(" ")[0].toLowerCase()}`}
    className="card-base p-6 md:p-7 h-full flex flex-col"
  >
    <Quote size={28} className="text-emerald-100" aria-hidden="true" />
    <p className="text-slate-700 leading-relaxed mt-3 flex-1 text-[15px]">
      “{t.quote}”
    </p>
    <div className="mt-5 flex items-center gap-3 pt-5 border-t border-slate-100">
      <img
        src={t.avatar}
        alt={t.name}
        loading="lazy"
        className="h-11 w-11 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900">{t.name}</p>
        <p className="text-xs text-slate-500">
          {t.role} · {t.location}
        </p>
      </div>
      <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  </article>
);

export default TestimonialCard;
