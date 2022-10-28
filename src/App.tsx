import { CartProvider, useCart } from "./hooks/CartContext";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card/Card";

export const App = () => {
  const { cart } = useCart();
  return (
    <Wrapper>
      <Header />
      <Main>
        {cart.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
