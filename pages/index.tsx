import type { NextPage } from "next";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutMeSection from "../components/AboutMeSection";
import ContactMeSection from "../components/ContactMeSection";

const MainPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutMeSection />
      <ContactMeSection />
      <footer>
        <p>Designed and coded by Giovanni Beccaro</p>
      </footer>
    </>
  );
};

export default MainPage;
