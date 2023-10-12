import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setUser(userData)
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null)
  }

  return (
    <AppContext.Provider value={{loggedIn, setLoggedIn, handleLogin, handleLogout, user, setUser}}>
      {children}
    </AppContext.Provider>
  )
};