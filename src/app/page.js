import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import DriverSearch from "./components/driver-search/driver-search";
import BackgroundImage from "./components/background-image/background-image";

import heroImage from "../../images/hero-image.jpg"
import backgroundImage from "../../images/background-image.jpg";

export default function Page() {
  return (
    <>
      <section className="hero">
        <Hero 
          image={heroImage}
          imgAlt={"hero-image"}
        />
      </section>

      <section className="driver-search">
        <DriverSearch />
      </section>

      <section className="background-image">
        <BackgroundImage
          image={backgroundImage}
          imgAlt={"background-image"}
        />
      </section>
    </>
  );
}
