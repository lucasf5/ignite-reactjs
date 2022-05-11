import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi"
import styles from "./SignInButton.module.scss";
import { signIn, signOut, useSession } from "next-auth/react"

const SignInButton = () => {

  const { data: session } = useSession();

  return session ? (
    <button className={styles.signInButton}>
      <FaGithub size={20} color="#04D361" />
      {session.user.name}
      <FiX size={20} color="#04D361" onClick={()=> signOut()}/>
    </button>
  ) : (
    <button className={styles.signInButton} 
      onClick={()=> signIn('github')}>
      <FaGithub size={20} color="#EBA417"/>
      Sign in with Github
    </button>
  );
};

export default SignInButton;
