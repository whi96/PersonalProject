import { useState, type ReactNode } from "react"
import { AuthContext } from "../context/auth-context"
import { login as loginService, register as registerService } from "../services/auth"

export function AuthProvider({ children }: { children: ReactNode }) {

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  )

  async function login(email: string, password: string) {
    const token = await loginService(email, password)

    localStorage.setItem("token", token)
    setToken(token)
  }

  async function register(name: string, email: string, password: string) {
    const token = await registerService(name, email, password)

    localStorage.setItem("token", token)
    setToken(token)
  }

  function logout() {
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}