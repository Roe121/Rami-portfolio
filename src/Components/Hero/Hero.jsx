import React, { useRef } from 'react';
import "./Hero.css";
import heroImg from "./last.png"; // Replace with your image filename

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-28">
    <div className="hero-container ">
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
        <h1 className="text-[50px] font-mova font-extrabold">
          Hello ! I am
        </h1>
        <span className="text-[50px] font-mova font-extrabold uppercase text-gray-600">
          Rami
        </span>
        <p className="text-2xl">I'm a student and a passionate developer, eager to create innovative web solutions that make a </p>
      </div>
      <img className="hero-image" src={heroImg} alt="Rami" />
    </div>
    </section>
  );
};

export default Hero;
