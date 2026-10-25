import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import yorderIcon from "../../assets/yorder-icon.jpg";
import OpenDC16Img from "../../assets/OpenDC16.png";
import LaavaIcon from "../../assets/laava-icon.png";

const projects = [
  {
    number: "01",
    title: "Yorder",
    subtitle: "Quick Commerce App",
    description:
      "A quick-commerce application designed to simplify online ordering, enabling users to discover products, place orders, and enjoy a seamless shopping experience.",
    image: yorderIcon,
    tags: ["Product Development", "Multi-vendor", "Quick commerce"],
    github: "",
    live: "https://play.google.com/store/apps/details?id=com.yorder.app&pcampaignid=web_share",
  },
  {
    number: "02",
    title: "Laava: Stocks, F&O, Research",
    subtitle: "Stock Market & Research App",
    description:
      "A stock market application that brings together market insights, F&O updates, investment research, and stock analysis to help users make more informed trading and investment decisions.",
    image: LaavaIcon,
    tags: ["Stock Market", "F&O", "Market Research", "Analytics"],
    github: "",
    live: "https://play.google.com/store/apps/details?id=com.laava.app",
  },
  {
    number: "03",
    title: "OpenDC16",
    subtitle: "NFT Marketplace",
    description:
      "A decentralized NFT marketplace built on ICP, bringing blockchain technology and NFT transactions into a React web application.",
    image: OpenDC16Img,
    tags: ["React", "ICP", "Web3"],
    github: "https://github.com/idrisiayaz/NFT-Marketplace-openDC16",
    live: "",
  },
];

const ProjectCard = ({ project, index }) => {
  const destination = project.live || project.github;

  return (
    <motion.article
      className={css.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className={css.cardImage}
        loading="lazy"
      />

      <div className={css.imageShade} />

      <div className={css.cardTop}>
        <span className={css.number}>{project.number}</span>

        <div className={css.tags}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={css.cardContent}>
        <div className={css.projectType}>{project.subtitle}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      {destination ? (
        <a
          href={destination}
          target="_blank"
          rel="noreferrer"
          className={css.cardArrow}
          aria-label={`Open ${project.title}`}
        >
          <FaArrowUpRightFromSquare />
        </a>
      ) : (
        <span className={css.cardArrow} aria-hidden="true">
          <FaArrowUpRightFromSquare />
        </span>
      )}

      <div className={css.cardBottom}>
        <span>PROJECT / {project.number}</span>
        <div className={css.cardLinks}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live demo <FaArrowUpRightFromSquare />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => (
  <section className={css.wrapper} id="projects">
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.sectionLabel}>SELECTED WORK</div>

        <div className={css.headingRow}>
          <h2>
            Work &amp;
            <br />
            <span>Contributions.</span>
          </h2>

          <div className={css.headingDescription}>
            <p>
              A selection of my work and contributions across web applications,
              full-stack development, and digital products. Each project
              reflects a different challenge, approach, and part of my
              development journey.
            </p>

            <a
              href="https://github.com/idrisiayaz"
              target="_blank"
              rel="noreferrer"
              className={css.githubLink}
            >
              <FaGithub />
              Explore all projects
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>

        <div className={css.sectionMeta}>
          <span>PERSONAL PROJECTS &amp; DEVELOPMENT WORK</span>
          <span>01 — 03 / SELECTED</span>
        </div>
      </header>

      <div className={css.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>

      <footer className={css.footer}>
        <span>MORE WORK. MORE THINGS TO BUILD.</span>
        <a
          href="https://github.com/idrisiayaz"
          target="_blank"
          rel="noreferrer"
        >
          VIEW GITHUB <FaArrowUpRightFromSquare />
        </a>
      </footer>
    </div>
  </section>
);

export default Projects;
