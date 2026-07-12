import { createContext, useContext, useState } from 'react';

const ToastContext = createContext(undefined);

export function ToastProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToastContext() {
  const ctx = useContext(ToastContext);
  if (ctx === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return ctx;
}
