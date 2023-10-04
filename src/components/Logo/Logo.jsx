import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="w-full h-full">
      <img className="w-[50px] h-[50px]" src={logo} alt="" />
    </Link>
  );
};

export default Logo;
