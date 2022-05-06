import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/imgs/Botão - Fechar.svg";
import inComeImg from "../../assets/imgs/Entradas.svg";
import outComeImg from "../../assets/imgs/Saídas.svg";
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../context/ContextTransactions";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose}: newTransactionModalProps) => {
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("")

  const {creatTransaction} = useContext(TransactionsContext)

  async function handleCreateNewTransaction(evento: FormEvent) {
    evento.preventDefault();

    await creatTransaction({
      title,
      amount,
      category,
      type
    })
    setTitle('')
    setAmount(0)
    setCategory('')
    setType("deposit")
    
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar Transações</h2>

        <input 
        placeholder="Titulo" 
        name="Titulo" 
        value={title}
        onChange={evento => setTitle(evento.target.value)}
         />

        <input type="number" 
        placeholder="Valor" 
        value={amount}
        onChange={evento => setAmount(Number(evento.target.value))}
        />

        {/* Botoes */}

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={inComeImg} alt="Entrada" />
            Entrada
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outComeImg} alt="Saida" />
            Saída
          </RadioBox>
        </TransactionTypeContainer>

        <input 
        placeholder="Categoria" 
        value={category}
        onChange={evento => setCategory(evento.target.value)}
        />

        <button type="submit" onClick={ handleCreateNewTransaction}>Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
