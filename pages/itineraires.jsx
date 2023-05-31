import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/card";

import Image from "next/image";
import styles from "../styles/styles.module.css";
import Footer from "@/components/footer";

const ItinerairesPage = () => {
  const [cardsData, setCardsData] = useState([]);

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
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default ItinerairesPage;
