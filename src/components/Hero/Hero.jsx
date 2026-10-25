import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import css from "./Hero.module.scss";
import myPhoto from "../../assets/myPhoto.png";
import { FaArrowDown } from "react-icons/fa";

const marqueeItems = [
  "Full-Stack Development",
  "Web Applications",
  "Backend & API Development",
  "AI-Powered Solutions",
  "SaaS Product Development",
  "Business Automation",
  "Database Architecture",
  "Third-Party Integrations",
  "MVP Development",
  "Custom Software Solutions",
  "From Idea to Deployment",
  "Let's Build Something Great",
];

const Marquee = () => (
  <div className={css.marqueeWrapper}>
    <div className={css.marqueeTrack}>
      {[...marqueeItems, ...marqueeItems].map((item, index) => (
        <span key={index} className={css.marqueeItem}>
          {item}
          <span className={css.dot}>✦</span>
        </span>
      ))}
    </div>
  </div>
);

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Giant background name moves independently on scroll.
  const rawNameY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const nameY = useSpring(rawNameY, {
    stiffness: 70,
    damping: 24,
    mass: 0.5,
  });

  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);

  // Portrait stays horizontally centered and moves gently upward.
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 1, 0.3],
  );

  return (
    <section className={css.hero} id="home" ref={heroRef}>
      {/* Background name: behind the portrait */}
      <div className={css.giantName} aria-hidden="true">
        <motion.div
          className={css.giantNameInner}
          style={{ y: nameY, scale: nameScale }}
        >
          <span>AYAZ IDRISI</span>
        </motion.div>
      </div>

      {/* Taller, centered portrait */}
      <motion.div
        className={css.photoWrapper}
        style={{
          x: "-50%",
          y: photoY,
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src={myPhoto}
          alt="Ayaz Idrisi - Software Engineer"
          className={css.photo}
          fetchPriority="high"
        />
      </motion.div>

      {/* Experience card */}
      <motion.div
        className={`${css.statCard} ${css.experienceCard}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
      >
        <div className={css.cardSymbol}>A.</div>
        <div className={css.cardDivider} />
        <div className={css.cardText}>
          <strong>3+</strong>
          <span>
            YEARS OF
            <br />
            EXPERIENCE
          </span>
        </div>
      </motion.div>

      {/* Projects card */}
      <motion.div
        className={`${css.statCard} ${css.projectsCard}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
      >
        <div className={css.cardSymbol}>✦</div>
        <div className={css.cardDivider} />
        <div className={css.cardText}>
          <strong>20+</strong>
          <span>
            PROJECTS
            <br />
            BUILT
          </span>
        </div>
      </motion.div>

      {/* Centered headline over the portrait */}
      <motion.div
        className={css.headlineBlock}
        style={{
          x: "-50%",
          y: headlineY,
          opacity: headlineOpacity,
        }}
      >
        {/* <motion.p
          className={css.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          SOFTWARE ENGINEER <span>·</span> MUMBAI, INDIA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          Building digital
          <br />
          experiences,
          <br />
          <span className={css.outlineText}>engineered better.</span>
        </motion.h1> */}

        <motion.div
          className={css.ctas}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
        >
          <a
            href="mailto:idrisiayaz@gmail.com?subject=Software%20Development%20Inquiry"
            className={css.primaryButton}
          >
            Let's Connect <span>↗</span>
          </a>
          <a href="#projects" className={css.secondaryButton}>
            Explore My Work <span>↗</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Left-side introduction */}
      <motion.div
        className={css.sideNote}
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className={css.noteLabel}>
          SOFTWARE ENGINEER <span>·</span> MUMBAI, INDIA
        </span>
        <span className={css.noteLine} />
        <p>
          Turning complex ideas
          <br />
          into useful digital products.
        </p>
      </motion.div>

      {/* Right-side skills */}
      <motion.div
        className={css.skillsCard}
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span>
          <i>✦</i> Fullstack Developer
        </span>
        <span>
          <i>✦</i> Backend & APIs
        </span>
        <span>
          <i>✦</i> Python & FastAPI
        </span>
        <span>
          <i>✦</i> AI Integrations
        </span>
      </motion.div>

      {/* Scroll cue */}
      <a href="#about" className={css.scrollIndicator}>
        <span>SCROLL</span>
        <FaArrowDown />
      </a>

      {/* Scrolling technology strip */}
      <Marquee />
    </section>
  );
};

export default Hero;
