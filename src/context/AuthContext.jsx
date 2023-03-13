import React, { createContext } from "react";

// export const {Provider} = createContext()
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  console.log(children);
  const values = {};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;