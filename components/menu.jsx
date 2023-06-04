import React, { useState, useContext } from "react";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "./AuthContext";

const Menu = () => {
  const router = useRouter();
  const { loggedIn, userName, login } = useContext(AuthContext);

  const handleLogin = () => {
    if (loggedIn) {
      // Perform logout actions
      login(false); // Set loggedIn to false
      router.push("/"); // Redirect to home page
    } else {
      // Perform login actions (e.g., show login modal)
      router.push("/login");
    }
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
        {loggedIn ? (
          <span className={styles.username}>{userName}</span>
        ) : (
          <button onClick={handleLogin} className={styles.loginButton}>
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Menu;
