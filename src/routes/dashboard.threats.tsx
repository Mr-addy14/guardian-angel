import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/threats")({
  component: ThreatManagerPage,
});

function ThreatManagerPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold">Advanced Engine for Guarding against Intrusions & Scams</span>
          <h1 className="text-5xl font-display font-extrabold text-foreground tracking-tighter mt-2">Threat & Risk Manager</h1>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 xl:col-span-8 bg-surface-container-low rounded-2xl p-8 glass-panel overflow-hidden relative">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Risk Score Matrix</h2>
          <div className="grid grid-cols-5 grid-rows-4 gap-2 h-64">
            {Array.from({ length: 20 }).map((_, i) => {
              const isError = i === 0 || i === 1;
              const isTertiary = i === 5;
              const isPrimary = i === 12;
              return (
                <div key={i} className={`rounded-lg flex items-center justify-center ${isError ? 'bg-destructive/20 border border-destructive/10' : isTertiary ? 'bg-tertiary/20' : isPrimary ? 'bg-primary/20' : 'bg-surface-container-highest'}`}>
                  {i === 1 && <div className="w-2 h-2 rounded-full bg-destructive animate-pulse shadow-[0_0_8px_hsl(0_70%_67%)]" />}
                  {isPrimary && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border/20 flex justify-between items-center">
            <div className="flex gap-8">
              <div><p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Threat Density</p><p className="text-xl font-display font-bold text-foreground">14.2<span className="text-sm text-destructive ml-1">↑ 2%</span></p></div>
              <div><p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Anomalies Detected</p><p className="text-xl font-display font-bold text-foreground">2,481</p></div>
            </div>
          </div>
        </section>

        <section className="col-span-12 xl:col-span-4 bg-surface-container-low rounded-2xl p-8 glass-panel">
          <h3 className="text-lg font-display font-bold text-foreground mb-6">Threat Distribution</h3>
          {[
            { name: "Ransomware", pct: 42, color: "bg-destructive" },
            { name: "SQL Injection", pct: 28, color: "bg-tertiary" },
            { name: "Credential Stuffing", pct: 15, color: "bg-primary" },
            { name: "Other Malicious", pct: 15, color: "bg-muted-foreground" },
          ].map(item => (
            <div key={item.name} className="space-y-2 mb-6">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                <span>{item.name}</span><span className="text-foreground">{item.pct}%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </section>

        <section className="col-span-12 xl:col-span-7 bg-surface-container-low rounded-2xl glass-panel overflow-hidden">
          <div className="p-8 border-b border-border/20">
            <h3 className="text-lg font-display font-bold text-foreground">Active Threats</h3>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-lowest/50 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                <th className="px-8 py-4">Threat</th><th className="px-8 py-4">Severity</th><th className="px-8 py-4">Source</th><th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/10">
              {[
                { name: "Trojan.Agent.VX", severity: "CRITICAL", sevColor: "text-destructive bg-destructive/10", source: "Endpoint-XR902", status: "Intercepted" },
                { name: "Exploit.Payload.Drop", severity: "HIGH", sevColor: "text-tertiary bg-tertiary/10", source: "Cloud-Gateway-04", status: "Monitoring" },
                { name: "PUA.Adware.Miner", severity: "LOW", sevColor: "text-primary bg-primary/10", source: "User-Desktop-21", status: "Queued" },
              ].map(t => (
                <tr key={t.name} className="hover:bg-muted/10 transition-colors">
                  <td className="px-8 py-5"><p className="text-sm font-bold text-foreground">{t.name}</p></td>
                  <td className="px-8 py-5"><span className={`text-[10px] font-bold px-2 py-1 rounded ${t.sevColor}`}>{t.severity}</span></td>
                  <td className="px-8 py-5 text-xs text-on-surface-variant">{t.source}</td>
                  <td className="px-8 py-5 text-[10px] font-bold text-on-surface-variant uppercase">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="col-span-12 xl:col-span-5 bg-surface-container-low rounded-2xl p-8 glass-panel">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-display font-bold text-foreground">Quarantine Manager</h3>
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">12 Files Isolated</span>
          </div>
          <div className="space-y-3">
            {[
              { name: "system_patch_v2.exe", time: "2m ago", size: "4.2 MB" },
              { name: "invoice_9921_pdf.zip", time: "14m ago", size: "1.1 MB" },
              { name: "redirect_hash_8k.dll", time: "1h ago", size: "840 KB" },
            ].map(f => (
              <div key={f.name} className="bg-surface-container-lowest border border-border/20 p-4 rounded-xl flex items-center gap-4 group hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">📄</div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground truncate max-w-[180px]">{f.name}</p>
                  <p className="text-[10px] text-muted-foreground">Detected: {f.time} • {f.size}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
