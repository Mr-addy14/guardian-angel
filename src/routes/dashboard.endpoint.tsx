import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/endpoint")({
  component: EndpointPage,
});

function EndpointPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <div className="bg-surface-container-low rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] border border-border/20">
            <div className="relative w-80 h-80 rounded-full border border-primary/20 flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full border border-primary/10" />
              <div className="absolute w-48 h-48 rounded-full border border-primary/5" />
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent 0deg, hsl(200 100% 74% / 0.2) 90deg, transparent 90deg)', animation: 'spin 4s linear infinite' }} />
              <div className="relative z-10 text-center">
                <span className="block font-display text-6xl font-extrabold text-primary">84<span className="text-2xl opacity-50">%</span></span>
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Global Scan</span>
              </div>
            </div>
            <div className="mt-12 w-full max-w-md">
              <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-on-surface-variant mb-3 px-1">
                <span>Analyzing Core Memory</span>
                <span className="text-primary">Phase 3 of 4</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent w-[84%] rounded-full shadow-[0_0_10px_hsl(200_100%_74%/0.5)]" />
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-3xl p-6 border border-border/20">
            <h3 className="font-display text-xl font-bold mb-6">Node Infrastructure</h3>
            <div className="space-y-3">
              {[
                { name: "WS-7742-PRO", os: "Windows 11 Enterprise • 10.0.0.24", lastScan: "14 mins ago", progress: 100, status: "✓" },
                { name: "SRV-MAIN-STORAGE", os: "Ubuntu 22.04 LTS • 192.168.1.102", lastScan: "Scanning...", progress: 45, status: "spinning" },
                { name: "IOT-EDGE-GATEWAY", os: "Embedded RTOS • 10.0.4.1", lastScan: "2 hours ago", progress: 100, status: "✓" },
              ].map(node => (
                <div key={node.name} className="flex items-center justify-between p-4 bg-surface-container-highest/40 rounded-xl hover:bg-surface-container-highest/60 transition-all">
                  <div>
                    <div className="font-bold text-sm">{node.name}</div>
                    <div className="text-xs text-on-surface-variant">{node.os}</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-xs text-on-surface-variant">{node.lastScan}</div>
                    <div className="w-24 h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${node.progress}%`, opacity: node.progress === 100 ? 0.6 : 1 }} />
                    </div>
                    {node.status === "spinning" ? (
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span className="text-primary text-xl">✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">
          <button className="group relative w-full h-32 rounded-3xl overflow-hidden liquid-gradient p-px active:scale-95 transition-all">
            <div className="w-full h-full bg-background/40 backdrop-blur-sm rounded-[23px] flex items-center justify-center gap-4 hover:bg-transparent transition-colors">
              <span className="text-4xl">🚀</span>
              <div className="text-left">
                <span className="block text-xl font-display font-bold text-primary group-hover:text-primary-foreground">Trigger Scan</span>
                <span className="text-xs text-muted-foreground">Full Infrastructure Heuristics</span>
              </div>
            </div>
          </button>

          {[
            { label: "Files Analyzed", value: "1,204,912", color: "text-foreground", sub: "+12% from last cycle", subColor: "text-primary" },
            { label: "Threats Mitigated", value: "24", color: "text-tertiary", sub: "Zero breach protocol active", subColor: "text-tertiary" },
            { label: "Node Health", value: "99.8%", color: "text-foreground", sub: "", subColor: "" },
          ].map(stat => (
            <div key={stat.label} className="bg-surface-container-low/40 backdrop-blur-xl rounded-3xl p-6 border border-border/20">
              <span className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant">{stat.label}</span>
              <h4 className={`text-4xl font-display font-extrabold ${stat.color} mt-1`}>{stat.value}</h4>
              {stat.sub && <div className={`text-xs font-bold ${stat.subColor} mt-2`}>{stat.sub}</div>}
            </div>
          ))}

          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-border/20 font-mono text-[11px] leading-relaxed">
            <span className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px] block mb-4">Kernel Stream</span>
            <div className="space-y-1 text-on-surface-variant opacity-80">
              <div className="text-primary">[14:22:01] SEC_CORE_INIT: Heuristic engine active...</div>
              <div>[14:22:05] MEM_SCAN: Checking /dev/shm blocks</div>
              <div className="text-tertiary">[14:22:09] WARN: Unusual entropy in tmp_buffer</div>
              <div>[14:22:12] NET_MON: Outbound traffic verified via TLS 1.3</div>
              <div className="text-primary">[14:22:15] INFO: Successfully rotated vault keys</div>
              <div className="animate-pulse text-primary">_</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
