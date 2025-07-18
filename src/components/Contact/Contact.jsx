import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="form-area" data-aos="fade-right">
          {/* <p className="subheading">Contact Us</p> */}
          <h2>Get In Touch!</h2>
          <p className="description">
            Network with tech visionaries, experts, and innovators.
          </p>

          <form>
            <div className="input-row">
              <input type="text" placeholder="First Name" name="firstName" />
              <input type="text" placeholder="Last Name" name="lastName" />
            </div>
            <div className="input-row">
              <input type="email" placeholder="E-mail" name="email" />
              <input type="tel" placeholder="Phone" name="phone" />
            </div>
            <textarea
              placeholder="Write your message here . . ."
              rows="5"
              name="message"></textarea>
            <button className="contactbtn">Send</button>
          </form>
        </div>

        <div className="info-area" data-aos="fade-left">
          <div className="contact-box-container">
            <div className="contact-box">
              <i className="fas fa-building"></i>
              <div>
                <h4>Headquarters</h4>
                <p>123, Street, LA</p>
              </div>
            </div>

            <div className="contact-box">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Call Us</h4>
                <p>(555) 123–4567</p>
              </div>
            </div>

            <div className="contact-box">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Mail Us</h4>
                <p>hello@tecon.com</p>
              </div>
            </div>
          </div>

          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19800.426160210436!2d-0.1277581!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1689694531293"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px", marginTop: "20px" }}
            allowFullScreen=""
            loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
