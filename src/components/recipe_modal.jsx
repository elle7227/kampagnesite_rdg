import styles from "@/styles/opskrifter.module.css";

export default function Recipe_modal({ opskrift, onClose }) {

    return (
          <div className={styles.modal}>
      <div className={styles.modalColumn}>
        <div className={styles.modal_img}>
          {opskrift.image && <img src={opskrift.image} alt={opskrift.name} />}
        </div>
      </div>
      <div className={styles.modalColumn}>
        <h3>{opskrift.name}</h3>
        <p className={styles.recipe}>{opskrift.recipe}</p>
        <p>{opskrift.fremgang}</p>
        <a className={styles.link}href={opskrift.product_link} target="_blank" rel="noopener noreferrer">Shop serving piece</a>
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
    </div>
    );
  }