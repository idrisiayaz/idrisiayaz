import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import css from './Projects.module.scss';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import DashboardImg from '../../assets/Dashboardv2.png';
import OpenDC16Img from '../../assets/OpenDC16.png';
import MyNotebookImg from '../../assets/MyNotebook.png';

const projects = [
  {
    title: 'NFT Marketplace — OpenDC16',
    description:
      'A decentralized NFT marketplace on the ICP blockchain network. Supports secure, efficient NFT transactions with a seamless experience for buyers and sellers.',
    image: OpenDC16Img,
    tags: [
      { name: 'Blockchain', color: '#8b5cf6' },
      { name: 'ICP', color: '#F97316' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Web3', color: '#84cc16' },
    ],
    github: 'https://github.com/idrisiayaz/NFT-Marketplace-openDC16',
    live: '',
  },
  {
    title: 'Payout v2 Dashboard',
    description:
      'A comprehensive analytics dashboard built with React and Material UI. Delivers intuitive data visualization for informed decision-making and enhanced UX.',
    image: DashboardImg,
    tags: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Material UI', color: '#0081CB' },
      { name: 'Data Viz', color: '#F97316' },
    ],
    github: '',
    live: 'https://idrisiayaz.github.io/Payout-v2-Dashboard-Assignment/',
  },
  {
    title: 'My Notebook App',
    description:
      'A full-featured note-taking app on the MERN stack. Users can create, organize, and store notes securely in the cloud with authentication.',
    image: MyNotebookImg,
    tags: [
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Express', color: '#999' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#84cc16' },
    ],
    github: '',
    live: 'https://mynotebookapp-12vf.onrender.com/',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -5;
    const rotY = ((x - cx) / cx) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <motion.div
      ref={cardRef}
      className={css.card}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={css.imgWrapper}>
        <img src={project.image} alt={project.title} className={css.img} />
        <div className={css.imgOverlay}>
          <span>View Details</span>
        </div>
      </div>
      <div className={css.cardBody}>
        <h3 className={css.cardTitle}>{project.title}</h3>
        <p className={`secondaryText ${css.cardDesc}`}>{project.description}</p>
        <div className={css.tags}>
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={css.tag}
              style={{ '--tag-color': tag.color }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className={css.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={css.link} data-cursor>
              <FaGithub size={15} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={css.link} data-cursor>
              <FaArrowUpRightFromSquare size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section className={css.wrapper} id="projects">
    <a className="anchor" id="projects"></a>
    <div className={`innerWidth paddings ${css.container}`}>
      <div className={css.header}>
        <div className="sectionLabel">Portfolio</div>
        <div className={css.headerRight}>
          <motion.h2
            className={css.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Selected Works
          </motion.h2>
          <a
            href="https://github.com/idrisiayaz"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            data-cursor
          >
            All Projects
          </a>
        </div>
      </div>

      <div className={css.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
