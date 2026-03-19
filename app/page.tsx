import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AchievementSection } from "@/components/sections/AchievementSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemSection } from "@/components/sections/ProblemSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-base)]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <PricingSection />
        <ComparisonSection />
        <AchievementSection />
        <FlowSection />
        <FaqSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
