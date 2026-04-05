import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aegisLogo from "@/assets/aegis-logo-shield.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="video-bg">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, hsl(220 45% 5% / 0.9) 0%, hsl(220 50% 8% / 0.8) 50%, hsl(220 45% 5% / 0.95) 100%)' }} />
      </div>

      <div className="scan-line z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-[1]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 badge-glow"
          >
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground font-body">
              Trusted by security teams worldwide
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={aegisLogo} 
              alt="AEGIS Shield" 
              className="h-32 w-auto mx-auto drop-shadow-[0_0_30px_hsl(142_76%_45%/0.4)]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-display"
          >
            <span className="text-gradient-primary">Unbreakable security</span>
            <br />
            <span className="text-muted-foreground font-light font-body text-3xl md:text-5xl">for a connected world</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body"
          >
            <span className="font-semibold text-foreground font-display text-base tracking-widest">A.E.G.I.S</span> — Advanced Engine for Guarding against Intrusions & Scams
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-muted-foreground max-w-xl mx-auto mb-10 font-body"
          >
            Even the smallest threat leaves a trace.
            <br />
            AEGIS follows the signals others miss.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/auth"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-primary animate-glow-pulse font-display text-sm tracking-wider"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all font-body"
            >
              Discover more
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
