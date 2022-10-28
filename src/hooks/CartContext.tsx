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
  addProductCart: (product: Product) => void;
}

const CartContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addProductCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addProductCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);

  return context;
}
