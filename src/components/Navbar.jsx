import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.css"

const [active, useState] = useState('home')

const handleRoute = (Route) => {
    active = Route;
    navigate("/${Route}");
}

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <p>Ann Arbor Eats!</p>
        <input alt="Home" type="image" src={styles.home} onClick={handleRoute('home')}/>
        <input alt="User Account" type="image" src={styles.user} onClick={handleRoute('user')}/>
        <input alt="Saved Locations" type="image" src={styles.location} onClick={handleRoute('location')}/>
      </div>
    </div>
  );
};

export default Navbar;
