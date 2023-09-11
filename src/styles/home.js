import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 7rem;
  padding: 0;
  background-color: #ffffff;
`;

export const ContainerFoto = styled.div`
  height: 100%;
  margin: 0;
  padding: 3rem 7rem;
  display: flex;
  justify-content: center;
  text-align: left;
  position: relative;
  @media screen and (max-width: 600px) {
      text-align: center;
      padding: 3rem 0;
  }
  @media screen and (max-width: 850px) {
  }
`;

export const divSpan = styled.div`
  width: 80%;
  height: 100%;
  left: 19rem;
  display: flex;
  position: absolute;
  justify-content: left;

  @media screen and (max-width: 850px) {
    left: 0;
  }
`;

export const DivImagemInicial = styled.div`
  width: 80%;

  @media screen and (max-width: 850px) {
    height: 25rem;
  }
`;

export const ImagemInicial = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SpanImagemInicial = styled.span`
  position: absolute;
  color: #fbf8f7;
  font-size: 1.4rem;
  top: 70%;
  width: 30%;

  @media screen and (max-width: 850px) {
    top: 60%;
    left: 30%;
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    top: 60%;
    left: 20%;
    width: 60%;
    text-align: left;
  }
`;