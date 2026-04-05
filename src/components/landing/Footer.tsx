import aegisLogo from "@/assets/aegis-logo-shield.png";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  product: [{ name: "Features", href: "#features" }, { name: "Capabilities", href: "#capabilities" }, { name: "Pricing", href: "#pricing" }, { name: "Security", href: "#" }],
  company: [{ name: "About", href: "#" }, { name: "Blog", href: "#" }, { name: "Careers", href: "#" }, { name: "Contact", href: "#contact" }],
  resources: [{ name: "Documentation", href: "#" }, { name: "API Reference", href: "#" }, { name: "Status", href: "#" }, { name: "Support", href: "#" }],
  legal: [{ name: "Privacy", href: "#" }, { name: "Terms", href: "#" }, { name: "Cookie Policy", href: "#" }, { name: "GDPR", href: "#" }],
};

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src={aegisLogo} alt="AEGIS" className="h-10 w-auto" />
              <span className="text-xl font-display font-bold tracking-widest">A.E.G.I.S</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">Advanced Engine for Guarding against Intrusions & Scams. AI-powered security for modern teams.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (<li key={link.name}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.name}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2024 A.E.G.I.S — Advanced Engine for Guarding against Intrusions & Scams</p>
          <p className="text-sm text-muted-foreground font-code">v1.0.0</p>
        </div>
      </div>
    </footer>
  );
}
