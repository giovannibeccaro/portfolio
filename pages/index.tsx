import type { NextPage } from "next";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

const MainPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
    </>
  );
};

export default MainPage;
