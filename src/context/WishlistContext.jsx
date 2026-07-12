import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext(undefined);

export function WishlistProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlistContext() {
  const ctx = useContext(WishlistContext);
  if (ctx === undefined) {
    throw new Error('useWishlistContext must be used within a WishlistProvider');
  }
  return ctx;
}
