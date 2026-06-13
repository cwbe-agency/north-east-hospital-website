import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Calendar, Phone, Plus } from "lucide-react";
import navigation from "@/data/navigation";
import contact from "@/data/contact";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-40 w-full bg-white transition-shadow ${
        scrolled ? "shadow-sm border-b border-slate-100" : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Link
          to="/"
          data-testid="brand-logo-link"
          className="flex items-center gap-2.5 shrink-0"
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-xl text-white"
            style={{ backgroundColor: "rgb(var(--color-primary))" }}
            aria-hidden="true"
          >
            <Plus size={22} strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className="font-bold tracking-tight text-[15px] sm:text-base"
              style={{ fontFamily: "Manrope, sans-serif", color: "rgb(var(--color-text))" }}
            >
              North East
            </span>
            <span className="text-[11px] sm:text-xs font-medium tracking-wider uppercase text-slate-500 mt-0.5">
              Multispeciality Hospital
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1"
        >
          {navigation.primary.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              data-testid={link.testId}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-[14.5px] font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-emerald-800"
                    : "text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${contact.phone.mainTel}`}
            data-testid="navbar-call-link"
            className="btn btn-ghost !px-3 !py-2 text-sm"
            aria-label={`Call hospital ${contact.phone.main}`}
          >
            <Phone size={16} />
            <span className="hidden xl:inline">{contact.phone.main}</span>
          </a>
          <Link
            to="/appointment"
            data-testid="navbar-book-btn"
            className="btn btn-primary !px-4 !py-2.5 text-sm"
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-700 hover:bg-slate-100"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu-panel"
          className="lg:hidden border-t border-slate-100 bg-white"
        >
          <div className="container-page py-4 flex flex-col gap-1">
            {navigation.primary.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                data-testid={`mobile-${link.testId}`}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-base font-medium ${
                    isActive
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-800 hover:bg-slate-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${contact.phone.mainTel}`}
                data-testid="mobile-call-btn"
                className="btn btn-outline !py-2.5 text-sm"
              >
                <Phone size={16} /> Call
              </a>
              <Link
                to="/appointment"
                data-testid="mobile-book-btn"
                className="btn btn-primary !py-2.5 text-sm"
              >
                <Calendar size={16} /> Book
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
