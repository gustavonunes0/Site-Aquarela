import * as S from "./styles";
import Link from "next/link";

interface IntroProjetosProps {
  nome: string;
}

const IntroProjetos: React.FC<IntroProjetosProps> = ({ nome }) => {
  const nomeEmMaiusculas = nome.toUpperCase();

  return (
    <div style={{ padding: '0 7rem 5rem 7rem', width: '100%', display: "flex", justifyContent: "center" }}>
      <div style={{ width: '80%' }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".8rem", width: '100%' }}>
          <S.SpanNome>{nomeEmMaiusculas}</S.SpanNome>
          <S.divLinhaAzul></S.divLinhaAzul>
        </div>
        <S.ContainerProjetos>
          <S.Projeto>
            <S.Triangulo />
          </S.Projeto>
          <S.Projeto>
            <S.Triangulo />
          </S.Projeto>
        </S.ContainerProjetos>
      </div>
    </div>
  );
};

export default IntroProjetos;
