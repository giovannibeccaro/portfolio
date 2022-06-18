import type { NextPage } from "next";
import Loader from "../components/Loader";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutMeSection from "../components/AboutMeSection";
import ContactMeSection from "../components/ContactMeSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "next-themes";

const MainPage: NextPage = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Navbar theme={resolvedTheme} setTheme={setTheme} />
      {isLoading ? "ciao" : <HomeSection />}
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
