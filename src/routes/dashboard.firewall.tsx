import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/firewall")({
  component: FirewallPage,
});

function FirewallPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-extrabold font-display text-foreground tracking-tighter mb-4">Firewall Configuration</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">Advanced WAF management and real-time packet inspection across your entire cloud perimeter.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-surface-container-highest text-primary font-bold rounded-lg border border-primary/10 hover:bg-surface-bright transition-all">Override Global Policy</button>
          <button className="px-6 py-3 liquid-gradient text-primary-foreground font-bold rounded-lg shadow-lg hover:scale-105 transition-all">+ Add New Rule</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          <section className="bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-border/20 bg-surface-container-high/40 flex justify-between items-center">
              <h2 className="font-display font-bold text-xl flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Active WAF Rules
              </h2>
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase rounded">12 Rules Enabled</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-lowest/50 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">
                  <th className="px-8 py-5">Rule ID</th><th className="px-6 py-5">Source IP</th><th className="px-6 py-5">Port</th><th className="px-6 py-5">Action</th><th className="px-6 py-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/10">
                {[
                  { id: "WAF-7721", src: "192.168.1.0/24", port: "80, 443", action: "ALLOW", actionColor: "text-secondary bg-secondary/10", active: true },
                  { id: "WAF-8890", src: "45.22.109.11", port: "ANY", action: "BLOCK", actionColor: "text-destructive bg-destructive/10", active: true },
                  { id: "WAF-1102", src: "10.0.4.0/16", port: "3306", action: "RATE LIMIT", actionColor: "text-tertiary bg-tertiary/10", active: true },
                  { id: "WAF-5509", src: "88.192.33.4", port: "22", action: "BLOCK", actionColor: "text-destructive bg-destructive/10", active: false },
                ].map(rule => (
                  <tr key={rule.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-8 py-5 text-primary font-mono text-sm">{rule.id}</td>
                    <td className="px-6 py-5 font-mono text-sm">{rule.src}</td>
                    <td className="px-6 py-5 font-mono text-sm">{rule.port}</td>
                    <td className="px-6 py-5"><span className={`px-2 py-1 text-[11px] font-bold rounded ${rule.actionColor}`}>{rule.action}</span></td>
                    <td className="px-6 py-5">
                      <div className={`flex items-center gap-2 ${!rule.active ? 'opacity-50' : ''}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${rule.active ? 'bg-primary' : 'bg-muted-foreground'}`} />
                        <span className="text-xs text-on-surface-variant">{rule.active ? 'Active' : 'Disabled'}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Throughput", value: "1.2 GB/s", sub: "Normal Traffic Load", subColor: "text-primary" },
              { label: "Blocks / Hr", value: "4.2k", sub: "+12% vs last hour", subColor: "text-destructive" },
              { label: "Global Policy", value: "L7-V3", sub: "Strict Mode Enabled", subColor: "text-tertiary" },
            ].map(stat => (
              <div key={stat.label} className="p-6 bg-surface-container rounded-2xl border border-border/20">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
                <h3 className="text-3xl font-display font-extrabold text-foreground mb-1 mt-2">{stat.value}</h3>
                <p className={`text-xs ${stat.subColor}`}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-4">
          <section className="bg-surface-container-lowest rounded-2xl border border-border/20 overflow-hidden">
            <div className="p-6 bg-surface-container-high/20 flex items-center justify-between border-b border-border/20">
              <h2 className="font-display font-bold text-xl">Live Trigger Log</h2>
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-black rounded-full animate-pulse">LIVE</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-4 max-h-[500px] overflow-y-auto bg-surface-container-lowest/80">
              {[
                { time: "[20:44:01]", type: "BLOCK", rule: "WAF-8890", detail: "SRC: 45.22.109.11 → DST: WEB_SRV_01 | Brute-Force Pattern", typeColor: "text-destructive" },
                { time: "[20:43:58]", type: "ALLOW", rule: "WAF-7721", detail: "SRC: 192.168.1.45 → DST: API_GATEWAY | Trusted Internal", typeColor: "text-secondary" },
                { time: "[20:43:52]", type: "BLOCK", rule: "WAF-GLOBAL", detail: "SRC: 203.0.113.5 → DST: SQL_PROD_B | SQL Injection", typeColor: "text-destructive" },
                { time: "[20:43:45]", type: "LIMIT", rule: "WAF-1102", detail: "SRC: 10.0.4.19 → DST: DEV_CONSOLE | Rate Exceeded", typeColor: "text-tertiary" },
              ].map((log, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span>{log.time}</span>
                    <span className={`${log.typeColor} font-bold`}>{log.type}</span>
                    <span>RULE:{log.rule}</span>
                  </div>
                  <p className="text-on-surface-variant bg-surface-container-high/30 p-2 rounded text-xs">{log.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
