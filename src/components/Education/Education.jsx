import React from "react";
import { education, description } from "../../utils/data.js";
import css from "./Education.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer} from "../../utils/motion.js";
import jsImg from "../../assets/js.png";
import nodeImg from "../../assets/nodeJS.png";
import cppImg from "../../assets/cpp.png";
import reactImg from "../../assets/react.png";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import mongodbImg from "../../assets/mongodb.png";
import expressImg from "../../assets/express.png";
import gitImg from "../../assets/git.png";
import mysqlImg from "../../assets/mysql.png";
import awsImg from "../../assets/Aws.png";
import githubImg from "../../assets/github.png";
import bootstrapImg from "../../assets/bootstrap.png";
import scssImg from "../../assets/scss.png";
import materialUImg from "../../assets/MaterialUI.png";
const Education = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="education"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          <span className="primaryText">Education</span>
          {education.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <p>{exp.course}</p>
                  <span className="secondaryText">{exp.duration}</span>
                  <p>{exp.grade}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* right */}
        <div className={css.rightSide}>
          <span className="primaryText">Skills</span>

          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.skills}
          >
            <motion.button className={css.skillsItem}>
              <img src={jsImg} height="40px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={cppImg} height="40px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={nodeImg} height="40px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={reactImg} height="40px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={htmlImg} height="40px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={cssImg} height="40px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={mongodbImg} height="40px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={expressImg} height="20px" width="35px" />Js
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={gitImg} height="20px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={mysqlImg} height="30px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={awsImg} height="30px" width="40px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={scssImg} height="35px" width="35px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={materialUImg} height="35px" width="35px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={bootstrapImg} height="40px" width="35px" />
            </motion.button>
            <motion.button className={css.skillsItem}>
              <img src={githubImg} height="35px" width="35px" />
            </motion.button>
          </motion.div>
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            {description.map((paragraph, i) => (
              <p className="secondaryText" key={i}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
