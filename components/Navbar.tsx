import React, { useEffect, useState } from "react";
import Logo from "./svgs/Logo";
import { Icon } from "@iconify/react";

type Props = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
};

const Navbar: React.FC<Props> = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const [isOnLink, setIsOnLink] = useState(false);

  function hoverOn() {
    setIsOnLink(true);
  }
  function hoverOff() {
    setIsOnLink(false);
  }

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <header>
      <nav>
        <span className="logo" onClick={() => window.location.reload()}>
          <Logo darktheme={theme === "dark" ? true : false} />
        </span>

        <button
          className={`menu-btn ${isMenuOpen ? "close" : "open"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon={`${isMenuOpen ? "carbon:close" : "ci:menu-alt-05"}`} />
        </button>
        <ul className={`${isMenuOpen ? "active" : "not-active"}`}>
          <li
            className={`nav-link ${!isOnLink && "active"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#">Home</a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#skills">skills</a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#about-me">about me</a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#contact-me">contact me</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>En / It</li>
          <li
            className="theme-switch"
            onClick={() => {
              setIsMenuOpen(false);
              switchTheme();
            }}
          >
            <Icon icon="ic:baseline-dark-mode"></Icon>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
