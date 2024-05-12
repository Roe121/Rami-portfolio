import React from "react";
import "./Hero.css";
import heroImg from "./last.png"; // Replace with your image filename

const Hero = () => {
  return (
    <div className="py-40">
      <div className="hero-container overflow-hidden">
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div className="hero-text">
          <h1 className="text-[38px] font-mova font-extrabold">Hello ! I am Rami</h1>
          <span className="text-[50px] font-mova font-extrabold uppercase text-gray-600">
            Web designer & developer
          </span>
          <p className="text-2xl">
            I'm a student and a passionate developer, eager to create innovative
            web solutions that make a difference.
          </p>
        </div>
        <img className="hero-image" src={heroImg} alt="Rami" />
      </div>
    </div>
  );
};

export default Hero;
