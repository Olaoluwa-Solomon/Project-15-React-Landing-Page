import React, { useEffect } from "react";
import "./Hero3.css";
import AOS from "aos";
import "aos/dist/aos.css";
import leftImg from "../../assets/hero.jpg";

const Hero3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero3">
      <div className="hero3-overlay"></div>
      <div className="hero3-image" data-aos="fade-up" data-aos-delay={100}>
        <img src={leftImg} alt="Creative Event" />
      </div>

      <div className="hero3-text" data-aos="fade-down" data-aos-delay={100}>
        <h1>From The CEO'S Desk</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ab nisi
          illum omnis sunt dignissimos itaque animi molestias sint delectus
          vitae a minus rerum, nostrum perferendis blanditiis exercitationem
          corrupti repellat vel quis fuga perspiciatis quae iusto unde! Laborum
          quaerat facilis odit quibusdam deleniti tenetur hic dolores. Quam modi
          adipisci eligendi ducimus, veritatis totam voluptas at quis odit
          provident sed unde voluptatem quo velit nisi consequatur aliquam?
          Ratione fuga illum tempora provident repellendus libero quibusdam
          ducimus, similique, suscipit repellat atque possimus placeat laborum.
          Velit eos non recusandae dicta. Ex magnam quaerat, consequuntur
          dolorem sed quia deleniti, numquam tenetur, aliquid eius
          necessitatibus! Quam modi adipisci eligendi ducimus, veritatis totam
        </p>
      </div>
    </section>
  );
};

export default Hero3;
