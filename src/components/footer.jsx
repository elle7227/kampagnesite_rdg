import styles from "@/styles/footer.module.css";


export default function Footer(){
    return(
<section className={styles.footer}>
        <h3 className={styles.overskrift_footer}>ROSENDAHL</h3>
        
        <div className={styles.columns}>
  
          <div className={styles.column}>
            <h4>Har du brug for hjælp</h4>
            <p>Besøg FAQ- Ofte stillede spørgsmål. <br></br>Eller kontakt kundeservice.</p>
            <h4>Følg os på</h4>
            <svg width="40px" height="40px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 4a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm1.544 5.178h-.918c-1.101 0-1.489.556-1.489 1.49v.687h-.687V12.5h.687v3.322h1.374V12.5h.917l.122-1.145h-1.039l.002-.573c0-.298.028-.458.457-.458h.574V9.178z" fill="currentColor" fill-rule="evenodd"></path></svg>
            <svg width="40px" height="40px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 4a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm2.808 4.85H9.692a.842.842 0 00-.842.842v5.616c0 .465.377.842.842.842h5.616a.842.842 0 00.842-.842V9.692a.842.842 0 00-.842-.842zm-4.98 3.088a2.246 2.246 0 104.419.562c0-.194-.028-.382-.075-.562h.636v3.09a.28.28 0 01-.28.28H9.972a.28.28 0 01-.281-.28v-3.09zm2.172-.842a1.404 1.404 0 110 2.808 1.404 1.404 0 010-2.808zm2.527-1.404a.28.28 0 01.281.28v.843a.28.28 0 01-.28.281h-.843a.28.28 0 01-.28-.281v-.842a.28.28 0 01.28-.28z" fill="currentColor" fill-rule="evenodd"></path></svg>
          </div>
          
          <div className={styles.column}>
            <h4>Kundeservice</h4>
            <p>FAQ - Ofte stillede spørgsmål</p>
            <p>Fragt og levering</p>
            <p>Fortrydelse og retur</p>
            <p>Cookiepolitik</p>
            <p>Konkurrencebetingelser</p>
            <p>Overensstemmelseserklæringer</p>
            <p>Kontakt os</p>
          </div>
          
          <div className={styles.column}>
            <p>Handelsbetingelser</p>
            <p>Persondatapolitik</p>
            <p>RE-ZIP</p>
            <p>Brudgaranti</p>
            <p>Find butik</p>
            <p>Fødevarestyrelsens smileyrapporter</p>
          </div>
          
          <div className={styles.column_4}>
            <h4>Rosendahl Design Group</h4>
            <p>Om Rosendahl Design Group</p>
            <p>Jobs og Karriere</p>
            <p>Presse</p>
            <p>Ansvarlighed</p>
            <p>Whistleblowerordning</p>
          </div>
        </div>
        
        <div className={styles.line}>
            <hr></hr>
            <p>Copyright © Rosendahl Design Group 2022</p>
        </div>
  
    </section>
    )
}