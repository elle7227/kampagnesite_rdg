import React from 'react';
import styles from "@/styles/Landing.module.css";

export default function Event_galleri (){
    return(
        <>
        <h2>dette er et event galleri</h2>
        <section className={styles.galleri_holder}>
            <article className={styles.row_1}>
                <div className={styles.row_1_col_1}>
                    <div className={styles.row_1_inlineImages}>
                        <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                        <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                    </div>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                </div>

                <div className={styles.row_1_col_2}>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                </div>

                <div className={styles.row_1_col_3}>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                    <div className={styles.row_1_col_3_inlineImages}>
                        <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                        <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                        <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                    </div>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />       
                </div>
            </article>
            
            <article className={styles.row_2}>
                <div className={styles.row_2_col_1}>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />       
                </div>
                <div className={styles.row_2_col_2}>
                    <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />       
                </div>

            </article>
            <article className={styles.row_3}>
                <div className={styles.row_3_col_1}>
                <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                </div>
                <div className={styles.row_3_col_2}>
                <div className={styles.row_3_col_3_inlineImages}>
                        <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                        <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />
                    </div>
                </div>
                <div className={styles.row_3_col_3}>
                <img className={styles.upcoming_event_img} src="/event_billeder/apple_pie.jpg" />

                </div>
            </article>
        </section>
        </>
    )
}
