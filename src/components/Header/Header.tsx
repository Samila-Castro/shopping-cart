import styled from "styled-components";
import logo from "../../assets/icons/logo.svg";
import { Avatar } from "../Avatar/Avatar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { MobileMenu } from "../MobileMenu";
import { useCart } from "../../hooks/CartContext";

export function Header() {
  const { totalProductsCart } = useCart();

  return (
    <HeaderBox>
      <Image src={logo} alt="logo" />
      <Box>
        <List>
          <Link to="/">
            <Items>INICIO</Items>
          </Link>
          <Link to="/">
            {" "}
            <Items>PRODUTOS</Items>
          </Link>
          <Link to="/">
            <Items>CONTATO</Items>
          </Link>
        </List>
        <Link to="/cart">
          <Badge badgeContent={totalProductsCart} color="error">
            <ShoppingCartIcon sx={{ color: "#C71D1D" }} />
          </Badge>
        </Link>
        <Avatar src="https://github.com/samila-castro.png" />
        <MenuStyle>
          <MobileMenu className="MenuTeste" />
        </MenuStyle>
      </Box>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 100px 1.5rem;
  height: 4rem;
  @media screen and (max-width: 769px) {
    padding: 1rem;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`;
const List = styled.ul`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Items = styled.li`
  list-style: none;
  margin: 0 40px 0 40px;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

const Image = styled.img`
  height: 3rem;
  @media screen and (max-width: 768px) {
    height: 2rem;
  }
`;

const MenuStyle = styled.div`
  @media screen and (min-width: 769px) {
    display: none;
  }
  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: space-between;
  }
`;
