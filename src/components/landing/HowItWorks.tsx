import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Shield, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Analyze setup. Surface weaknesses instantly", description: "The system scans your infrastructure the moment it connects, uncovering misconfigurations, outdated packages, and exposed endpoints — before attackers do." },
  { number: "02", icon: Shield, title: "Neutralize Threats", description: "Once vulnerabilities are detected, smart rules and real-time protection are deployed to lock down systems and stop threats before they spread." },
  { number: "03", icon: TrendingUp, title: "Stay ahead of evolving threats", description: "The platform keeps learning from your traffic and global attack patterns. You get ongoing insights, alerts, and updates — without lifting a finger." },
];

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section ref={ref} id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">How it works</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">How we keep your company secured</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">No complexity. Just clean, effective protection in three simple steps.</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all glow-primary"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Request demo <ChevronRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Animated connecting line */}
        <div className="hidden lg:block relative mb-4">
          <motion.div className="absolute top-0 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50" style={{ width: lineWidth }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 80 }}
              className="relative perspective-container"
            >
              <motion.div
                className="neu-card rounded-2xl p-8 h-full card-3d"
                whileHover={{ scale: 1.03, rotateY: 5, z: 20 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.span
                    className="text-5xl font-display font-bold text-primary/20"
                    whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.3 }}
                  >
                    {step.number}
                  </motion.span>
                  <motion.div
                    className="p-3 rounded-xl neu-inset"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <step.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
