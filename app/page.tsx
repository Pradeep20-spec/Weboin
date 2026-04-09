import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { ServicesSection } from "./components/sections/ServicesSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.18),transparent_24%),radial-gradient(circle_at_80%_4%,rgba(168,85,247,0.16),transparent_26%),radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.07),transparent_30%)]" />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}