import React, { useState, useEffect } from 'react';
import styles from "@/styles/opskrifter.module.css";
import Recipe_modal from './recipe_modal';
import BurgerMenu from "@/components/burgerMenu";
import MenuBar from './menuBar';

export default function Opskrifter_fetch (){
  const [opskrift, setOpskrift] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOpskrift, setSelectedOpskrift] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);


//fetche data fra api når component er renderet
  useEffect(() => {
    async function fetchOpskrifter() {
        const response = await fetch("https://ggufspwjbdpzmyqymijq.supabase.co/rest/v1/opskrifter", {
          method: "get",
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndWZzcHdqYmRwem15cXltaWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTkzNjcsImV4cCI6MTk5NTQ5NTM2N30.OszSJm-lZ8YMuK32u4ZmLBGGhl5BzkB8ieK_XUEVY04",
          },
        });
        // response --> json, som parses og returnere promise der resolver js objekt.
        const data = await response.json();
        setOpskrift(data);
    }
    fetchOpskrifter();
  }, []);

  function handleHolderClick(opskrift) {
    console.log("Holder clicked", opskrift);
    setSelectedOpskrift(opskrift);
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
  
  const filteredOpskrift = selectedCategory
    ? opskrift.filter((opskrift) => opskrift.category === selectedCategory)
    : opskrift;
  
  return (
    <>
      <section className={styles.recipes_container}>
        <article className={styles.menu_container}>
          <BurgerMenu />
        </article>
        <article className={styles.content_container}>
        <MenuBar></MenuBar>
          <div className={styles.filter_buttons}>
            <a onClick={handleShowAll}>All</a>
            <a onClick={() => handleFilterClick("dinner")}>Aftensmad</a>
            <a onClick={() => handleFilterClick("dessert")}>Dessert</a>
            <a onClick={() => handleFilterClick("drink")}>Drikke</a>
          </div>

          <section className={styles.grid}>
            {filteredOpskrift.map((opskrift) => (
            <div className={styles.holder} onClick={() => handleHolderClick(opskrift) }>
              <article className={styles.recipe_card}>
                {opskrift.image && <img src={opskrift.image} alt={opskrift.name} />}
              </article>
            </div>
            ))}
          </section>
        </article>

    </section>
          {isModalOpen && <Recipe_modal opskrift={selectedOpskrift} onClose={handleCloseModal} />}          
    </>
  );}


 