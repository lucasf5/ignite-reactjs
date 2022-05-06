import logoImg from "../../assets/imgs/Logo.svg";
import { ButtonTransacao, Content, Container } from "./styles";

interface onOpenProps{
  onOpen: () => void
}

const Header = ({onOpen}:onOpenProps) => {

  return (
    <Container>
      <Content>
        <a href="/">
          <img src={logoImg} alt="" />
        </a>
        <ButtonTransacao onClick={onOpen}>
          Nova transação
          </ButtonTransacao>
      </Content>
    </Container>
  );
};

export default Header;
