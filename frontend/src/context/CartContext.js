import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      return exists ? prev : [...prev, product];
    });
  }

  function removeFromCart(productId) {
    setCart(prev => prev.filter(p => p.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
