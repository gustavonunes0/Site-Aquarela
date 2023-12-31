import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: grid;
  height: 29rem;
  grid-template-columns: 100%;
  justify-content: center;
  place-items: center;
  background-color: #2072fa;
  @media screen and (max-width: 850px) {
    height: auto;
  }
`;

export const FooterBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 5.4rem 17rem;
  gap: 4rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: 100%;
    padding: 10%;
  }
`;

export const BoxFoto = styled.div`
  width: 34%;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 850px) {
    margin: 0;
    width: 110%;
    padding: 5%;
  }
`;
export const FooterCompanyInfoIcon = styled.img`
  width: 16.2rem;
  @media screen and (max-width: 850px) {
    margin: 0;
    padding: 5%;
  }
`;

export const FooterSubmenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
  margin-bottom: 2%;
  color: white;

  &:first-child{
    width: 100%;
  }

  @media screen and (max-width: 850px) {
  }
`;

export const FooterSubmenuTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  color: #003896;
  letter-spacing: 0.1rem;
  white-space: nowrap;

  &:nth-child(2){
    margin-top: 2rem;
  }
`;

export const FooterSubmenuItem = styled.span`
  font-size: 1rem;
  color: #e6e1dd;
  display: flex;
  gap: 1.8rem;

  &:hover {
    font-weight: bold;
    filter: brightness(2);
  }
`;

export const FooterSubmenuSocialMedia = styled.img`
  width: 1.5rem;
  padding-top: 0.5rem;

  &:hover {
    filter: brightness(2);
  }
`;
