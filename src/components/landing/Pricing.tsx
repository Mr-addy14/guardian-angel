import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", description: "Ideal for early-stage builders who want to launch fast with enterprise-grade protection.", monthlyPrice: 19, yearlyPrice: 180, features: ["Basic protection", "1 project", "Email alerts", "Manual scans", "Community support"] },
  { name: "Growth", description: "Built for startups that need reliable, scalable security without slowing down growth.", monthlyPrice: 49, yearlyPrice: 470, featured: true, features: ["Everything Starter, plus:", "Advanced protection", "Up to 10 projects", "Email + slack alerts", "Auto scans", "Standard support"] },
  { name: "Enterprise", description: "Designed for teams that prioritize robust security, compliance, and resilience.", monthlyPrice: 99, yearlyPrice: 950, features: ["Everything Growth, plus:", "Full-scale coverage", "Unlimited projects", "Custom integrations", "Dedicated support", "Priority SLA support"] },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section ref={ref} id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12"
          style={{ scale }}
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">Serious Protection.<br /><span className="text-muted-foreground font-body">Simple Pricing.</span></h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">Pick the plan that fits your team.<br />No hidden fees. No contracts. Just protection.</p>
          <div className="inline-flex items-center gap-1 p-1 rounded-full neu-inset">
            <motion.button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yearly<span className="ml-2 text-xs opacity-70">(save 20%)</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto perspective-container">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60, rotateY: (index - 1) * -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.05, rotateY: 3, z: 30 }}
              className={`neu-card rounded-2xl p-8 card-3d ${plan.featured ? "featured border-primary/50 relative z-10 ring-1 ring-primary/30" : ""}`}
            >
              {plan.featured && (
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <motion.span
                  key={isYearly ? "yearly" : "monthly"}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold"
                >
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </motion.span>
                <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                {isYearly && <p className="text-sm text-primary mt-1">(save 20%)</p>}
              </div>
              <motion.a
                href="#contact"
                className={`block w-full py-3 rounded-lg font-medium text-center transition-all mb-6 ${plan.featured ? "bg-primary text-primary-foreground glow-primary" : "neu-button"}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Get started
              </motion.a>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className={i === 0 && plan.name !== "Starter" ? "text-muted-foreground" : ""}>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
