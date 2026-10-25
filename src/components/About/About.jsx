import React from 'react';
import { motion } from 'framer-motion';
import css from './About.module.scss';
import { education } from '../../utils/data.js';

const skills = [
  { name: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
  { name: 'JavaScript', color: '#F7DF1E', bg: 'rgba(247,223,30,0.15)' },
  { name: 'TypeScript', color: '#3178C6', bg: 'rgba(49,120,198,0.12)' },
  { name: 'Node.js', color: '#84cc16', bg: 'rgba(132,204,22,0.12)' },
  { name: 'Express.js', color: '#999', bg: 'rgba(153,153,153,0.1)' },
  { name: 'MongoDB', color: '#47A248', bg: 'rgba(71,162,72,0.12)' },
  { name: 'MySQL', color: '#4479A1', bg: 'rgba(68,121,161,0.12)' },
  { name: 'HTML5', color: '#E34F26', bg: 'rgba(227,79,38,0.12)' },
  { name: 'CSS3 / SCSS', color: '#CC6699', bg: 'rgba(204,102,153,0.12)' },
  { name: 'Git & GitHub', color: '#F97316', bg: 'rgba(249,115,22,0.12)' },
  { name: 'AWS', color: '#FF9900', bg: 'rgba(255,153,0,0.12)' },
  { name: 'Next.js', color: '#111', bg: 'rgba(17,17,17,0.08)' },
  { name: 'Bootstrap', color: '#7952B3', bg: 'rgba(121,82,179,0.12)' },
  { name: 'Material UI', color: '#0081CB', bg: 'rgba(0,129,203,0.12)' },
  { name: 'C++', color: '#00599C', bg: 'rgba(0,89,156,0.12)' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } },
};

const About = () => (
  <section className={css.wrapper} id="about">
    <a className="anchor" id="about"></a>
    <div className={`innerWidth paddings ${css.container}`}>
      {/* Header row */}
      <div className={css.header}>
        <div className="sectionLabel">About Me</div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className={css.title}
        >
          The Developer<br />
          <span className={css.titleOutline}>Behind the Code</span>
        </motion.h2>
      </div>

      {/* Two columns */}
      <div className={css.grid}>
        {/* Left — bio + education */}
        <div className={css.leftCol}>
          <motion.p
            className={`secondaryText ${css.bio}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I'm Muhammad Ayaz Idrisi — a fullstack developer from Mumbai.
            I graduated in Computer Science (B.E) from M.H. Saboo Siddik College
            of Engineering with a CGPA of 8.1. I love crafting seamless digital
            products, from polished frontends to robust back-end APIs.
          </motion.p>

          <div className={css.eduLabel}>
            <div className="sectionLabel">Education</div>
          </div>

          <div className={css.educationList}>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className={css.eduCard}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <div
                  className={css.eduIcon}
                  style={{ background: edu.bg }}
                >
                  <edu.icon size={18} color="#fff" />
                </div>
                <div className={css.eduInfo}>
                  <span className={css.eduName}>{edu.name}</span>
                  <span className={css.eduCourse}>{edu.course}</span>
                  <div className={css.eduMeta}>
                    <span>{edu.duration}</span>
                    <span className={css.grade}>{edu.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — skills */}
        <div className={css.rightCol}>
          <div className="sectionLabel">Skills &amp; Technologies</div>
          <motion.div
            className={css.skillGrid}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((sk) => (
              <motion.span
                key={sk.name}
                className={css.skillPill}
                variants={item}
                style={{
                  '--pill-color': sk.color,
                  '--pill-bg': sk.bg,
                }}
                whileHover={{ scale: 1.06 }}
              >
                {sk.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
