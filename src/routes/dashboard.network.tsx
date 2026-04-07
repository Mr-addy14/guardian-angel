import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/network")({
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-border/20 relative overflow-hidden">
          <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">Live Traffic</p>
          <h3 className="font-display text-3xl font-extrabold text-foreground">1,248<span className="text-primary text-sm ml-1">pkts/s</span></h3>
          <div className="mt-4 h-12 flex items-end gap-1">
            {[50, 66, 75, 100, 33, 66, 83].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/30 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-border/20">
          <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">Blocked Attempts</p>
          <h3 className="font-display text-3xl font-extrabold text-destructive">42<span className="text-destructive/60 text-sm ml-1">last 10m</span></h3>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] text-destructive bg-destructive/10 px-2 py-0.5 rounded">+12% vs avg</span>
            <div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden"><div className="h-full bg-destructive w-1/3" /></div>
          </div>
        </div>
        <div className="md:col-span-2 glass-panel p-6 rounded-2xl border border-border/20">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Total Bandwidth</p>
              <h3 className="font-display text-2xl font-extrabold text-foreground">4.2 <span className="text-muted-foreground">Gbps</span></h3>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Peak Rate</p>
              <p className="font-display text-lg font-bold text-primary">8.9 Gbps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-2xl border border-border/20">
        <h2 className="font-display text-xl font-bold text-foreground mb-2">Traffic Analysis</h2>
        <p className="text-on-surface-variant text-sm mb-6">Real-time throughput and latency metrics</p>
        <div className="aspect-[21/9] w-full relative bg-surface-container-lowest/50 rounded-lg overflow-hidden">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
            <path d="M0 180 Q 150 160, 250 140 T 450 150 T 650 100 T 850 120 T 1000 90" fill="none" stroke="hsl(200 100% 74%)" strokeLinecap="round" strokeWidth="3" />
            <path d="M0 190 Q 200 170, 350 120 T 550 80 T 750 110 T 950 40 T 1000 30" fill="none" stroke="hsl(237 100% 87%)" strokeDasharray="8 4" strokeOpacity="0.5" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="glass-panel rounded-xl border border-border/20 overflow-hidden">
        <div className="p-6 border-b border-border/20 flex items-center justify-between">
          <h3 className="font-display font-bold text-foreground">Active Connections</h3>
          <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded font-bold">248 ACTIVE</span>
        </div>
        <div className="divide-y divide-border/10">
          {[
            { src: "192.168.1.45", dst: "API_GATEWAY", protocol: "HTTPS", status: "ESTABLISHED", bytes: "142 MB" },
            { src: "10.0.4.19", dst: "SQL_PROD_B", protocol: "TCP", status: "RATE LIMITED", bytes: "2.1 GB" },
            { src: "45.22.109.11", dst: "WEB_SRV_01", protocol: "HTTP", status: "BLOCKED", bytes: "0 B" },
          ].map((conn, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-muted/10 transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-primary">{conn.src}</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-sm text-foreground">{conn.dst}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs bg-surface-container-highest px-2 py-1 rounded">{conn.protocol}</span>
                <span className={`text-xs font-bold ${conn.status === 'BLOCKED' ? 'text-destructive' : conn.status === 'RATE LIMITED' ? 'text-tertiary' : 'text-primary'}`}>{conn.status}</span>
                <span className="text-xs text-on-surface-variant font-mono">{conn.bytes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
