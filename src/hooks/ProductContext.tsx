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

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductsContextData {
  products: Product[];
  getProduct: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const getProduct = (id: string) => {
    return products.find((product) => String(product.id) === id);
  };

  return (
    <ProductContext.Provider value={{ products, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}
