import { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext(undefined);

export function UserProfileProvider({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <UserProfileContext.Provider value={value}>{children}</UserProfileContext.Provider>;
}

export function useUserProfileContext() {
  const ctx = useContext(UserProfileContext);
  if (ctx === undefined) {
    throw new Error('useUserProfileContext must be used within a UserProfileProvider');
  }
  return ctx;
}
