import styled from "styled-components";
import { Button } from "../Button";
import { useCart } from "../../hooks/CartContext";

interface SummaryProps {}
export const Summary: React.FC<SummaryProps> = ({}) => {
  const { total } = useCart();
  return (
    <Wrapper>
      <Box>
        <DetailsBox>
          <Title>Frete</Title>
          <Title>R$ 00,00</Title>
        </DetailsBox>
        <DetailsBox>
          <Discount>Desconto</Discount>
          <Discount>-R$00</Discount>
        </DetailsBox>
        <DetailsBox>
          <Total>Total</Total>
          <Total>{total}</Total>
        </DetailsBox>
      </Box>
      <Button actionClick={() => {}} text="Realizar compra" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  height: 10rem;
  width: 20rem;
  background: #ffffff;
  border-radius: 5px;
  padding: 0.8rem;
  display: flex;
  margin-bottom: 0.8rem;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  weight: 500;
  size: 24px;
  line-height: 29.05px;
  color: #000000;
`;

const TextBox = styled.div``;

const Discount = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: #000000;
`;

const Total = styled.p`
  color: #000000;
`;
