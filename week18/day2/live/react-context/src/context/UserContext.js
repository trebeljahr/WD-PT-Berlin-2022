import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  // { username: "User's name", ... }
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const valueProp = { user, login, logout };
  return (
    <UserContext.Provider value={valueProp}>{children}</UserContext.Provider>
  );
}
