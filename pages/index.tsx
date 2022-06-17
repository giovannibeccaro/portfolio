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
import { useTheme } from "next-themes";

const MainPage: NextPage = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

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
      <Navbar theme={resolvedTheme} setTheme={setTheme} />
      <HomeSection theme={theme} />
      <ProjectsSection />
      <SkillsSection />
      <AboutMeSection />
      <ContactMeSection theme={theme} />
      <footer>
        <p>Designed and coded by Giovanni Beccaro</p>
      </footer>
    </>
  );
};

export default MainPage;
