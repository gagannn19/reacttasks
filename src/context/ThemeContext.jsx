import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (ctx === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return ctx;
}
