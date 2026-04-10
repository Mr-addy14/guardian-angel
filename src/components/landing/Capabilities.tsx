import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Globe, Brain, Settings, RefreshCw } from "lucide-react";

const capabilities = [
  { icon: Layers, tagline: "Adaptive security layers", title: "Built to grow with you", description: "Whether you're scaling from 5 to 500 endpoints, AEGIS adapts its architecture dynamically, from cloud-native microservices to enterprise-grade defense policies." },
  { icon: Globe, tagline: "Unified visibility. Global protection", title: "Multi-region awareness", description: "Stay protected across locations, clouds and teams." },
  { icon: Brain, title: "Behavioral anomaly detection", description: "Detects subtle deviations in user and system behavior." },
  { icon: Settings, title: "Modular rule engine", description: "Customize how your system reacts — with building blocks for threat response logic." },
  { icon: RefreshCw, tagline: "Always up to date. Always secure.", title: "Zero config maintenance", description: "Forget manual patching or policy tuning. Our pro tier keeps everything current and resilient. Without your team lifting a finger." },
];

export function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} id="capabilities" className="py-24 bg-secondary/20 relative overflow-hidden">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">Advanced Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">
            Automate protection.<br /><span className="text-muted-foreground font-body">Customize everything.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">These advanced capabilities give you the automation, flexibility, and resilience needed to stay ahead of evolving threats.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="neu-card rounded-2xl p-8 md:col-span-2 lg:col-span-1 lg:row-span-2 perspective-container"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full flex flex-col">
              <motion.div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 w-fit" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Layers className="h-8 w-8 text-primary" />
              </motion.div>
              <p className="text-primary text-sm font-medium mb-2">{capabilities[0].tagline}</p>
              <h3 className="text-2xl font-semibold mb-4">{capabilities[0].title}</h3>
              <p className="text-muted-foreground flex-grow">{capabilities[0].description}</p>
            </div>
          </motion.div>

          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
              className={`neu-card rounded-2xl ${i === 1 ? "p-8" : "p-6"}`}
              whileHover={{ scale: 1.03, rotateY: 3 }}
            >
              {i === 1 ? (
                <>
                  <motion.div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6" whileHover={{ scale: 1.2 }}>
                    <Globe className="h-8 w-8 text-primary" />
                  </motion.div>
                  <p className="text-primary text-sm font-medium mb-2">{capabilities[1].tagline}</p>
                  <h3 className="text-xl font-semibold mb-3">{capabilities[1].title}</h3>
                  <p className="text-muted-foreground">{capabilities[1].description}</p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-3">
                    <motion.span whileHover={{ rotate: 180 }} transition={{ duration: 0.4 }}>
                      {i === 2 ? <Brain className="h-5 w-5 text-primary" /> : <Settings className="h-5 w-5 text-primary" />}
                    </motion.span>
                    {capabilities[i].title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{capabilities[i].description}</p>
                </>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="neu-card rounded-2xl p-8 md:col-span-2 lg:col-span-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <motion.div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 shrink-0" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                <RefreshCw className="h-8 w-8 text-primary" />
              </motion.div>
              <div>
                <p className="text-primary text-sm font-medium mb-2">{capabilities[4].tagline}</p>
                <h3 className="text-xl font-semibold mb-3">{capabilities[4].title}</h3>
                <p className="text-muted-foreground">{capabilities[4].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
