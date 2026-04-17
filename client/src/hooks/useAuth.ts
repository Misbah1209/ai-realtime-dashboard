import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);

  const login = (username: string, password: string) => {
    // Fake login for demo purposes
    if (username === "admin" && password === "admin") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return { user, login, logout, isAuthenticated: !!user };
};
