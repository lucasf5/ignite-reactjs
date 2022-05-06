import styled from "styled-components";
import { animation, darken, lighten } from "polished"

export const Container = styled.div`
    h2{
        color: var(--Titulo);
        font-size:1.5rem;
        margin-bottom: 2rem
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--Texto);
        }
        & + input{
            margin-top: 1rem;
        }
        &:last-of-type{
            margin-bottom: 1rem
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--Green);
        color: var(--Shape);
        font-weight: 600;
        border: none;
        border-radius: 0.2rem;
        transition: filter 0.2s ease-in-out;

        &:hover{
            filter: opacity(0.85);
        }
    }

`;

export const TransactionTypeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    gap: 1rem;
    
`

interface RadioBoxProps{
    isActive: boolean;
    activeColor: "green" | "red";
}

const colors = {
    green: lighten(0.4, "#33CC95"),
    red: lighten(0.4, "#E52E4D") 
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
    background: ${({isActive, activeColor}) => isActive ? 
    colors[activeColor]:"transparent"};
    border: 1px solid #d7d7d7;
    padding: 0rem 1.5rem;
    border-radius: 0.2rem;
    height: 4rem;

    &:hover{
        border-color: ${darken(0.1, "#d7d7d7")};
    }

`