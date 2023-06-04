import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";

const ItenaryCard = ({ title, debut, fin, description, numtel }) => {
  const handleClick = () => {
    //Redirect
    console.log("Button clicked!");
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.description}>Date début: {debut}</p>
      <p className={styles.description}>Date fin: {fin}</p>
      <p className={styles.description}>Prix: {numtel} DA</p>
      <button className={styles.paybutton} onClick={handleClick}>
        Réserver
      </button>
    </div>
  );
};

export default ItenaryCard;
