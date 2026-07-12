import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext(undefined);

export function SettingsProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettingsContext() {
  const ctx = useContext(SettingsContext);
  if (ctx === undefined) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return ctx;
}
