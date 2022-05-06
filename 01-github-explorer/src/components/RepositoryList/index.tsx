import axios from "axios";
import classNames from "classnames";
import { useEffect, useState } from "react";
import RepositoryItem, { RepositoryItemProps } from "../RepositoryItem";
import styles from "./Texto.module.scss";

const RepositoryList = () => {

  const [repos, setRepos] = useState<RepositoryItemProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get("https://api.github.com/users/lucasf5/repos").then(resp => {
      setRepos(resp.data)
      setLoading(false)
      })
  }, [])

  return (
    <section>
      <h1
        className={classNames({
          [styles.h1]: true,
          "repository-list": true,
        })}
      >
        Lista de Repositorios
      </h1>
      {loading ? <h2>Loading...</h2>:""}
      {!loading ? repos.map((item)=>(
          <RepositoryItem key={item.name} repos={item}/>
      )): ""}
    </section>
  );
};

export default RepositoryList;
