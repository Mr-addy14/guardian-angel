import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Eye, EyeOff, Loader2, AlertCircle, ChevronDown } from "lucide-react";
import aegisLogo from "@/assets/aegis-logo-shield.png";
import ParticleCanvas from "@/components/auth/ParticleCanvas";
import AnimatedStats from "@/components/auth/AnimatedStats";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  return <AuthPageContent />;
}

const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Japan", "South Korea", "Brazil",
  "Singapore", "Israel", "Netherlands", "Sweden", "Switzerland",
];

const statesByCountry: Record<string, string[]> = {
  India: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
  "United States": ["Alabama", "Alaska", "Arizona", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Illinois", "Massachusetts", "Michigan", "New York", "North Carolina", "Ohio", "Oregon", "Pennsylvania", "Texas", "Virginia", "Washington"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
  Canada: ["Alberta", "British Columbia", "Manitoba", "Ontario", "Quebec", "Saskatchewan"],
  Australia: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"],
  Germany: ["Bavaria", "Berlin", "Hamburg", "Hesse", "North Rhine-Westphalia", "Saxony"],
  France: ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes", "Nouvelle-Aquitaine"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Hokkaido", "Fukuoka"],
  "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Gyeonggi"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia"],
  Singapore: ["Central", "East", "North", "North-East", "West"],
  Israel: ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"],
  Netherlands: ["North Holland", "South Holland", "Utrecht", "North Brabant"],
  Sweden: ["Stockholm", "Västra Götaland", "Skåne"],
  Switzerland: ["Zürich", "Bern", "Geneva", "Basel-Stadt"],
};

function evaluatePassword(val: string) {
  if (!val) return { score: 0, label: "AWAITING INPUT", color: "" };
  let score = 0;
  if (val.length > 5) score += 20;
  if (val.length > 8) score += 20;
  if (/[A-Z]/.test(val)) score += 20;
  if (/[0-9]/.test(val)) score += 20;
  if (/[^A-Za-z0-9]/.test(val)) score += 20;
  if (val.length < 8) score = Math.min(score, 40);
  if (score <= 40) return { score, label: "WEAK", color: "#f87171" };
  if (score <= 80) return { score, label: "MEDIUM", color: "#fbbf24" };
  return { score, label: "STRONG", color: "#22c55e" };
}

const features = [
  { icon: "🔐", text: "End-to-end AES-256 encryption" },
  { icon: "🛡️", text: "Real-time threat monitoring" },
  { icon: "⚡", text: "Sub-50ms response latency" },
  { icon: "🔍", text: "AI-powered anomaly detection" },
];

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <p className="text-xs text-destructive flex items-center gap-1 font-body">
      <AlertCircle className="h-3 w-3" /> {msg}
    </p>
  );
}

function AuthPageContent() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const pwdStrength = useMemo(() => evaluatePassword(password), [password]);
  const availableStates = country ? statesByCountry[country] || [] : [];

  const handleForgotPassword = async () => {
    if (!forgotEmail) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    setShowForgotPassword(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!email) nextErrors.email = "Email is required";
    if (!password || password.length < 6) nextErrors.password = "Password must be at least 6 characters";
    if (tab === "signup") {
      if (!firstName || firstName.length < 2) nextErrors.firstName = "First name required";
      if (!lastName || lastName.length < 2) nextErrors.lastName = "Last name required";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden" style={{ background: "hsl(220 40% 6%)" }}>
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/auth-bg.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, hsl(220 45% 5% / 0.85) 0%, hsl(220 50% 8% / 0.75) 50%, hsl(220 45% 5% / 0.9) 100%)', zIndex: 1 }} />
      </div>
      <div className="auth-grid-bg" />
      <ParticleCanvas />
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />
      <div className="auth-scanline" />

      <div className="relative z-[2] w-full max-w-[1060px] grid grid-cols-1 md:grid-cols-[1fr_420px] gap-5 items-start px-4 py-6">
        <aside className="flex flex-col gap-7 p-5 md:sticky md:top-6">
          <div className="flex flex-col items-start gap-5 md:items-start items-center md:flex-col flex-row">
            <div className="relative w-[100px] h-[100px] md:w-[130px] md:h-[130px]" style={{ animation: "authLogoPulse 4s ease-in-out infinite" }}>
              <div className="auth-logo-ring" />
              <img src={aegisLogo} alt="AEGIS Shield" className="w-full h-full object-contain relative z-[2]" style={{ filter: "drop-shadow(0 0 18px hsl(210 100% 50% / 0.8)) drop-shadow(0 0 36px hsl(220 80% 50% / 0.5)) drop-shadow(0 0 8px hsl(0 0% 100% / 0.2))" }} />
            </div>
            <div>
              <h1 className="font-display font-black tracking-[2px] leading-none" style={{ fontSize: "clamp(28px, 4vw, 42px)", background: "linear-gradient(135deg, #fff 20%, hsl(210 100% 50%) 60%, hsl(220 80% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>A.E.G.I.S</h1>
              <p className="font-display text-[11px] font-medium tracking-[2px] text-muted-foreground uppercase mt-1.5">Advanced Engine for Guarding against Intrusions & Scams</p>
            </div>
          </div>
          <p className="auth-brand-desc text-[15px] leading-[1.7] text-muted-foreground font-light max-w-[440px] font-body">Military-grade cybersecurity platform powered by artificial intelligence. Protecting digital assets with real-time threat detection and adaptive defense mechanisms.</p>
          <AnimatedStats />
          <div className="auth-brand-features flex flex-col gap-3">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(210 100% 50% / 0.15), hsl(220 80% 50% / 0.08))", border: "1px solid hsl(210 100% 50% / 0.15)" }}>{f.icon}</div>
                <span className="font-body">{f.text}</span>
              </div>
            ))}
          </div>
        </aside>

        <main className="auth-card">
          <div className="auth-corner auth-corner-tl" />
          <div className="auth-corner auth-corner-tr" />
          <div className="auth-corner auth-corner-bl" />
          <div className="auth-corner auth-corner-br" />

          <div className="flex items-center gap-2 mb-6 text-[11px] tracking-[2px] text-muted-foreground uppercase font-code">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ boxShadow: "0 0 8px hsl(200 100% 74% / 0.8)", animation: "blink 2s ease-in-out infinite" }} />
            <span>SECURE PORTAL ACTIVE</span>
          </div>

          {showForgotPassword ? (
            <div className="auth-panel-animate">
              <h2 className="font-display text-lg font-bold tracking-wider mb-4">RESET PASSWORD</h2>
              <p className="text-sm text-muted-foreground mb-4 font-body">Enter your email and we'll send you a password reset link.</p>
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Email Address</label>
                  <input className="auth-input" type="email" placeholder="operator@domain.com" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} autoComplete="email" />
                </div>
                <div className="flex gap-2.5 mt-1">
                  <button type="button" className="auth-btn-primary flex-1 flex items-center justify-center gap-2" onClick={handleForgotPassword} disabled={isLoading}>
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    SEND RESET LINK →
                  </button>
                  <button type="button" className="auth-btn-ghost" onClick={() => setShowForgotPassword(false)}>← BACK</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex rounded-[10px] p-1 gap-1 mb-6" style={{ background: "hsl(0 0% 100% / 0.03)", border: "1px solid hsl(210 100% 50% / 0.15)" }}>
                <button type="button" className={`auth-toggle-btn ${tab === "login" ? "active" : ""}`} onClick={() => { setTab("login"); setErrors({}); }}>SIGN IN</button>
                <button type="button" className={`auth-toggle-btn ${tab === "signup" ? "active" : ""}`} onClick={() => { setTab("signup"); setErrors({}); }}>REGISTER</button>
              </div>

              <form onSubmit={handleSubmit} className="auth-panel-animate" key={tab}>
                <div className="flex flex-col gap-3.5">
                  {tab === "signup" && (
                    <>
                      <div className="flex gap-2.5 flex-col sm:flex-row">
                        <div className="flex flex-col gap-1.5 flex-1">
                          <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">First Name</label>
                          <input className="auth-input" placeholder="First" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                          {errors.firstName && <ErrorMsg msg={errors.firstName} />}
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1">
                          <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Middle</label>
                          <input className="auth-input" placeholder="M." value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1">
                          <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Last Name</label>
                          <input className="auth-input" placeholder="Last" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                          {errors.lastName && <ErrorMsg msg={errors.lastName} />}
                        </div>
                      </div>
                      <div className="flex gap-2.5 flex-col sm:flex-row">
                        <div className="flex flex-col gap-1.5 flex-1">
                          <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Date of Birth</label>
                          <input type="date" className="auth-input" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1">
                          <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Gender</label>
                          <div className="relative">
                            <select className="auth-input appearance-none pr-8 cursor-pointer" value={gender} onChange={(e) => setGender(e.target.value)}>
                              <option value="">Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Non-binary">Non-binary</option>
                              <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2.5 flex-col sm:flex-row">
                        <div className="flex flex-col gap-1.5 flex-1">
                          <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Country</label>
                          <div className="relative">
                            <select className="auth-input appearance-none pr-8 cursor-pointer" value={country} onChange={(e) => { setCountry(e.target.value); setState(""); }}>
                              <option value="">Select country</option>
                              {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1">
                          <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">State / Region</label>
                          <div className="relative">
                            <select className="auth-input appearance-none pr-8 cursor-pointer" value={state} onChange={(e) => setState(e.target.value)} disabled={!country}>
                              <option value="">Select state</option>
                              {availableStates.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Full Address</label>
                        <textarea className="auth-input resize-none" rows={2} placeholder="Street, building, apartment..." value={address} onChange={(e) => setAddress(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">Pincode / ZIP</label>
                        <input className="auth-input" placeholder="e.g. 110001" value={pincode} onChange={(e) => setPincode(e.target.value)} maxLength={10} />
                      </div>
                    </>
                  )}

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">{tab === "login" ? "Access Credential" : "Email Address"}</label>
                    <input className="auth-input" type="email" placeholder={tab === "login" ? "Email address" : "operator@domain.com"} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                    {errors.email && <ErrorMsg msg={errors.email} />}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display">{tab === "signup" ? "Master Password" : "Password"}</label>
                    <div className="relative">
                      <input className="auth-input pr-10" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={tab === "signup" ? "new-password" : "current-password"} />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" tabIndex={-1}>
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.password && <ErrorMsg msg={errors.password} />}
                    {tab === "signup" && (
                      <>
                        <div className="auth-strength-bar">
                          <div className="auth-strength-fill" style={{ width: `${pwdStrength.score}%`, background: pwdStrength.color || undefined }} />
                        </div>
                        <div className="text-[9px] text-right tracking-[1px] font-semibold font-display" style={{ color: pwdStrength.color || "hsl(225 15% 55%)" }}>{pwdStrength.label}</div>
                      </>
                    )}
                    {tab === "login" && (
                      <button type="button" onClick={() => setShowForgotPassword(true)} className="text-[11px] text-primary font-semibold font-display self-end mt-1 hover:underline cursor-pointer tracking-[1px]" style={{ textShadow: "0 0 8px hsl(200 100% 74% / 0.4)" }}>FORGOT PASSWORD?</button>
                    )}
                  </div>

                  <div className="flex items-center gap-3 my-1">
                    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(210 100% 50% / 0.15), transparent)" }} />
                    <span className="text-[11px] tracking-[3px] text-muted-foreground/30 font-display">SECURE</span>
                    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(210 100% 50% / 0.15), transparent)" }} />
                  </div>

                  <div className="flex gap-2.5 mt-1">
                    <button type="submit" className="auth-btn-primary flex-1 flex items-center justify-center gap-2" disabled={isLoading}>
                      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                      {tab === "signup" ? "CREATE ACCOUNT →" : "AUTHENTICATE →"}
                    </button>
                    <button type="button" className="auth-btn-ghost" onClick={() => { setTab(tab === "login" ? "signup" : "login"); setErrors({}); }}>
                      {tab === "login" ? "REGISTER" : "← BACK"}
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}

          <footer className="mt-5 text-center text-xs text-muted-foreground/40 tracking-[1px] leading-relaxed font-body">
            By accessing A.E.G.I.S you agree to our security policy.
          </footer>
        </main>
      </div>
    </div>
  );
}
