import AboutHeroSection from "@/modules/about/AboutHeroSection"
import AboutSection from "@/modules/about/AboutSection"
import MissionSection from "@/modules/about/MissionSection"
import TeamMemberSection from "@/modules/about/TeamSection"
import VisionSection from "@/modules/about/VisionSection"

const About = () => {
  return (
    <div>
      <AboutHeroSection/>
      <AboutSection/>
      <MissionSection/>
      <VisionSection/>
      <TeamMemberSection/>
    </div>
  )
}

export default About
