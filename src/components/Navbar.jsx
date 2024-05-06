import React, { useState } from "react";
import styles from '../styles/components/Navbar.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <a href="/">Home</a>
        <a href="/User">User Account</a>
        <a href="/Saved">Saved Locations</a>
      </div>
    </div>
  );
};

export default Navbar;
