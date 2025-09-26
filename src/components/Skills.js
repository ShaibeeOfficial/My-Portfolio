import React from "react";
import styles from "../styles/Skills.module.css";
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaDatabase, FaFigma, FaMicrosoft, FaNetworkWired, FaStackOverflow, FaPaintRoller, FaWordpress } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.grid}>
        <div className={styles.skill}><FaReact /> React.js</div>
        <div className={styles.skill}><FaReact /> React Native</div>
        <div className={styles.skill}><FaJs /> JavaScript</div>
        <div className={styles.skill}><FaCss3Alt /> CSS3 / Modules</div>
        <div className={styles.skill}><FaHtml5 /> HTML5</div>
        <div className={styles.skill}><FaDatabase /> Firebase</div>
        <div className={styles.skill}><FaFigma /> Figma</div>
        <div className={styles.skill}><FaMicrosoft /> MS Office</div>
        <div className={styles.skill}><FaNetworkWired /> Team Work</div>
        <div className={styles.skill}><FaStackOverflow /> Problem Solving</div>
        <div className={styles.skill}><FaPaintRoller /> Graphic Designing</div>
        <div className={styles.skill}><FaWordpress /> Wordpress Developer</div>
      </div>
    </section>
  );
}
