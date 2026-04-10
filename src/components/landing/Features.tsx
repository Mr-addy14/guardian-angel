import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Radar, Eye, Plug, Shield, Bug, AlertTriangle } from "lucide-react";

const features = [
  { icon: Radar, tagline: "Instant visibility. Instant action.", title: "Real-time threat detection", description: "Suspicious behavior gets flagged the second it appears. No lag. No noise.", gradient: "from-primary/20 to-primary/5" },
  { icon: Eye, tagline: "See everything. Miss nothing.", title: "Zero blind spots", description: "Full visibility into every endpoint, request, and action. If it moves, we see it.", gradient: "from-primary/20 to-primary/5" },
  { icon: Plug, tagline: "Plug into your stack. Fast.", title: "Seamless integration", description: "Connect in minutes. Works with the tools you already use, right out of the box.", gradient: "from-primary/20 to-primary/5" },
  { icon: Shield, tagline: "AI-powered protection.", title: "Phishing Detection", description: "ML-based URL and email analysis to identify phishing attempts before they reach users.", gradient: "from-primary/20 to-primary/5" },
  { icon: Bug, tagline: "Trap. Analyze. Learn.", title: "Honeypot Monitoring", description: "Deploy decoy services to capture and analyze intrusion attempts in real-time.", gradient: "from-primary/20 to-primary/5" },
  { icon: AlertTriangle, tagline: "Risk assessment at a glance.", title: "Threat Intelligence", description: "Comprehensive risk scoring and threat classification powered by advanced AI models.", gradient: "from-primary/20 to-primary/5" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateY(x * 15);
    setRotateX(-y * 15);
  };

  const handleMouseLeave = () => { setRotateX(0); setRotateY(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="perspective-container"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="neu-card rounded-2xl p-8 group cursor-default card-3d"
      >
        <motion.div
          className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} border border-primary/20 mb-6`}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <feature.icon className="h-8 w-8 text-primary" />
        </motion.div>
        <p className="text-primary text-sm font-medium mb-2">{feature.tagline}</p>
        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </motion.div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={ref} id="features" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center mb-16">
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">Built to protect every layer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From backend to browser, every part of your stack stays locked down.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
