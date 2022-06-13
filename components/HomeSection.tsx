import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "./svgs/Logo";
import ScrollElement from "./svgs/ScrollElement";
import HeroIllustration from "./svgs/HeroIllustration";

const HomeSection = () => {
  return (
    <section className="hero-section">
      <h1>designing and creating beautiful experiences</h1>
      <button className="hero-btn">CONTACT ME</button>
      <p>or</p>
      <ScrollElement />
      <HeroIllustration />
    </section>
  );
};

export default HomeSection;
