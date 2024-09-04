import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import myPhoto from "../../assets/myPhoto.png";
import certificate from "../../assets/binaryY.png";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey, I'm Muhammad <br />
            Ayaz Idrisi.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Code like the wind, and let<br/> innovation be your compass.{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={myPhoto}
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:idrisiayaz@gmail.com">
          idrisiayaz@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">1+</div>
            <div className="secondaryText">
              <div>Year</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.tagline}
          >
            <img src={certificate} alt="" />
            <span>ASPIRING SOFTWARE ENGINEER</span>
            <span>FRONTEND DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
