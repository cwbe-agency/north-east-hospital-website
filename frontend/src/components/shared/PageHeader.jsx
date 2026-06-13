import React from "react";

// Reusable hero header used on inner pages (About, Doctors list, Departments,
// Contact, Appointment, Blog, Treatments, Careers).
const PageHeader = ({
  eyebrow,
  title,
  description,
  image,
  align = "left",
  testId,
}) => (
  <section
    data-testid={testId || "page-header"}
    className="relative overflow-hidden border-b border-slate-100"
    style={{ backgroundColor: "rgb(var(--color-paper))" }}
  >
    <div
      className="absolute inset-0 grain-bg pointer-events-none"
      aria-hidden="true"
    />
    <div className="container-page relative py-14 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
      <div
        className={`${
          align === "center"
            ? "lg:col-span-12 text-center mx-auto max-w-3xl"
            : image
              ? "lg:col-span-7"
              : "lg:col-span-12"
        }`}
      >
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="h1-display">{title}</h1>
        {description && (
          <p className="body-lg mt-5 max-w-2xl">{description}</p>
        )}
      </div>
      {image && (
        <div className="lg:col-span-5">
          <div className="aspect-[5/4] overflow-hidden rounded-3xl shadow-lg border border-slate-100">
            <img
              src={image}
              alt={title}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  </section>
);

export default PageHeader;
