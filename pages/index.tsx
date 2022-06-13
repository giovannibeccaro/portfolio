import type { NextPage } from "next";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutMeSection from "../components/AboutMeSection";
import ContactMeSection from "../components/ContactMeSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainPage: NextPage = () => {
  useEffect(() => {
    const timer = window.setTimeout(function () {
      window.scrollTo(0, 0);
    }, 10);

    AOS.init({
      duration: 750,
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
