import React, { useState } from "react";

import Image from "next/image";
import styles from "../styles/styles.module.css";
import LogIn from "@/components/login";

const LogInPage = () => {

  return (
    <div className={styles.container}>
      <LogIn></LogIn>
      <div className={styles.rightPane}>
        <div className={styles.imageContainer}></div>
      </div>
    </div>
  );
};

export default LogInPage;