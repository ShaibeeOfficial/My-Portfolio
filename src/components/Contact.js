import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form className={styles.form} action="https://formspree.io/f/mrbybqry"
        method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/shaibeeofficial/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/ShaibeeOfficial" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:mshahzaibriazofficial@gmail.com">Email</a>
      </div>
    </section>
  );
}
