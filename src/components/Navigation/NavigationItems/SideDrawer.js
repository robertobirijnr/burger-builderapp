import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";
import "./SideDrawer.css";

const SideDrawer = () => {
  return (
    <div className="SideDrawer">
      <Logo />

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
