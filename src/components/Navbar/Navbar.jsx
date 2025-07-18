import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import the CSS for AOS!

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Ref for the nav links container

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Set to false to allow re-animation if you re-open the menu
      easing: "ease-in-out",
      disableMutationObserver: false, // Important for elements being added/removed or changed
    });
  }, []);

  // Use a single useEffect to handle AOS refresh on menu state change
  useEffect(() => {
    if (isOpen) {
      // When the menu opens, give it a moment to render, then refresh AOS
      // This helps AOS detect the newly 'visible' elements in the DOM
      const timer = setTimeout(() => {
        AOS.refreshHard();
      }, 50); // A small delay is often useful
      return () => clearTimeout(timer); // Cleanup on unmount or re-render
    }
  }, [isOpen]); // Only runs when isOpen changes

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  // Logic for clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the nav links and not on the hamburger
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest(".hamburger")
      ) {
        if (isOpen) {
          setIsOpen(false); // Just set false, CSS will handle animation
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Re-run effect when isOpen changes

  return (
    <nav className="navbar">
      <div className="logo">TECHub</div>

      {/* Attach ref here */}
      <div className={`nav-links ${isOpen ? "open" : ""}`} ref={navRef}>
        {/* Apply AOS attributes directly to items. They will animate when the parent becomes visible */}
        <button
          onClick={() => scrollToSection("home")}
          data-aos="fade-right"
          data-aos-delay="50">
          Home
        </button>
        <button
          onClick={() => scrollToSection("featuring")}
          data-aos="fade-right"
          data-aos-delay="100">
          Featuring
        </button>
        <button
          onClick={() => scrollToSection("testimonies")}
          data-aos="fade-right"
          data-aos-delay="200">
          Testimonies
        </button>
        <button
          onClick={() => scrollToSection("faq")}
          data-aos="fade-right"
          data-aos-delay="300">
          FAQ
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          data-aos="fade-right"
          data-aos-delay="400">
          Contact
        </button>
        <button
          className="register-btn"
          onClick={() => scrollToSection("contact")}
          data-aos="fade-right"
          data-aos-delay="500">
          Register Now
        </button>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>
    </nav>
  );
};

export default Navbar;
