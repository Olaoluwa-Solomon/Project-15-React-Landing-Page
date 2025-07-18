import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero2.css";
import topLeft from "../../assets/3.jpg";
import topRight from "../../assets/blog-1.jpg";
import bottomLeft from "../../assets/blog-4.jpg";
import bottomRight from "../../assets/blog-5.jpg";

const HeroSectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="hero-two">
      <img src={topLeft} alt="top-left" className="corner-img top-left" />
      <img src={topRight} alt="top-right" className="corner-img top-right" />
      <img
        src={bottomLeft}
        alt="bottom-left"
        className="corner-img bottom-left"
      />
      <img
        src={bottomRight}
        alt="bottom-right"
        className="corner-img bottom-right"
      />

      <div className="hero-two-text" data-aos="fade-up">
        <h1>Inspiring Experience</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          autem, in numquam illo aspernatur inventore natus ratione cumque quae,
          iusto amet officia consectetur? Nostrum neque quas doloribus nesciunt,
          amet quos ea, earum odit provident quo optio architecto! Quae, hic?
          Obcaecati et earum maiores fugiat modi dignissimos consequatur cum rem
          sequi, ipsam eos amet optio vitae, veniam voluptates dolor aut
          voluptatibus facere repudiandae. Cupiditate nesciunt ut eveniet qui ex
          odio? Veniam consequuntur quam vero quasi molestiae laboriosam
          laudantium nam eius ipsam exercitationem unde magni mollitia beatae
          tempora et deleniti, hic, praesentium aliquam nesciunt voluptas qui
          sed.
        </p>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
