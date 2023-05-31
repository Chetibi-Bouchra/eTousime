import React from "react";
import styles from "../styles/card.module.css"; // Import the component's CSS module

const Card = ({ title, description }) => {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    );
  };
  

export default Card;
