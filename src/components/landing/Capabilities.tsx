import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Layers, Globe, Brain, Settings, RefreshCw, type LucideIcon } from "lucide-react";

const capabilities = [
  { icon: Layers, tagline: "Adaptive security layers", title: "Built to grow with you", description: "Whether you're scaling from 5 to 500 endpoints, AEGIS adapts its architecture dynamically — from cloud-native microservices to enterprise-grade defense policies." },
  { icon: Globe, tagline: "Unified visibility. Global protection", title: "Multi-region awareness", description: "Stay protected across locations, clouds and teams with unified, real-time threat visibility." },
  { icon: Brain, tagline: "Machine-driven intelligence", title: "Behavioral anomaly detection", description: "Detects subtle deviations in user and system behavior using deep learning models trained on millions of signals." },
  { icon: Settings, tagline: "Fully configurable defense", title: "Modular rule engine", description: "Customize how your system reacts — with composable building blocks for threat response logic." },
  { icon: RefreshCw, tagline: "Always up to date. Always secure.", title: "Zero config maintenance", description: "Forget manual patching or policy tuning. Our pro tier keeps everything current and resilient — without your team lifting a finger." },
];

function CapabilityCard({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = cap.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, type: "spring", stiffness: 80, damping: 18 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="perspective-container"
    >
      <motion.div
        className="neu-card rounded-2xl p-8 h-full relative overflow-hidden card-3d group cursor-pointer"
        whileHover={{ scale: 1.04, rotateY: 4, rotateX: -3 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        {/* Animated glow on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Scan line on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 w-fit relative z-10"
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <Icon className="h-7 w-7 text-primary" />
        </motion.div>

        {/* Tag */}
        <motion.p
          className="text-primary/80 text-xs font-mono tracking-wider uppercase mb-2 relative z-10"
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3 }}
        >
          {cap.tagline}
        </motion.p>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 relative z-10 font-display tracking-wide">{cap.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{cap.description}</p>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(200 80% 50% / 0.4), transparent)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.5, duration: 0.8 }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
}

export function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section ref={ref} id="capabilities" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(225 55% 5%) 0%, hsl(225 60% 3%) 50%, hsl(225 55% 5%) 100%)" }}>
      {/* Parallax background orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[200px]" />
      </motion.div>

      {/* Matrix grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(to right, hsl(200 80% 40% / 0.04) 1px, transparent 1px), linear-gradient(to bottom, hsl(200 80% 40% / 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          style={{ scale: titleScale }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-primary/80 text-sm font-mono tracking-[0.3em] uppercase mb-4 block"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Advanced Capabilities
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Automate protection.<br />
            <span className="text-muted-foreground font-body">Customize everything.</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Advanced automation, flexibility, and resilience to stay ahead of evolving threats.
          </motion.p>
        </motion.div>

        {/* Top row: 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {capabilities.slice(0, 3).map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>

        {/* Bottom row: 2 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.slice(3).map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
