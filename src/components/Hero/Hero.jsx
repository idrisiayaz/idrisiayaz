import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import css from './Hero.module.scss';
import myPhoto from '../../assets/myPhoto.png';
import { FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';

const marqueeItems = [
  'Software Engineer',
  'Fullstack Developer',
  'React Specialist',
  'Node.js',
  'MongoDB',
  'Cloud Technologies',
  'Open to Work',
  'Mumbai, India',
];

const Marquee = () => (
  <div className={css.marqueeWrapper}>
    <div className={css.marqueeTrack}>
      {[...marqueeItems, ...marqueeItems].map((item, i) => (
        <span key={i} className={css.marqueeItem}>
          {item}
          <span className={css.dot}>◆</span>
        </span>
      ))}
    </div>
  </div>
);

const Hero = () => {
  const photoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!photoRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      photoRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={css.hero} id="home">
      {/* Giant name BEHIND photo */}
      <div className={css.giantName} aria-hidden="true">
        <span>AYAZ</span>
        <span>IDRISI</span>
      </div>

      <div className={`innerWidth paddings ${css.container}`}>
        {/* Left content */}
        <div className={css.leftContent}>
          <motion.div
            className="sectionLabel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Based in Mumbai, India
          </motion.div>

          <motion.h1
            className={css.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Building <br />
            <span className={css.accentLine}>Digital</span><br />
            Experiences.
          </motion.h1>

          <motion.p
            className={`secondaryText ${css.bio}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Fullstack developer with a passion for crafting clean,
            performant web applications. From UI to APIs — I build it all.
          </motion.p>

          <motion.div
            className={css.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#projects" className="btn-primary" data-cursor>
              View Work
            </a>
            <a href="mailto:idrisiayaz@gmail.com" className="btn-outline" data-cursor>
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            className={css.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href="https://github.com/idrisiayaz" target="_blank" rel="noreferrer" data-cursor>
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/idrisiayaz" target="_blank" rel="noreferrer" data-cursor>
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://leetcode.com/idrisiayaz/" target="_blank" rel="noreferrer" data-cursor>
              <HiOutlineCode size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          className={css.photoWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Stat badges */}
          <motion.div
            className={`${css.badge} ${css.badgeTopLeft}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <span className={css.badgeNum}>3+</span>
            <span className={css.badgeLabel}>Years<br />Experience</span>
          </motion.div>

          <motion.div
            className={`${css.badge} ${css.badgeTopRight}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <span className={css.badgeNum}>10+</span>
            <span className={css.badgeLabel}>Projects<br />Built</span>
          </motion.div>

          <div className={css.photoFrame} ref={photoRef}>
            <img src={myPhoto} alt="Muhammad Ayaz Idrisi" className={css.photo} />
          </div>

          <motion.div
            className={`${css.badge} ${css.badgeBottom}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className={css.availDot}></span>
            <span>Available for opportunities</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <Marquee />

      {/* Scroll indicator */}
      <motion.div
        className={css.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <FaArrowDown size={14} />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
