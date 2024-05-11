import React, { useRef } from "react";
import "./Hero.css";
import heroImg from "./last.png"; // Replace with your image filename

const Hero = () => {
  return (
    <div className="  py-28 overflow-hidden">
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
      <div className="hero-container ">
        <div className="hero-text">
          <h1 className="text-[50px] font-mova font-extrabold">Hello ! I am</h1>
          <span className="text-[50px] font-mova font-extrabold uppercase text-gray-600">
            Rami
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
