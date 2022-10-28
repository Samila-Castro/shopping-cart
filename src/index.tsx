import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Details } from "./pages/Details";
import { App } from "./App";
import "/src/global.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { CartProvider } from "./hooks/CartContext";
import { ProductProvider } from "./hooks/ProductContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product-details/:id",
    element: <Details />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>
);
