import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function ShoppingCart() {
  return <></>;
}

const Wrapper = styled.div`
  position: relative;
  min-height: 200vh;
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.875rem;
  row-gap: 0.9375rem;
  margin-top: 92px;
  margin-left: 90px;
  margin-right: 90px;
`;
