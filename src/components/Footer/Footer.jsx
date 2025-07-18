import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ContactFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="footer-logo">TECHub</h2>
          <p>
            We ignite the spark of innovation. Our platform brings together
            visionaries, creators, and industry leaders.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Event</li>
              <li>Career</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Speaker</li>
              <li>Pricing</li>
              <li>Sponsor</li>
              <li>Blog & News</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Overview</li>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h3>Subscribe To Our Newsletter!</h3>
        <input type="email" placeholder="Eg: senku@mail.com" /> <br />
        <button>Subscribe</button>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          <span>Privacy Policy</span>
          <span>Term & Services</span>
        </div>
        <p>© 2025 TECHub</p>
      </div>
    </footer>
  );
};

export default ContactFooter;
