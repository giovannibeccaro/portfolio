import React, { useState } from "react";
import Logo from "./svgs/Logo";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <Logo darktheme={false} />
        <button className="menu-btn">
          <Icon icon="ci:menu-alt-05" />
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#about-me">about me</a>
          </li>
          <li>
            <a href="#contact-me">contact me</a>
          </li>
          <li>En / It</li>
          <li>
            <Icon icon="ic:baseline-dark-mode"></Icon>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
