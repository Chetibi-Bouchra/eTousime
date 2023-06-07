import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";

const ItenaryCard = ({ title, id, debut, fin, description, numtel }) => {
  const handleClick = () => {
    axios
      .get("/api2/checkout_session", {
        params: {
          is: id,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
