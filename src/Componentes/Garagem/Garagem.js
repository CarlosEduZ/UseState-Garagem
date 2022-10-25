import { useState } from "react";
import { Carro } from "../Carro/Carro";
import { BotaoGaragem, ContainerGaragem, EstacionamentoGrid } from "./style";

export function Garagem(props) {
  const [automovel, setAutomovel] = useState({
    cor: "Preta",
    ano: 1999,
    flex: true
  });

  const mudaNomeNoBotao = () => {
    props.setNomeDaGaragem("Prefeitura");
  };
  return (
    <ContainerGaragem>
      <h1>Garagem da {props.nome}</h1>
      <button onClick={mudaNomeNoBotao}>Muda Nome</button>
      <BotaoGaragem onClick={props.mensagemAprentacao}>Mensagem</BotaoGaragem>

      <EstacionamentoGrid>
        <Carro automovel={automovel} adicionadoPor={props.nome} />
        <Carro automovel={automovel} adicionadoPor={props.nome} />
        <Carro automovel={automovel} adicionadoPor={props.nome} />
        <Carro automovel={automovel} adicionadoPor={props.nome} />
      </EstacionamentoGrid>
    </ContainerGaragem>
  );
}
