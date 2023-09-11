import styled from "styled-components";

export const ContainerProjetos = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 2rem;
    justify-content: space-between;
    padding: 1rem 0;
`;

export const Projeto = styled.div`
    width: 100%;
    height: 31rem;
    background-color: #c4c4c4;
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 2.2rem solid #2072fa;
`;

export const divLinhaAzul = styled.div`
    width: 100%;
    height: .6rem;
    background-color: #2072fa;
`;

export const Triangulo = styled.div`
    width: 0; 
    height: 0; 
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid #2072fa;
    position: absolute;
    top: 94.6%;
`;

export const SpanNome = styled.span`
    white-space: nowrap;
    font-size: .8rem;
    font-weight: 600;
    letter-spacing: .15rem;
`;
