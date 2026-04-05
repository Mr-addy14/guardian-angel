import { motion } from "framer-motion";
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
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          Securing Organizations Worldwide
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-12 opacity-50 hover:opacity-100 transition-opacity"
            >
              <logo.icon className="h-6 w-6 text-muted-foreground" />
              <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
