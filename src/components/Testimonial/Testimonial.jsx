import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";
import topRight from "../../assets/testimonial1.jpg";
import bottomLeft from "../../assets/testimonial2.jpg";
import bottomRight from "../../assets/grocery-image.png";

const testimonials = [
  {
    name: "Ada Nwoke",
    image: topRight,
    quote:
      "This tech event changed my career direction! I met mentors and collaborators for life.",
  },
  {
    name: "James Eze",
    image: bottomLeft,
    quote:
      "Inspirational speakers, top-notch organization, and unforgettable networking opportunities.",
  },
  {
    name: "Fatima Bello",
    image: bottomRight,
    quote:
      "The hands-on workshops gave me practical skills I now use daily as a frontend dev.",
  },
  {
    name: "Ada Nwoke",
    image: topRight,
    quote:
      "This tech event changed my career direction! I met mentors and collaborators for life.",
  },
  {
    name: "James Eze",
    image: bottomRight,
    quote:
      "Inspirational speakers, top-notch organization, and unforgettable networking opportunities.",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, image, quote } = testimonials[index];

  return (
    <section className="carousel-section">
      <h2 className="carousel-title" data-aos="fade-right">
        Listen To Participants Share Their Experiences
      </h2>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map(({ name, image, quote }, i) => (
            <div
              className="carousel-card"
              key={i}
              data-aos="fade-left"
              data-aos-delay={100}>
              <img src={image} alt={name} className="carousel-img" />
              <p className="carousel-quote">“{quote}”</p>
              <h4 className="carousel-name">— {name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-btn">
          ‹
        </button>
        <button onClick={handleNext} className="carousel-btn">
          ›
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
