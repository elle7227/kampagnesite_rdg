import React, { useEffect, useRef, useState } from 'react';
import styles from "@/styles/Landing.module.css";

export default function Event_galleri() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageRefs = useRef([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Changing image');
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageRefs.current.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
    
    }, []); 

    return(
        <>
        <h2 className={styles.galleri_overskrift}>Tidligere events</h2>

        <section className={styles.galleri_holder}>
            <article className={styles.row_1}>
            <div className={styles.row_1_col_1}>
                <img className={styles.event_img} src="tidligere_events/bar_pasta1.jpg" ref={(ref) => imageRefs.current.push(ref)} />
                                   <p>12.04.23 ROSENDAHL X FRIHEDEN</p>
            </div>

                <div className={styles.row_1_col_2}>
                <img className={styles.event_img} src="tidligere_events/bar_pasta2.jpg"/>  
                    <p>12.04.23 ROSENDAHL X FRIHEDEN</p>
                </div>
            </article>

            <article className={styles.row_2}>
                <div className={styles.row_2_col_1}>
                <img className={styles.event_img} src="tidligere_events/osteria1.jpg"/>   
                    <p>23.09.23 ROSENDAHL X OSTERIA SEAFOOD</p>    
                </div>

                <div className={styles.row_2_col_2}>
                <img className={styles.event_img} src="tidligere_events/mig.JPG"/>   
                    <p>16.05.23 ROSENDAHL X PIOLA CPH</p>
                </div> 

            </article>

            <article className={styles.row_3}>
                <div className={styles.row_3_col_1}>
                <img className={styles.event_img} src="tidligere_events/mangia3.jpg"/>  
                    <p>19.02.23 ROSENDAHL X BRUUS</p>     
                </div>
                
                <div className={styles.row_3_col_2}>
                    <img className={styles.event_img} src="tidligere_events/mangia2.jpg"/>  
                    <p>19.02.23 ROSENDAHL X BRUUS</p>
                </div>

                <div className={styles.row_3_col_3}>
                    <img className={styles.event_img} src="tidligere_events/mangia.jpg"/> 
                    <p>19.02.23 ROSENDAHL X BRUUS</p>
                </div> 
                
            </article>

            <article className={styles.row_4}>
                <div className={styles.row_4_col_1}>
                    <img className={styles.event_img} src="tidligere_events/nulle.jpg"/> 
                    <p>04.02.23 ROSENDAHL X PASTIS</p>
                </div>
                <div className={styles.row_4_col_2}>
                <img className={styles.event_img} src="tidligere_events/pastis.jpg"/>   
                    <p>04.02.23 ROSENDAHL X PASTIS</p>
                </div>
            </article>

            <article className={styles.row_1}>
            <div className={styles.row_1_col_1}>
                <img className={styles.event_img} src="tidligere_events/auto.jpg" ref={(ref) => imageRefs.current.push(ref)} />
                                   <p>24.06.23 ROSENDAHL X AUTOPOL</p>
            </div>

                <div className={styles.row_1_col_2}>
                <img className={styles.event_img} src="tidligere_events/vegetar.jpg"/>  
                    <p>16.09.23 ROSENDAHL X COMPANII</p>
                </div>
            </article>
        </section>
        </>
    )
}
