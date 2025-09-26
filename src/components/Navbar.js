import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import {  scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/MSR-Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  // ✅ Handle scroll even when on ProjectDetail
  const handleNavClick = (section) => {
    closeMenu();

    if (location.pathname !== "/") {
      // Navigate back to home
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -70,
        });
      }, 200); // wait for homepage render
    } else {
      // Already on home, just scroll
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
        offset: -70,
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img
          src={Logo} className={styles.logoImg}
          alt="Logo"
        />
      </div>
      <div className={styles.menuRight}>
        <div className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </div>
        <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <li onClick={() => handleNavClick("home")}>Home</li>
        <li onClick={() => handleNavClick("about")}>About</li>
        <li onClick={() => handleNavClick("skills")}>Skills</li>
        <li onClick={() => handleNavClick("projects")}>Projects</li>
        <li onClick={() => handleNavClick("contact")}>Contact</li>
      </ul>
    </nav>
  );
}
