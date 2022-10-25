export function Carro(props) {
  return (
    <div>
      <h2>Meu carro</h2>
      <ul>
        <li>Cor: {props.automovel.cor}</li>
        <li>Ano: {props.automovel["ano"]}</li>
        <li>Flex: {props.automovel["flex"] ? "true" : "false"}</li>
        <li>Adicionado: {props.adicionadoPor}</li>
      </ul>
    </div>
  );
}
