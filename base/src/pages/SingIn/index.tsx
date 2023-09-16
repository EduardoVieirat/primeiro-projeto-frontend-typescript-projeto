import "./style.css";

import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { FormEvent, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function SignIn() {
  const navigate = useNavigate();
  const { addToken, getToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      if (!email || !password) {
        throw new Error("Email and password is required");
      }

      const response = await api.post("/login", {
        email,
        password,
      });

      const { accessToken } = response.data;

      addToken(accessToken);

      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = getToken();

    if (token) {
      navigate("/main");
      return;
    }
  }, []);

  return (
    <div className="container container-sign-in">
      <div className="sign-in">
        <img src={Logo} alt="logo" />

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span>
            Não tem cadastro? <Link to="/sign-up">Clique aqui!</Link>
          </span>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
