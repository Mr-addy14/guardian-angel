import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/copilot")({
  component: CopilotPage,
});

function CopilotPage() {
  const [input, setInput] = useState("");

  const messages = [
    {
      role: "ai",
      content: "System integrity check complete. I have identified a series of anomalous packets originating from the Seoul sub-node. Total egress volume is 42% above the 7-day baseline.",
    },
    {
      role: "user",
      content: "Summarize the threat level and suggest an isolation protocol for the Seoul sub-node.",
    },
    {
      role: "ai",
      content: 'Threat Level: Severe (8.4/10). Potential exfiltration of encrypted key-chains detected.\n\n• Initiate Level 2 Sandbox Isolation on Node SE-441.\n• Warning: Manual override required for firewall rule deployment.',
    },
  ];

  return (
    <div className="p-6 md:p-10 flex flex-col gap-6 max-w-6xl mx-auto w-full h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto pr-4 flex flex-col gap-8">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-surface-container-high border border-primary/30' : 'bg-primary/10'}`}>
              <span className="text-xl">{msg.role === 'ai' ? '🤖' : '👤'}</span>
            </div>
            <div className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : ''}`}>
              <p className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${msg.role === 'ai' ? 'text-primary' : 'text-muted-foreground'}`}>
                {msg.role === 'ai' ? 'A.E.G.I.S AI' : 'Analyst 42'}
              </p>
              <div className={`p-5 rounded-2xl border shadow-xl text-sm leading-relaxed whitespace-pre-line ${
                msg.role === 'ai'
                  ? 'bg-surface-container-low border-border/20 rounded-tl-none'
                  : 'bg-primary/5 border-primary/20 glass-panel rounded-tr-none'
              }`}>
                <p className="text-foreground">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-border/20">
        <div className="flex flex-wrap gap-2 mb-6">
          {["Run System Scan", "Check Firewall", "Summarize Threats", "Rotate API Keys"].map(action => (
            <button key={action} className="px-4 py-2 bg-surface-container-high/50 hover:bg-primary/10 border border-border/20 rounded-full text-[11px] font-bold uppercase tracking-wider text-primary transition-all active:scale-95">
              {action}
            </button>
          ))}
        </div>

        <div className="relative flex items-center bg-surface-container-low p-2 rounded-2xl border border-border/20 glass-panel shadow-2xl focus-within:border-primary/50 transition-all">
          <textarea
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-4 resize-none h-12 text-foreground placeholder:text-muted-foreground/50 font-medium"
            placeholder="Type command or query for A.E.G.I.S AI..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="h-10 w-10 liquid-gradient rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
            ➤
          </button>
        </div>
        <div className="mt-4 flex justify-between items-center text-[10px] text-muted-foreground font-medium tracking-wide">
          <p>A.E.G.I.S AI v4.0.2 - OPERATIONAL</p>
          <p className="flex items-center gap-1">
            <span className="block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            LIVE LINK ACTIVE
          </p>
        </div>
      </div>
    </div>
  );
}
