import * as S from "./styles";
import Link from "next/link";
const IntroProjetos = ({ nome }) => {
  const nomeEmMaiusculas = nome.toUpperCase();

  return (
    <div style={{padding: '0 0 5rem 0'}}>
      <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
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
  );
};

export default IntroProjetos;
