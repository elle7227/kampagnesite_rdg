import styles from "@/styles/footer.module.css";


export default function Footer(){
    return(
<section className={styles.footer}>
        <h2>Footer Heading</h2>
        
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Column 1</h3>
            <p>Column 1 content goes here.</p>
          </div>
          
          <div className={styles.column}>
            <h3>Column 2</h3>
            <p>Column 2 content goes here.</p>
          </div>
          
          <div className={styles.column}>
            <h3>Column 3</h3>
            <p>Column 3 content goes here.</p>
          </div>
          
          <div className={styles.column_4}>
            <h3>Column 4</h3>
            <p>Column 4 content goes here.</p>
          </div>
        </div>
        
        <div className={styles.line}>
            <hr></hr>
            <p>Copyright © Rosendahl Design Group 2022</p>
        </div>
  
    </section>
    )
}