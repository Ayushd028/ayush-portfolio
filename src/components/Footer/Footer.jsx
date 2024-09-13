import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <>
      <hr className="footer-divider" />
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/-ayushdwivedi/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link">
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com/Ayushd028"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link">
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/ayush.d__/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link">
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="footer-text">
            <p>&copy;2024 Crafted with passion 🧡. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
