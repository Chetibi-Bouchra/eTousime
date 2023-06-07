import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";
import { AuthContext } from "./AuthContext";

const ItenaryCard = ({ title, id, debut, fin, description, numtel }) => {
  const { loggedIn, userName, login } = useContext(AuthContext);

  const handleClick = () => {
    axios
      .get("/api2/checkout_session", {
        params: {
          id_circuit: id,
          email_utilisateur: userName,
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
