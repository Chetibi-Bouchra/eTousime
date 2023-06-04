import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/card";

import Image from "next/image";
import styles from "../styles/styles.module.css";
import Footer from "@/components/footer";

const ItinerairesPage = () => {
  const [cardsData, setCardsData] = useState([]);

  const cards = [
    {
      id_agence: 1,
      name: "Arak voyages",
      address: "Baba Hssen",
      logo: "https://img.freepik.com/vecteurs-libre/logo-voyage-detaille_23-2148616554.jpg",
      description: "ceci est une description de arak voyage",
      num_ro: "0778963256",
      circuit: null,
    },
    {
      id_agence: 2,
      name: "OK voyage",
      address: "Dely Brahim",
      logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-agency-logo-design-template-dc7b0514e8ac16dd3e2cc83ad6814960_screen.jpg?ts=1663755334",
      description: "ceci est la description de OK voyage",
      num_ro: "0558693256",
      circuit: null,
    },
    {
        id_agence: 3,
        name: "OK voyage",
        address: "Dely Brahim",
        logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-agency-logo-design-template-dc7b0514e8ac16dd3e2cc83ad6814960_screen.jpg?ts=1663755334",
        description: "ceci est la description de OK voyage",
        num_ro: "0558693256",
        circuit: null,
      },
      {
        id_agence: 3,
        name: "OK voyage",
        address: "Dely Brahim",
        logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-agency-logo-design-template-dc7b0514e8ac16dd3e2cc83ad6814960_screen.jpg?ts=1663755334",
        description: "ceci est la description de OK voyage",
        num_ro: "0558693256",
        circuit: null,
      },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fc5e-105-101-213-45.ngrok-free.app/api3/agences"
        );
        setCardsData(response.data); // Set the response data in the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.cardView}>
      {cards.map((card, index) => (
        <Card
          key={index}
          id={card.id_agence}
          title={card.name}
          description={card.description}
          imageUrl={card.logo}
          adresse={card.address}
          numtel={card.num_ro}
        />
      ))}
    </div>
  );
};

export default ItinerairesPage;
