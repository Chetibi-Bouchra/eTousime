import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const login = (username) => {
    setLoggedIn(true);
    setUserName(username);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
