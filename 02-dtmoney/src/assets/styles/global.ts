import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --Background:#F0F2F5;

        --Blue: #5429CC;
        --Blue_light: #6933FF;
        --Green: #33CC95;
        --Red: #E52E4D;

        --Shape:#FFFFFF;

        --Titulo: #363F5F;
        --Texto:#969CB2;
    }
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.50%; // 14px
        }
    }

    body{
        background-color: var(--Background);
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--Background);
        padding: 3rem;
        position: relative;
        border-radius: 0.5rem;
    }
    .react-modal-close{
        border-radius: 5px;
        position: absolute;
        right: 0;
        top: 0;
        height: 40px;
        width: 40px;
        background-color: transparent;
        border: none;
    }
`