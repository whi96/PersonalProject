import { useState, type ReactNode } from "react";
import { AuthContext } from "./auth-context";
import { login as loginService, register as registerService } from "../services/auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  async function login(email: string, password: string) {
    const response = await loginService(email, password);

    setToken(response.token);
    localStorage.setItem("token", response.token);
  }

  async function register(name: string, email: string, password: string) {
    const response = await registerService(name, email, password);

    setToken(response.token);
    localStorage.setItem("token", response.token);
  }

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

