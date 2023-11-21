import styles from "@/styles/Landing.module.css";
import React from 'react';
import { Upcoming_events } from "@/components/upcoming_events";
import Event_galleri from "@/components/events_galleri";
import BurgerMenu from "@/components/burgerMenu";



export default function Landing_page(){
    return(
      <>
      <div className={styles.content_container}>
        <section className={styles.menu_container}>
          <BurgerMenu />
        </section>
        <section className={styles.main_content}>
        <section className={styles.heading1_landing}>
            <h1>OVERSKRIFT</h1>
          </section>

          <section className={styles.events_container}>
          <Upcoming_events />
          </section>

          <section className={styles.events_container}>
          <Event_galleri/>
          </section>
         
        </section>
      </div>
    </>
  )
}
  
