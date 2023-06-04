import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";

const Card = ({ title, description, imageUrl, adresse, numtel }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} width={300} height={200} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.description}>Adresse : {adresse}</p>
      <p className={styles.description}>Téléphone : {numtel}</p>
    </div>
  );
};

export default Card;
