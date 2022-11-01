import styled from "styled-components";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useProduct } from "../hooks/ProductContext";
import { Card } from "../components/Card";

export const Details: React.FC = () => {
  const { id } = useParams();
  const { getProduct } = useProduct();
  console.log(id);
  const product = getProduct(id as string);
  return (
    <>
      <Header />
      <Main>
        <DetailsBox>
          <Imagem src={product.image} />
          <Card key={product?.id} product={product} hideImage />
        </DetailsBox>{" "}
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
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

const Box = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border-radius: 5px;
  width: 3rem;
  height: auto;
  color: black;
`;

const DetailsBox = styled.div`
  display: flex;
  gap: 1rem;
  height: auto;
  width: auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Imagem = styled.img`
  height: 25rem;
`;
