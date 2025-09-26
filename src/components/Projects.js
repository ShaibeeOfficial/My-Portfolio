import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import styles from "../styles/Projects.module.css";

export default function Projects() {

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.cards}>
        {projectsData.map((proj) => (
          <div className={styles.card} key={proj.id}>
            <h3>{proj.title}</h3>
            <p>{proj.shortDesc}</p>
            {/* Link to project detail page */}
            <Link to={`/project/${proj.id}`} className={styles.link}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
