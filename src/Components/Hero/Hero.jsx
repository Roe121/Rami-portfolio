import React from "react";
import "./Hero.css";
import heroImg from "./last.png"; // Replace with your image filename

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1
          className="text-[50px] font-mova font-extrabold"
        >
          Salut ! je suis
        </h1>
        <span className="text-[50px] font-mova font-extrabold uppercase text-gray-600">
            Rami
          </span>
        <p className="text-2xl">
          Etudiant et passioné par le developement
        </p>
      </div>
      <img className="hero-image" src={heroImg} alt="Your Name" />
    </div>
  );
};

export default Hero;
