import { IconButton, TextField } from "@mui/material";
import styled from "styled-components";
import { useCart } from "../hooks/CartContext";
import { Summary } from "../components/Summary/Summary";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { Layout } from "../Layout";

export function ShoppingCart() {
  const { cart, addProductCart, alteraQtdProduto, removeProduct } = useCart();
  const [input, setInput] = useState("");

  return (
    <>
      <Layout>
        <Main>
          <Content>
            {cart.map((product) => {
              return (
                <Box>
                  <ImageBox>
                    <Image src={product.image} />
                  </ImageBox>
                  <Link to={`/product-details/${product.id}`}>
                    <TextBox>
                      <Title>{product.title}</Title>
                      <Ammount>{product.amount}</Ammount>
                    </TextBox>
                  </Link>
                  <Wrapper>
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeProduct(product.id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      value={product.amount}
                      onChange={(event) =>
                        alteraQtdProduto(product.id, Number(event.target.value))
                      }
                      InputProps={{
                        inputProps: {
                          min: 1,
                        },
                      }}
                      variant="standard"
                    />
                  </Wrapper>
                </Box>
              );
            })}
          </Content>
          <Summary />
        </Main>
      </Layout>
    </>
  );
}

const Main = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem;
  padding: 2rem;

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Box = styled.div`
  height: auto;
  max-width: 40rem;
  background: #ffffff;
  border-radius: 5px
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 3.5rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  weight: 500;
  size: 20px;
  color: #000000;
`;

const Ammount = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 29px;
  color: #000000;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
