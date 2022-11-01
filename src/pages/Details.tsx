import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/ProductContext";
import { Card } from "../components/Card";
import { Layout } from "../Layout";

export const Details: React.FC = () => {
  const { id } = useParams();
  const { getProduct } = useProduct();
  console.log(id);
  const product = getProduct(id as string);
  return (
    <Layout>
      <DetailsBox>
        <Imagem src={product.image} />
        <Card key={product?.id} product={product} hideImage />
      </DetailsBox>{" "}
    </Layout>
  );
};

const DetailsBox = styled.div`
  display: flex;
  gap: 1rem;
  height: auto;
  width: auto;
  padding: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Imagem = styled.img`
  height: 25rem;
`;
