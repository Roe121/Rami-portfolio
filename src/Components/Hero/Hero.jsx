import React from "react";
import "./Hero.css";
import heroImg from "./last.png"; // Replace with your image filename
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Hero = () => {
  return (
    <div className="py-28 ">
      <div className="hero-container overflow-hidden ">
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
        <div className="hero-text ">
          <h1 className="text-[32px] font-mova font-extrabold">Hello ! I am Rami</h1>
          <span className="text-[38px] font-mova font-extrabold uppercase text-indigo-700">
          A full stack web developer
          </span>
          <p className="text-xl my-3">
            I am a full stack web developer with a passion for creating
            beautiful, responsive and user-friendly websites. I am always
            looking for new challenges and opportunities to grow my skills.
          </p>
          <div className="flex  space-x-4 py-5 mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <a href="https://drive.google.com/file/d/1ao7pgLkjgfz-Kdu3Pyci3rHEEjP4SJIM/view?usp=sharing"><FontAwesomeIcon icon={faFileAlt} className="mr-2" size="lg" />
              Resume
              </a>
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
