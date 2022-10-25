import styled from "styled-components";

export const BotaoGaragem = styled.button`
  background-color: orange;
  height: 50px;
  border: 2px solid black;
  width: 100px;
  border-radius: 8px;
  margin-left: 5px;
`;

export const ContainerGaragem = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EstacionamentoGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;
