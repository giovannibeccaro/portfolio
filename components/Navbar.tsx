import React, { useEffect, useState } from "react";
import Logo from "./svgs/Logo";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useIntl } from "react-intl";

type Props = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  locales: string[] | undefined;
  locale: string | undefined;
};

const Navbar: React.FC<Props> = ({ theme, setTheme, locales, locale }) => {
  const intl = useIntl();
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
          <Logo />
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
            <a href="#projects">{intl.formatMessage({ id: "projects" })}</a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#skills">{intl.formatMessage({ id: "skills" })}</a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#about-me">{intl.formatMessage({ id: "aboutMe" })}</a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#contact-me">{intl.formatMessage({ id: "contactMe" })}</a>
          </li>
          {locales && (
            <li onClick={() => setIsMenuOpen(false)}>
              <span className={locale === "en" ? "active" : ""}>
                <Link key={locales[0]} href="/" locale={locales[0]}>
                  {locales[0]}
                </Link>
              </span>{" "}
              /{" "}
              <span className={locale === "it" ? "active" : ""}>
                <Link key={locales[1]} href="/" locale={locales[1]}>
                  {locales[1]}
                </Link>
              </span>
            </li>
          )}
          <li
            className="theme-switch"
            onClick={() => {
              setIsMenuOpen(false);
              switchTheme();
            }}
          >
            {theme === "light" ? (
              <Icon icon="ic:baseline-dark-mode" />
            ) : (
              <Icon icon="ic:baseline-light-mode" />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
