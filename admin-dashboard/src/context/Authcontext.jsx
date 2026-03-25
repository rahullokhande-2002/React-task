import { createContext, useState } from "react";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(
    localStorage.getItem("auth") || false
  );

  const login = () => {
    localStorage.setItem("auth", "true");
    setAuth(true);
  };

    const logout = () => {
    localStorage.removeItem("auth");
    setAuth(false);
  };

    return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;