import React from "react";
import "./contactpage.css";

const ContactPage = () => {
  return (
    <>
      <div className="contactpage">
        <div className="contactpage-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.869386671036!2d85.307295!3d27.671947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1989de5c403d%3A0x3b2a695c07655ef5!2sbhanimandal%20mart!5e0!3m2!1sen!2sus!4v1696403305726!5m2!1sen!2sus"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ilami agro and tech"
            ></iframe>
          </div>
          <div className="contact-info">
            <h1>Ilami Agro Pvt. Ltd</h1>
            <h4>
              Ilami Agro and Tech Pvt. Ltd. | इलमी एग्राे एंड टेक प्रा.लि.
            </h4>
            <p>Bhanimandal, Lalitpur, Nepal</p>
            <div className="phone-num">
              <p>Email: ilamiagro@gmail.com</p>
              <p>Phone: +977 01-4890768</p>
              <p>Mobile: +977 9849607842</p>
            </div>

            <h3>Contact Person: Sunil Pokharel</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
