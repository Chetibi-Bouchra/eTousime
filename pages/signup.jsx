import React, { useState } from "react";
import SignUp from "@/components/signup";

import Image from "next/image";
import styles from "../styles/styles.module.css";

const SignUpPage = () => {

  return (
    
    <div className={styles.container}>
      <SignUp></SignUp>
      <div className={styles.rightPane}>
        <div className={styles.imageContainer}></div>
      </div>
    </div>
  );
};

export default SignUpPage;