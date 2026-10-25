import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import css from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

const leftLinks = [
  { label: "ABOUT", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "CONTRIBUTIONS", href: "#projects" },
];

const rightLinks = [
  { label: "SKILLS", href: "#about" },
  { label: "SERVICES", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

const allLinks = [...leftLinks, ...rightLinks];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      ref={navRef}
      className={`${css.navbar} ${scrolled ? css.scrolled : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <nav className={css.inner} aria-label="Main navigation">
        {/* Three links on the left */}
        <ul className={css.leftLinks}>
          {leftLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo stays at the exact horizontal center */}
        <a
          href="#home"
          className={css.logo}
          aria-label="Ayaz Idrisi - Home"
          onClick={closeMenu}
        >
          <img src={logo} alt="" />
        </a>

        {/* Three links on the right */}
        <ul className={css.rightLinks}>
          {rightLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className={css.hamburger}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <MdOutlineClose size={25} />
          ) : (
            <BiMenuAltRight size={27} />
          )}
        </button>
      </nav>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className={css.drawer}
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {allLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
              >
                <span>{item.label}</span>
                <span className={css.drawerArrow}>↗</span>
              </motion.a>
            ))}

            <a
              href="mailto:idrisiayaz@gmail.com"
              className={css.mobileCta}
              onClick={closeMenu}
            >
              LET'S CONNECT <span>↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
