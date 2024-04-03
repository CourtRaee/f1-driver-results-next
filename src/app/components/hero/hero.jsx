import "react";
import "./hero.css";
import Image from "next/image";

export default function Hero({ image, imgAlt }) {
  return (
    <Image
      className="hero-mobile"
      src={image}
      alt={imgAlt}
    />
  );
}
