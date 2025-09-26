import React from "react";
import styles from "../styles/Hero.module.css";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
import { ReactTyped } from "react-typed";

// ✅ Import the image like this
import profilePic from "../assets/Ai-Pic.png";
import resumeFile from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>
          Hi, I’m <span className={styles.name}>Muhammad Shahzaib Riaz</span>
        </h1>
        <h2>
          I’m a{" "}
          <ReactTyped
            strings={[
              "Front-end Developer 💻",
              "Mobile App Developer 📱",
              "UI/UX Designer 🎨",
              "Problem Solver 🚀",
              "Freelancer 🌍",
            ]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </h2>
        <p className={styles.desc}>
          Passionate about building modern, scalable, and user-friendly web
          applications. I love turning ideas into reality using code and
          design.
        </p>
        <div className={styles.buttons}>
          <a href="https://wa.me/+923053970849" className={styles.hireBtn}>
            <FaPaperPlane /> Hire Me
          </a>
          <a href={resumeFile} className={styles.cvBtn} download>
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={profilePic} // replace with your image
          alt="Muhammad Shahzaib Riaz"
          className={styles.profileImg}
        />
        <div className={styles.bgCircle}></div>
      </div>
    </section>
  );
}