import React, { useState, useEffect } from "react";
import "./FAQ.css";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What is the date of the event?",
    answer:
      "The event will take place on August 17th, 2025 at Landmark Event Center, Lagos.",
  },
  {
    question: "Is the event free to attend?",
    answer:
      "Admission is free, but registration is required to secure your seat.",
  },
  {
    question: "Will the event be streamed online?",
    answer:
      "Yes, the event will be streamed live for registered virtual attendees.",
  },
  {
    question: "Can I volunteer or partner with the organizers?",
    answer:
      "Absolutely! Reach out through the Contact section to learn more about volunteering or partnership opportunities.",
  },
];

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggle = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title" data-aos="fade-left">
        Frequently Asked Questions
      </h2>
      <div className="faq-list" data-aos="fade-right" data-aos-delay={200}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${
              openIndices.includes(index) ? "active" : ""
            }`}
            onClick={() => toggle(index)}
            // data-aos="fade"
            data-aos-delay={100}>
            <div className="faq-question">
              <h4>{item.question}</h4>
              <div
                className={`arrow ${
                  openIndices.includes(index) ? "rotate" : ""
                }`}>
                ⌄
              </div>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
