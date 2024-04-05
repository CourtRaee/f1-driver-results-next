import "react";
import "./background-image.css";
import Image from "next/image";

export default function BackgroundImage({ image, imgAlt }) {
  return <Image className="background-image-styles" src={image} alt={imgAlt} />;
}
