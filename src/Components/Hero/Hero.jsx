import React from "react";
import "./Hero.css";
import heroImg from "./last.png"; // Replace with your image filename
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


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
            A student and a passionate developer.
          </p>
          <div className="flex  space-x-4 py-5 ju">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" size="lg" />
              Resume
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <a href="https://github.com/Roe121">
              <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg" />
              GitHub
              </a>
            </button>
          </div>
          
          
        </div>
        <img className="hero-image" src={heroImg} alt="Rami" />
      </div>
    </div>
  );
};

export default Hero;
