import styled from "styled-components";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

interface ProductsItemsProps {
  product: {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
    amount: number;
  };
  hideImage?: boolean;
}
export const Card: React.FC<ProductsItemsProps> = (
  props: ProductsItemsProps
) => {
  const { addProductCart } = useCart();
  return (
    <ProductCard>
      <Link to={`/product-details/${props.product.id}`}>
        <ContentBox>
          {!props.hideImage && (
            <ImageBox>
              <Image src={props.product.image} />
            </ImageBox>
          )}
          <Title>{props.product.title}</Title>
          <Description>{props.product.title}</Description>
          <Price>R${props.product.price} ou 10x 15,99</Price>
        </ContentBox>
      </Link>
      <Button
        actionClick={() => addProductCart(props.product)}
        text="Adicionar ao carrinho"
      />
    </ProductCard>
  );
};

const ProductCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 15px;
  border-radius: 5px;
  width: auto;
  height: 400px;
  color: black;
  transition: box-shadow 0.4s ease 0s
  cursor: pointer;
`;

const ContentBox = styled.div``;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 100px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 29px;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 12.99px;
`;
const Price = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;
