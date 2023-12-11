import React, { useEffect, useRef } from 'react';
import styles from "@/styles/Landing.module.css";

export default function Event_galleri() {
    const videoRefs = useRef([]);

    // undersøger om video er i intersection (viewport), på entry afspilles, ellers pauses video. 
    useEffect(() => {
        function handleIntersection(entries){
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }
    // laver en observer der ser om mere end 0.5 % af video er i viewport
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });

        // observer sættes på hvert video element
        videoRefs.current.forEach((video) => {
            observer.observe(video);

            // tilføjer eventlistener der afspiller video ved mouseover
            video.addEventListener('mouseover', () => {
                video.play();
            });
        });

        // fjerner observer igen, når video ikke er viewport
        return () => {
            observer.disconnect();
        };
        // vi sætter denne funktion til  at køre hver gang siden renders
    }, []);

    return(
        <>
        <h2 className={styles.galleri_overskrift}>Tidligere events</h2>

        <section className={styles.galleri_holder}>
            <article className={styles.row_1}>
                <div className={styles.row_1_col_1}>
                    <img className={styles.event_img} src="tidligere_events/bar_pasta1.jpg"/>  
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
                <video ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted>
                        <source src="/tidligere_events/piger.mp4" type="video/mp4" />
                    </video>
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
                    <img className={styles.event_img} src="tidligere_events/habibi.jpg"/> 
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div>
                <div className={styles.row_4_col_2}>
                    <video ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted>
                        <source src="/tidligere_events/habibi.mp4" type="video/mp4" />
                    </video>
                    <p>indsæt tekst omkring hvilket event, sted og dato</p>
                </div>
            </article>
        </section>
        </>
    )
}
