import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Meet.css";
import speakerOne from "../../assets/maturebusinessman.png";
import speakerTwo from "../../assets/businesswoman.png";
import speakerThree from "../../assets/happybusinessman.png";
import speakerFour from "../../assets/confidententrepreneur.png";

const speakers = [
  {
    id: 1,
    name: "Jane Doe",
    field: "AI Researcher",
    company: "OpenAI",
    image: speakerOne,
  },
  {
    id: 2,
    name: "John Smith",
    field: "Frontend Developer",
    company: "Google",
    image: speakerTwo,
  },
  {
    id: 3,
    name: "Alice Johnson",
    field: "Cybersecurity Expert",
    company: "Microsoft",
    image: speakerThree,
  },
  {
    id: 4,
    name: "Mark Lee",
    field: "Cloud Architect",
    company: "Facebook",
    image: speakerTwo,
  },
  {
    id: 3,
    name: "Alice Johnson",
    field: "Cybersecurity Expert",
    company: "Microsoft",
    image: speakerFour,
  },
  {
    id: 2,
    name: "John Smith",
    field: "Frontend Developer",
    company: "Google",
    image: speakerThree,
  },
];

const MeetOurSpeakers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="speakers-section">
      <div className="speakers-banner" data-aos="fade-right">
        <h2>Meet Our Event Speakers</h2>
        <h4>
          Get inspired by leading figures in the tech industry as they share
          their insights and expertise
        </h4>
      </div>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            className="speaker-card"
            data-aos="fade-left"
            data-aos-delay={index * 100}>
            <img src={speaker.image} alt={speaker.name} />
            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p>
                {speaker.field}, {speaker.company}
              </p>
              {/* <span>{speaker.company}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurSpeakers;
