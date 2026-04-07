import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/encryption")({
  component: EncryptionPage,
});

function EncryptionPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-border/20 shadow-xl">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Algorithm Suite</h3>
            <div className="space-y-3">
              {[
                { name: "AES-256 Neural", desc: "Quantum-resistant block cipher", selected: true },
                { name: "RSA-4096 Multi", desc: "Asymmetric pair encryption", selected: false },
                { name: "Stego-Hide", desc: "Image/Media pixel injection", selected: false },
              ].map(algo => (
                <label key={algo.name} className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors ${algo.selected ? 'bg-surface-container-highest border border-primary/20' : 'bg-surface-container-low border border-transparent hover:bg-surface-container-highest'}`}>
                  <div>
                    <p className={`font-bold ${algo.selected ? 'text-foreground' : 'text-on-surface-variant'}`}>{algo.name}</p>
                    <p className="text-[10px] text-muted-foreground">{algo.desc}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${algo.selected ? 'border-primary' : 'border-muted-foreground/30'} flex items-center justify-center`}>
                    {algo.selected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border/20 shadow-xl">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Key Management</h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-2">Master Passphrase</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-foreground focus:ring-1 focus:ring-primary/40" type="password" defaultValue="••••••••••••••••" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-high rounded-xl text-xs font-bold text-on-surface-variant hover:bg-surface-bright transition-all">🔄 Regenerate</button>
                <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-high rounded-xl text-xs font-bold text-on-surface-variant hover:bg-surface-bright transition-all">📥 Export PEM</button>
              </div>
              <div className="p-3 bg-primary/5 rounded-xl flex items-center gap-3 border border-primary/10">
                <span className="text-primary text-xl">🔒</span>
                <div className="text-[11px] text-muted-foreground"><strong className="text-primary">Hardware Enclave Active.</strong> Your keys never leave the secure TPM module.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-8">
          <div className="glass-panel rounded-3xl border border-border/20 shadow-2xl overflow-hidden">
            <div className="flex border-b border-border/20">
              <button className="px-8 py-5 border-b-2 border-primary text-primary font-bold text-sm bg-primary/5">Payload Input</button>
              <button className="px-8 py-5 text-muted-foreground hover:text-foreground transition-colors font-bold text-sm">Encrypted Output</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6">
                <span className="text-xs font-bold text-muted-foreground uppercase mb-4 block">Unsecured Content</span>
                <textarea className="w-full h-64 bg-transparent border-none resize-none focus:ring-0 text-foreground font-mono text-sm leading-relaxed placeholder:text-muted-foreground/30" placeholder="Type or paste payload here..." />
              </div>
              <div className="p-6 bg-surface-container-lowest/50">
                <span className="text-xs font-bold text-primary uppercase mb-4 block">Encrypted Matrix</span>
                <div className="h-64 flex flex-col items-center justify-center text-center border-2 border-dashed border-border/20 rounded-2xl hover:bg-primary/5 transition-all">
                  <p className="text-sm font-bold text-foreground mb-1">Awaiting Input</p>
                  <p className="text-[10px] text-muted-foreground">Enter content and run encryption</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-24 glass-panel rounded-2xl border border-border/20 flex items-center px-8 justify-between mt-6">
            <div className="flex items-center gap-10">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Processing Power</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden"><div className="w-3/4 h-full bg-primary" /></div>
                  <span className="text-xs font-mono text-primary">74%</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Entropy Score</span>
                <span className="text-xs font-mono text-tertiary">0.99982</span>
              </div>
            </div>
            <div className="px-3 py-1 bg-success/10 text-success text-[10px] font-bold rounded-full border border-success/20">Secure Channel Established</div>
          </div>
        </section>
      </div>
    </div>
  );
}
