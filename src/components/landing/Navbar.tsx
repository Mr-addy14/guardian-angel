import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import aegisLogo from "@/assets/aegis-logo-shield.png";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <motion.a href="#" className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
            <img src={aegisLogo} alt="AEGIS" className="h-10 w-auto" />
            <span className="text-xl font-display font-bold tracking-widest">A.E.G.I.S</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full neu-inset">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-link px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg"
                whileHover={{ scale: 1.08, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg neu-button text-sm font-medium"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
