import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ChevronDown, Send, Loader2 } from "lucide-react";
import aegisLogo from "@/assets/aegis-logo-shield.png";

const badges = ["SOC 2 Ready", "No credit card needed", "GDPR Compliant", "Cancel anytime", "Setup in minutes"];

const faqs = [
  { question: "Do I need to install anything?", answer: "Nope. Everything runs securely in the cloud — nothing to install or maintain on your end." },
  { question: "Can I try it without a credit card?", answer: "Yes. You can start a free trial without entering any payment details. Cancel anytime." },
  { question: "How does the phishing detection work?", answer: "Our ML model analyzes URLs and emails using advanced feature extraction and classification algorithms to identify phishing attempts in real-time." },
  { question: "What is the honeypot monitoring?", answer: "We deploy decoy services that attract attackers, allowing us to capture and analyze intrusion attempts, giving you insights into threat patterns." },
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", terms: false });
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const logoScale = useTransform(scrollYProgress, [0.5, 0.8], [0.6, 1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.terms) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "", terms: false });
  };

  return (
    <section ref={ref} id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">Stay ahead of threats</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">Deploy in one click. No setup. No stress.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-button text-sm"
              >
                <Check className="h-3 w-3 text-primary" />{badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="neu-card rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/30 transition-colors">
                    <span className="font-medium">{faq.question}</span>
                    <motion.span animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div className="neu-card rounded-2xl p-8" whileHover={{ scale: 1.01 }}>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg neu-inset focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg neu-inset focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-lg neu-inset focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all resize-none" placeholder="Tell us about your security needs..." />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} className="w-5 h-5 rounded accent-primary" />
                  <span className="text-sm text-muted-foreground">I accept the Terms & conditions.</span>
                </label>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all glow-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="mt-24 flex justify-center" style={{ rotate: logoRotate, scale: logoScale }}>
          <img src={aegisLogo} alt="AEGIS" className="h-40 w-auto opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
