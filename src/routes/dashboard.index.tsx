import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

function DashboardHome() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2 mb-4">
        <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold">Advanced Engine for Guarding against Intrusions & Scams</span>
        <h1 className="text-5xl font-display font-extrabold tracking-tighter text-foreground">
          Security <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, hsl(200 100% 74%), hsl(200 100% 37%))' }}>Command Center</span>
        </h1>
        <p className="text-on-surface-variant text-lg">Real-time unified defense across all threat vectors</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-destructive">
          <div className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Active Threats</div>
          <div className="text-4xl font-display font-black text-destructive">4</div>
          <div className="text-xs text-on-surface-variant mt-1">incidents open</div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-primary">
          <div className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Global Threat Score</div>
          <div className="text-4xl font-display font-black text-primary">62</div>
          <div className="text-xs text-on-surface-variant mt-1">ELEVATED</div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-tertiary">
          <div className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Blocked IPs</div>
          <div className="text-4xl font-display font-black text-tertiary">12</div>
          <div className="text-xs text-on-surface-variant mt-1">via SOAR</div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-secondary">
          <div className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Playbooks Run</div>
          <div className="text-4xl font-display font-black text-secondary">38</div>
          <div className="text-xs text-on-surface-variant mt-1">auto-responses</div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-foreground uppercase tracking-widest text-xs">Active Incidents</h3>
            <button className="text-primary text-xs font-bold hover:underline">View All →</button>
          </div>
          <div className="space-y-3">
            <div className="bg-surface-container rounded-xl p-4 border-l-4 border-destructive flex items-start justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-destructive mb-1">CRITICAL · phishing_detector</div>
                <div className="text-sm font-bold text-foreground">Spear Phishing — Executive Impersonation</div>
                <div className="text-xs text-on-surface-variant mt-1">INC-0041 · INVESTIGATING</div>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-4 border-l-4 border-tertiary flex items-start justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-tertiary mb-1">HIGH · network_analyzer</div>
                <div className="text-sm font-bold text-foreground">Network Intrusion — Port Scan 185.220.101.47</div>
                <div className="text-xs text-on-surface-variant mt-1">INC-0039 · ACTIVE</div>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-4 border-l-4 border-primary flex items-start justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-primary mb-1">MEDIUM · endpoint_scanner</div>
                <div className="text-sm font-bold text-foreground">PUA.Adware.Miner detected on Desktop-21</div>
                <div className="text-xs text-on-surface-variant mt-1">INC-0038 · QUEUED</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4">
          <h3 className="font-display font-bold text-foreground uppercase tracking-widest text-xs">MCP Servers</h3>
          <div className="space-y-2">
            {["VirusTotal", "AbuseIPDB", "AlienVault OTX", "PhishTank", "Shodan", "HuggingFace"].map(name => (
              <div key={name} className="bg-surface-container rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">{name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <span className="text-[10px] font-mono text-tertiary">DEMO</span>
                </div>
              </div>
            ))}
          </div>
          <h3 className="font-display font-bold text-foreground uppercase tracking-widest text-xs mt-4">Live Feed</h3>
          <div className="space-y-2">
            {[
              { module: "Phishing", detail: "Blocked suspicious URL redirect", severity: "HIGH" },
              { module: "Network", detail: "Anomalous egress traffic detected", severity: "MEDIUM" },
              { module: "AI Content", detail: "Potential deepfake flagged", severity: "LOW" },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-xl px-4 py-3 flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${item.severity === 'HIGH' ? 'bg-destructive' : item.severity === 'MEDIUM' ? 'bg-tertiary' : 'bg-primary'}`} />
                <div>
                  <div className="text-xs text-foreground">{item.module}</div>
                  <div className="text-[10px] text-on-surface-variant">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
