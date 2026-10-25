import React from 'react';
import { motion } from 'framer-motion';
import css from './Work.module.scss';
import { workExp } from '../../utils/data';
import { FiBriefcase } from 'react-icons/fi';

const slideVariant = (i) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

const Work = () => (
  <section className={css.wrapper} id="work">
    <a className="anchor" id="work"></a>
    <div className={`innerWidth paddings ${css.container}`}>
      <div className="sectionLabel">Experience</div>
      <motion.h2
        className={css.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        Work Experience
      </motion.h2>

      <div className={css.timeline}>
        {/* Vertical line */}
        <motion.div
          className={css.line}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        {workExp.map((exp, i) => (
          <motion.div
            key={i}
            className={`${css.expRow} ${i % 2 !== 0 ? css.right : ''}`}
            variants={slideVariant(i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Dot on timeline */}
            <div
              className={css.dot}
              style={{ background: i === 0 ? '#2563eb' : i === 1 ? '#f97316' : '#84cc16' }}
            />

            <div className={css.card}>
              <div className={css.cardHeader}>
                <div className={css.cardIcon} style={{ background: i === 0 ? 'rgba(37,99,235,0.1)' : i === 1 ? 'rgba(249,115,22,0.1)' : 'rgba(132,204,22,0.1)' }}>
                  <FiBriefcase size={18} color={i === 0 ? '#2563eb' : i === 1 ? '#f97316' : '#84cc16'} />
                </div>
                <div>
                  <span className={css.tenure}>{exp.tenure}</span>
                  <h3 className={css.role}>{exp.role}</h3>
                  <span className={css.place}>{exp.place}</span>
                </div>
              </div>
              <p className={`secondaryText ${css.detail}`}>{exp.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
