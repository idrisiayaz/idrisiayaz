import React, { useEffect, useRef, useState } from 'react';
import css from './Navbar.module.scss';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const links = ['About', 'Work', 'Projects'];

  return (
    <motion.nav
      className={`${css.navbar} ${scrolled ? css.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`innerWidth ${css.inner}`}>
        {/* Logo */}
        <a href="/" className={css.logo}>
          <img src={logo} alt="AI" />
          <span>Ayaz Idrisi</span>
        </a>

        {/* Desktop links */}
        <ul className={css.links} ref={menuRef}>
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:idrisiayaz@gmail.com" className={`${css.ctaBtn}`} data-cursor>
              Let's Connect
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div className={css.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdOutlineClose size={26} /> : <BiMenuAltRight size={26} />}
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <motion.div
          className={css.drawer}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="mailto:idrisiayaz@gmail.com" className="btn-primary">
            Let's Connect
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
