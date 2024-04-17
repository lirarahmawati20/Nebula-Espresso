

import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";


export const AuthContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
