import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/honeypot")({
  component: HoneypotPage,
});

function HoneypotPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] mb-2">Advanced Engine for Guarding against Intrusions & Scams</h2>
          <h1 className="text-5xl font-extrabold font-display tracking-tight text-foreground">Honeypot <span className="text-primary">Simulator</span></h1>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full border border-border/20">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-primary" /></span>
          <span className="text-xs font-bold text-primary tracking-wider">LIVE FEED</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-[2rem] overflow-hidden relative border border-border/20 min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent z-10" />
          <div className="relative z-20 p-8 h-full flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold font-display mb-1">Attacker Origins</h3>
                <p className="text-sm text-muted-foreground">Real-time geospatial decoy interaction</p>
              </div>
              <div className="bg-background/60 backdrop-blur-md p-4 rounded-2xl border border-border/20 text-right">
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Active Decoys</p>
                <p className="text-2xl font-bold font-display text-primary tracking-tighter">1,204 <span className="text-xs text-muted-foreground ml-1">NODES</span></p>
              </div>
            </div>

            <div className="flex-1 relative mt-12">
              <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-destructive rounded-full animate-pulse shadow-[0_0_12px_hsl(0_70%_67%/0.6)]" />
              <div className="absolute top-[45%] left-[65%] w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_12px_hsl(200_100%_74%/0.6)]" />
              <div className="absolute top-[70%] left-[15%] w-3 h-3 bg-tertiary rounded-full animate-pulse shadow-[0_0_12px_hsl(325_100%_83%/0.6)]" />
              <div className="absolute top-[10%] left-[80%] w-3 h-3 bg-destructive rounded-full animate-pulse shadow-[0_0_12px_hsl(0_70%_67%/0.6)]" />
            </div>

            <div className="mt-auto grid grid-cols-4 gap-4">
              {[["Top Source", "Moscow, RU"], ["Latency", "14ms"], ["Peak Vector", "Log4j Exploit"], ["Intercepted", "42.8 GB"]].map(([label, value]) => (
                <div key={label} className="bg-surface-container-highest/40 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">{label}</p>
                  <p className={`text-sm font-bold ${label === 'Latency' ? 'text-primary' : label === 'Intercepted' ? 'text-tertiary' : ''}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-6">
          <div className="bg-surface-container-low rounded-[2rem] p-8 border border-border/20 relative overflow-hidden">
            <h3 className="text-xl font-bold font-display mb-4">Bait Engagement</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tighter text-foreground">94.2%</span>
              <span className="text-primary font-bold text-sm">+12%</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">Conversion from scan to exploit attempt</p>
            <div className="mt-6 h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent w-[94.2%]" />
            </div>
          </div>
          <div className="bg-surface-container-low rounded-[2rem] p-8 border border-border/20">
            <h3 className="text-xl font-bold font-display mb-6">Intercepted Payloads</h3>
            <div className="space-y-4">
              {[
                { name: "Ransom_Wanna.scr", time: "2m ago" },
                { name: "Reverse_Shell.sh", time: "15m ago" },
              ].map(p => (
                <div key={p.name} className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl border border-border/20">
                  <div>
                    <p className="text-sm font-bold">{p.name}</p>
                    <p className="text-[10px] text-muted-foreground">Captured: {p.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 bg-surface-container-lowest rounded-[2rem] p-1 border border-border/20 shadow-2xl">
          <div className="bg-surface-container-high rounded-[1.8rem] p-6 font-mono text-sm">
            <div className="flex items-center justify-between mb-4 border-b border-border/20 pb-4">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Intercept Telemetry Console</span>
              <span className="text-[10px] text-muted-foreground">SESSIONS: 42 ACTIVE</span>
            </div>
            <div className="space-y-2 text-on-surface-variant">
              <div className="flex gap-4"><span className="text-muted-foreground">[14:22:04]</span><span className="text-primary">INFO</span><span>Decoy node "AWS-WEST-02" initialized on port 8080</span></div>
              <div className="flex gap-4"><span className="text-muted-foreground">[14:22:15]</span><span className="text-tertiary">PING</span><span>Incoming SYN from 185.122.4.12. Port scan detected</span></div>
              <div className="flex gap-4"><span className="text-muted-foreground">[14:23:01]</span><span className="text-destructive font-bold">ALERT</span><span>SQL Injection payload intercepted from 92.45.1.201</span></div>
              <div className="flex gap-4"><span className="text-muted-foreground">[14:24:45]</span><span className="text-primary">INFO</span><span>Engagement confirmed. Mirroring filesystem...</span></div>
              <div className="flex gap-4 animate-pulse"><span className="text-muted-foreground">[14:26:00]</span><span className="text-primary">WAITING</span><span className="inline-block w-2 h-4 bg-primary align-middle ml-1" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
