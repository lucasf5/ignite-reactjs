import React from "react";
import styles from "./SubscribeButton.module.scss";

interface SubscribeButtonProps{
  priceId: string;
}

const SubscribeButton = ({priceId}: SubscribeButtonProps) => {
  const isUserLoggedIn = true;

  return (
    <button className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
};

export default SubscribeButton;
