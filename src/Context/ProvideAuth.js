import React, { createContext } from "react";
import UseFirebase from "../Hooks/UseFirebase";

export const AuthContext = createContext();
const ProvideAuth = ({ children }) => {
  const contexts = UseFirebase();
  return (
    <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
  );
};

export default ProvideAuth;
