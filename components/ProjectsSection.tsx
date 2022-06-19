import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";

const ProjectsSection = () => {
  const intl = useIntl();

  return (
    <section className="projects-section">
      <h2
        className="section-heading projects"
        data-content={intl.formatMessage({ id: "myProjects" })}
        id="projects"
      >
        {intl.formatMessage({ id: "myProjects" })}
      </h2>
      <article className="single-project" data-aos="fade-up">
        <div className="screenshot">
          <Image
            src="/pomodoro-timer.webp"
            alt="Pomodoro Timer"
            width={1920}
            height={1080}
          />
          <div className="btns-section-desktop">
            <a
              href="https://pomodorotimer0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" />{" "}
                {intl.formatMessage({ id: "liveWebsite" })}
              </button>
            </a>
            <a
              href="https://github.com/giovannibeccaro/book-manager"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                {intl.formatMessage({ id: "githubCode" })}
              </button>
            </a>
          </div>
        </div>

        <div className="project-info">
          <h3>Pomodoro Timer</h3>
          <h4>{intl.formatMessage({ id: "h4Pom" })}</h4>
          <p className="project-description main">
            {intl.formatMessage({ id: "mainPom" })}
          </p>
          <p className="project-description">
            <FormattedMessage
              id="techPom"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
          <p className="project-description">
            <FormattedMessage
              id="featurePom"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
          <div
            className="btns-section"
            data-aos="zoom-in-up"
            data-aos-duration="350"
          >
            <a
              href="https://pomodorotimer0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" />{" "}
                {intl.formatMessage({ id: "liveWebsite" })}
              </button>
            </a>
            <a
              href="https://github.com/giovannibeccaro/book-manager"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                {intl.formatMessage({ id: "githubCode" })}
              </button>
            </a>
          </div>
        </div>
      </article>
      <article data-aos="fade-up" className="single-project ">
        <div className="screenshot bookmanager">
          <Image
            src="/bookmanager.webp"
            alt="BookManager"
            width={1920}
            height={1080}
          />
          <div className="btns-section-desktop">
            <a
              href="https://bookmanager-giovannibeccaro.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" />{" "}
                {intl.formatMessage({ id: "liveWebsite" })}
              </button>
            </a>
            <a
              href="https://github.com/giovannibeccaro/book-manager"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                {intl.formatMessage({ id: "githubCode" })}
              </button>
            </a>
          </div>
        </div>
        <div className="project-info reverse">
          <h3>Book Manager</h3>
          <h4>{intl.formatMessage({ id: "h4Book" })}</h4>
          <p className="project-description main">
            {intl.formatMessage({ id: "mainBook" })}
          </p>
          <p className="project-description">
            <FormattedMessage
              id="techBook"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
          <p className="project-description">
            <FormattedMessage
              id="featureBook"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
          <div
            className="btns-section"
            data-aos="zoom-in-up"
            data-aos-duration="350"
          >
            <a
              href="https://bookmanager-giovannibeccaro.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" />{" "}
                {intl.formatMessage({ id: "liveWebsite" })}
              </button>
            </a>
            <a
              href="https://github.com/giovannibeccaro/book-manager"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                {intl.formatMessage({ id: "githubCode" })}
              </button>
            </a>
          </div>
        </div>
      </article>
      <article data-aos="fade-up" className="single-project">
        <div className="screenshot lcdg">
          <Image
            src="/lcdg.webp"
            alt="Le Chicche di Girotondo"
            width={1920}
            height={1080}
          />
          <div className="btns-section-desktop">
            <a
              href="https://lcdg.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" />{" "}
                {intl.formatMessage({ id: "liveWebsite" })}
              </button>
            </a>
            <a
              href="https://github.com/giovannibeccaro/LCDG"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                {intl.formatMessage({ id: "githubCode" })}
              </button>
            </a>
          </div>
        </div>
        <div className="project-info lcdg">
          <h3>Le Chicche di Girotondo</h3>
          <h4>{intl.formatMessage({ id: "h4Lcdg" })} </h4>
          <p className="project-description main">
            {intl.formatMessage({ id: "mainLcdg" })}
          </p>
          <p className="project-description">
            <FormattedMessage
              id="techLcdg"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
          <p className="project-description">
            <FormattedMessage
              id="featureLcdg"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </p>
          <div
            className="btns-section"
            data-aos="zoom-in-up"
            data-aos-duration="350"
          >
            <a
              href="https://lcdg.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-website-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:monitor-arrow" />{" "}
                {intl.formatMessage({ id: "liveWebsite" })}
              </button>
            </a>
            <a
              href="https://github.com/giovannibeccaro/LCDG"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github-btn">
                {" "}
                <Icon className="btn-icon" icon="charm:github" />
                {intl.formatMessage({ id: "githubCode" })}
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectsSection;
