import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import AboutSection from "../sections/AboutSection";
import WhyMattersSection from "../sections/WhyMattersSection";
import ProgramsSection from "../sections/ProgramsSection";
import ContributeSection from "../sections/ContributeSection";
import ClimateSection from "../sections/ClimateSection";
import CTASection from "../sections/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <WhyMattersSection />
      <ProgramsSection />
      <ContributeSection />
      <ClimateSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
