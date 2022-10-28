import styled from "styled-components";

export const Button: React.FC = () => {
  return <MainButton>Adicionar ao carrinho</MainButton>;
};

const MainButton = styled.button`
  background: #89d963;
  border-radius: 5px;
  padding: 16px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  font-family: inherit;
  border: 1px solid transparent;
  transition: border-color 0.25s;

  &:hover {
    background: #50982e;
  }
`;
