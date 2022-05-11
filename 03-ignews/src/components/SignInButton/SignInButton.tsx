import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi"
import styles from "./SignInButton.module.scss";

const SignInButton = () => {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton}>
      <FaGithub size={20} color="#04D361" />
      Lucas Ferreira
      <FiX size={20} color="#04D361"/>
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub size={20} color="#EBA417" />
      Sign in with Github
    </button>
  );
};

export default SignInButton;
