import React from 'react';
import styles from "@/styles/burgerMenu.module.css";

export default function MenuBar() {
    return (
      <ul className={styles.menu}>
        <li><a href="/">EVENTS</a></li>
        <li><a href="/recipes">OPSKRIFTER</a></li>
        <li><a href="/inspiration">INSPIRATION</a></li>
      </ul>
    )
  }
  
