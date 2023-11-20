import React, { useState } from 'react';
import styles from "@/styles/burgerMenu.module.css";

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.burger_container} ${menuOpen ? styles.open : ''}`}>
      <div className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        {menuOpen ? (
          <svg className={styles.close_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
          </svg>
        ) : (
          <>
          <div className={styles.burger_icon}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <p className={styles.vertical_text}>Rosendahl</p>
          </>
          
        )}
        <ul className={`${styles.menu_list} ${menuOpen ? styles.open : ''}`}>
        <li><a href="/">EVENTS</a></li>
          <li><a href="/recipes">OPSKRIFTER</a></li>
          <li><a href="#">INSPIRATION</a></li>
        </ul>
      </div>
    </div>
  );
}