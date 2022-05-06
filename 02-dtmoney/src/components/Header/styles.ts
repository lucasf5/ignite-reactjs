import styled from "styled-components";

export const Container = styled.header`
  height: 212px;
  background-color: var(--Blue);
`;

export const Content = styled.div`
    max-width: 80%;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonTransacao = styled.button`
  background-color: var(--Blue_light);
  color: var(--Shape);
  border-radius: 0.25rem;
  border: none;
  width: 195px;
  height: 3rem;
    transition: filter 0.2s ease-out;
    &:hover{
      filter: brightness(0.9);
    }
`;