import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <p>Ann Arbor Eats!</p>
        <a className={styles.home} href="/"/>
        <a className={styles.user} href="/User"/>
        <a className={styles.location} href="/Saved"/>
      </div>
    </div>
  );
};

export default Navbar;
