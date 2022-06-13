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
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#">Home</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#skills">skills</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#about-me">about me</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#contact-me">contact me</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>En / It</li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Icon icon="ic:baseline-dark-mode"></Icon>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
