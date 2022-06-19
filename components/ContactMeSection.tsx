import React from "react";
import ContactIllustration from "./svgs/ContactIllustration";
import { Icon } from "@iconify/react";
import { useIntl } from "react-intl";

const ContactMeSection = () => {
  const intl = useIntl();

  return (
    <section className="contact-me-section">
      <h2
        className="section-heading contact-me"
        data-content={intl.formatMessage({ id: "contactMe" })}
        id="contact-me"
      >
        {intl.formatMessage({ id: "contactMe" })}
      </h2>
      <div className="contacts-desktop-grid">
        <div className="contacts-illustration">
          <ContactIllustration />
        </div>
        <form className="form">
          <label htmlFor="name">
            {intl.formatMessage({ id: "fullName" })}:
          </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">
            {intl.formatMessage({ id: "message" })}:
          </label>
          <textarea name="message" id="message"></textarea>
          <button>{intl.formatMessage({ id: "sendMess" })}</button>
        </form>
        <div className="contact-links">
          <p>{intl.formatMessage({ id: "otherContacts" })}</p>
          <a
            href="mailto:gio.beccaro@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
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
        <a
          href="resume.pdf"
          download="giovanni-beccaro-resume.pdf"
          className="resume"
        >
          <button className="download-link">
            <Icon className="btn-icon" icon="entypo:download" />{" "}
            {intl.formatMessage({ id: "downloadResume" })}
          </button>
        </a>
      </div>
    </section>
  );
};

export default ContactMeSection;
