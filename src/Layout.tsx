import { useProduct } from "./hooks/ProductContext";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card/Card";
import { useCart } from "./hooks/CartContext";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { products } = useProduct();

  return (
    <>
      <Wrapper>
        <Header />
        <Main>{children} </Main>
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Main = styled.div`
  min-height: 70vh;
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
