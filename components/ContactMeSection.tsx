import React from "react";
import ContactIllustration from "./svgs/ContactIllustration";
import { Icon } from "@iconify/react";

const ContactMeSection = () => {
  return (
    <section className="contact-me-section">
      <h2
        className="section-heading contact-me"
        id="contact-me"
        data-aos="zoom-in-up"
      >
        Contact Me
      </h2>
      <div data-aos="fade-up">
        <ContactIllustration />
      </div>
      <form>
        <label htmlFor="name" data-aos="fade-up">
          Full name:
        </label>
        <input type="text" id="name" name="name" data-aos="fade-up" />
        <label htmlFor="email" data-aos="fade-up">
          Email:
        </label>
        <input type="email" id="email" name="email" data-aos="fade-up" />
        <label htmlFor="message" data-aos="fade-up">
          Message:
        </label>
        <textarea name="message" id="message" data-aos="fade-up"></textarea>
        <button data-aos="fade-up">Send Message</button>
      </form>
      <div className="contact-links">
        <a
          href="mailto:gio.beccaro@gmail.com"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
        >
          <Icon className="icon-link" icon="entypo:mail" />{" "}
          gio.beccaro@gmail.com
        </a>
        <a
          href="https://github.com/giovannibeccaro"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
        >
          <Icon className="icon-link" icon="akar-icons:github-fill" />{" "}
          giovannibeccaro
        </a>
        <a
          href="https://www.linkedin.com/in/giovanni-beccaro-133305175"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
        >
          <Icon
            className="icon-link"
            icon="entypo-social:linkedin-with-circle"
          />{" "}
          Giovanni Beccaro
        </a>
      </div>
      <a
        href="assets/resume.pdf"
        download="giovanni-beccaro-resume.pdf"
        data-aos="fade-up"
      >
        <button className="download-link">
          <Icon className="btn-icon" icon="entypo:download" /> Download Resume
        </button>
      </a>
    </section>
  );
};

export default ContactMeSection;
