import React from "react";
import { UserContext } from "../../context/Contexto";
import styles from "./Item.module.scss";

export interface RepositoryItemProps {
  name: string;
  description: string;
  html_url: string;
}

const RepositoryItem = ({ repos }: { repos: RepositoryItemProps }) => {
  return (
    <section className={styles["repository-item"]}>
      <li>
        <h3 className={styles["repository-item__h3"]}>{repos.name}</h3>

        <p className={styles["repository-item__p"]}>{repos.description}</p>

        <a className={styles["repository-item__a"]} href={repos.html_url}>
          {repos.html_url}
        </a>
      </li>
    </section>
  );
};

export default RepositoryItem;
