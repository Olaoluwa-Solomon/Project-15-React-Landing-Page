import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import heroImage from "../../assets/hero.jpg";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="hero">
      <div
        className="hero-text"
        data-aos="fade-right"
        data-aos-delay={500}
        data-aos-once="false">
        <h1>
          <span>UNLEASHING</span>
          <br />
          <span className="yellow">CREATIVE</span>
          <br />
          <span>HORIZONS</span>
        </h1>
        <p>
          Join the biggest creative festival of the year. Experience innovation,
          music, and more!
        </p>
        <button className="hero-btn">Buy Ticket</button>
      </div>

      <div className="hero-image" data-aos="fade-left" data-aos-delay={500}>
        <img src={heroImage} alt="Creative Event" />
      </div>
    </section>
  );
};

export default HeroSection;
