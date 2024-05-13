import React from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div className="text-gray-200 bg-gray-900 py-28">
      <div className="text-center ">
        <h1 className="title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl font-mova">
          Let's Get In Touch !
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          The world of computer science is vast, and new technologies emerge all
          the time. I am committed to staying ahead of the curve to meet my
          clients' needs and assist fellow developers. Here's what I specialize
          in:
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>

      <section id="contact" className="contact py-10 max-w-6xl mx-auto px-5 ">
        <div className="form" data-aos="fade-up">
          <strong>Feel free to ask anything</strong>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea cols="30" rows="4" placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>

        <div className="map" data-aos="fade-up">
          <strong className="mb-8" >Where you can find me</strong>
          <div className="mt-5">
            <a href="#" className="mr-3">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span className="ml-2">Lezzarr@3il.fr</span>
            </a>
            <a href="https://github.com/Roe121" className="mr-3">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span className="ml-2">Roe121</span>
            </a>
            <a href="https://www.linkedin.com/in/rami-lezzar/" className="mr-3">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <span className="ml-2">Rami Lezzar</span>
            </a>
          </div>
          <div className="line bg-indigo-500"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5561.23721969211!2d1.2667172866294945!3d45.81889609651901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f933617de8c327%3A0x8d14320ada5f9041!2sGroupe%203iL!5e0!3m2!1sfr!2sfr!4v1715635630697!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: "0", maxWidth: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
export default Contact;
