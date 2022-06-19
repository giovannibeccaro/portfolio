import React, { useEffect } from "react";
import ScrollElement from "./svgs/ScrollElement";
import HeroIllustration from "./svgs/HeroIllustration";
import HeroVector from "./svgs/HeroVector";
import { useIntl } from "react-intl";

//TODO mettere i linkini dei contatti dopo aver scrollato via dal bottone contattami

const HomeSection = () => {
  const intl = useIntl();

  return (
    <>
      <section className="hero-section">
        <div className="desktop-hero-left">
          <h1 data-aos="zoom-in-up">{intl.formatMessage({ id: "h1" })}</h1>
          <div className="desktop-hero-bottom-left">
            <a href="#contact-me">
              <button data-aos="fade-up" className="hero-btn">
                {intl.formatMessage({ id: "contactMeBtn" })}
              </button>
            </a>
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
