import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Loader2, Zap, Shield, Crown } from "lucide-react";
import aegisLogo from "@/assets/aegis-logo-shield.png";

export const Route = createFileRoute("/subscription")({ component: SubscriptionPage });

const plans = [
  { id: "free", name: "Recon", price: "Free", period: "", icon: Shield, description: "Basic threat monitoring for individuals", features: ["Basic threat dashboard", "Password manager (10 entries)", "Email phishing checker", "Community support"], cta: "Continue Free", popular: false },
  { id: "pro", name: "Sentinel", price: "$29", period: "/month", icon: Zap, description: "Advanced protection for security researchers", features: ["Everything in Recon", "Unlimited password vault", "Deepfake detection", "Honeypot monitoring", "Priority email support", "API access"], cta: "Upgrade to Sentinel", popular: true },
  { id: "enterprise", name: "Fortress", price: "$99", period: "/month", icon: Crown, description: "Full-spectrum defense for SOC teams", features: ["Everything in Sentinel", "Custom threat rules", "Team management", "SIEM integration", "Dedicated support", "On-premise deployment", "SLA guarantee"], cta: "Contact Sales", popular: false },
];

function SubscriptionPage() {
  const [selected, setSelected] = useState("free");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = async () => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden py-10" style={{ background: "hsl(220 40% 6%)" }}>
      <div className="auth-grid-bg" /><div className="auth-orb auth-orb-1" /><div className="auth-orb auth-orb-2" />
      <div className="relative z-[2] w-full max-w-[960px] px-4">
        <div className="text-center mb-10">
          <img src={aegisLogo} alt="AEGIS" className="h-14 mx-auto mb-4" style={{ filter: "drop-shadow(0 0 18px hsl(210 100% 50% / 0.6))" }} />
          <h1 className="font-display text-3xl font-bold tracking-wider text-foreground">CHOOSE YOUR PLAN</h1>
          <p className="text-muted-foreground text-sm mt-2 font-body">Select a tier that matches your security needs. You can upgrade anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {plans.map((plan) => {
            const Icon = plan.icon; const isSelected = selected === plan.id;
            return (
              <button key={plan.id} type="button" onClick={() => setSelected(plan.id)} className={`relative text-left rounded-2xl p-6 border transition-all duration-300 ${isSelected ? "border-primary bg-primary/5 shadow-[0_0_30px_hsl(210_100%_50%/0.15)]" : "border-border/50 bg-background/30 hover:border-border"}`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-display tracking-widest bg-primary text-primary-foreground">MOST POPULAR</span>}
                <Icon className={`h-8 w-8 mb-3 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                <h3 className="font-display text-lg font-bold tracking-wider">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-1 mb-2"><span className="text-2xl font-bold font-display">{plan.price}</span>{plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}</div>
                <p className="text-xs text-muted-foreground mb-4 font-body">{plan.description}</p>
                <ul className="flex flex-col gap-2">{plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm"><Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground/50"}`} /><span className="text-muted-foreground">{f}</span></li>))}</ul>
              </button>
            );
          })}
        </div>
        <div className="text-center">
          <button onClick={handleSelect} disabled={isLoading} className="auth-btn-primary px-10 py-3 inline-flex items-center gap-2">{isLoading && <Loader2 className="h-4 w-4 animate-spin" />}{plans.find(p => p.id === selected)?.cta || "Continue"} →</button>
          <button onClick={() => { setSelected("free"); handleSelect(); }} className="block mx-auto mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors font-body">Skip — continue with free plan</button>
        </div>
      </div>
    </div>
  );
}
