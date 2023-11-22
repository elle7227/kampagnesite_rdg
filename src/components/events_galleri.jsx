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
        <h2 className={styles.galleri_overskrift}>TIDLIGERE EVENTS</h2>
        <section className={styles.galleri_holder}>

        <article className={styles.row_1}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <img className={styles.upcoming_event_img} src="/web_1/e1_dinner.webp"/>       
                    <video ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted>
                            <source src="/web_1/e1_video1.mp4" type="video/mp4" />
                    </video>
                    <img className={styles.upcoming_event_img} src="/web_1/e1_friends.webp"/> 
                    <img className={styles.upcoming_event_img} src="/web_1/e1_pizza.webp"/> 
                    <img className={styles.upcoming_event_img} src="/web_1/e1_friends2.webp"/>  
                    
                </div>    
            </article>
           
            <article className={styles.row_2}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <video ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted><source src="/web_2/video1.mp4" type="video/mp4" /></video>
                    <img className={styles.upcoming_event_img} src="/web_2/food1.webp" /> 
                    <img className={styles.upcoming_event_img} src="/web_2/food2.webp" /> 
                    <video  ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted><source src="/web_2/video2.mp4" type="video/mp4" /></video>
                    <img className={styles.upcoming_event_img} src="/web_2/food2.webp" />  
                </div>    
            </article>

            <article className={styles.row_3}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <img className={styles.upcoming_event_img} src="/web_3/tjener.webp" />        
                    <img className={styles.upcoming_event_img} src="/web_3/bord1.webp" />
                    <img className={styles.upcoming_event_img} src="/web_3/piger.webp" />        
                    <video  ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted><source src="/web_3/e1_video2.mp4" type="video/mp4" /></video>
                    <img className={styles.upcoming_event_img} src="/web_3/bord2.webp" />      
                </div>    
            </article>

             
            <article className={styles.row_4}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <img className={styles.upcoming_event_img} src="/web_4/piger.webp" />      
                    <video  ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted><source src="/web_4/video1.mp4" type="video/mp4" /></video>
                    <img className={styles.upcoming_event_img} src="/web_4/drink.webp" />     
                    <img className={styles.upcoming_event_img} src="/web_4/mad.webp" />     
                    <video  ref={(ref) => videoRefs.current.push(ref)} className={styles.video} autoPlay muted><source src="/web_4/video2.mp4" type="video/mp4" /></video>
                </div>    
            </article>
        </section>
        </>
    )
}
