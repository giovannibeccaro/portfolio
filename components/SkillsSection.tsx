import React from "react";
import { Icon } from "@iconify/react";
import { useIntl } from "react-intl";

const SkillsSection = () => {
  const intl = useIntl();

  return (
    <section className="skills-section">
      <h2
        className="section-heading skills"
        data-content={intl.formatMessage({ id: "mySkills" })}
        id="skills"
      >
        {intl.formatMessage({ id: "mySkills" })}
      </h2>
      <div className="skills-grid">
        <div
          className="skills-icon-box rest"
          data-aos="fade-zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="dashicons:rest-api" />
            <p>Rest API</p>
          </div>
        </div>
        <div
          className="skills-icon-box"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="350"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="bxl:mongodb" />
            <p>MongoDB</p>
          </div>
        </div>
        <div
          className="skills-icon-box"
          data-aos="fade-zoom-in"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="cib:typescript" />
            <p>Typescript</p>
          </div>
        </div>
        <div
          className="skills-icon-box nextjs"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="550"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="akar-icons:nextjs-fill" />
            <p>NextJS</p>
          </div>
        </div>
        <div
          className="skills-icon-box"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="bi:git" />
            <p>GIT</p>
          </div>
        </div>
        <div
          className="skills-icon-box sass"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="akar-icons:sass-fill" />
            <p>Sass</p>
          </div>
        </div>
        <div
          className="skills-icon-box firebase"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="bxl:firebase" />
            <p>Firebase</p>
          </div>
        </div>
        <div
          className="skills-icon-box"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="teenyicons:react-outline" />
            <p>React</p>
          </div>
        </div>
        <div
          className="skills-icon-box"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="550"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="simple-icons:strapi" />
            <p>Strapi</p>
          </div>
        </div>
        <div
          className="skills-icon-box figma"
          data-aos="fade-zoom-in"
          data-aos-duration="800"
          data-aos-delay="250"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="bxl:figma" />
            <p>Figma</p>
          </div>
        </div>
        <div
          className="skills-icon-box photoshop"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="450"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="file-icons:adobe-photoshop" />
            <p>Photoshop</p>
          </div>
        </div>
        <div
          className="skills-icon-box i18n"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="650"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="simple-icons:i18next" />
            <p>i18n</p>
          </div>
        </div>
        <div
          className="skills-icon-box material-ui"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="mdi:material-ui" />
            <p>MaterialUI</p>
          </div>
        </div>

        <div
          className="skills-icon-box bootstrap"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="akar-icons:bootstrap-fill" />
            <p>Bootstrap</p>
          </div>
        </div>
        <div
          className="skills-icon-box graphql"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div className="transition-duration-skills">
            <Icon className="skills-icon" icon="akar-icons:graphql-fill" />
            <p>GraphQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
