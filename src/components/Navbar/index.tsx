import * as S from "./styles"; // Ensure the correct path to your styles file
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderBox>
          <S.Menu>
            <S.MenuItem>
              <Image alt="" src="/Ativo 7.png" width={264} height={60} />
            </S.MenuItem>
            <S.MenuToggle onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </S.MenuToggle>
            <S.MenuItems isOpen={isOpen}> 
              <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>INÍCIO</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
              <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>EMPRESA</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
              <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>EQUIPE</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
              <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>CONTATO</S.StyledLink>
                </Link>
              </S.MenuItem>
            </S.MenuItems>
          </S.Menu>
        </S.HeaderBox>
      </S.HeaderContainer>
    </>
  );
};

export default NavBar;
