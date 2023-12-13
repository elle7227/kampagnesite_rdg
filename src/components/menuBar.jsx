import React from 'react';
import styles from "@/styles/burgerMenu.module.css";

export default function MenuBar() {
    return (
      <div className={styles.menu_container}>
        <ul className={styles.menu}>
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Opskrifter</a></li>
          <li><a href="/inspiration">Stories</a></li>
        </ul>
        <div>
          
        </div>
      </div>
    
    )
  }
  
