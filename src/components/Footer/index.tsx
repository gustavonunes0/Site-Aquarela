import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <S.Footer>
            <S.FooterBox>
                <S.FooterSubmenu style={{justifyContent: "center"}}>
                        <S.FooterCompanyInfoIcon src={"/Ativo 2.png"}
                            alt="logo"/>
                </S.FooterSubmenu>

                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>navegação</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Início
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Empresa
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Equipe
                        </Link>
                    </S.FooterSubmenuItem>                   
                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Contato
                        </Link>
                    </S.FooterSubmenuItem>                   
                </S.FooterSubmenu>
                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>contatos</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Av. Comodoro Estácio Brígido,
2800 • Fortaleza
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            (85) 9999-9999
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            administrativo@aquarela.com.br
                        </Link>
                    </S.FooterSubmenuItem>                   
                </S.FooterSubmenu>
                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>sociais</S.FooterSubmenuTitle>
                    <div style={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            gap: '1.4rem'
                        }
                    }>
                        <a href="https://www.instagram.com/aquarelacomunicacao/" target="_blank" style={{display: 'flex', justifyContent: "space-around", textDecoration: 'none', alignItems: 'center', color: "#e6e1dd"}}>
                            <S.FooterSubmenuSocialMedia src={"/Ativo 3.png"}/>
                            aquarelacomunicacao
                        </a>
                        <a href="https://www.facebook.com/aquarelacomunicacao" target="_blank" style={{display: 'flex', justifyContent: "space-around", textDecoration: 'none', alignItems: 'center', color: "#e6e1dd"}}>
                            <S.FooterSubmenuSocialMedia src={"/Ativo 4.png"}/>
                            aquarelacomunicacao
                        </a>
                        <a href="https://www.linkedin.com/company/aquarelacomunicacao" target="_blank" style={{display: 'flex', justifyContent: "space-around", textDecoration: 'none', alignItems: 'center', color: "#e6e1dd"}}>
                            <S.FooterSubmenuSocialMedia src={"/Ativo 5.png"}/>
                            aquarelacomunicacao
                        </a>
                    </div>
                </S.FooterSubmenu>
            </S.FooterBox>
        </S.Footer>
    );
};

export default Footer;

