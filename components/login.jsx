import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_URL } from "../config/api";
import Link from "next/link";
import styles from "../styles/styles.module.css";
import { useRouter } from "next/router";
import { AuthContext } from "./AuthContext";

const LogIn = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const router = useRouter();
  const { loggedIn, login } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    setIsEmailEmpty(false);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
    setIsPasswordEmpty(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailValue || !passwordValue) {
      toast.error("Please fill in all required fields");
      if (!emailValue) setIsEmailEmpty(true);
      if (!passwordValue) setIsPasswordEmpty(true);
      return;
    }

    const userData = {
      email: emailValue,
      password: passwordValue,
    };

    axios
      .post(`${API_URL}/api1/login`, userData)
      .then(() => {
        login(emailValue); // Set loggedIn to true and pass the username
        router.push("/home");
        console.log("API request sent successfully");
      })
      .catch((error) => {
        if (error.response) {
          const statusCode = error.response.status;
          toast.error(`Invalid email or password`);
        } else {
          toast.error("An error has occurred. Please retry later");
        }
      });
  };

  return (
    <div className={styles.leftPane}>
      <ToastContainer />
      <div className={styles.title}>
        <span>Your Algerian adventure starts here</span>
      </div>

      <div className={styles.text}>
        <span>
          Login to your account to get access to the website’s full
          functionalities
        </span>
      </div>

      <form onSubmit={handleSubmit}>
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
          <button type="submit" className={styles.submit}>
            Login
          </button>
        </div>
      </form>

      <div>
        <p>
          Don't have an account?{" "}
          <Link href="/signup">
            <span className={styles.links}>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
