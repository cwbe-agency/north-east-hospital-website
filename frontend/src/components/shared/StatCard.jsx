import React, { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";

// Lightweight count-up animation on first viewport visibility
const useCountUp = (target, durationMs = 1400, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return value;
};

const StatCard = ({ stat }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = Icons[stat.icon] || Icons.Sparkles;
  const value = useCountUp(stat.value, 1400, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-testid={`stat-card-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="card-base p-6 text-center"
    >
      <span
        className="mx-auto grid h-12 w-12 place-items-center rounded-2xl mb-4"
        style={{
          backgroundColor: "rgb(236 253 245)",
          color: "rgb(var(--color-primary))",
        }}
      >
        <Icon size={22} />
      </span>
      <div
        className="text-3xl md:text-4xl font-bold tracking-tight"
        style={{ fontFamily: "Manrope, sans-serif", color: "rgb(var(--color-primary-dark))" }}
      >
        {value.toLocaleString("en-IN")}
        {stat.suffix}
      </div>
      <p className="text-sm text-slate-500 mt-2 font-medium">{stat.label}</p>
    </div>
  );
};

export default StatCard;
