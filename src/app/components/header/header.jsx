import React from "react";
import "./header.css";
import Image from "next/image";
import Hamburger from "../hamburger/hamburger";

import logo from "../../../../images/f1-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-hamburger">
        <Hamburger />
      </div>
      <div className="header-logo">
        <Image src={logo} alt="F1 Logo" width={70} height={25} />
      </div>
      <div className="header-third"></div>
    </div>
  );
}
export default Header;
