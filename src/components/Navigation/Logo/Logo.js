import React from "react";
import logo from "../../../assets/images/burger.png";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="Logo">
      <img src={logo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
