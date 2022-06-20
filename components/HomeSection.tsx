import React, { useEffect, useRef, useState } from "react";
import ScrollElement from "./svgs/ScrollElement";
import HeroIllustration from "./svgs/HeroIllustration";
import HeroVector from "./svgs/HeroVector";
import { Icon } from "@iconify/react";
import { useIntl } from "react-intl";
import useOnScreen from "./hooks/useOnScreen";

//TODO mettere i linkini dei contatti dopo aver scrollato via dal bottone contattami

type Props = {
  isHeroBtnVisible: boolean;
  setIsHeroBtnVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const HomeSection: React.FC<Props> = ({
  isHeroBtnVisible,
  setIsHeroBtnVisible,
}) => {
  const intl = useIntl();

  //? Contact buttons appearing after scrolling down

  const heroBtn = useRef(null);
  const isVisible = useOnScreen(heroBtn);

  useEffect(() => {
    if (isVisible) {
      setIsHeroBtnVisible(true);
    } else {
      setIsHeroBtnVisible(false);
    }
  }, [setIsHeroBtnVisible, isVisible]);

  return (
    <>
      <section className="hero-section">
        <div className="desktop-hero-left">
          <h1 data-aos="zoom-in-up">{intl.formatMessage({ id: "h1" })}</h1>
          <div className="desktop-hero-bottom-left">
            <div className="hero-btn-and-contacts">
              <a href="#contact-me">
                <button ref={heroBtn} data-aos="fade-up" className="hero-btn">
                  {intl.formatMessage({ id: "contactMeBtn" })}
                </button>
              </a>
              <div
                className={`${
                  isHeroBtnVisible
                    ? "contact-btns-after-scroll"
                    : "contact-btns-after-scroll active"
                }`}
              >
                <a
                  href="https://github.com/giovannibeccaro"
                  className="hero-contact-link"
                >
                  <Icon icon="akar-icons:github-fill" />
                </a>
                <a
                  href="https://www.linkedin.com/in/giovanni-beccaro-133305175"
                  className="hero-contact-link"
                >
                  <Icon icon="entypo-social:linkedin-with-circle" />
                </a>
              </div>
            </div>

            <p data-aos="zoom-in-up" data-aos-delay="200">
              {intl.formatMessage({ id: "or" })}
            </p>
            <div
              className="scroll-element"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-content={intl.formatMessage({ id: "scroll" })}
            >
              <ScrollElement />
            </div>
          </div>
        </div>

        <div className="hero-illustration" data-aos="fade-up">
          <HeroIllustration />
        </div>
      </section>
      <div className="hero-vector">
        <HeroVector />
      </div>
    </>
  );
};

export default HomeSection;
