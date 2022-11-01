import { useProduct } from "./hooks/ProductContext";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card/Card";
import { useCart } from "./hooks/CartContext";
import { Layout } from "./Layout";

export const App = () => {
  const { products } = useProduct();

  return (
    <Layout>
      <ProductsList>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </ProductsList>
    </Layout>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Main = styled.div`
  min-height: 80vh;
`;

const ProductsList = styled.div`
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
    grid-template-columns: repeat(4, 1fr);
  }
`;
