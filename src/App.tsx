import { useProduct } from "./hooks/ProductContext";
import styled from "styled-components";
import { Card } from "./components/Card/Card";
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
