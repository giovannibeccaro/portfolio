import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "./svgs/Logo";

const HomeSection = () => {
  return (
    <div>
      <Logo darktheme={false} />
      <Icon icon="ci:menu-alt-05" />
      <h1>designing and creating beautiful experiences</h1>
      <button>CONTACT ME</button>
      <p>or</p>
    </div>
  );
};

export default HomeSection;
