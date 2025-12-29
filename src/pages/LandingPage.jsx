import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import AboutSection from "../components/home/AboutSection";
import WhyMattersSection from "../components/home/WhyMattersSection";
import ProgramsSection from "../components/home/ProgramsSection";
import ContributeSection from "../components/home/ContributeSection";
import ClimateSection from "../components/home/ClimateSection";
import CTASection from "../components/home/CTASection";

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
