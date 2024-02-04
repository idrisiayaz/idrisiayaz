import React from "react";
import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import DashboardImg from "../../assets/Dashboardv2.png";
import OpenDC16Img from "../../assets/OpenDC16.png";
import MyNotebookImg from "../../assets/MyNotebook.png";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <a href="https://github.com/idrisiayaz">
            <span className="secondaryText">Explore More Works</span>
          </a>
        </div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.div
            className={css.card}
            variants={fadeIn("up", "tween", 0.9, 0.6)}
          >
            <a href="https://github.com/idrisiayaz/NFT-Marketplace-openDC16">
              <img src={OpenDC16Img} className={css.cardImage} />
            </a>
            <div className="card-content">
              <h2 className={css.cardTitle}>
                NFT Marketplace <FaArrowRight size={15} />
              </h2>
              <p className={css.cardDescription}>
                OpenDC16 is a platform operating on the ICP blockchain network.
                It offers secure and efficient NFT transactions, providing a
                seamless experience for buyers and sellers.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={css.card}
            variants={fadeIn("up", "tween", 0.9, 0.6)}
          >
            <a href="https://idrisiayaz.github.io/Payout-v2-Dashboard-Assignment/">
              <img src={DashboardImg} className={css.cardImage} />
            </a>
            <div className="card-content">
              <h2 className={css.cardTitle}>
                Payout v2 Dashboard <FaArrowRight size={15} />
              </h2>
              <p className={css.cardDescription}>
                Payout v2 Dashboard, created with React and Material UI,
                presents comprehensive data insights. It offers intuitive
                visualization and analysis for informed decision-making and
                enhanced user experience.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={css.card}
            variants={fadeIn("up", "tween", 0.9, 0.6)}
          >
            <a href="https://mynotebookapp-12vf.onrender.com/">
              <img src={MyNotebookImg} className={css.cardImage} />
            </a>
            <div className="card-content">
              <h2 className={css.cardTitle}>
                My Notebook App <FaArrowRight size={15} />
              </h2>
              <p className={css.cardDescription}>
                myNotebook is a feature-rich note-taking application built using
                the MERN stack. It allows users to organize their thoughts,
                ideas, and reminders securely in the cloud.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
