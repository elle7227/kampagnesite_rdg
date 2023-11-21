
import React from 'react';
import styles from "@/styles/Landing.module.css";


export function Upcoming_events(){
  return (
    <>
    <article>
            <h2 className={styles.heading}>landing gallery</h2>
        </article>

         
    <article className={styles.upcoming_event_section}>

        <div className={styles.upcoming_event_card}>
            <h3>NAVN PÅ EVENT</h3>
            <img className={styles.upcoming_event_img}
                src="/event_billeder/apple_pie.jpg"
                alt="upcoming_event_1"
            />
             <p>her indsætter vi en tekst</p>
             <button>link pop up</button>
        </div>

        <div className={styles.upcoming_event_card}>
        <h3>NAVN PÅ EVENT</h3>
          <img className={styles.upcoming_event_img}
                src="/event_billeder/apple_pie.jpg"
                alt="upcoming_event_1"
            />
             <p>her indsætter vi en tekst</p>
             <button>link pop up</button>
        </div>
        <div className={styles.upcoming_event_card}>
        <h3>NAVN PÅ EVENT</h3>
            <img className={styles.upcoming_event_img}
                src="/event_billeder/apple_pie.jpg"
                alt="upcoming_event_1"
            />
          <p>her indsætter vi en tekst</p>
          <button>link pop up</button>
        </div>
    </article>

    </>
  )
}
