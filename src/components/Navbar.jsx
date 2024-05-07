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
        <input alt="Home" type="image" src={styles.home} onClick={() => handleRoute('/')}/>
        <input alt="User Account" type="image" src={styles.user} onClick={() => handleRoute('/user')}/> 
        <input alt="Saved Locations" type="image" src={styles.location} onClick={() => handleRoute('/location')}/>
      </div>
    </div>
  );
};


export default Navbar;
