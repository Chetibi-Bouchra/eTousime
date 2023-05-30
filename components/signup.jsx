import React, { useState } from "react";
import RoundedInput from "./roundedInput";
import axios from "axios";
import { API_URL } from "../config/api";

import Image from "next/image";
import styles from "../styles/styles.module.css";
import { useRouter } from 'next/router';

const SignUp = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value);
  };

 
  
  
  const handleSubmit = async () => {
    const userData = {
      email: "jb_chetibi@esi.dz",
      password: "password123",
      fullname: "John Doe",
      phone: "1234567890",
      address: "123 Main Street",
    };
  
    alert(`${API_URL}/api1/signup`);
    alert(JSON.stringify(userData));
  
    axios
      .post(`${API_URL}/api1/signup`, JSON.stringify(userData))
      .then(() => {
        router.push('/login');
        console.log("API request sent successfully");
      })
      .catch((error) => {
        //router.push('/login');
        alert(error);
      });
  };
  

  return (
    <div className={styles.leftPane}>
      <div className={styles.title}>
        <span>Your Algerian adventure starts here</span>
      </div>

      <div className={styles.text}>
        <span>
          Creating an account gives you access to the website’s full
          functionalities
        </span>
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.label}>Full name</span>
        <input
          className={styles.roundedInput}
          type="text"
          value={nameValue}
          onChange={handleNameChange}
          placeholder="Enter name"
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.label}>Email</span>
        <input
          className={styles.roundedInput}
          type="text"
          value={emailValue}
          onChange={handleEmailChange}
          placeholder="Enter email"
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.label}>Phone</span>
        <input
          className={styles.roundedInput}
          type="text"
          value={phoneValue}
          onChange={handlePhoneChange}
          placeholder="Enter name"
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.label}>Password</span>
        <input
          className={styles.roundedInput}
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
      </div>

      <div className={styles.button}>
        <button type="submit" className={styles.submit} onClick={handleSubmit}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
