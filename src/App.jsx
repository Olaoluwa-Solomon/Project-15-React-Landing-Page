import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/inter";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import HeroSectionTwo from "./components/Hero2/Hero2";
import MeetOurSpeakers from "./components/Meet/Meet";
import TestimonialCarousel from "./components/Testimonial/Testimonial";
import FAQ from "./components/FAQ/FAQ";
import ContactSection from "./components/Contact/Contact";
import Hero3 from "./components/Hero3/Hero3";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="featuring">
        <HeroSectionTwo />
        <MeetOurSpeakers />
      </section>

      <section id="testimonies">
        <TestimonialCarousel />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Hero3 />
      <Footer />
    </div>
  );
}

export default App;
