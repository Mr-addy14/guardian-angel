import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/deepfake")({
  component: DeepfakePage,
});

function DeepfakePage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 lg:col-span-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative h-96 flex flex-col items-center justify-center bg-surface-container-low border-2 border-dashed border-primary/20 rounded-2xl p-12 transition-all hover:border-primary/50">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">☁️</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Initialize Forensic Upload</h2>
              <p className="text-on-surface-variant text-center mb-8 max-w-sm">Drag and drop Images, Video, or Audio files. Maximum file size: 2.5 GB.</p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-surface-container-highest text-primary font-bold rounded-full border border-primary/20 hover:bg-primary/10 transition-colors">Browse Local Files</button>
                <button className="px-6 py-2 bg-surface-container-highest text-secondary font-bold rounded-full border border-secondary/20 hover:bg-secondary/10 transition-colors">Import URL</button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg border border-border/20">
                <span className="text-xs font-mono text-on-surface-variant">READY: TENSOR_V4_CORE</span>
                <span className="text-[10px] font-mono text-muted-foreground">ENCRYPTION: AES-256 ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-surface-container rounded-xl border border-border/20">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Author Mapping</h3>
              <p className="text-sm text-on-surface-variant mb-4">Cross-reference biometric signatures with known generative model kernels.</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-6 bg-primary rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-primary-foreground rounded-full" /></div>
                <span className="text-xs font-bold text-foreground">Enabled</span>
              </div>
            </div>
            <div className="p-6 bg-surface-container rounded-xl border border-border/20">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">AI Artifact Analysis</h3>
              <p className="text-sm text-on-surface-variant mb-4">Granular detection of frequency discrepancies and GAN noise patterns.</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-6 bg-secondary rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-secondary-foreground rounded-full" /></div>
                <span className="text-xs font-bold text-foreground">Enabled</span>
              </div>
            </div>
          </div>
        </section>

        <aside className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden border border-border/20">
            <div className="p-6 border-b border-border/20 flex justify-between items-center">
              <h3 className="font-display font-bold text-foreground">Live Heatmap</h3>
              <span className="px-2 py-1 bg-destructive/20 text-destructive text-[10px] font-bold rounded uppercase">Manipulation Detected</span>
            </div>
            <div className="relative aspect-video bg-surface-container-lowest">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur-md rounded-lg border border-destructive/30 text-center">
                  <span className="text-destructive text-4xl mb-2 block">🚫</span>
                  <span className="text-xs font-bold text-foreground tracking-widest uppercase">Sandboxed Environment</span>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {[["Neural Consistency", "LOW", "text-destructive"], ["Audio Sync Drift", "0.04ms", "text-primary"], ["Metadata Integrity", "STRIPPED", "text-destructive"]].map(([label, value, color]) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-sm text-on-surface-variant">{label}</span>
                  <span className={`text-sm font-mono ${color}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-border/20">
        <div className="p-8 flex justify-between items-center bg-surface-container-high/50">
          <h2 className="text-xl font-display font-bold text-foreground">Recent Analysis Logs</h2>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-high/30">
              <th className="px-8 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Asset Name</th>
              <th className="px-8 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Type</th>
              <th className="px-8 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Score</th>
              <th className="px-8 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { name: "interview_clip_02.mp4", type: "Video", score: "92%", scoreColor: "text-destructive", status: "Malicious", statusColor: "text-destructive" },
              { name: "executive_portrait.jpg", type: "Image", score: "12%", scoreColor: "text-primary", status: "Authentic", statusColor: "text-primary" },
              { name: "vocal_memo_77.wav", type: "Audio", score: "67%", scoreColor: "text-tertiary", status: "Suspicious", statusColor: "text-tertiary" },
            ].map(row => (
              <tr key={row.name} className="hover:bg-muted/10 transition-colors border-b border-border/10">
                <td className="px-8 py-6 font-mono text-foreground">{row.name}</td>
                <td className="px-8 py-6 text-on-surface-variant">{row.type}</td>
                <td className="px-8 py-6"><span className={`${row.scoreColor} font-bold`}>{row.score}</span></td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Malicious' ? 'bg-destructive' : row.status === 'Authentic' ? 'bg-primary' : 'bg-tertiary'}`} />
                    <span className={`${row.statusColor} text-xs font-bold uppercase`}>{row.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
