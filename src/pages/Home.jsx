import ContactSection from "../components/home/ContactSection";
import ExperienceSection from "../components/home/ExperienceSection";
import HeroSection from "../components/home/HeroSection";
import LearningJourney from "../components/home/LearningJourney";
import ProjectsSection from "../components/home/ProjectsSection";
import ServicesSection from "../components/home/ServicesSection";


export default function Home() {
  return (
    <div>

      <HeroSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <LearningJourney/>
      <ExperienceSection/>
      <ContactSection/>
    </div>
  )
}
