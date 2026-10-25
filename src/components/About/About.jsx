import React from "react";
import { motion } from "framer-motion";
import css from "./About.module.scss";

import js from "../../assets/js.png";
import nodeJS from "../../assets/nodeJS.png";
import cpp from "../../assets/cpp.png";
import TypeScriptLogo from "../../assets/typescript.png";
import PythonLogo from "../../assets/python.png";
import javaLogo from "../../assets/java-logo.png";
import reactLogo from "../../assets/react.png";
import html from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import git from "../../assets/git.png";
import mysql from "../../assets/mysql.png";
import aws from "../../assets/Aws.png";
import github from "../../assets/github.png";
import bootstrap from "../../assets/bootstrap.png";
import scss from "../../assets/scss.png";
import materialUI from "../../assets/MaterialUI.png";

const skills = [
  { name: "React", image: reactLogo },
  { name: "JavaScript", image: js },
  { name: "TypeScript", image: TypeScriptLogo },
  { name: "Java", image: javaLogo },
  { name: "HTML5", image: html },
  { name: "CSS3", image: cssLogo },
  { name: "SCSS", image: scss },
  { name: "Material UI", image: materialUI },
  { name: "Bootstrap", image: bootstrap },
  { name: "Node.js", image: nodeJS },
  { name: "Express.js", image: express },
  { name: "Python", image: PythonLogo },
  { name: "MongoDB", image: mongodb },
  { name: "MySQL", image: mysql },
  { name: "AWS", image: aws },
  { name: "Git", image: git },
  { name: "GitHub", image: github },
  { name: "C++", image: cpp },
  { name: "And more...", image: null },
];

const services = [
  {
    number: "01",
    title: "Web Application Development",
    description:
      "Responsive, user-friendly applications built around your product needs.",
  },
  {
    number: "02",
    title: "Backend & API Development",
    description:
      "APIs, database integrations, and backend systems designed to work reliably.",
  },
  {
    number: "03",
    title: "Custom Software & Automation",
    description:
      "Practical solutions that streamline workflows and solve everyday problems.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const About = () => {
  return (
    <section className={css.wrapper} id="about">
      <div className={css.container}>
        <motion.header
          className={css.header}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <span className={css.eyebrow}>ABOUT ME</span>

          <h2 className={css.title}>
            Engineering solutions.
            <br />
            <span>Solving real problems.</span>
          </h2>

          <p className={css.subtitle}>
            I enjoy building useful digital products, from the first idea
            through to the details that make them work well.
          </p>
        </motion.header>

        <div className={css.grid}>
          {/* Left: Introduction and services */}
          <motion.div
            className={css.leftCol}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <div className={css.introTop}>
              <span className={css.sectionLabel}>A LITTLE ABOUT ME</span>
              <h3 className={css.introTitle}>
                Building software with purpose.
              </h3>
            </div>

            <div className={css.bioContent}>
              <p className={css.bio}>
                I'm Ayaz, a software engineer from Mumbai who enjoys turning
                ideas into useful, well-built software. I work across frontend
                and backend development, creating applications that are
                practical, reliable, and easy to use.
              </p>

              <p className={css.bio}>
                From building interfaces and APIs to working with databases and
                connecting external services, I enjoy understanding how the
                pieces fit together and finding straightforward solutions to
                real problems.
              </p>

              <p className={css.bio}>
                I'm always interested in working on meaningful products, helping
                businesses improve their systems, and collaborating with people
                who have an idea worth building.
              </p>
            </div>

            <div className={css.services}>
              <span className={css.sectionLabel}>HOW I CAN HELP</span>

              <div className={css.serviceList}>
                {services.map((service) => (
                  <div className={css.serviceItem} key={service.number}>
                    <span className={css.serviceNumber}>{service.number}</span>

                    <div className={css.serviceContent}>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            className={css.rightCol}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className={css.skillsHeader}>
              <div>
                <span className={css.sectionLabel}>TOOLS & TECHNOLOGIES</span>
                <h3 className={css.skillsTitle}>My tech stack</h3>
              </div>

              <span className={css.skillsCount}>
                {String(skills.length).padStart(2, "0")} technologies
              </span>
            </div>

            <motion.div
              className={css.skillsGrid}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {skills.map((skill) => (
                <motion.div
                  className={css.skillItem}
                  variants={skillItem}
                  key={skill.name}
                  title={skill.name}
                >
                  <div className={css.skillIcon}>
                    {skill.image ? (
                      <img src={skill.image} alt="" loading="lazy" />
                    ) : (
                      <span className={css.skillFallback}>
                        {skill.name
                          .split(/[\s.]+/)
                          .filter(Boolean)
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 3)
                          .toUpperCase()}
                      </span>
                    )}
                  </div>

                  <span className={css.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <p className={css.skillsNote}>
              The right tools for the problem — with an emphasis on clean,
              maintainable, and practical solutions.
            </p>
          </motion.div>
        </div>

        {/* Horizontal contact CTA */}
        <motion.div
          className={css.connectSection}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div className={css.connectText}>
            <span className={css.sectionLabel}>HAVE A PROJECT IN MIND?</span>
            <h3>Let's build something great.</h3>
            <p>Have an idea, a project, or a problem to solve? Let's talk.</p>
          </div>

          <a className={css.contactButton} href="mailto:idrisiayaz@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
