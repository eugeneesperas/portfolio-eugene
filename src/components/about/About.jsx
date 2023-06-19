import React from "react";
import "./about.css";
import ME from "../../assets/me3.png";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="" />
              <h5>Project Experience</h5>
              <small>KodeGo Bootcamp Graduate</small>
            </article>

            <article className="about__card">
              <FaAward className="" />
              <h5>Clients</h5>
              <small>KodeGo Bootcamp Graduate</small>
            </article>

            <article className="about__card">
              <FaAward className="" />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            distinctio iure odit aperiam voluptatibus deserunt ipsam vel fugiat
            dolor consectetur.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
