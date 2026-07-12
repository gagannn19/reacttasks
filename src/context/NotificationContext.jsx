import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext(undefined);

export function NotificationProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export function useNotificationContext() {
  const ctx = useContext(NotificationContext);
  if (ctx === undefined) {
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }
  return ctx;
}
