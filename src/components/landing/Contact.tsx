import { useState } from "react";
import { motion } from "framer-motion";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.terms) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "", terms: false });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-wide">Stay ahead of threats</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">Deploy in one click. No setup. No stress.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm"><Check className="h-3 w-3 text-primary" />{badge}</span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors">
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`accordion-content ${openFaq === index ? "max-h-40" : "max-h-0"}`}>
                    <p className="px-4 pb-4 text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="feature-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your security needs..." />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} className="w-5 h-5 rounded border-border bg-input accent-primary" />
                  <span className="text-sm text-muted-foreground">I accept the Terms & conditions.</span>
                </label>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-primary flex items-center justify-center gap-2 disabled:opacity-50">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-24 flex justify-center">
          <img src={aegisLogo} alt="AEGIS" className="h-40 w-auto opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
