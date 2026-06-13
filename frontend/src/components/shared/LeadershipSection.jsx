import React from "react";
import { Quote } from "lucide-react";

const LeadershipSection = ({
  name,
  designation,
  image,
  message,
}) => {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="card-base overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>

            <div
              className="absolute -bottom-5 -right-5 hidden md:flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border"
              style={{
                borderColor: "rgb(var(--color-line))",
                boxShadow: "var(--shadow-card-hover)",
              }}
            >
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center text-white"
                style={{
                  backgroundColor: "rgb(var(--color-primary))",
                }}
              >
                <Quote size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Leadership & Vision
                </p>
                <p className="body-sm">
                  Guiding healthcare excellence
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="eyebrow mb-3">
              Hospital Leadership
            </p>

            <h2 className="h2-display mb-4">
              Message From Our Managing Director
            </h2>

            <div
              className="h-1 w-20 rounded-full mb-6"
              style={{
                backgroundColor:
                  "rgb(var(--color-primary-light))",
              }}
            />

            <h3 className="text-2xl font-bold mb-1">
              {name}
            </h3>

            <p
              className="font-medium mb-6"
              style={{
                color:
                  "rgb(var(--color-primary))",
              }}
            >
              {designation}
            </p>

            <blockquote className="body-lg italic border-l-4 pl-6">
              {message}
            </blockquote>

            <div className="mt-8">
              <div className="card-base p-5">
                <p className="body-base">
                  Our commitment is to provide
                  accessible, affordable, and
                  compassionate healthcare while
                  continuously investing in modern
                  medical facilities, experienced
                  professionals, and patient-first
                  care.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;