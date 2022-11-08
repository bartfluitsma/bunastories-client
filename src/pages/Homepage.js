import AboutIntro from "../components/sections/AboutIntro";
import HeroSection from "../components/sections/HeroSection";
import HowToSection from "../components/sections/HowToSection";
import StepsToTake from "../components/sections/StepsToTake";
import WhySpecialtyCoffee from "../components/sections/WhySpecialtyCoffee";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowToSection />
      <StepsToTake />
      <AboutIntro />
      <WhySpecialtyCoffee />
    </>
  );
};

export default HomePage;
