import { motion } from "framer-motion";
import { Radar, Eye, Plug, Shield, Bug, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Radar,
    tagline: "Instant visibility. Instant action.",
    title: "Real-time threat detection",
    description: "Suspicious behavior gets flagged the second it appears. No lag. No noise.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Eye,
    tagline: "See everything. Miss nothing.",
    title: "Zero blind spots",
    description: "Full visibility into every endpoint, request, and action. If it moves, we see it.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Plug,
    tagline: "Plug into your stack. Fast.",
    title: "Seamless integration",
    description: "Connect in minutes. Works with the tools you already use, right out of the box.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Shield,
    tagline: "AI-powered protection.",
    title: "Phishing Detection",
    description: "ML-based URL and email analysis to identify phishing attempts before they reach users.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Bug,
    tagline: "Trap. Analyze. Learn.",
    title: "Honeypot Monitoring",
    description: "Deploy decoy services to capture and analyze intrusion attempts in real-time.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: AlertTriangle,
    tagline: "Risk assessment at a glance.",
    title: "Threat Intelligence",
    description: "Comprehensive risk scoring and threat classification powered by advanced AI models.",
    gradient: "from-primary/20 to-primary/5",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">
            Built to protect every layer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From backend to browser, every part of your stack stays locked down.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card rounded-2xl border border-border p-8 group"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} border border-primary/20 mb-6 group-hover:glow-primary transition-all`}>
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-primary text-sm font-medium mb-2">{feature.tagline}</p>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
