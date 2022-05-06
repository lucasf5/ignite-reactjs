import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Modal from "react-modal";
import { useState } from "react";
import NewTransactionModal from "./components/NewTransactionModal";
import TransactionsContextProvider from "./context/ContextTransactions";


Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionsContextProvider>
      <Header onOpen={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionsContextProvider>
  );
}

export default App;
