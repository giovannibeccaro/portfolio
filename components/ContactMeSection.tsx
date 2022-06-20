import React, { useEffect, useRef } from "react";
import ContactIllustration from "./svgs/ContactIllustration";
import { Icon } from "@iconify/react";
import { useIntl } from "react-intl";
import useOnScreen from "./hooks/useOnScreen";
import emailjs from "@emailjs/browser";

type Props = {
  setIsHeroBtnVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactMeSection: React.FC<Props> = ({ setIsHeroBtnVisible }) => {
  const intl = useIntl();
  const alertNope = intl.formatMessage({ id: "alertNope" });
  const alertYep = intl.formatMessage({ id: "alertYep" });

  //? contact links bottom left
  const contactsRef = useRef(null);
  const isVisible = useOnScreen(contactsRef);
  useEffect(() => {
    if (isVisible) {
      setIsHeroBtnVisible(true);
    } else {
      setIsHeroBtnVisible(false);
    }
  }, [setIsHeroBtnVisible, isVisible]);

  //? emailjs
  const form = useRef(null);
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  function sendMail(e: any) {
    e.preventDefault();
    console.log("pog");

    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

    if (form.current && SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      console.log("some");

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          console.log(1);

          alert(alertYep);
          window.location.reload();
        },
        () => {
          console.log(2);

          alert(alertNope);
        }
      );
    }
  }

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
        <form className="form" onSubmit={sendMail}>
          <label htmlFor="name">
            {intl.formatMessage({ id: "fullName" })}:
          </label>
          <input type="text" id="name" name="user_name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" />
          <label htmlFor="message">
            {intl.formatMessage({ id: "message" })}:
          </label>
          <textarea name="message" id="message"></textarea>
          <button type="submit">
            {intl.formatMessage({ id: "sendMess" })}
          </button>
        </form>
        <div ref={contactsRef} className="contact-links">
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
