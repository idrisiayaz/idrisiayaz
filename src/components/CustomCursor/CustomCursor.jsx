import React, { useEffect, useRef } from "react";
import css from "./CustomCursor.module.scss";

const isDarkSurface = (element) => {
  let current = element;

  while (current && current !== document.documentElement) {
    const style = window.getComputedStyle(current);
    const background = style.backgroundColor;

    const match = background.match(
      /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)/,
    );

    if (match) {
      const [, r, g, b, alpha = "1"] = match;
      const opacity = Number(alpha);

      // Ignore transparent backgrounds and continue to the parent.
      if (opacity > 0.05) {
        const luminance =
          (0.2126 * Number(r) + 0.7152 * Number(g) + 0.0722 * Number(b)) / 255;

        // Dark backgrounds switch the cursor to white.
        return luminance < 0.35;
      }
    }

    current = current.parentElement;
  }

  return false;
};

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      const element = document.elementFromPoint(e.clientX, e.clientY);

      // Explicitly detect the black Projects section and other dark areas.
      const inProjects = Boolean(element?.closest("#projects"));
      const darkSection = Boolean(
        element?.closest('[data-cursor-theme="dark"], .dark-section'),
      );

      const dark = inProjects || darkSection || isDarkSurface(element);

      dotRef.current?.classList.toggle(css.darkSurface, dark);
      ringRef.current?.classList.toggle(css.darkSurface, dark);
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      ringRef.current?.classList.add(css.hovered);
    };

    const handleLeave = () => {
      ringRef.current?.classList.remove(css.hovered);
    };

    const interactives = document.querySelectorAll("a, button, [data-cursor]");

    interactives.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", handleMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);

      interactives.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={css.dot} />
      <div ref={ringRef} className={css.ring} />
    </>
  );
};

export default CustomCursor;
