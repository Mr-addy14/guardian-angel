import { useEffect, useRef } from "react";

class Particle {
  x: number; y: number; vx: number; vy: number; alpha: number; size: number; life: number; W: number; H: number;
  constructor(W: number, H: number) { this.W = W; this.H = H; this.x = Math.random() * W; this.y = H + Math.random() * 100; this.vx = (Math.random() - 0.5) * 0.5; this.vy = -(Math.random() * 0.5 + 0.2); this.alpha = Math.random() * 0.5 + 0.1; this.size = Math.random() * 2 + 0.5; this.life = 1; }
  reset() { this.x = Math.random() * this.W; this.y = this.H + Math.random() * 100; this.vx = (Math.random() - 0.5) * 0.5; this.vy = -(Math.random() * 0.5 + 0.2); this.alpha = Math.random() * 0.5 + 0.1; this.size = Math.random() * 2 + 0.5; this.life = 1; }
  update() { this.x += this.vx; this.y += this.vy; this.life -= 0.002; if (this.life <= 0 || this.y < -10) this.reset(); }
  draw(ctx: CanvasRenderingContext2D) { ctx.save(); ctx.globalAlpha = this.alpha * this.life; ctx.fillStyle = "#0ea5e9"; ctx.shadowBlur = 8; ctx.shadowColor = "#0ea5e9"; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let W = (canvas.width = window.innerWidth); let H = (canvas.height = window.innerHeight);
    const particles: Particle[] = []; for (let i = 0; i < 60; i++) particles.push(new Particle(W, H));
    const handleResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; particles.forEach((p) => { p.W = W; p.H = H; }); };
    window.addEventListener("resize", handleResize);
    let animId: number;
    const loop = () => { ctx.clearRect(0, 0, W, H); particles.forEach((p) => { p.update(); p.draw(ctx); }); animId = requestAnimationFrame(loop); };
    loop();
    return () => { window.removeEventListener("resize", handleResize); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
