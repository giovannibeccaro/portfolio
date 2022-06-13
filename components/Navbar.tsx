import React, { useEffect, useState } from "react";
import Logo from "./svgs/Logo";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav>
        <Logo darktheme={false} />
        <button
          className={`menu-btn ${isMenuOpen ? "close" : "open"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon={`${isMenuOpen ? "carbon:close" : "ci:menu-alt-05"}`} />
        </button>
        <ul className={`${isMenuOpen ? "active" : "not-active"}`}>
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
