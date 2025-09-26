import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.container}>
        {/* <img src="../assets/Ai-Shahzaib.png" alt="Profile" className={styles.image} /> */}
        <img src={require("../assets/Ai-Pic.png")} alt="Profile" className={styles.image} />
        <p>
          I’m a passionate <strong>Frontend Developer</strong> with experience in
          React.js, JavaScript, and modern web technologies. I love building
          clean, responsive, and user-friendly websites. My mission is to bring
          creative ideas to life through code.
        </p>
      </div>
    </section>
  );
}