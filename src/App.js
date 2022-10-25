import { useState } from "react";
import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";

export default function App() {
  const [nome, setNome] = useState("Lapada");

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
      <GlobalStyle />

      <Garagem
        nome={nome}
        setNomeDaGaragem={setNome}
        mensagemAprentacao={apresentaGaragem}
      />
    </>
  );
}
