import React from "react";

const AboutMeSection = () => {
  return (
    <section className="about-section">
      <h2 className="section-heading about-me">About Me</h2>
      <div className="about-me-paragraphs">
        <article>
          <h4>Who am I?</h4>
          <p>
            Hello! My name is <b>Giovanni Beccaro</b> and I enjoy building
            things on the internet. I started surfing the world wide web at 12,
            and since then my interest in this world
            <b> never ceased to increase</b>, culminating with me learning the
            basics of web development some years later. Flash forward to today,
            I built many websites and tools both for personal use and for
            clients. <b>I like experimenting with different technologies</b> and
            I always want to learn new things that could make my projects
            better, and I think <b>this desire of learning new stuff</b> is one
            of my <b>biggest strengths</b>.
          </p>
        </article>
        <article>
          <h4>How do I work?</h4>
          <p>
            When I code, what I usually do is setup a <b>neat</b> and{" "}
            <b>organized</b> work environment, so that I can keep control over
            everything I do. I always try to mantain my code <b>clean</b> and{" "}
            <b>readable</b>, using common conventions and comments. I can build{" "}
            <b>
              static pages, server and client side rendered websites and
              staticly generated sites
            </b>{" "}
            thanks to technologies I have learnt, such as <b>NextJS</b>. I also
            have some knowledge of backend services, namely <b>Firebase</b> and{" "}
            <b>Strapi</b>, and the websites I create are always refined both
            functionally and aestethically. I like to design my website with{" "}
            <b>Figma</b> and then translate it into code with VSCode. A{" "}
            <b>responsive design</b> is always implemented in my works. I also
            have solid <b>SEO</b> knowledges, particularly concerning the front
            end world (semantic HTML, accessibility, SSR and so on).
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutMeSection;
