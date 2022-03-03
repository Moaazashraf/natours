import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src={require("../../img/logo-white.png")}
        alt="website logo"
      />
      <div className={styles.textBox}>
        <h1 className={styles.heading}>
          <span className={styles.mainHeading}>out doors</span>
          <span className={styles.subHeading}>is where life happens</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
