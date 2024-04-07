"use client";
import "react";
import React, { useState } from 'react';
import "./driver-search.css";
import Image from "next/image";

export default function DriverSearch({}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGetRequest = async () => {
    try {
      const response = await fetch('postgres://qlaovvcc:0htegdyZPtoW1uONUInp6ThLdG9dy8w_@flora.db.elephantsql.com/qlaovvcc');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    };
  };

  return (
    <>
      <div className="driver-search-container">
        <p className="search-text">
          Search for your favourite drivers results:
        </p>
        <input
          className="search-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter driver name here..."
        ></input>
      </div>
      <div className="driver-search-button">
        <button
          className="search-button-styles"
          disabled={!inputValue}
          onClick={() => console.log("Button clicked")}
        >
          Lights out and away we go ➡️
        </button>
      </div>
    </>
  );
}
