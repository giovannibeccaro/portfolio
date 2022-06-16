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
          <div className="btns-section-desktop">
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

        <div className="project-info">
          <h3>Pomodoro Timer</h3>
          <h4>A tool to help you stay focused</h4>
          <p className="project-description main">
            This website is one of my first more “complex” works, which didn’t
            take me that long to realize, but that thought me a lot. Object
            oriented programming, ES6 syntax and modules are some of the most
            important things I discovered during this project, but I also learnt
            how to modify the color theme of a website on user click or
            preference, how to add interactive elements such as music on click.
            Other than that, I also improved my knowledge on version control
            tools, GIT in this case, and I also published the website on
            Netlify. During this project I also had the opportunity to practice
            with multi language websites, in fact the website supports both
            English and Italian, feature that I implemented with a simple JSON
            file which contained the correct version for each language. I think
            this project made me aware of the multitude of problems a developer
            must face and overcome in order to achieve its end goal, and it
            ultimately made me realize that researching and developing solutions
            is one of my favourite parts of this job.
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
      <article data-aos="fade-up" className="single-project ">
        <div className="screenshot bookmanager">
          <Image
            src="/screen.png"
            alt="BookManager"
            width={1920}
            height={1080}
          />
          <div className="btns-section-desktop">
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
        <div className="project-info reverse">
          <h3>Book Manager</h3>
          <h4>
            A book manager website, to help you keep track of your reading
            habits
          </h4>
          <p className="project-description main">
            For this project, I designed and built a CRUD app to manage the
            user’s book preferences. I used React and Typescript as the main
            front-end technologies behind the site, while for the backend part I
            choose Firebase, a great tool that I used to implement both Google
            Login and the database portion of the site. The website works also
            without logging in, although the preferences are only saved in
            localStorage, so it is not as reliable as the Google Login version.
            The user can perfectly manage each one of the three lists I
            implemented, adding and removing whatever book they want. I used
            Google Books API to get the fetched data for my site, and this part
            really helped me strengthen my knowledge on Rest APIs. For the
            multi-lingual feature of this site, I decided to opt for a more
            professional tool, i18n. Overall, I think this project has thought
            me a lot, especially in terms of React, Typescript, Firebase and
            Restful APIs, which I now can use without the difficulties I faced
            before this project.
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
        <div className="screenshot lcdg">
          <Image
            src="/screen.png"
            alt="Le Chicche di Girotondo"
            width={1920}
            height={1080}
          />
          <div className="btns-section-desktop">
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
        <div className="project-info lcdg">
          <h3>Le Chicche di Girotondo</h3>
          <h4>Kids store website </h4>
          <p className="project-description main">
            In this third project, I developed a fully functional kids store
            spotlight website for a client. Other than the usual technologies, I
            used the NextJS and Strapi. I decided to use NextJS because I
            thought a website like this would have been a great use case for
            Static Site Generation, instead of the Client Side Rendering
            approach I used for the other two sites, and this for two reasons:
            the first one is that I wanted a fast website, and NextJS was able
            to accomplish this, thanks to it’s built in features, like serving
            pages at build time (good for SEO too) and Images Optimization. The
            second reason is that a website like this needed to be as SEO
            friendly as possible, and so Client Side Rendering was not an
            option. Another tool I opted for is Strapi, which I useds to create
            a CMS interface for the site admin to add new content. The admin, in
            fact, can add whatever product he wants, as it is an extremely user
            friendly and efficient platform. I also implemented Google
            Analytics, and for this reason I also needed to add a cookie consent
            banner to make the product GDPR compliant. The website is ready, but
            will officially launch when the new collection will be released to
            public, in August.
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
