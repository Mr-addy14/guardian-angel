import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/phishing")({
  component: PhishingPage,
});

function PhishingPage() {
  return (
    <div className="p-8 space-y-8">
      <section className="max-w-4xl mx-auto text-center space-y-6 pt-8 pb-4">
        <h2 className="text-5xl font-display font-extrabold tracking-tighter text-foreground">
          Phishing & Domain Intelligence
        </h2>
        <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto opacity-80">
          Deploy deep-packet inspection and reputation heuristics to analyze suspicious URLs in real-time.
        </p>
        <div className="relative max-w-3xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-xl blur-lg transition duration-1000 group-hover:duration-200" />
          <div className="relative flex items-center bg-surface-container-lowest border border-border/20 rounded-xl p-2 shadow-2xl">
            <input className="bg-transparent border-none focus:ring-0 text-foreground w-full px-4 font-body placeholder:text-muted-foreground/50" placeholder="Enter suspicious URL or domain..." type="text" defaultValue="https://secure-bank-update-portal.top/auth/login" />
            <button className="liquid-gradient text-primary-foreground px-8 py-3 rounded-lg font-display font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
              SCAN DOMAIN
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container-low rounded-xl p-6 border-l-4 border-destructive shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-destructive/80 mb-2 block">Critical Threat Detected</label>
                <h3 className="text-3xl font-display font-extrabold text-foreground mb-1">Deceptive Login Page</h3>
                <p className="text-on-surface-variant font-body">Identified as: <span className="text-destructive font-mono font-bold">Credential Harvester</span></p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-display font-black text-destructive">94<span className="text-xl">/100</span></div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Danger Score</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container rounded-xl p-6 space-y-4">
              <h4 className="font-display font-bold text-foreground uppercase tracking-wider text-xs">DNS & Authentication</h4>
              <div className="space-y-3">
                {[["SPF Record", "FAIL"], ["DKIM Signature", "MISSING"], ["DMARC Policy", "NONE"]].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
                    <span className="text-sm text-on-surface-variant">{label}</span>
                    <span className={`text-xs font-bold ${status === 'NONE' ? 'text-on-surface-variant/40' : 'text-destructive'}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-6 space-y-4">
              <h4 className="font-display font-bold text-foreground uppercase tracking-wider text-xs">Reputation Engines</h4>
              <div className="space-y-3">
                {[["Google Safe Browsing", "FLAGGED"], ["Cisco Umbrella", "MALICIOUS"], ["VirusTotal (64/72)", "HIGH RISK"]].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
                    <span className="text-sm text-on-surface-variant">{label}</span>
                    <span className="text-xs font-bold text-destructive">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-container rounded-xl p-6">
            <h4 className="font-display font-bold text-foreground uppercase tracking-wider text-xs mb-6">Domain Lifecycle</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[["Registered", "2 Days Ago"], ["Registrar", "NameCheap"], ["Location", "Russia (RU)"], ["SSL Cert", "DV - Let's Encrypt"]].map(([label, value]) => (
                <div key={label} className="p-4 bg-surface-container-lowest rounded-xl">
                  <div className="text-[10px] text-on-surface-variant uppercase mb-1">{label}</div>
                  <div className={`text-sm font-bold ${label === 'SSL Cert' ? 'text-destructive' : 'text-foreground'}`}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-xl p-8 border border-border/20 space-y-6 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-destructive/10 blur-[50px] rounded-full" />
            <div className="text-center space-y-2">
              <h4 className="font-display font-black text-2xl text-foreground">Final Verdict</h4>
              <p className="text-destructive font-body font-bold text-sm">BLOCK IMMEDIATELY</p>
            </div>
            <div className="space-y-3">
              <button className="w-full py-4 bg-destructive text-destructive-foreground font-display font-extrabold rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                BLOCK GLOBAL ACCESS
              </button>
              <button className="w-full py-4 bg-muted/20 text-foreground font-display font-bold rounded-lg border border-border/30 hover:bg-muted/30 active:scale-95 transition-all">
                WHITELIST (SENSITIVE)
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-4">
        <h4 className="font-display font-bold text-foreground uppercase tracking-widest text-xs">Recent Scans Queue</h4>
        <div className="bg-surface-container rounded-xl overflow-hidden border border-border/20">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-high border-b border-border/20">
            <div className="col-span-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Target URL</div>
            <div className="col-span-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Scanner</div>
            <div className="col-span-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Risk</div>
            <div className="col-span-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Status</div>
          </div>
          {[
            { url: "https://verify-identity-aws.cloud/auth", scanner: "Heuristic-V4", risk: "CRITICAL", riskColor: "text-destructive", status: "BLK-403 REJECTED" },
            { url: "https://internal.company-portal.com/help", scanner: "Signature", risk: "CLEAN", riskColor: "text-primary", status: "PASS-200 ALLOWED" },
            { url: "https://short.url/x8y2z1a", scanner: "AI-Neural", risk: "SUSPICIOUS", riskColor: "text-tertiary", status: "QUARANTINED" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-muted/10 transition-colors border-b border-border/10 last:border-0">
              <div className="col-span-5 text-sm font-mono text-on-surface-variant truncate">{row.url}</div>
              <div className="col-span-2"><span className="text-xs px-2 py-1 bg-surface-container-highest rounded border border-border/20 text-on-surface-variant">{row.scanner}</span></div>
              <div className="col-span-2 flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${row.risk === 'CRITICAL' ? 'bg-destructive' : row.risk === 'CLEAN' ? 'bg-primary' : 'bg-tertiary'}`} />
                <span className={`text-xs font-bold ${row.riskColor}`}>{row.risk}</span>
              </div>
              <div className="col-span-3 text-right"><span className="text-[10px] font-mono text-on-surface-variant">{row.status}</span></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
