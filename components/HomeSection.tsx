import React, { useEffect } from "react";
import ScrollElement from "./svgs/ScrollElement";
import HeroIllustration from "./svgs/HeroIllustration";

const HomeSection = () => {
  return (
    <section className="hero-section">
      <h1 data-aos="zoom-in-up">
        designing and creating beautiful experiences
      </h1>
      <a href="#contact-me">
        <button data-aos="fade-up" className="hero-btn">
          CONTACT ME
        </button>
      </a>
      <p data-aos="zoom-in-up" data-aos-delay="200">
        or
      </p>
      <div data-aos="zoom-in-up" data-aos-delay="300">
        <ScrollElement />
      </div>

      <div data-aos="fade-up">
        <HeroIllustration />
      </div>
    </section>
  );
};

export default HomeSection;
