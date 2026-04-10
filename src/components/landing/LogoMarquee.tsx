import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock, Eye, Zap, Server, Globe } from "lucide-react";

const logos = [
  { name: "ThreatShield", icon: Shield },
  { name: "SecureLock", icon: Lock },
  { name: "CyberEye", icon: Eye },
  { name: "QuickDefense", icon: Zap },
  { name: "DataVault", icon: Server },
  { name: "GlobalSec", icon: Globe },
];

export function LogoMarquee() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="py-16 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          Securing Organizations Worldwide
        </motion.p>
      </div>

      <motion.div className="relative" style={{ x }}>
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-12 opacity-50 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.15, y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <logo.icon className="h-6 w-6 text-muted-foreground" />
              <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
