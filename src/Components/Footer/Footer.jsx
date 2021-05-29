import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="quick">
        <h2>Quick Navigation</h2>
        <div className="quick-after">
          <ul>
            <li>No.1 .io Home Page</li>
            <li>Wiew all Domains</li>
            <li>Why .io Domains</li>
            <li>How to Buy</li>
            <li>Buyers Protection</li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <h2>Legal</h2>
        <ul>
          <li>About Us</li>
          <li>Privacy</li>
          <li>Terms of Use</li>
          <li>Contact</li>
          <li>Site Map</li>
        </ul>
      </div>
      <div className="follow">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <button className="facebook">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button className="linkedin">
            <i class="fab fa-linkedin-in"></i>
          </button>
          <button className="twiter">
            <i class="fab fa-twitter"></i>
          </button>
          <button className="instagram">
            <i class="fab fa-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
