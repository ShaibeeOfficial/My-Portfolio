import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Muhammad Shahzaib Riaz. All Rights Reserved.</p>
    </footer>
  );
}
