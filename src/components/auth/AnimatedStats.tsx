import { useEffect, useState, useRef } from "react";

interface StatProps { target: number; label: string; suffix?: string; decimals?: number; flash?: boolean; pulse?: boolean; }

function AnimatedStat({ target, label, suffix = "", decimals = 0, flash, pulse }: StatProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => { let current = 0; const step = target / 60; const interval = setInterval(() => { current = Math.min(current + step, target); setValue(current); if (current >= target) clearInterval(interval); }, 30); return () => clearInterval(interval); }, [target]);
  useEffect(() => { if (!flash) return; const interval = setInterval(() => { if (ref.current) { setValue((v) => v + Math.floor(Math.random() * 4) + 1); ref.current.style.color = "#f87171"; setTimeout(() => { if (ref.current) ref.current.style.color = ""; }, 300); } }, 1800); return () => clearInterval(interval); }, [flash]);
  useEffect(() => { if (!pulse || !ref.current) return; ref.current.style.transition = "opacity 0.6s ease"; const interval = setInterval(() => { if (ref.current) { ref.current.style.opacity = "0.5"; setTimeout(() => { if (ref.current) ref.current.style.opacity = "1"; }, 600); } }, 4000); return () => clearInterval(interval); }, [pulse]);
  return (
    <div className="flex flex-col gap-1">
      <span ref={ref} className="font-display text-[22px] font-bold text-primary" style={{ textShadow: "0 0 20px hsl(210 100% 50% / 0.4)" }}>
        {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}{suffix}
      </span>
      <span className="text-[11px] tracking-[2px] text-muted-foreground uppercase">{label}</span>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <div className="flex gap-6 flex-wrap">
      <AnimatedStat target={99.9} label="Uptime" suffix="%" decimals={1} />
      <AnimatedStat target={2847} label="Threats Blocked" flash />
      <AnimatedStat target={256} label="Bit Encryption" pulse />
    </div>
  );
}
