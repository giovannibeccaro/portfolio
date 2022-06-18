import React, { useEffect } from "react";
import ScrollElement from "./svgs/ScrollElement";
import HeroIllustration from "./svgs/HeroIllustration";
import HeroVector from "./svgs/HeroVector";

type Props = {
  theme: string | undefined;
};
//TODO mettere i linkini dei contatti dopo aver scrollato via dal bottone contattami

const HomeSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="desktop-hero-left">
          <h1 data-aos="zoom-in-up">
            designing and creating beautiful experiences
          </h1>
          <div className="desktop-hero-bottom-left">
            <a href="#contact-me">
              <button data-aos="fade-up" className="hero-btn">
                Contact me
              </button>
            </a>
            <p data-aos="zoom-in-up" data-aos-delay="200">
              or
            </p>
            <div
              className="scroll-element"
              data-aos="zoom-in-up"
              data-aos-delay="300"
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
