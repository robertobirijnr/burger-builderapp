import React from "react";
import "./Layout.css";
import Toolbar from "../Navigation/Toobar/Toolbar";
import SideDrawer from "../Navigation/NavigationItems/SideDrawer";

const Layout = (props) => {
  return (
    <div>
      <Toolbar />
      <SideDrawer />
      <main className="Content">{props.children}</main>
    </div>
  );
};

export default Layout;
