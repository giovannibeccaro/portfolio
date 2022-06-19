import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

const AboutMeSection = () => {
  const intl = useIntl();

  return (
    <section className="about-section">
      <h2
        className="section-heading about-me"
        data-content={intl.formatMessage({ id: "aboutMe" })}
        id="about-me"
      >
        {intl.formatMessage({ id: "aboutMe" })}
      </h2>
      <div className="about-me-paragraphs">
        <article>
          <h4 data-aos="fade-up">{intl.formatMessage({ id: "whoAmI" })}</h4>
          <p data-aos="fade-up">
            <FormattedMessage
              id="whoAmIPar"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
        </article>
        <article>
          <h4 data-aos="fade-up">How do I work?</h4>
          <p data-aos="fade-up">
            <FormattedMessage
              id="howDoIWorkPar"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutMeSection;
