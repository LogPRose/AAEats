import React, { useState, useEffect } from "react";
import styles from "../styles/components/Navbar.module.css"


const Navbar = () => {
    const [route, setRoute] = useState(window.location.pathname);

    useEffect(() => {
        const handleRouteChange = () => {
            setRoute(window.location.pathname);
        }

        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        }
    }, []);
    const handleRoute = (newRoute) => {
        setRoute(newRoute);
    }
//add ternary for style switching when active
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <p>Ann Arbor Eats!</p>
        <img src={styles.home} onClick={() => handleRoute('/')}/>
        <a src={styles.user} href="/user" alt="User Account"/>
        <a src={styles.location} href="/locations" alt="Saved Locations"/>
      </div>
    </div>
  );
};


export default Navbar;
