import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, MapPin, User, Calendar, ChevronDown } from "lucide-react";
import aegisLogo from "@/assets/aegis-logo-shield.png";

export const Route = createFileRoute("/onboarding")({ component: OnboardingPage });

const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];
const countries = ["India", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "South Korea", "Brazil", "Singapore", "Israel", "Netherlands", "Sweden", "Switzerland"];
const statesByCountry: Record<string, string[]> = {
  India: ["Andhra Pradesh", "Karnataka", "Kerala", "Maharashtra", "Tamil Nadu", "Delhi", "Gujarat", "Rajasthan", "West Bengal", "Uttar Pradesh"],
  "United States": ["California", "New York", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio", "Georgia", "Washington"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
  Canada: ["Alberta", "British Columbia", "Manitoba", "Ontario", "Quebec"],
  Australia: ["New South Wales", "Queensland", "Victoria", "Western Australia"],
};

function OnboardingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDob] = useState(""); const [gender, setGender] = useState(""); const [country, setCountry] = useState(""); const [state, setState] = useState(""); const [address, setAddress] = useState(""); const [pincode, setPincode] = useState("");
  const availableStates = country ? statesByCountry[country] || [] : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    window.location.href = "/subscription";
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ background: "hsl(220 40% 6%)" }}>
      <div className="auth-grid-bg" /><div className="auth-orb auth-orb-1" /><div className="auth-orb auth-orb-2" />
      <div className="relative z-[2] w-full max-w-[560px] px-4 py-10">
        <div className="text-center mb-8">
          <img src={aegisLogo} alt="AEGIS" className="h-16 mx-auto mb-4" style={{ filter: "drop-shadow(0 0 18px hsl(210 100% 50% / 0.6))" }} />
          <h1 className="font-display text-2xl font-bold tracking-wider text-foreground">COMPLETE YOUR PROFILE</h1>
          <p className="text-muted-foreground text-sm mt-2 font-body">We need a few more details to personalize your experience.</p>
        </div>
        <div className="auth-card">
          <div className="auth-corner auth-corner-tl" /><div className="auth-corner auth-corner-tr" /><div className="auth-corner auth-corner-bl" /><div className="auth-corner auth-corner-br" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display flex items-center gap-1.5"><Calendar className="h-3 w-3" /> Date of Birth</label><input type="date" className="auth-input" value={dob} onChange={(e) => setDob(e.target.value)} /></div>
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display flex items-center gap-1.5"><User className="h-3 w-3" /> Gender</label><div className="relative"><select className="auth-input appearance-none pr-8 cursor-pointer" value={gender} onChange={(e) => setGender(e.target.value)}><option value="">Select gender</option>{genderOptions.map((g) => <option key={g} value={g}>{g}</option>)}</select><ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" /></div></div>
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Country</label><div className="relative"><select className="auth-input appearance-none pr-8 cursor-pointer" value={country} onChange={(e) => { setCountry(e.target.value); setState(""); }}><option value="">Select country</option>{countries.map((c) => <option key={c} value={c}>{c}</option>)}</select><ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" /></div></div>
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display flex items-center gap-1.5"><MapPin className="h-3 w-3" /> State / Region</label><div className="relative"><select className="auth-input appearance-none pr-8 cursor-pointer" value={state} onChange={(e) => setState(e.target.value)} disabled={!country}><option value="">Select state</option>{availableStates.map((s) => <option key={s} value={s}>{s}</option>)}</select><ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" /></div></div>
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Full Address</label><textarea className="auth-input resize-none" rows={2} placeholder="Street address, building, apartment..." value={address} onChange={(e) => setAddress(e.target.value)} /></div>
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Pincode / ZIP</label><input className="auth-input" placeholder="e.g. 110001" value={pincode} onChange={(e) => setPincode(e.target.value)} maxLength={10} /></div>
            <button type="submit" className="auth-btn-primary flex items-center justify-center gap-2 mt-2" disabled={isLoading}>{isLoading && <Loader2 className="h-4 w-4 animate-spin" />}CONTINUE →</button>
          </form>
        </div>
      </div>
    </div>
  );
}
