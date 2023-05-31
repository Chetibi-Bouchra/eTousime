import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoundedInput from "./roundedInput";
import axios from "axios";
import { API_URL } from "../config/api";
import Link from "next/link";

import Image from "next/image";
import styles from "../styles/styles.module.css";
import { useRouter } from "next/router";

const SignUp = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [codeValue, setCodeValue] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isCodeEmpty, setIsCodeEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    setIsEmailEmpty(false);
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
    setIsNameEmpty(false);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
    setIsPasswordEmpty(false);
  };

  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCodeValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!emailValue || !nameValue || !passwordValue) {
      toast.error("Please fill in all required fields");
      if (!emailValue) setIsEmailEmpty(true);
      if (!nameValue) setIsNameEmpty(true);
      if (!passwordValue) setIsPasswordEmpty(true);
      return;
    }

    const userData = {
      email: emailValue,
      password: passwordValue,
      fullname: nameValue,
      phone: phoneValue,
      address: "",
    };

    axios
      .post(`${API_URL}/api1/signup`, userData)
      .then(() => {
        //router.push("/login");
        setShowModal(true);
        console.log("API request sent successfully");
      })
      .catch((error) => {
        if (error.response) {
          const statusCode = error.response.status;
          toast.error(`The email you're trying to use already exists`);
        } else {
          toast.error("An error has occurred. Please retry later");
        }
      });
  };

  const handleCode = async () => {
    if (!codeValue) {
      toast.error("Please fill in the code field");
      if (!codeValue) setIsEmailEmpty(true);
      return;
    }

    const confirmationData = {
      email: emailValue,
      token: codeValue,
    };

    axios
      .post(`${API_URL}/api1/mail_verification`, confirmationData)
      .then(() => {
        //router.push("/login");
        console.log("API request sent successfully");
      })
      .catch((error) => {
        if (error.response) {
          const statusCode = error.response.status;
          toast.error(`Invalid confirmation code :(`);
        } else {
          toast.error("An error has occurred. Please retry later");
        }
      });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.leftPane}>
      <ToastContainer />
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
        <span className={styles.label}>Full name *</span>
        <input
          className={`${styles.roundedInput} ${
            isNameEmpty ? styles.emptyInput : ""
          }`}
          type="text"
          value={nameValue}
          onChange={handleNameChange}
          placeholder="Enter name"
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.label}>Email *</span>
        <input
          className={`${styles.roundedInput} ${
            isEmailEmpty ? styles.emptyInput : ""
          }`}
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
          placeholder="Enter phone"
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.label}>Password *</span>
        <input
          className={`${styles.roundedInput} ${
            isPasswordEmpty ? styles.emptyInput : ""
          }`}
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

      <div>
        <p>
          Already have an account?{" "}
          <Link href="/login">
            <span className={styles.links}>LogIn</span>
          </Link>
        </p>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2>Confirmation code</h2>
            <input
              className={`${styles.roundedInput} ${
                isCodeEmpty ? styles.emptyInput : ""
              }`}
              type="text"
              value={codeValue}
              onChange={handleCodeChange}
              placeholder="Enter your confirmation code please"
            />
            <button
              type="submit"
              className={styles.submit}
              onClick={handleCode}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
