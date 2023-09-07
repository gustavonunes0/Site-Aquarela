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
  height: 80%;
  margin: 0;
  padding: 3rem 7rem;
  display: flex;
  justify-content: center;
  text-align: left;
  position: relative;
  @media screen and (max-width: 600px) {
      text-align: center;
  }
  @media screen and (max-width: 850px) {
      height: 20rem;
  }
`;

export const divSpan = styled.div`
  width: 80%;
  height: 100%;
  padding: 9rem;
  display: flex;
  position: absolute;
  justify-content: left;
`;

export const ImagemInicial = styled.img`
  width: 80%;
`;

export const SpanImagemInicial = styled.span`
  position: absolute;
  color: #fbf8f7;
  font-size: 1.4rem;
  top: 70%;
  width: 30%;
`;