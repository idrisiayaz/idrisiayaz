import React, { useEffect, useRef, useState } from "react";
import css from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import myImg from "../../assets/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Set the background color of the navbar to black when scrolling
      if (currentPosition > 0) {
        setNavbarBackground("white");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={` paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{
        boxShadow: headerShadow,
        backgroundColor: navbarBackground,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>
          <img src={myImg} />
        </div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          {["Education", "Work", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpened((prev) => !prev)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:idrisiayaz@gmail.com">
              <motion.button>
                Let’s Connect{" "}
                <MdKeyboardArrowRight className="icon" size={25} />
              </motion.button>
            </a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div className={css.menuIcon}>
          {!menuOpened ? (
            <BiMenuAltRight
              size={30}
              onClick={() => setMenuOpened((prev) => !prev)}
            />
          ) : (
            <MdOutlineClose
              size={30}
              onClick={() => setMenuOpened((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
