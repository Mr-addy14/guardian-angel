import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <nav className="lg:col-span-3 space-y-2 sticky top-28 h-fit">
          {[
            { label: "User Profile", icon: "👤", active: true },
            { label: "Security Credentials", icon: "🔑", active: false },
            { label: "System Notifications", icon: "📢", active: false },
            { label: "API Integration", icon: "🔗", active: false },
            { label: "Preferences", icon: "⚙️", active: false },
          ].map(item => (
            <button key={item.label} className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left transition-all ${item.active ? 'bg-surface-container-high text-primary font-semibold border border-primary/10' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>

        <div className="lg:col-span-9 space-y-12">
          <section className="p-8 rounded-2xl bg-surface-container-low border border-border/20 shadow-2xl">
            <h3 className="text-2xl font-bold font-display text-foreground mb-6">User Profile</h3>
            <p className="text-on-surface-variant text-sm mb-8">Manage your public identity within A.E.G.I.S Command.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">Display Name</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 text-foreground" type="text" defaultValue="Agent A.E.G.I.S" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">Email Address</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 text-foreground" type="email" defaultValue="ops@aegis.internal" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">Bio / Security Clearance Detail</label>
                <textarea className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 text-foreground" rows={3} defaultValue="Lead Security Architect specializing in decentralized threat mitigation and deepfake forensics." />
              </div>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-surface-container-low border border-border/20">
            <h3 className="text-2xl font-bold font-display text-foreground mb-6">General Preferences</h3>
            <div className="space-y-6">
              {[
                { label: "Dark Mode Interface", desc: "OLED optimized black surfaces", enabled: true },
                { label: "Liquid Glass Effects", desc: "Enable backdrop blur and depth layers", enabled: false },
              ].map(pref => (
                <div key={pref.label} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest">
                  <div>
                    <p className="font-bold text-foreground">{pref.label}</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-tighter">{pref.desc}</p>
                  </div>
                  <div className={`w-14 h-8 rounded-full relative flex items-center px-1 cursor-pointer ${pref.enabled ? 'bg-primary' : 'bg-surface-container-highest'}`}>
                    <div className={`w-6 h-6 rounded-full transition-all ${pref.enabled ? 'bg-primary-foreground ml-auto' : 'bg-on-surface-variant'}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-surface-container-low border border-border/20 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
            <h3 className="text-2xl font-bold font-display text-foreground mb-2">API Integration</h3>
            <p className="text-on-surface-variant text-sm mb-8">Securely bridge A.E.G.I.S with SIEM and Cloud providers.</p>
            <div className="space-y-6">
              {[
                { name: "Amazon Web Services (AWS)", status: "Active", statusColor: "text-primary bg-primary/20" },
                { name: "Splunk SIEM", status: "Connect", statusColor: "" },
              ].map(api => (
                <div key={api.name} className="p-6 rounded-2xl bg-surface-container-highest flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="w-16 h-16 bg-surface-container-lowest rounded-xl flex items-center justify-center border border-border/20 text-3xl">☁️</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground flex items-center gap-2">{api.name} {api.status === 'Active' && <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded uppercase tracking-widest">Active</span>}</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Bridge with industry-standard SIEM and Cloud providers.</p>
                  </div>
                  <button className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors ${api.status === 'Active' ? 'bg-surface-container-low text-foreground hover:bg-surface-bright' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                    {api.status === 'Active' ? 'Configure' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          <div className="flex items-center justify-end gap-4 pt-8 border-t border-border/20">
            <button className="px-8 py-3 rounded-xl text-on-surface-variant font-bold hover:text-foreground transition-colors">Discard Changes</button>
            <button className="px-10 py-3 rounded-xl liquid-gradient text-primary-foreground font-extrabold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Save All Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
