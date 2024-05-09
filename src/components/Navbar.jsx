import React, { useState, useEffect } from "react";
import styles from "../styles/components/Navbar.module.css"
import Logo from "./Logo.jsx"

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
        <button OnClick={() => handleRoute("/")}><Logo fillColor='#FFCB05' img='../assets/home.svg'/></button> 
      </div>
    </div>
  );
};


export default Navbar;
