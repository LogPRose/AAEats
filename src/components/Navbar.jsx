import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <p>Ann Arbor Eats!</p>
        <a alt="Home" className={styles.home} href="/"/>
        <a alt="User" className={styles.user} href="/User"/>
        <a alt="Saved Locations" className={styles.location} href="/Saved"/>
      </div>
    </div>
  );
};

export default Navbar;
