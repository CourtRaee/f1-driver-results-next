import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import DriverSearch from "./components/driver-search/driver-search";
import BackgroundImage from "./components/background-image/background-image";

export default function Page() {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>

      <section className="driver-search">
        <DriverSearch />
      </section>

      <section className="background-image">
        <BackgroundImage />
      </section>
    </>
  );
}
