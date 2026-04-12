import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Lina Rodriguez", role: "CTO", company: "TechVault", quote: "AEGIS flagged a critical misconfig in our staging server within minutes. That alone saved us from a potential breach.", avatar: "L" },
  { name: "Markus Lenz", role: "Head of Security", company: "DataSafe", quote: "We switched from a bloated enterprise solution to AEGIS, and got better visibility with half the complexity.", avatar: "M" },
  { name: "Jason Mehta", role: "DevOps Lead", company: "CloudFlow", quote: "The setup was almost too easy. Our team had real-time protection running before the coffee machine even booted.", avatar: "J" },
  { name: "Claire Dubois", role: "Compliance Manager", company: "SecureNet", quote: "The phishing detection is incredibly accurate. It's caught attempts that other solutions completely missed.", avatar: "C" },
  { name: "Thomas Karl", role: "Founder", company: "StartupShield", quote: "I'm not a security expert, but with AEGIS I don't have to be. It just works — and keeps working.", avatar: "T" },
  { name: "Sarah Chen", role: "IT Director", company: "GlobalTech", quote: "The honeypot feature has given us invaluable insights into attack patterns we never knew existed.", avatar: "S" },
];

function TestimonialCard({ testimonial, index, progress }: { testimonial: typeof testimonials[0]; index: number; progress: any }) {
  const total = testimonials.length;
  const segmentSize = 1 / (total + 1);
  const enterStart = index * segmentSize;
  const enterEnd = enterStart + segmentSize * 0.3;
  const exitStart = (index + 1) * segmentSize - segmentSize * 0.3;
  const exitEnd = (index + 1) * segmentSize;

  // Card enters from below, stays, then peels away upward
  const y = useTransform(progress, [enterStart, enterEnd, exitStart, exitEnd], [200, 0, 0, -300]);
  const scale = useTransform(progress, [enterStart, enterEnd, exitStart, exitEnd], [0.8, 1, 1, 0.7]);
  const rotateX = useTransform(progress, [enterStart, enterEnd, exitStart, exitEnd], [15, 0, 0, -25]);
  const opacity = useTransform(progress, [enterStart, enterEnd, exitStart, exitEnd], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ y, scale, rotateX, opacity, zIndex: total - index }}
      className="absolute inset-0 flex items-center justify-center perspective-container"
    >
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          className="neu-card rounded-3xl p-10 md:p-14 relative overflow-hidden card-3d"
          whileHover={{ rotateY: 2, rotateX: -1 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

          {/* Quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute top-6 right-8"
          >
            <Quote className="h-20 w-20 text-primary" />
          </motion.div>

          {/* Quote text */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-10 relative z-10 text-foreground">
            "{testimonial.quote}"
          </p>

          {/* Stars */}
          <div className="flex gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center gap-5 relative z-10">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl font-display shadow-lg shadow-primary/20">
              {testimonial.avatar}
            </div>
            <div>
              <p className="font-semibold text-lg">{testimonial.name}</p>
              <p className="text-muted-foreground">{testimonial.role} · <span className="text-primary">{testimonial.company}</span></p>
            </div>
          </div>

          {/* Card number indicator */}
          <div className="absolute bottom-6 right-8 text-muted-foreground/30 font-display text-sm tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative" style={{ height: `${(testimonials.length + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-secondary/10" />
        </div>

        {/* Header */}
        <div className="relative z-20 pt-16 md:pt-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display tracking-wide">
              Trusted by teams<br />
              <span className="text-muted-foreground font-body">that move fast</span>
            </h2>
          </motion.div>
        </div>

        {/* Stacked cards */}
        <div className="absolute inset-0 top-40 md:top-48 px-6 perspective-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-muted-foreground text-xs font-mono tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
