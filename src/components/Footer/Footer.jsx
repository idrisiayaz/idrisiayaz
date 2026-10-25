import React from 'react';
import { motion } from 'framer-motion';
import css from './Footer.module.scss';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => (
  <footer className={css.wrapper}>
    <div className={`innerWidth paddings ${css.container}`}>
      {/* Big CTA */}
      <motion.div
        className={css.cta}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span className="sectionLabel">Get In Touch</span>
        <h2 className={css.ctaTitle}>
          Let's build something<br />
          <span className={css.ctaOutline}>amazing&nbsp;together.</span>
        </h2>
        <a href="mailto:idrisiayaz@gmail.com" className={`btn-primary ${css.ctaBtn}`} data-cursor>
          Say Hello →
        </a>
      </motion.div>

      <div className={css.divider} />

      {/* Bottom row */}
      <div className={css.bottom}>
        <div className={css.info}>
          <div className={css.infoItem}>
            <FiMail size={15} />
            <a href="mailto:idrisiayaz@gmail.com">idrisiayaz@gmail.com</a>
          </div>
          <div className={css.infoItem}>
            <FiMapPin size={15} />
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>

        <div className={css.socials}>
          <a href="https://www.linkedin.com/in/idrisiayaz" target="_blank" rel="noreferrer" data-cursor>
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://github.com/idrisiayaz" target="_blank" rel="noreferrer" data-cursor>
            <FaGithub size={18} />
          </a>
          <a href="https://leetcode.com/idrisiayaz/" target="_blank" rel="noreferrer" data-cursor>
            <HiOutlineCode size={20} />
          </a>
        </div>

        <p className={css.copy}>© {new Date().getFullYear()} Muhammad Ayaz Idrisi</p>
      </div>
    </div>
  </footer>
);

export default Footer;
