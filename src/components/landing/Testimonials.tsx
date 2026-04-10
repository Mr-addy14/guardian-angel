import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Lina Rodriguez", role: "CTO", company: "TechVault", quote: "AEGIS flagged a critical misconfig in our staging server within minutes. That alone saved us from a potential breach.", avatar: "L" },
  { name: "Markus Lenz", role: "Head of Security", company: "DataSafe", quote: "We switched from a bloated enterprise solution to AEGIS, and got better visibility with half the complexity.", avatar: "M" },
  { name: "Jason Mehta", role: "DevOps Lead", company: "CloudFlow", quote: "The setup was almost too easy. Our team had real-time protection running before the coffee machine even booted.", avatar: "J" },
  { name: "Claire Dubois", role: "Compliance Manager", company: "SecureNet", quote: "The phishing detection is incredibly accurate. It's caught attempts that other solutions completely missed.", avatar: "C" },
  { name: "Thomas Karl", role: "Founder", company: "StartupShield", quote: "I'm not a security expert, but with AEGIS I don't have to be. It just works — and keeps working.", avatar: "T" },
  { name: "Sarah Chen", role: "IT Director", company: "GlobalTech", quote: "The honeypot feature has given us invaluable insights into attack patterns we never knew existed.", avatar: "S" },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="py-24 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">Trusted by teams<br /><span className="text-muted-foreground font-body">that move fast</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tech teams rely on our platform to stay protected while they scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              style={{ x: index % 2 === 0 ? x1 : x2 }}
              className="perspective-container"
            >
              <motion.div
                className="neu-card rounded-2xl p-6 card-3d"
                whileHover={{ scale: 1.04, rotateY: 3, rotateX: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.span key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + i * 0.05 }}>
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </motion.span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
