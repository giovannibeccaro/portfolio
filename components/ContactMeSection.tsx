import React from "react";
import ContactIllustration from "./svgs/ContactIllustration";
import { Icon } from "@iconify/react";

const ContactMeSection = () => {
  return (
    <section className="contact-me-section">
      <h2 className="section-heading contact-me">Contact Me</h2>
      <ContactIllustration />
      <form>
        <label htmlFor="name">Full name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message"></textarea>
        <button>Send Message</button>
      </form>
      <a href="assets/resume.pdf" download="giovanni-beccaro-resume.pdf">
        <button className="download-link">
          <Icon className="btn-icon" icon="entypo:download" /> Download Resume
        </button>
      </a>
      <div className="contact-links">
        <a href="mailto:gio.beccaro@gmail.com" target="_blank" rel="noreferrer">
          <Icon className="icon-link" icon="entypo:mail" />{" "}
          gio.beccaro@gmail.com
        </a>
        <a
          href="https://github.com/giovannibeccaro"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="icon-link" icon="akar-icons:github-fill" />{" "}
          giovannibeccaro
        </a>
        <a
          href="https://www.linkedin.com/in/giovanni-beccaro-133305175"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            className="icon-link"
            icon="entypo-social:linkedin-with-circle"
          />{" "}
          Giovanni Beccaro
        </a>
      </div>
    </section>
  );
};

export default ContactMeSection;
