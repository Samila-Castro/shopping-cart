import { Header } from "./components/Header";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
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
