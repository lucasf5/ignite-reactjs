import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 2rem;
    margin-top: -6rem;
    width: 78%;

    div{
        width: 352px;
        background: var(--Shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--Titulo);
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
        display: block;
    }

    div.total{
        background: var(--Green);
        color: var(--Shape);
    }

`