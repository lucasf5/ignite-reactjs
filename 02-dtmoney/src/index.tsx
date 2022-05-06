import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from "miragejs"
import { GlobalStyled } from './assets/styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  // criei um modelo de transacao, passando como parametro o meu transaction e usando a funcao do miragejs o Model
  models: {
    transaction: Model,
  },

  seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Website",
            type: "deposit",
            category: "Dev",
            amount: 4000,
            createdAt: new Date()
          }
        ]
      })
  },

  routes(){
    // api, pois na hora de definir a rota, eu coloquei a rota inicial como api. Lá nos transactionsTable
    this.namespace = "api";
    // quando houver uma requisicao get para rota transactions
    this.get("/transactions", ()=>{
      return this.schema.all('transaction')
    })
    // schema = banco de dados
    this.post("/transactions", (schema, request) => {
      // Recebendo uma string, transformo em JSON
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

root.render(
  <>
    <GlobalStyled />
    <App />
  </>
);


 