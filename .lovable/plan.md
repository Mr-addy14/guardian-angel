

## Threat Guardian — Full UI Recreation

Recreate the entire Threat Guardian (A.E.G.I.S) cybersecurity platform UI with all the same fonts, logos, colors, animations, and page structure. No backend integration — all data will be mocked.

### Design System
- **Dark "Digital Obsidian" theme** with deep navy backgrounds, blue primary accents, silver/white text
- **Fonts**: Orbitron (headings/display), Rajdhani (body), JetBrains Mono & Source Code Pro (code/mono)
- **Assets**: Copy over `aegis-logo-shield.png` and `aegis-logo-text.png` from original project
- **Custom CSS**: Matrix grid backgrounds, glassmorphism cards, scan-line animations, glow effects, auth-specific styles (orbs, particles, cyber corners)

### Pages to Build

1. **Landing Page** (`/`)
   - Navbar, Hero section, Logo Marquee, Features grid, Capabilities, How It Works, Testimonials, Pricing cards (Recon/Sentinel/Fortress), Contact form, Footer

2. **Auth Page** (`/auth`)
   - Sign in / Sign up toggle with cyber-themed card
   - Particle canvas background, animated stats panel, brand panel with logo
   - Password strength meter, country/state selectors, forgot password flow
   - All form fields mocked (no actual Supabase calls)

3. **Onboarding** (`/onboarding`)
   - Profile completion form (DOB, gender, country, state, address, pincode)
   - Same cyber-themed styling

4. **Subscription** (`/subscription`)
   - Three-tier pricing selection (Recon/Sentinel/Fortress)
   - Mocked plan selection flow

5. **Reset Password** (`/reset-password`)
   - New password + confirm password form

6. **Dashboard** (`/dashboard`) with sidebar layout
   - **Threat Risk** (default): Stats cards, threat chart, risk overview, threat gauge, phishing checker, intrusion logs
   - **Passwords**: Password manager page
   - **Email Phishing**: Phishing detection page
   - **Deepfake**: Deepfake detection page
   - **Honeypot**: Honeypot monitoring page

### Components
- All 10 landing section components
- Dashboard layout with sidebar navigation
- Dashboard widgets (ThreatStatsCard, ThreatGauge, ThreatChart, RiskOverview, IntrusionLogs, PhishingChecker)
- Auth components (ParticleCanvas, AnimatedStats)
- All with mock data for demonstration

