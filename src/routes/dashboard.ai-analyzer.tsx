import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/ai-analyzer")({
  component: AIAnalyzerPage,
});

function AIAnalyzerPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="mb-12">
        <h2 className="font-display text-5xl font-extrabold tracking-tighter text-foreground mb-2">Cognitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Inspector.</span></h2>
        <p className="text-on-surface-variant max-w-2xl font-body">Deep-layer neural analysis of textual data, metadata, and structural intent.</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container-low rounded-xl p-6 shadow-2xl border border-border/20">
            <label className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-4 block">Content Input Buffer</label>
            <textarea className="w-full h-80 bg-surface-container-lowest border-0 rounded-lg p-6 font-body text-foreground focus:ring-1 focus:ring-primary/40 placeholder:text-muted-foreground/50 resize-none" placeholder="Paste suspicious logs, email content, or raw script data here for AI decomposition..." />
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-4">
                <span className="text-[10px] font-mono text-muted-foreground">BUF_SIZE: 0.00kb</span>
                <span className="text-[10px] font-mono text-muted-foreground">ENCODING: UTF-8</span>
              </div>
              <button className="px-8 py-3 liquid-gradient text-primary-foreground font-display font-extrabold rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300">
                RUN NEURAL ANALYSIS
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-surface-container rounded-xl p-6 border border-border/20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Semantic Sentiment</h3>
              <div className="flex items-end gap-1 h-24">
                {[20, 45, 85, 30, 60, 15, 40].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t ${i === 2 ? 'bg-primary/40' : i === 5 ? 'bg-tertiary/40' : 'bg-surface-container-highest'}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-6 border border-border/20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Top Flags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-destructive/10 text-destructive text-[10px] font-bold border border-destructive/20">CREDENTIAL_HARVEST</span>
                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">OBFUSCATED_URL</span>
                <span className="px-2 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold border border-tertiary/20">URGENT_TONE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-high rounded-xl p-8 border border-border/20 relative overflow-hidden">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-8">Malicious Intent Index</h3>
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-muted/20" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="4" />
                  <circle className="text-tertiary transition-all duration-1000" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552" strokeDashoffset="380" strokeWidth="12" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black font-display text-foreground tracking-tighter">31.2</span>
                  <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Low Risk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl border border-border/20 overflow-hidden">
            <div className="p-6 border-b border-border/20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Signature Matching</h3>
            </div>
            {[
              { name: "Emotet Pattern v4", match: "0.4%", color: "bg-primary", width: "4%" },
              { name: "Standard Phish Template", match: "24.8%", color: "bg-tertiary", width: "24%" },
              { name: "Ransomware Heuristics", match: "0.0%", color: "bg-muted-foreground", width: "0%" },
            ].map(sig => (
              <div key={sig.name} className="p-4 hover:bg-muted/10 transition-colors border-b border-border/10 last:border-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-foreground">{sig.name}</span>
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">{sig.match}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className={`${sig.color} h-full`} style={{ width: sig.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
