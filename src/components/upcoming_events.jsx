
import React from 'react';
import styles from "@/styles/Landing.module.css";
import { useState } from 'react';
import BookingForm from '@/components/bookingForm';
 


export function Upcoming_events(){
  const [clickedButton, setClickedButton] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick (buttonName){
    setClickedButton(buttonName);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
    <article>
            <h2 className={styles.heading}>landing gallery</h2>
        </article>

         
    <article className={styles.upcoming_event_section}>

        <div className={styles.upcoming_event_card}>
            <h3>NAVN PÅ EVENT</h3>
            <img className={styles.upcoming_event_img}
                src="/event_billeder/upcoming1.jpeg"
                alt="upcoming_event_1"
            />
             <p>her indsætter vi en tekst</p>   
    
             <button
            className={styles.button1}
            onClick={() => handleButtonClick('button1')}
          >
            link pop up
          </button>


        </div>

        <div className={styles.upcoming_event_card}>
        <h3>NAVN PÅ EVENT</h3>
          <img className={styles.upcoming_event_img}
                src="/event_billeder/upcoming1.jpeg"
                alt="upcoming_event_1"
            />
             <p>her indsætter vi en tekst</p>
             <button
            className={styles.button2}
            onClick={() => handleButtonClick('button2')}
          >
            link pop up
          </button>

        </div>
        <div className={styles.upcoming_event_card}>
        <h3>NAVN PÅ EVENT</h3>
            <img className={styles.upcoming_event_img}
                 src="/event_billeder/upcoming1.jpeg"
                alt="upcoming_event_1"
            />
          <p>her indsætter vi en tekst</p>
          <button
            className={styles.button1}
            onClick={() => handleButtonClick('button1')}
          >
            link pop up
          </button>
        </div>

        {showModal && (
  <BookingForm handleClose={handleCloseModal} clickedButton={clickedButton} />
)}
    </article>

    </>
  )
}
