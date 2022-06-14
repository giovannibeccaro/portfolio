import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="section-heading projects" id="projects">
        My Projects
      </h2>
      <article className="single-project" data-aos="fade-up">
        <div className="screenshot">
          <Image
            src="/screen.png"
            alt="Pomodoro Timer"
            width={1920}
            height={1080}
          />
        </div>

        <div className="project-info">
          <h3>Pomodoro Timer</h3>
          <h4>A tool to help you stay focused</h4>
          <p className="project-description main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            odio deserunt aut assumenda nam sit architecto sed, eum dolor veniam
            eius ducimus blanditiis voluptatibus beatae sint doloribus,
            accusantium, non recusandae magnam. Harum eligendi, praesentium
            nulla aut dolorem incidunt maxime accusamus deleniti quis! Quaerat
            amet error inventore accusamus fugiat quae architecto.
          </p>
          <p className="project-description">
            <b>Technologies used: </b>HTML, CSS, JavaScript, GIT, Netlify
          </p>
          <p className="project-description">
            <b>Features: </b>ES6 syntax, JS classes, modules, timers, audio
            toggle, multiple languages, music on click, five different themes.
          </p>
          <div
            className="btns-section"
            data-aos="zoom-in-up"
            data-aos-duration="350"
          >
            <a href="#">
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" /> Live
                Website
              </button>
            </a>
            <a href="#">
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                Github Code
              </button>
            </a>
          </div>
        </div>
      </article>
      <article data-aos="fade-up" className="single-project reverse">
        <div className="screenshot">
          <Image
            src="/screen.png"
            alt="Pomodoro Timer"
            width={1920}
            height={1080}
          />
        </div>
        <div className="project-info">
          <h3>Book Manager</h3>
          <h4>
            A book manager website, to help you keep track of your reading
            habits
          </h4>
          <p className="project-description main">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            ullam, blanditiis voluptatum facilis dolorem, illo minus a
            necessitatibus eum nulla aliquam, assumenda dolore facere
            consequuntur doloremque voluptate earum animi? Ea quo pariatur,
            placeat reprehenderit aut impedit reiciendis, officia sequi autem
            recusandae fugiat eligendi doloremque error quod illum voluptas
            dolorem. Sapiente ratione modi, doloribus quidem, dolores similique
            eligendi accusamus ex magnam sit magni repudiandae. Debitis, odit
            harum laudantium dolorum consectetur labore velit ipsam totam
            assumenda cupiditate eius voluptatibus repellendus quidem laborum
            neque necessitatibus laboriosam officia magnam atque optio fugit
            maiores! Facilis.
          </p>
          <p className="project-description">
            <b>Technologies used: </b>HTML, SASS, Typescript, React, Firebase,
            Rest APIs, i18n, Context API, React Router, GIT, Netlify
          </p>
          <p className="project-description">
            <b>Features: </b>Google login, Firestore database to store user
            data, multiple languages, guest mode to use the website without
            logging in, three lists to save books
          </p>
          <div
            className="btns-section"
            data-aos="zoom-in-up"
            data-aos-duration="350"
          >
            <a href="#">
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" /> Live
                Website
              </button>
            </a>
            <a href="#">
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                Github Code
              </button>
            </a>
          </div>
        </div>
      </article>
      <article data-aos="fade-up" className="single-project">
        <div className="screenshot">
          <Image
            src="/screen.png"
            alt="Pomodoro Timer"
            width={1920}
            height={1080}
          />
        </div>
        <div className="project-info">
          <h3>Le Chicche di Girotondo</h3>
          <h4>Kids store website </h4>
          <p className="project-description main">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            eveniet nihil voluptas quisquam odio ipsam ullam, sint sed saepe
            unde maiores quo minima minus error magnam accusantium natus atque?
            Vero tempora dicta, ut alias, earum sapiente molestiae, incidunt
            numquam libero exercitationem in porro molestias a neque. Error nisi
            odit consequuntur animi veritatis quasi vel nihil voluptatibus
            magni, laboriosam mollitia. Dolore corrupti, quis laboriosam nostrum
            earum illo! Explicabo odio totam rerum eaque praesentium velit
            dolores inventore odit quos cupiditate. Architecto quo ullam nemo
            minus nobis cum voluptate tenetur vero molestias reprehenderit
            distinctio voluptates, atque quasi similique perferendis sit soluta
            illo doloremque ipsa totam! Voluptate dolorum voluptates eum nostrum
            aliquid culpa debitis ex accusantium rerum asperiores. Deserunt
            excepturi quidem perferendis recusandae, laborum eveniet labore
            cumque, nobis adipisci sapiente saepe quasi asperiores optio illo
            incidunt, aspernatur voluptates itaque.
          </p>
          <p className="project-description">
            <b>Technologies used: </b>HTML, SASS, Typescript, React, NextJS,
            Strapi headless CMS, GraphQL, GIT, AOS, Google Analytics, Figma,
            Netlify, Heroku (for the admin website)
          </p>
          <p className="project-description">
            <b>Features: </b>CMS for admin user, products catalogue, contact
            form, on scroll animations, search and filter bar, responsive
            design, Cookie banner
          </p>
          <div
            className="btns-section"
            data-aos="zoom-in-up"
            data-aos-duration="350"
          >
            <a href="#">
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" /> Live
                Website
              </button>
            </a>
            <a href="#">
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                Github Code
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectsSection;
