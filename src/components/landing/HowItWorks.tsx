import { motion } from "framer-motion";
import { Search, Shield, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Analyze setup. Surface weaknesses instantly", description: "The system scans your infrastructure the moment it connects, uncovering misconfigurations, outdated packages, and exposed endpoints — before attackers do." },
  { number: "02", icon: Shield, title: "Neutralize Threats", description: "Once vulnerabilities are detected, smart rules and real-time protection are deployed to lock down systems and stop threats before they spread." },
  { number: "03", icon: TrendingUp, title: "Stay ahead of evolving threats", description: "The platform keeps learning from your traffic and global attack patterns. You get ongoing insights, alerts, and updates — without lifting a finger." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">How it works</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">How we keep your company secured</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">No complexity. Just clean, effective protection in three simple steps.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all glow-primary">
            Request demo <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="relative">
              <div className="feature-card rounded-2xl border border-border p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-display font-bold text-primary/20">{step.number}</span>
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20"><step.icon className="h-6 w-6 text-primary" /></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
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
