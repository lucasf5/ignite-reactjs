import React, { ReactNode, useEffect, useState, createContext, useTransition, useContext } from "react";
import http from "../assets/api/Api";
import { Api } from "../Types/Api";

// Peguei a interface Api e omiti dela o id e o createdAt, pois não ia passar na criacao
type TransactionInput = Omit<Api, "id" | "createdAt">;

interface TransactionsContextDatas {
  datas: Api[];
  creatTransaction: (transactionInput: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextDatas>(
  {} as TransactionsContextDatas
);

function TransactionsContextProvider({ children }: { children: ReactNode }) {
  // criacao das datas
  const [datas, setDatas] = useState<Api[]>([]);

  useEffect(() => {
    http.get("transactions").then((resp) => setDatas(resp.data.transactions));
  }, []);

  // usando as datas para fazer um post
  async function creatTransaction(transactionInput: TransactionInput) {
    const response = await http.post("/transactions", {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    setDatas([...datas, transaction])
  }

  return (
    <TransactionsContext.Provider
      value={{
        datas,
        creatTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContextProvider;
