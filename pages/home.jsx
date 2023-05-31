import React, { useState } from "react";
import SignUp from "@/components/signup";

import Image from "next/image";
import styles from "../styles/styles.module.css";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.backgroundImageContainer}>
        <span className={styles.titleExplore}>Algeria</span>
        <span className={styles.titleExplore2}>The world’s best hidden gem</span>
      </div>

      <div className={styles.whyGo}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <p className={styles.titleExplore}>Why go?</p>
            <span>
              Situated in north western africa at the croassroads of many
              cultures and civilisations, Algeria the 10th largest country in
              the world has a lot to offer, from the golden beaches of the
              meditteranean coast to the frozen mountaintops of the atlas and
              the mesmerising dunes of the sahara, and here Tahwissa will give
              you all the information you need to know, and the best Sites to
              visit.{" "}
            </span>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.algeriaImage}></div>
          </div>
        </div>
      </div>

      <Footer>

      </Footer>
    </div>
  );
};

export default HomePage;
