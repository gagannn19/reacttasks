import { createContext, useContext, useState } from 'react';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (ctx === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return ctx;
}
