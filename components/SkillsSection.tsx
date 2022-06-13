import React from "react";
import { Icon } from "@iconify/react";
const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="section-heading skills">My Skills</h2>
      <div className="skills-grid">
        <div className="skills-icon-box rest">
          <Icon className="skills-icon" icon="dashicons:rest-api" />
          <p>Rest API</p>
        </div>
        <div className="skills-icon-box">
          <Icon className="skills-icon" icon="bxl:mongodb" />
          <p>MongoDB</p>
        </div>
        <div className="skills-icon-box">
          <Icon className="skills-icon" icon="cib:typescript" />
          <p>Typescript</p>
        </div>
        <div className="skills-icon-box nextjs">
          <Icon className="skills-icon" icon="akar-icons:nextjs-fill" />
          <p>NextJS</p>
        </div>
        <div className="skills-icon-box">
          <Icon className="skills-icon" icon="bi:git" />
          <p>GIT</p>
        </div>
        <div className="skills-icon-box">
          <Icon className="skills-icon" icon="akar-icons:sass-fill" />
          <p>Sass</p>
        </div>
        <div className="skills-icon-box firebase">
          <Icon className="skills-icon" icon="bxl:firebase" />
          <p>Firebase</p>
        </div>
        <div className="skills-icon-box">
          <Icon className="skills-icon" icon="teenyicons:react-outline" />
          <p>React</p>
        </div>
        <div className="skills-icon-box">
          <Icon className="skills-icon" icon="simple-icons:strapi" />
          <p>Strapi</p>
        </div>
        <div className="skills-icon-box figma">
          <Icon className="skills-icon" icon="bxl:figma" />
          <p>Figma</p>
        </div>
        <div className="skills-icon-box photoshop">
          <Icon className="skills-icon" icon="file-icons:adobe-photoshop" />
          <p>Photoshop</p>
        </div>
        <div className="skills-icon-box">
          <Icon className="skills-icon" icon="simple-icons:i18next" />
          <p>i18n</p>
        </div>
        <div className="skills-icon-box material-ui">
          <Icon className="skills-icon" icon="mdi:material-ui" />
          <p>MaterialUI</p>
        </div>

        <div className="skills-icon-box bootstrap">
          <Icon className="skills-icon" icon="akar-icons:bootstrap-fill" />
          <p>Bootstrap</p>
        </div>
        <div className="skills-icon-box graphql">
          <Icon className="skills-icon" icon="akar-icons:graphql-fill" />
          <p>GraphQL</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
