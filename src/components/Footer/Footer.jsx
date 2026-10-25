import React from "react";
import { motion } from "framer-motion";
import css from "./Footer.module.scss";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { FiArrowUpRight, FiArrowUp, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => (
  <footer className={css.wrapper} id="contact">
    <div className={`innerWidth paddings ${css.container}`}>
      {/* Contact CTA */}
      <motion.section
        className={css.cta}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={css.eyebrow}>
          <span className={css.statusDot} />
          OPEN TO INTERESTING OPPORTUNITIES
        </div>

        <h2 className={css.ctaTitle}>
          Have an idea?
          <br />
          <span className={css.ctaOutline}>Let's make it real.</span>
        </h2>

        <div className={css.ctaBottom}>
          <p className={css.ctaText}>Let's make something amazing together.</p>

          <a
            href="mailto:idrisiayaz@gmail.com"
            className={css.ctaBtn}
            data-cursor
          >
            <span>Let's talk</span>
            <FiArrowUpRight size={20} />
          </a>
        </div>
      </motion.section>

      <div className={css.divider} />

      {/* Contact information and social links */}
      <div className={css.mainFooter}>
        <div className={css.brand}>
          <a href="#home" className={css.brandName}>
            AI<span>.</span>
          </a>
          <p>
            Software Developer
            <br />
            Building for the real world.
          </p>
        </div>

        <div className={css.contactInfo}>
          <span className={css.footerLabel}>GET IN TOUCH</span>

          <a href="mailto:idrisiayaz@gmail.com" className={css.contactLink}>
            <FiMail size={16} />
            idrisiayaz@gmail.com
            <FiArrowUpRight className={css.linkArrow} size={15} />
          </a>

          <div className={css.location}>
            <FiMapPin size={16} />
            Mumbai, India
          </div>
        </div>

        <div className={css.socialSection}>
          <span className={css.footerLabel}>FIND ME ONLINE</span>

          <div className={css.socials}>
            <a
              href="https://www.linkedin.com/in/idrisiayaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              data-cursor
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://github.com/idrisiayaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              data-cursor
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://leetcode.com/idrisiayaz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              title="LeetCode"
              data-cursor
            >
              <HiOutlineCode size={21} />
            </a>
          </div>
        </div>
      </div>

      <div className={css.bottom}>
        <p>© {new Date().getFullYear()} Muhammad Ayaz Idrisi</p>

        <span className={css.madeWith}>Designed & built with care.</span>

        <a href="#home" className={css.backToTop} data-cursor>
          BACK TO TOP <FiArrowUp size={14} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
