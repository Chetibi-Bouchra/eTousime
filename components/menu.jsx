import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  };

  return (
    <nav className={styles.menu}>
      <div className={styles.logoContainer}>
        <Link href="/home">
          <span className={styles.logo}>TA7WISSA</span>
        </Link>
      </div>

      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link href="/home">
            <span>Explore</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            <span>Destinations</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/map">
            <span>Interactive map</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/itineraires">
            <span>Itineraries</span>
          </Link>
        </li>
      </ul>
      <div className={styles.loginContainer}>
        <button onClick={handleClick} className={styles.loginButton}>Log in</button>
      </div>
    </nav>
  );
};

export default Menu;
