import { createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
