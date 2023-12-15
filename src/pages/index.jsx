import React, { useState, useEffect } from 'react';
import styles from "@/styles/Landing.module.css";
import { Upcoming_events } from "@/components/upcoming_events";
import Event_galleri from "@/components/events_galleri";
import BurgerMenu from "@/components/burgerMenu";
import MenuBar from "@/components/menuBar";
import Footer from "@/components/footer";
import { Helmet } from 'react-helmet';

export default function Landing_page() {
  const [password, setPassword] = useState('');
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Check if the password has been entered in the past
    const storedPasswordStatus = localStorage.getItem('isPasswordEntered');
    if (storedPasswordStatus) {
      setIsPasswordEntered(JSON.parse(storedPasswordStatus));
    }
  }, []);

  useEffect(() => {
    // Effect to type out the text gradually
    const textToType = "Skab minder. Udforsk restauranter. Mød nye mennesker. Spis uforglemmelig mad";
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(textToType.substring(0, index));
      index++;

      if (index > textToType.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [isPasswordEntered]);

  const handlePasswordSubmit = () => {
    // Check if the entered password is correct
    if (password === 'mmd23') {
      setIsPasswordEntered(true);
      localStorage.setItem('isPasswordEntered', JSON.stringify(true));
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <>
      {!isPasswordEntered && (
        <div className={styles.password_container}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
        </div>
      )}
      {isPasswordEntered && (
        <div className={styles.content_container}>
          <section className={styles.menu_container}>
            <BurgerMenu />
          </section>
          <section className={styles.main_content}>
            <section className={styles.menuBar_container}>
              <MenuBar></MenuBar>
            </section>
            <section className={styles.heading1_landing}>
              <img src="tidligere_events/logo4.png" alt="Logo" />
              <article className={styles.beskrivelse}>
                <h4>{typedText}</h4>
              </article>
            </section>
            <section className={styles.events_container}>
              <Upcoming_events />
            </section>
            <Event_galleri />
          </section>
        </div>
      )}
       <Footer></Footer>
    </>
  );
}

  
