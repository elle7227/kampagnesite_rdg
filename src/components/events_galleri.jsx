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
                                   <p>indsæt tekst omkring hvilket event, sted og dato</p>
            </div>

                <div className={styles.row_1_col_2}>
                <img className={styles.event_img} src="tidligere_events/bar_pasta2.jpg"/>  
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div>
            </article>

            <article className={styles.row_2}>
                <div className={styles.row_2_col_1}>
                <img className={styles.event_img} src="tidligere_events/osteria1.jpg"/>   
                    <h4>navn på event</h4>
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>    
                </div>

                <div className={styles.row_2_col_2}>
                <img className={styles.event_img} src="tidligere_events/mig.JPG"/>   
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div> 

            </article>

            <article className={styles.row_3}>
                <div className={styles.row_3_col_1}>
                <img className={styles.event_img} src="tidligere_events/mangia3.jpg"/>  
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>     
                </div>
                
                <div className={styles.row_3_col_2}>
                    <img className={styles.event_img} src="tidligere_events/mangia2.jpg"/>  
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div>

                <div className={styles.row_3_col_3}>
                    <img className={styles.event_img} src="tidligere_events/mangia.jpg"/> 
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div> 
                
            </article>

            <article className={styles.row_4}>
                <div className={styles.row_4_col_1}>
                    <img className={styles.event_img} src="tidligere_events/nulle.jpeg"/> 
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div>
                <div className={styles.row_4_col_2}>
                <img className={styles.event_img} src="tidligere_events/pastis.JPEG"/>   
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div>
            </article>

            <article className={styles.row_1}>
            <div className={styles.row_1_col_1}>
                <img className={styles.event_img} src="tidligere_events/bar_pasta1.jpg" ref={(ref) => imageRefs.current.push(ref)} />
                                   <p>indsæt tekst omkring hvilket event, sted og dato</p>
            </div>

                <div className={styles.row_1_col_2}>
                <img className={styles.event_img} src="tidligere_events/vegetar.jpeg"/>  
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div>
            </article>
        </section>
        </>
    )
}
