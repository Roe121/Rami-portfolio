import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSnapchat, faTwitter, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faGithub} size="x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} size="x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} size="x" />
          </a>
        </div>
        <ul className="list-inline flex justify-center">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About me</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Projects</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Let's connect</a>
          </li>
        </ul>
        <p className="copyright">Rami Lezzar © 2024</p>
      </footer>
    </div>
  );
};

export default Footer;