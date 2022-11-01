import styled from "styled-components";
import logo from "../../assets/icons/logo.svg";

export function Footer() {
  return (
    <FooterBox>
      <Image src={logo} alt="logo" />
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  background: #202024;
  border-top: 1px solid #333;

  width: 100%;
  height: 15vh;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 3rem;
`;
