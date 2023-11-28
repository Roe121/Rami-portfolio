import React from 'react'
import './Hero.css'
import heroImg from './herol.png'; // Replace with your image filename


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="text-3xl font-bold mb-2">Your Name</h1>
        <p className="text-gray-600">A brief description about yourself goes here.</p>
      </div>
      <img
        className="hero-image"
        src={heroImg}
        alt="Your Name"
      />
    </div>
  )
}

export default Hero