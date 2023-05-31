import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <footer>
        
      <div className={styles.footer}>
      <section className={styles.first}>
        <h1>Ta7wissa</h1>
        <p>The official promotional website of the Algerian ministry of tourism and crafts</p>
      </section>
      <section className={styles.second}>
        <h2>Ministry</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Legal Information</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </section>
      <section className={styles.third}>
        <h2>HELP CENTER</h2>
        <ul>
        <li><a href="#">Tourist visa</a></li>
          <li><a href="#">How To come?</a></li>
          <li><a href="#">Why Us?</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </section>

      <section className={styles.third}>
        <h2>CONTACT INFO</h2>
        <ul>
          <li><a href="#">1234567890</a></li>
          <li><a href="#">company@email.com</a></li>
          <li><a href="#">119 rue Didouche Mourad, Algiers</a></li>
        </ul>
      </section>
      </div>
      <div className={styles.credits}>
      <section className={styles.right}>
        <h2>© 2022 DigiCraft | All rights reserved</h2>
        
      </section>

      <section className={styles.creation}>
        <h2>Created with love by islam</h2>
        
      </section>
      </div>

    </footer>
  );
};

export default Footer;
