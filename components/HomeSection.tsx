import React, { useEffect } from "react";
import ScrollElement from "./svgs/ScrollElement";
import HeroIllustration from "./svgs/HeroIllustration";
import HeroVector from "./svgs/HeroVector";

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
                CONTACT ME
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

        <div className="overflow-hidden">
          <div className="hero-illustration" data-aos="fade-up">
            <HeroIllustration />
          </div>
        </div>
      </section>
      <div className="hero-vector">
        <HeroVector />
      </div>
    </>
  );
};

export default HomeSection;
