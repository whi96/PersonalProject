import { useState } from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!email || !password) {
      return "Preencha todos os campos";
    }

    if (!email.includes("@")) {
      return "Email inválido";
    }

    return "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      // simulação de login
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Login feito com:", { email, password });

    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("Erro ao fazer login");
        }
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>

        {error && <span style={{ color: "red" }}>{error}</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}



const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },

    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "12px",
        width: "320px",
        padding: "20px",
        borderRadius: "8px",

    },

    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
    },

    button: {
        padding: "10px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
    }
};
