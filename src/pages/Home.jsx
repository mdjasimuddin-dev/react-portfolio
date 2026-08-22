import ContactSection from "../components/home/ContactSection";
import ExperienceSection from "../components/home/ExperienceSection";
import HeroSection from "../components/home/HeroSection";
import LearningJourney from "../components/home/LearningJourney";
import ProjectsSection from "../components/home/ProjectsSection";
import ServicesSection from "../components/home/ServicesSection";
import { StatsSection } from "../components/home/starSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <LearningJourney />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
