import "react";
import "./driver-search.css";
import Image from "next/image";

export default function DriverSearch({ }) {
  return (
    <>
      <div className="driver-search-container">
        <p className="search-text">Search for your favourite drivers results:</p>
        <input className="search-input"></input>
      </div>
      <div className="driver-search-button">
        <button className="search-button-styles">Lights out and away we go ➡️</button>
      </div>
    </>
  )
}
