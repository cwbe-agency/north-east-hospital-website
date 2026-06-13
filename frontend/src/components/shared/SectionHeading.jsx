import React from "react";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  testId,
  as: As = "h2",
}) => (
  <div
    data-testid={testId}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <As className={As === "h1" ? "h1-display" : "h2-display"}>{title}</As>
    {description && <p className="body-lg mt-4">{description}</p>}
  </div>
);

export default SectionHeading;
