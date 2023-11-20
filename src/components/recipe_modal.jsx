import styles from "@/styles/opskrifter.module.css";

export default function Recipe_modal({ artist, onClose }) {

    return (
      <div className={styles.modal}>
        <h3>{artist.name}</h3>
        <div className={styles.modal_img}>
        {artist.image && <img src={artist.image} alt={artist.name} />}
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    );
  }