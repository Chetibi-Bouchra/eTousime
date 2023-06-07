import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Card from "@/components/card";

import Image from "next/image";
import styles from "../../styles/styles.module.css";
import Footer from "@/components/footer";
import ItenaryCard from "@/components/itinaryCard";
import { API_URL } from "@/config/api";

const AgencesPage = () => {
  const [cardsData, setCardsData] = useState([]);
  const router = useRouter();
  const { id } = router.query; // Extract the ID from the URL

  const fetchAgenceData = async (id) => {
    try {
      // Replace the axios request URL with your actual API endpoint
      const response = await axios.get(
        `${API_URL}/api3/circuitsByAgence?id_agence=${id}`
      );
      setCardsData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAgenceData(id); // Fetch data based on the ID from the URL
    }
  }, [id]);

  const itinaires = [
    {
      id_circuit: 1,
      nom: "Découverte de la capitale de l’Algérie",
      id_agence: 1,
      description:
        'Ce circuit vous permettra de découvrir le fameux monument de la capital "Makam E chahid" tout en visitant également le grand jardin d\'éssais. Le circuit incluera déjeuner et transport.',
      prix: 2000,
      cle_stripe: "att",
      d_but: "2023-05-31",
      fin: "2023-05-31",
      Agence: null,
      circuit_activit_: [
        {
          id_activit_: 3,
          id_circuit: 1,
          activit_: {
            id_activit_: 3,
            nom: "séance photos",
            description: "séance photos par l'agence",
            logo: "logo photo",
            circuit_activit_: null,
          },
          circuit: null,
        },
        {
          id_activit_: 4,
          id_circuit: 1,
          activit_: {
            id_activit_: 4,
            nom: "Restauration",
            description: "Restauration assurée par l'agence de voyage",
            logo: "logo résto",
            circuit_activit_: null,
          },
          circuit: null,
        },
      ],
      circuit_point: [
        {
          id_circuit: 1,
          id_interet: 1,
          circuit: null,
          point_interet: {
            id_interet: 1,
            name: "Makam E Chahid",
            image:
              "https://www.horizons.dz/wp-content/uploads/2023/03/makam-el-chahid-alger.jpg",
            localisation: "Alger, Algérie",
            description: "Ceci est le monument du martyr algérien",
            circuit_point: null,
          },
        },
        {
          id_circuit: 1,
          id_interet: 2,
          circuit: null,
          point_interet: {
            id_interet: 2,
            name: "Jardin d’essais",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Test_Garden_Hamma.jpg/1200px-The_Test_Garden_Hamma.jpg",
            localisation: "Alger, Algérie",
            description: "ceci est le jardin d'essai alger",
            circuit_point: null,
          },
        },
      ],
    },
  ];

  return (
    <div className={styles.cardView}>
      {cardsData.length > 0 ? (
        cardsData.map((card, index) => (
          <ItenaryCard
            key={index}
            title={card.nom}
            debut={card.d_but}
            fin={card.fin}
            description={card.description}
            numtel={card.prix}
          />
        ))
      ) : (
        itinaires.map((card, index) => (
          <ItenaryCard
            key={index}
            id= {card.id_circuit}
            title={card.nom}
            debut={card.d_but}
            fin={card.fin}
            description={card.description}
            numtel={card.prix}
          />
        ))
      )}
    </div>
  );
};

export default AgencesPage;
