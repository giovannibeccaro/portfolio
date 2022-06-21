import type { NextPage } from "next";
import Head from "next/head";
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
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const MainPage: NextPage = () => {
  // Dark theme stuff
  const { setTheme, resolvedTheme } = useTheme();
  // Localization stuff
  const { locales, locale } = useRouter();
  const intl = useIntl();

  const [isLoading, setIsLoading] = useState(true);
  //? animation contact links after scroll
  const [isHeroBtnVisible, setIsHeroBtnVisible] = useState(true);

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
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Giovanni Beccaro</title>
        <link
          rel="alternate"
          href="http://giovannibeccaro.com"
          hrefLang="x-default"
        />
        <link rel="alternate" href="http://giovannibeccaro.com" hrefLang="en" />
        <link
          rel="alternate"
          href="http://giovannibeccaro.com/it"
          hrefLang="it"
        />
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar
            theme={resolvedTheme}
            setTheme={setTheme}
            locales={locales}
            locale={locale}
          />
          <HomeSection
            setIsHeroBtnVisible={setIsHeroBtnVisible}
            isHeroBtnVisible={isHeroBtnVisible}
          />
          <ProjectsSection />
          <SkillsSection />
          <AboutMeSection />
          <ContactMeSection setIsHeroBtnVisible={setIsHeroBtnVisible} />
          <footer>
            <p>{intl.formatMessage({ id: "footer" })}</p>
          </footer>
        </>
      )}
    </>
  );
};

export default MainPage;
