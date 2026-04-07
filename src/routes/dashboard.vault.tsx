import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/vault")({
  component: VaultPage,
});

function VaultPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 space-y-2">
          <h1 className="text-4xl font-display font-extrabold tracking-tight text-foreground">Secure Vault</h1>
          <p className="text-on-surface-variant max-w-md">Quantum-resistant storage for your most sensitive credentials and cryptographic keys.</p>
        </div>
        <div className="bg-surface-container-low p-5 rounded-xl border border-border/20">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Vault Health</span>
          <div className="text-3xl font-display font-bold text-primary mt-2">98.4%</div>
          <div className="w-full bg-surface-container-highest h-1.5 mt-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[98%] shadow-[0_0_10px_hsl(200_100%_74%)]" />
          </div>
        </div>
        <div className="bg-surface-container-low p-5 rounded-xl border border-border/20">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Master Key Status</span>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-tertiary text-2xl">🔐</span>
            <div>
              <div className="text-lg font-bold text-foreground">Active</div>
              <div className="text-[10px] text-on-surface-variant">Rotated 12h ago</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container rounded-2xl overflow-hidden border border-border/20">
          <div className="p-6 border-b border-border/20 flex justify-between items-center bg-surface-container-high/50">
            <h3 className="font-display font-bold text-lg">Stored Credentials</h3>
            <div className="relative">
              <input className="bg-surface-container-lowest border-none text-sm px-4 py-2 pl-10 rounded focus:ring-1 focus:ring-primary w-48" placeholder="Search keys..." type="text" />
              <span className="absolute left-3 top-2 text-muted-foreground text-sm">🔍</span>
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-on-surface-variant text-[10px] uppercase tracking-widest bg-surface-container-lowest/30">
                <th className="px-6 py-4">Service</th><th className="px-6 py-4">Identifier</th><th className="px-6 py-4">Password</th><th className="px-6 py-4">Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/10">
              {[
                { service: "AWS Main", icon: "☁️", user: "admin_ops_01", strength: 4 },
                { service: "Cold Wallet A", icon: "₿", user: "private_node_88", strength: 4 },
                { service: "Internal SSH", icon: "💻", user: "root_access", strength: 2 },
                { service: "GitHub Enterprise", icon: "🔗", user: "dev_lead_secure", strength: 3 },
              ].map(cred => (
                <tr key={cred.service} className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">{cred.icon}</div>
                      <span className="font-medium text-sm">{cred.service}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{cred.user}</td>
                  <td className="px-6 py-4 font-mono text-primary/80 tracking-widest text-lg select-none">••••••••••</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className={`h-1 w-3 rounded-full ${i < cred.strength ? (cred.strength <= 2 ? 'bg-destructive' : 'bg-primary') : 'bg-surface-container-highest'}`} />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-container-high rounded-2xl p-6 border border-primary/20 shadow-[inset_0_0_20px_hsl(200_100%_74%/0.05)]">
            <h3 className="font-display font-bold text-lg mb-6">Entropy Generator</h3>
            <div className="relative bg-surface-container-lowest rounded-xl p-4 border border-border/20 flex justify-between items-center mb-6">
              <span className="font-mono text-xl text-primary font-bold">X#9kL!m2@8qP</span>
              <button className="bg-primary/10 p-2 rounded text-primary hover:bg-primary hover:text-primary-foreground transition-all">🔄</button>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-2"><span className="text-on-surface-variant font-bold uppercase tracking-widest">Length</span><span className="text-primary font-bold">32 bits</span></div>
                <input className="w-full h-1.5 bg-surface-container-lowest rounded-full appearance-none cursor-pointer accent-primary" max="64" min="8" type="range" defaultValue="32" />
              </div>
              <button className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg shadow-primary/20 hover:brightness-110 transition-colors">Save to Vault</button>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 border border-border/20">
            <h3 className="font-display font-bold mb-6">Access Registry</h3>
            <div className="space-y-4">
              {[
                { action: "Vault entry: AWS Main key copied", time: "14:22:10 UTC", color: "bg-primary" },
                { action: "New key generated: GitHub Enterprise", time: "11:05:44 UTC", color: "bg-primary" },
                { action: "Unauthorized access attempt blocked", time: "09:12:33 UTC", color: "bg-tertiary" },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest/30">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${log.color}`} />
                    <span className={`text-sm font-medium ${log.color === 'bg-tertiary' ? 'text-tertiary' : ''}`}>{log.action}</span>
                  </div>
                  <span className="font-mono text-[10px] text-on-surface-variant">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
