import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FaqAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-slate-200" data-testid="faq-accordion">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <div key={item.q} className="py-2">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              data-testid={`faq-item-${i}`}
              className="w-full text-left flex items-start gap-4 py-4 group"
            >
              <span className="flex-1 font-medium text-slate-900 text-base md:text-lg leading-snug">
                {item.q}
              </span>
              <span
                className="grid h-8 w-8 place-items-center rounded-full shrink-0 transition-colors"
                style={{
                  backgroundColor: isOpen
                    ? "rgb(var(--color-primary))"
                    : "rgb(241 245 249)",
                  color: isOpen ? "#fff" : "rgb(51 65 85)",
                }}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-slate-600 leading-relaxed pb-5 pr-12">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
