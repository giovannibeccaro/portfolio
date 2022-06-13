import React from "react";
import Logo from "./svgs/Logo";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Logo darktheme={false} />
        <button className="menu-btn">
          <Icon icon="ci:menu-alt-05" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
