import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface ProductsContextData {
  cart: Product[];
}

const CartContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products/")
      .then((response) => {
        setCart(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);

  return context;
}
