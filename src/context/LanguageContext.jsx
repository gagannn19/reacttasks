import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguageContext() {
  const ctx = useContext(LanguageContext);
  if (ctx === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return ctx;
}
