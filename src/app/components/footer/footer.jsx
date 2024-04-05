import "react";
import "./footer.css";
import Image from "next/image";

import logo from "../../../../images/f1-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section-one">
      <Image src={logo} alt="F1 Logo" width={50} height={17} />
      </div>
      <div className="footer-section-two">
        <p>Created By Courtney</p>
      </div>
      <div className="footer-section-three">
        <p>2024</p>
      </div>
    </footer>
  );
}

export default Footer;
