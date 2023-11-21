import React from 'react';
import styles from "@/styles/Landing.module.css";

export default function Event_galleri (){
    return(
        <>
        <h2 className={styles.galleri_overskrift}>TIDLIGERE EVENTS</h2>
        <section className={styles.galleri_holder}>

        <article className={styles.row_1}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <img className={styles.upcoming_event_img} src="/event_1/e1_dinner.jpeg"/>       
                    <img className={styles.upcoming_event_img} src="/event_1/e1_friends2.jpeg" />
                    <img className={styles.upcoming_event_img} src="/event_1/e1_dinner.jpeg"/> 
                    <img className={styles.upcoming_event_img} src="/event_1/e1_pizza.jpg"/>  
                    <img className={styles.upcoming_event_img} src="/event_1/video1.gif" alt="GIF description" loop={false} />
                    <video className={styles.upcoming_event_img} autoplay muted controls>
    <source src="/event_1/e1_video1.mp4" type="video/mp4" />
</video>
                </div>    
            </article>
           
            <article className={styles.row_2}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />       
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />  
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" /> 
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" /> 
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />  
                </div>    
            </article>

            <article className={styles.row_3}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />       
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />  
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" /> 
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" /> 
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />  
                </div>    
            </article>

             
            <article className={styles.row_4}>
                <h3>ROSENDAHL X FRIHEDEN</h3>
                <div className= {styles.row_container}>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />       
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />  
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" /> 
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" /> 
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />  
                </div>    
            </article>
        </section>
        </>
    )
}
