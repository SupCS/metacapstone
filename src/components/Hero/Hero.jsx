import React from "react";
import "./Hero.css";
import restaurant from "./restaurant.jpg";

export default function Hero() {
  return (
    <section className="hero__section">
      <div className="hero__wrapper">
        <div className="container">
          <div className="hero__main">
            <div className="hero__header">
              <h1>Little Lemon</h1>
              <h2>Kyiv</h2>
            </div>
            <p>
              Find a table for any occasion! Reserve a table for you and your
              company in a few clicks!
            </p>
            <button>Reserve a table</button>
          </div>
        </div>
        <div className="hero__image-container">
          <img
            src={restaurant}
            alt="Restaurant interior"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
