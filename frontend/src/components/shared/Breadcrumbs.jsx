import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = ({ items = [] }) => {
  const location = useLocation();
  return (
    <nav
      aria-label="Breadcrumb"
      data-testid="breadcrumbs"
      className="container-page pt-6"
    >
      <ol className="flex items-center flex-wrap gap-1.5 text-sm text-slate-500">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-emerald-800"
          >
            <Home size={14} /> Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
            <ChevronRight size={14} className="text-slate-400" />
            {item.to && idx < items.length - 1 ? (
              <Link to={item.to} className="hover:text-emerald-800">
                {item.label}
              </Link>
            ) : (
              <span
                className="text-slate-700 font-medium"
                aria-current={
                  location.pathname.endsWith(item.to || "") ? "page" : undefined
                }
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
