import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  amount: number;
}
interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface ProductsContextData {
  cart: Product[];
  addProductCart: (product: Product) => void;
  qtdProdutosCart: number;
  removeProduct: (productId: number) => void;
  alteraQtdProduto: (productId: number, amount: number) => void;
  total: number;
}

const CartContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [qtdProdutosCart, setQtdProdutosCart] = useState(0);
  const [total, setTotal] = useState(0);

  const addProductCart = (product: Product) => {
    const position = cart.findIndex(
      (currentProduct) => currentProduct.id === product.id
    );
    console.log(position);

    if (position !== -1) {
      const aux = cart;
      aux[position] = { ...product, amount: product.amount + 1 };
      setCart(Object.assign([], aux));
    } else {
      product.amount = 1;
      setCart([...cart, product]);
    }

    setQtdProdutosCart(qtdProdutosCart + 1);
  };

  const alteraQtdProduto = (productId: number, amount: number) => {
    const position = cart.findIndex(
      (currentProduct) => currentProduct.id === productId
    );
    console.log(position);

    if (position !== -1) {
      const product = cart[position];

      const aux = cart;
      aux[position] = { ...product, amount };
      setCart(Object.assign([], aux));
    }
  };

  useEffect(() => {
    const total = cart.reduce((previousValue, product) => {
      previousValue += Number(product.price) * product.amount;
      return previousValue;
    }, 0);

    setTotal(total);
  }, [cart]);

  const removeProduct = (productId: number) => {
    try {
      const productAlreadyExists = cart.find(
        (product) => product.id === productId
      );

      if (!productAlreadyExists) throw Error();

      const filteredCart = cart.filter((product) => product.id !== productId);

      setCart(filteredCart);
    } catch {
      Error("Erro na remoção do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        qtdProdutosCart,
        removeProduct,
        alteraQtdProduto,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);

  return context;
}
