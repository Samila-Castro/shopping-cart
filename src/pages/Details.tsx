import styled from "styled-components";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useCart } from "../hooks/CartContext";
import { useProduct } from "../hooks/ProductContext";

export const Details: React.FC = () => {
  const { id } = useParams();
  const { getProduct } = useProduct();
  console.log(id);
  const product = getProduct(id as string);
  return (
    <>
      <Header />
      {product?.title}
      <Footer />
    </>
  );
};

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
