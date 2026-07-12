import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext(undefined);

export function LoaderProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
}

export function useLoaderContext() {
  const ctx = useContext(LoaderContext);
  if (ctx === undefined) {
    throw new Error('useLoaderContext must be used within a LoaderProvider');
  }
  return ctx;
}
