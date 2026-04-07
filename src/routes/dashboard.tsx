import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import aegisLogo from "@/assets/aegis-logo-text.png";
import aegisShield from "@/assets/aegis-logo-shield.png";
import {
  LayoutDashboard, Search, Wifi, Brain, Bot, Monitor, Shield,
  Flame, Bug, Lock, Sparkles, KeyRound, Settings, HelpCircle,
  Bell, Menu, X
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Phishing Scanner", icon: Search, path: "/dashboard/phishing" },
  { label: "Network Monitor", icon: Wifi, path: "/dashboard/network" },
  { label: "AI Analyzer", icon: Brain, path: "/dashboard/ai-analyzer" },
  { label: "Deepfake Detection", icon: Bot, path: "/dashboard/deepfake" },
  { label: "Endpoint Scanning", icon: Monitor, path: "/dashboard/endpoint" },
  { label: "Threat Manager", icon: Shield, path: "/dashboard/threats" },
  { label: "Firewall Manager", icon: Flame, path: "/dashboard/firewall" },
  { label: "Honeypot Simulator", icon: Bug, path: "/dashboard/honeypot" },
  { label: "Encryption Suite", icon: Lock, path: "/dashboard/encryption" },
  { label: "AI Co-Pilot", icon: Sparkles, path: "/dashboard/copilot" },
  { label: "Secure Vault", icon: KeyRound, path: "/dashboard/vault" },
  { label: "Settings", icon: Settings, path: "/dashboard/settings" },
];

function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-surface-container-high border border-border"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside className={`flex flex-col fixed left-0 top-0 h-full z-40 w-64 border-r border-border/20 bg-surface-container-lowest/60 backdrop-blur-2xl font-display tracking-tight text-sm shadow-[4px_0_24px_rgba(0,0,0,0.5)] transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8">
          <img alt="A.E.G.I.S Logo" className="h-12 w-auto mb-2" src={aegisLogo} />
          <p className="text-[10px] text-primary font-bold tracking-tight uppercase opacity-70 leading-tight">Advanced Engine for Guarding<br />against Intrusions & Scams</p>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto scrollbar-thin">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors duration-300 ${
                  active
                    ? "text-primary bg-primary/10 border-r-2 border-primary font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 mt-auto border-t border-border/20 space-y-1">
          <div className="flex items-center gap-3 px-4 py-2 text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-warning min-w-[8px] relative">
              <div className="absolute inset-0 rounded-full bg-warning/30 animate-ping" />
            </div>
            <span className="text-xs">Demo Mode</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs">Support</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-8 w-full z-30 h-16 sticky top-0 border-b border-border/20 bg-surface-container-lowest/40 backdrop-blur-xl font-display font-semibold shadow-lg shadow-primary/5">
          <div className="flex items-center gap-4 pl-10 lg:pl-0">
            <span className="text-lg font-bold text-foreground">A.E.G.I.S</span>
            <div className="h-4 w-px bg-border/30 mx-2" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-destructive/20 bg-destructive/10">
              <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-xs font-mono tracking-tighter text-destructive">62 Threat Score (Demo)</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input type="text" placeholder="Search threats, IPs, domains..." className="bg-surface-container-lowest border border-border/20 rounded-lg px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 w-56 focus:outline-none focus:border-primary/30" />
            </div>
            <div className="relative cursor-pointer">
              <Bell className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[8px] flex items-center justify-center font-mono text-white">4</span>
            </div>
            <button className="liquid-gradient text-primary-foreground px-4 py-2 rounded-lg font-display font-bold text-xs tracking-wide shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
              ⚡ SCAN ALL
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/30 bg-surface-container flex items-center justify-center">
              <img alt="A.E.G.I.S Shield" className="w-6 h-6 object-contain" src={aegisShield} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
