import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:idrisiayaz@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Mumbai, Maharashtra, India</p>
            <p className={css.email}>idrisiayaz@gmail.com</p>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="https://www.linkedin.com/in/idrisiayaz">
                {" "}
                <FaLinkedinIn size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/idrisiayaz">
                {" "}
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/idrisiayaz/">
                {" "}
                <FaCode size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
