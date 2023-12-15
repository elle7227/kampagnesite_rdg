import React, { useState, useEffect } from 'react';
import styles from "@/styles/inspiration.module.css";
import Recipe_modal from './recipe_modal';
import BurgerMenu from "@/components/burgerMenu";
import MenuBar from './menuBar';
import { Helmet } from 'react-helmet';

export default function Inspiration_fetch (){
  const [artists, setArtist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);


//fetche data fra api når component er renderet
  useEffect(() => {
    async function fetchArtister() {
      const response = await fetch('https://xsspmvprmsitdckybuoy.supabase.co/rest/v1/inspiration', {
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

  function handleHolderClick(artist) {
    console.log("Fetched artists:", data);
    setSelectedArtist(artist);
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }


  return (
    <>
    <Helmet>
        <title>Table Stories</title>
        <meta name="inspiration til borddækning med service" content="inspiration til borddækning, pynt, fest, interiør" />
      </Helmet>
      <section className={styles.recipes_container}>
        <article className={styles.menu_container}>
          <BurgerMenu />
        </article>

        <article className={styles.content_container}>
            <MenuBar></MenuBar>
            <section className={styles.heading1_landing}>
              <img src="tidligere_events/logoV2.png" alt="Logo" />
            </section>
            <h3>En samling af jeres øjeblikke med med vores produkter </h3>
          <section className={styles.grid}>
  {artists.map((artist, index) => (
    <div
      className={styles.holder}
      onClick={() => handleHolderClick(artist)}
      key={index}
    >
      <article className={styles.recipe_card}>
        <img src={artist.image} alt={artist.name} />
        <div className={styles.buyOverlay}>
          <a
            className={styles.link1}
            href={artist.product_1}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy now
          </a>
          <a
            className={styles.link2}
            href={artist.product_2}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy now
          </a>
          <a
            className={styles.link}
            href={artist.product_3}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>
        </div>
      </article>
    </div>
  ))}
</section>
        </article>

    </section>
          {isModalOpen && <Recipe_modal artist={selectedArtist} onClose={handleCloseModal} />}          
    </>
  );}