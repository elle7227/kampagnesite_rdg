
import React from 'react';
import styles from "@/styles/Landing.module.css";
import { useState, useEffect } from 'react';
import BookingForm from '@/components/bookingForm';
import { Helmet } from 'react-helmet';



export function Upcoming_events(){
  const [clickedButton, setClickedButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    async function fetchArtister() {
      const response = await fetch('https://xsspmvprmsitdckybuoy.supabase.co/rest/v1/events_forside', {
          method: "get",
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc3BtdnBybXNpdGRja3lidW95Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDI0NDAwMywiZXhwIjoyMDE1ODIwMDAzfQ.geMCtASisK7KU6HnUOxum8GFwMw51Q-rs0NKgXx-mN8",
          },
        });
        // response --> json, som parses og returnere promise der resolver js objekt.
        const data = await response.json();
        setArtist(data);
        console.log("Fetched artists:", data.map(artist => artist.name));
    }
    fetchArtister();
  }, []);

  function handleButtonClick (buttonName){
    setClickedButton(buttonName);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
    <Helmet>
        <title>Rosendahl Dinners</title>
        <meta name="events i københavn" content="kommende events på barer og restauranter i københavn" />
      </Helmet>
    <article>
            <h2 className={styles.heading}>Kommende events</h2>
        </article>

         
    <article className={styles.upcoming_event_section}>

    {artists.map((artist) => (
    <div className={styles.upcoming_event_card} key={artist.id}>
    <img src={artist.image} alt={artist.name} />
    <h4 className={styles.h4_upcoming}>{artist.name}</h4>
    <p>{artist.info}</p>
    <a
            className={styles.instagram_link}
            href={artist.instagram_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Læs mere
          </a>
    <button
      className={styles.button2}
      onClick={() => handleButtonClick(artist.name)}
    >
      Køb billet
    </button>
  </div>
  ))}
        {showModal && (
  <BookingForm handleClose={handleCloseModal} clickedButton={clickedButton} />
    )}
    </article>

    </>
  )
}
