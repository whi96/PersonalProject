import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>

      <h1>Bem-vindo ao TaskShare</h1>

      <p>O sistema de compartilhamento de tasks para equipes ágeis</p>

        <div>
            <Link to="/login">
                <button>Login</button>
            </Link>

            <Link to="/register">
                <button>Criar Conta</button>
            </Link>
        </div>
        
    </div>
  ) 
}
