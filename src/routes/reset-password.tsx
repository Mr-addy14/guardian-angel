import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import aegisLogo from "@/assets/aegis-logo-shield.png";

export const Route = createFileRoute("/reset-password")({ component: ResetPasswordPage });

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6 || password !== confirmPassword) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ background: "hsl(220 40% 6%)" }}>
      <div className="auth-grid-bg" /><div className="auth-orb auth-orb-1" /><div className="auth-orb auth-orb-2" />
      <div className="relative z-[2] w-full max-w-[440px] px-4">
        <div className="text-center mb-8">
          <img src={aegisLogo} alt="AEGIS" className="h-16 mx-auto mb-4" style={{ filter: "drop-shadow(0 0 18px hsl(210 100% 50% / 0.6))" }} />
          <h1 className="font-display text-2xl font-bold tracking-wider text-foreground">RESET PASSWORD</h1>
          <p className="text-muted-foreground text-sm mt-2 font-body">Enter your new master password below.</p>
        </div>
        <div className="auth-card">
          <div className="auth-corner auth-corner-tl" /><div className="auth-corner auth-corner-tr" /><div className="auth-corner auth-corner-bl" /><div className="auth-corner auth-corner-br" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display flex items-center gap-1.5"><Lock className="h-3 w-3" /> New Password</label><input type="password" className="auth-input" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
            <div className="flex flex-col gap-1.5"><label className="text-[10px] tracking-[2px] text-muted-foreground uppercase font-semibold font-display flex items-center gap-1.5"><Lock className="h-3 w-3" /> Confirm Password</label><input type="password" className="auth-input" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></div>
            <button type="submit" className="auth-btn-primary flex items-center justify-center gap-2 mt-2" disabled={isLoading}>{isLoading && <Loader2 className="h-4 w-4 animate-spin" />}UPDATE PASSWORD →</button>
          </form>
        </div>
      </div>
    </div>
  );
}
