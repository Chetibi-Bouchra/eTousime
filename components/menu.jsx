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
        <Link href="/">
          <span className={styles.logo}>TA7WISSA</span>
        </Link>
      </div>

      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            <span>About</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            <span>Services</span>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            <span>Contact</span>
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
