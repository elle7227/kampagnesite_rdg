import React, { useState, useEffect } from 'react';
import styles from "@/styles/inspiration.module.css";
import Recipe_modal from './recipe_modal';
import BurgerMenu from "@/components/burgerMenu";
import MenuBar from './menuBar';

export default function Inspiration_fetch (){
  const [artists, setArtist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);


//fetche data fra api når component er renderet
  useEffect(() => {
    async function fetchArtister() {
        const response = await fetch("https://ggufspwjbdpzmyqymijq.supabase.co/rest/v1/wines", {
          method: "get",
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndWZzcHdqYmRwem15cXltaWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTkzNjcsImV4cCI6MTk5NTQ5NTM2N30.OszSJm-lZ8YMuK32u4ZmLBGGhl5BzkB8ieK_XUEVY04",
          },
        });
        // response --> json, som parses og returnere promise der resolver js objekt.
        const data = await response.json();
        setArtist(data);
    }
    fetchArtister();
  }, []);

  function handleHolderClick(artist) {
    console.log("Holder clicked", artist);
    setSelectedArtist(artist);
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleFilterClick(category) {
    setSelectedCategory(category);
  }
  function handleShowAll() {
    setSelectedCategory(null);
  }
  
  const filteredArtists = selectedCategory
    ? artists.filter((artist) => artist.category === selectedCategory)
    : artists;
  
  return (
    <>
      <section className={styles.recipes_container}>
        <article className={styles.menu_container}>
          <BurgerMenu />
        </article>

        <article className={styles.content_container}>
            <MenuBar></MenuBar>
          <div className={styles.filter_buttons}>
            <p onClick={handleShowAll}>All</p>
            <p onClick={() => handleFilterClick("dinner")}>Aftensmad</p>
            <p onClick={() => handleFilterClick("breakfast")}>Morgenmad</p>
            <p onClick={() => handleFilterClick("lunch")}>Frokost</p>
          </div>

          <section className={styles.grid}>
            {filteredArtists.map((artist) => (
            <div className={styles.holder} onClick={() => handleHolderClick(artist) }>
              <article className={styles.recipe_card}>
                {artist.image && <img src={artist.image} alt={artist.name} />}
              </article>
            </div>
            ))}
          </section>
        </article>

    </section>
          {isModalOpen && <Recipe_modal artist={selectedArtist} onClose={handleCloseModal} />}          
    </>
  );}